import { Container, Heading, Text, Button } from '../primitives';
import './Hero.css';

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <Heading level={1} className="hero__title">
            Emergency Response Reimagined
          </Heading>
          <Text className="hero__subtitle">
            RescueNet360 connects first responders with critical information in real-time,
            saving lives through intelligent coordination and data-driven decision making.
          </Text>
          <div className="hero__buttons">
            <Button variant="primary" size="lg" onClick={scrollToWaitlist}>
              Join Waitlist
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
