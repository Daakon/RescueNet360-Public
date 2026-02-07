import './FormInput.css';

export const FormInput = ({
  label,
  error,
  touched,
  className = '',
  ...props
}) => {
  const showError = touched && error;

  return (
    <div className={`form-input ${className}`}>
      {label && <label className="form-input__label">{label}</label>}
      <input
        className={`form-input__field ${showError ? 'form-input__field--error' : ''}`}
        {...props}
      />
      {showError && (
        <span className="form-input__error">{error}</span>
      )}
    </div>
  );
};
