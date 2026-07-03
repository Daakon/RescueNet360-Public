export const VALID_ROLES = ['individual', 'shelter'];

export const VALID_INTENTS = ['register', 'report_lost', 'report_found', 'explore', 'apply'];

export const getAppBaseUrl = () => {
  return import.meta.env.VITE_APP_BASE_URL || 'https://app.RescueNet.com';
};

export const VALID_SOURCE_SECTIONS = [
  'hero', 
  'challenge', 
  'solution', 
  'capability', 
  'audience', 
  'pilot_cta', 
  'navigation', 
  'footer'
];

