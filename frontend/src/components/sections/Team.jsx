import { Container, Heading, Text, Button } from '../primitives';
import './Team.css';

export const Team = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="team">
      <Container>
        <div className="team__content">
          <Heading level={2}>Join Our Mission</Heading>
          <Text size="md">
            We're building a world-class team of engineers, designers, and emergency response
            professionals. If you're passionate about saving lives through technology, we want
            to hear from you.
          </Text>
          <div className="team__buttons">
            <Button variant="primary" size="lg" onClick={scrollToWaitlist}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
