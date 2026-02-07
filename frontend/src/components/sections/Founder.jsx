import { Container, Heading, Text } from '../primitives';
import './Founder.css';

export const Founder = () => {
  return (
    <section className="founder">
      <Container>
        <div className="founder__grid">
          <div className="founder__image-wrapper">
            <img
              src="/images/team/founder-photo.jpg"
              alt="Founder"
              className="founder__image"
              loading="lazy"
            />
          </div>
          <div className="founder__content">
            <Heading level={2}>Built by First Responders, For First Responders</Heading>
            <Text>
              RescueNet360 was founded by veteran firefighters and paramedics who experienced
              the frustration of outdated systems firsthand. After losing colleagues to preventable
              delays, we knew there had to be a better way.
            </Text>
            <Text>
              We've spent years building relationships with emergency departments across the country,
              understanding their pain points, and developing a solution that actually works in the
              field—not just in theory.
            </Text>
            <Text>
              Today, we're backed by leading emergency response organizations and technology partners
              who share our vision of saving lives through better coordination.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};
