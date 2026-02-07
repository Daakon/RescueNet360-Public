import { Container, Heading, Text, Card } from '../primitives';
import './Problem.css';

const stats = [
  { number: '37%', label: 'Longer response times due to poor coordination' },
  { number: '64%', label: 'Of emergencies lack real-time data access' },
  { number: '$2.1B', label: 'Lost annually to inefficient emergency response' },
];

export const Problem = () => {
  return (
    <section id="problem" className="problem">
      <Container>
        <div className="problem__header">
          <Heading level={2}>The Problem We're Solving</Heading>
          <Text size="md">
            Emergency response systems are fragmented, outdated, and cost lives.
          </Text>
        </div>

        <div className="problem__stats">
          {stats.map((stat, index) => (
            <Card key={index} variant="glass" className="problem__stat-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="problem__stat-number">{stat.number}</div>
              <div className="problem__stat-label">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="problem__narrative">
          <Text>
            First responders struggle with disconnected systems, incomplete information,
            and delayed communication. Lives are lost because critical data doesn't reach
            the right people at the right time.
          </Text>
        </div>
      </Container>
    </section>
  );
};
