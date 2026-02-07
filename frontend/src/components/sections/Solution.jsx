import { Container, Heading, Text, Card } from '../primitives';
import './Solution.css';

const features = [
  {
    title: 'Live Capacity Dashboard',
    description: 'Real-time visibility into shelter space, foster availability, and resource allocation across your entire network.',
  },
  {
    title: 'Network Effect',
    description: 'The more organizations that join, the more powerful the platform becomes—creating a nationwide safety net for animals.',
  },
  {
    title: 'Disaster Response Mode',
    description: 'Instant coordination for emergency placements during hurricanes, wildfires, and other crises when every minute counts.',
  },
];

export const Solution = () => {
  return (
    <section id="solution" className="solution">
      <Container>
        <div className="solution__header">
          <Heading level={2}>The Solution – The First Coordination Platform</Heading>
        </div>

        <div className="solution__features">
          {features.map((feature, index) => (
            <Card key={index} variant="glass" className="solution__feature-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="solution__feature-title">{feature.title}</h3>
              <p className="solution__feature-description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
