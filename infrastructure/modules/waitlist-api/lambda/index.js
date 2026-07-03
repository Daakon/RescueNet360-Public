const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { PutCommand, DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TABLE_NAME;

const headers = {
  'Access-Control-Allow-Origin': '*', // Update with specific domain in production
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Content-Type': 'application/json'
};

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  // Handle OPTIONS preflight request
  if (event.requestContext.http.method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}');
    const email = body.email?.trim().toLowerCase();
    const source = body.source || 'website';

    // Email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Invalid email:', email);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email address' })
      };
    }

    // Store in DynamoDB
    const timestamp = new Date().toISOString();
    await docClient.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        ...body,
        email,
        timestamp,
        source,
        createdAt: timestamp
      }
    }));

    console.log('Successfully added to waitlist:', email);

    // Send free secure email/webhook notification if configured
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'ed.lent@rescuenet360.com';
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const webhookUrl = process.env.EMAIL_WEBHOOK_URL;

    if (web3FormsKey || webhookUrl) {
      try {
        const messageSummary = [
          `New Submission (${source})`,
          `----------------------------------------`,
          `Organization: ${body.orgName || body.organization || 'N/A'}`,
          `Contact Name: ${body.contactName || body.name || 'N/A'}`,
          `Email: ${email}`,
          `Organization Type: ${body.orgType || 'N/A'}`,
          `Challenge / Notes:\n${body.challenge || body.message || 'None provided'}`,
          `----------------------------------------`,
          `Timestamp: ${timestamp}`
        ].join('\n');

        if (web3FormsKey) {
          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: web3FormsKey,
              subject: `[RescueNet360] New Pilot Application - ${body.orgName || email}`,
              from_name: 'RescueNet360 Portal',
              email: email,
              message: messageSummary,
            })
          });
        } else if (webhookUrl) {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              recipient: recipientEmail,
              subject: `[RescueNet360] New Pilot Application - ${body.orgName || email}`,
              email: email,
              message: messageSummary,
              payload: body
            })
          });
        }
        console.log('Notification sent successfully');
      } catch (notifyErr) {
        console.error('Failed to send notification email/webhook:', notifyErr);
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Successfully subscribed',
        email
      })
    };

  } catch (error) {
    console.error('Error:', error);

    // Check if it's a validation error
    if (error.name === 'ValidationException') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request data' })
      };
    }

    // Generic server error
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
