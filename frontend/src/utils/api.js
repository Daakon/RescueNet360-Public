const DEFAULT_API_BASE_URL = 'https://api.rescuenet360.com';

const getApiBaseUrl = () => {
  const envBaseUrl = import.meta.env.VITE_API_ENDPOINT;
  const baseUrl = envBaseUrl || DEFAULT_API_BASE_URL;
  return baseUrl.replace(/\/$/, '');
};

const buildWaitlistUrl = () => `${getApiBaseUrl()}/public/waitlist`;

const extractErrorMessage = (payload) => {
  if (!payload) return null;
  if (typeof payload === 'string') return payload;
  if (payload.message) return payload.message;
  if (payload.error) return payload.error;
  if (payload.detail) {
    if (Array.isArray(payload.detail)) {
      return payload.detail
        .map((detail) => detail?.msg || detail?.message || detail)
        .filter(Boolean)
        .join(' ');
    }
    return payload.detail;
  }
  return null;
};

export const submitWaitlist = async (data, source = 'website') => {
  const payload = typeof data === 'string'
    ? { email: data, source }
    : { ...data, source: data?.source || source };

  Object.keys(payload).forEach((key) => {
    if (payload[key] === '' || payload[key] === null || payload[key] === undefined) {
      delete payload[key];
    }
  });

  const response = await fetch(buildWaitlistUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get('content-type') || '';
  const responseBody = contentType.includes('application/json')
    ? await response.json()
    : null;

  if (!response.ok) {
    const errorMessage = extractErrorMessage(responseBody) || `Request failed (${response.status})`;
    const error = new Error(errorMessage);
    error.status = response.status;
    error.payload = responseBody;
    throw error;
  }

  return responseBody || { message: 'You have been added to the waitlist.' };
};
