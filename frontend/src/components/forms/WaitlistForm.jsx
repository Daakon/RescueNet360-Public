import { useState } from 'react';
import { Container, Heading, Text, Button } from '../primitives';
import { FormInput } from './FormInput';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useWaitlistSubmit } from '../../hooks/useWaitlistSubmit';
import './WaitlistForm.css';

const roleOptions = [
  'Shelter',
  'Rescue',
  'Foster',
  'Volunteer',
  'Vet/Clinic',
  'Investor/Partner',
  'Pet Owner',
];

export const WaitlistForm = () => {
  const [role, setRole] = useState('');
  const [agreeToUpdates, setAgreeToUpdates] = useState(false);
  const email = useFormValidation('');
  const { submit, isLoading, isSuccess, error: submitError } = useWaitlistSubmit();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    const isValid = email.validate();
    if (!isValid || !role) {
      return;
    }

    // Submit to API
    const result = await submit({ email: email.value, role, agreeToUpdates });

    if (result.success) {
      email.reset();
      setRole('');
      setAgreeToUpdates(false);
    }
  };

  return (
    <section id="waitlist" className="waitlist-form">
      <Container maxWidth="md">
        <div className="waitlist-form__content">
          <Heading level={2}>Join the Waitlist</Heading>
          <Text size="md">
            Be among the first to experience the future of emergency response.
            Get early access and exclusive updates.
          </Text>

          {isSuccess ? (
            <div className="waitlist-form__success">
              <div className="waitlist-form__success-icon">✓</div>
              <h3 className="waitlist-form__success-title">You're on the list!</h3>
              <p className="waitlist-form__success-message">
                Thank you for joining our waitlist. We'll be in touch soon with updates
                and early access information.
              </p>
            </div>
          ) : (
            <form className="waitlist-form__form" onSubmit={handleSubmit}>
              <div className="waitlist-form__fields">
                <div className="form-input">
                  <label className="form-input__label">I am...</label>
                  <select
                    className="form-input__field"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    disabled={isLoading}
                    required
                  >
                    <option value="">Select your role</option>
                    {roleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <FormInput
                  type="email"
                  placeholder="your.email@example.com"
                  label="Email Address"
                  value={email.value}
                  onChange={email.handleChange}
                  onBlur={email.handleBlur}
                  error={email.error}
                  touched={email.touched}
                  disabled={isLoading}
                  required
                />

                <div className="waitlist-form__checkbox">
                  <label className="waitlist-form__checkbox-label">
                    <input
                      type="checkbox"
                      checked={agreeToUpdates}
                      onChange={(e) => setAgreeToUpdates(e.target.checked)}
                      disabled={isLoading}
                    />
                    <span>I agree to receive RescueNet360 updates and news</span>
                  </label>
                </div>
              </div>

              {submitError && (
                <div className="waitlist-form__error">
                  {submitError}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isLoading}
                className="waitlist-form__submit"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>

              <p className="waitlist-form__privacy">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};
