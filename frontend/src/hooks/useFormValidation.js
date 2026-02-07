import { useState, useCallback } from 'react';
import { validateEmail } from '../utils/validation';

export const useFormValidation = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const validate = useCallback(() => {
    const result = validateEmail(value);
    setError(result.error);
    return result.isValid;
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (touched) {
      const result = validateEmail(e.target.value);
      setError(result.error);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validate();
  };

  const reset = () => {
    setValue(initialValue);
    setError(null);
    setTouched(false);
  };

  return {
    value,
    error,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
  };
};
