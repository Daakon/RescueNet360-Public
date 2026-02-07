import { useState } from 'react';
import { submitWaitlist, APIError } from '../utils/api';

export const useWaitlistSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (data, source = 'website') => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await submitWaitlist(data, source);
      setIsSuccess(true);
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof APIError
        ? err.message
        : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    submit,
    isLoading,
    isSuccess,
    error,
    reset,
  };
};
