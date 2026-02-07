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

export const submitWaitlist = async (email, source = 'website') => {
  if (!API_ENDPOINT) {
    throw new APIError('API endpoint not configured', 500);
  }

  try {
    const response = await fetch(`${API_ENDPOINT}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(
        data.error || 'Failed to submit waitlist signup',
        response.status
      );
    }

    return data;
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
