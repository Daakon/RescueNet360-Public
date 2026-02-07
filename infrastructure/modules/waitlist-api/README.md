# Waitlist API Module

Terraform module for serverless waitlist API infrastructure.

## Resources Created

- **DynamoDB Table**: Stores waitlist email submissions
- **Lambda Function**: Processes waitlist submissions
- **API Gateway HTTP API**: REST endpoint for form submissions
- **IAM Roles & Policies**: Minimal permissions for Lambda
- **CloudWatch Log Groups**: Logs for Lambda and API Gateway

## Usage

```hcl
module "waitlist_api" {
  source = "../../modules/waitlist-api"

  environment  = "prod"
  project_name = "rescuenet360-marketing"
}
```

## Inputs

| Name | Description | Type | Required |
|------|-------------|------|----------|
| environment | Environment name | string | yes |
| project_name | Project name for resource naming | string | yes |

## Outputs

| Name | Description |
|------|-------------|
| api_endpoint | API Gateway endpoint URL |
| table_name | DynamoDB table name |
| lambda_function_name | Lambda function name |

## DynamoDB Schema

- **Hash Key**: `email` (String)
- **Range Key**: `timestamp` (String)
- **Attributes**: `source` (String), `createdAt` (String)
- **Billing**: On-demand (pay per request)

## API Endpoint

**POST /waitlist**

Request:
```json
{
  "email": "user@example.com",
  "source": "website"
}
```

Response (200):
```json
{
  "message": "Successfully subscribed",
  "email": "user@example.com"
}
```

Response (400):
```json
{
  "error": "Invalid email address"
}
```

## Security

- Lambda has minimal IAM permissions (DynamoDB PutItem only)
- CORS enabled for frontend domain
- Throttling: 10 requests/second
- Reserved concurrency: 10 (cost control)

## Cost Estimate

- DynamoDB: ~$0.25/month (on-demand, low volume)
- Lambda: ~$0.20/month (first 1M requests free)
- API Gateway: ~$1/month (first 1M requests free)
- **Total: ~$1.50/month** (low traffic)
