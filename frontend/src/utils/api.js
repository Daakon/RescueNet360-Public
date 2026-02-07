import { API_ENDPOINT } from './constants';

/**
 * API client for waitlist submissions
 */

export class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
  }
}

export const submitWaitlist = async (data, source = 'website') => {
  if (!API_ENDPOINT) {
    throw new APIError('API endpoint not configured', 500);
  }

  // Handle both old format (string) and new format (object)
  const payload = typeof data === 'string'
    ? { email: data, source }
    : { ...data, source };

  try {
    const response = await fetch(`${API_ENDPOINT}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new APIError(
        responseData.error || 'Failed to submit waitlist signup',
        response.status
      );
    }

    return responseData;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }

    // Network or other errors
    throw new APIError(
      'Unable to connect to server. Please try again later.',
      0
    );
  }
};
