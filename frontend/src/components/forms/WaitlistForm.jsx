import { Container, Heading, Text, Button } from '../primitives';
import { FormInput } from './FormInput';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useWaitlistSubmit } from '../../hooks/useWaitlistSubmit';
import './WaitlistForm.css';

export const WaitlistForm = () => {
  const email = useFormValidation('');
  const { submit, isLoading, isSuccess, error: submitError } = useWaitlistSubmit();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    const isValid = email.validate();
    if (!isValid) {
      return;
    }

    // Submit to API
    const result = await submit(email.value);

    if (result.success) {
      email.reset();
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
