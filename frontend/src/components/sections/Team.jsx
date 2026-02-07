import { Container, Heading, Text, Button } from '../primitives';
import './Team.css';

const positions = [
  'Dev',
  'AI/ML',
  'Mobile',
  'Backend',
  'Product',
  'Design',
  'Partnerships',
  'Funding Strategy',
  'Operations',
];

export const Team = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="team">
      <Container>
        <div className="team__content">
          <Heading level={2}>We're Recruiting the Dream Team</Heading>

          <div className="team__positions">
            {positions.map((position, index) => (
              <span key={index} className="team__position-tag">
                {position}
              </span>
            ))}
          </div>

          <div className="team__priority">
            <Text className="team__priority-label">Special Priority:</Text>
            <Text className="team__priority-role">Technical Co-Founder / CTO</Text>
          </div>

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
