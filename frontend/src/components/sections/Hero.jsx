import { Container, Heading, Text, Button } from '../primitives';
import './Hero.css';

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProblem = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <Heading level={1} className="hero__title">
            The Operating System for Animal Welfare
          </Heading>
          <div className="hero__subtitle-wrapper">
            <Text className="hero__subtitle-large">
              Powered by a National AI-Driven Pet Directory
            </Text>
            <Text className="hero__subtitle">
              Breaking down silos to create the first coordinated network for shelters, rescues, fosters, and emergency responders.
            </Text>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">607,000</span> animals are euthanized in the U.S. annually
          </div>
          <div className="hero__buttons">
            <Button variant="primary" size="lg" onClick={scrollToWaitlist}>
              Join the Waitlist
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToProblem}>
              See the Problem
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
