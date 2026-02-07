import { Container, Heading, Text, Card } from '../primitives';
import './Technology.css';

const techFeatures = [
  {
    title: 'Cloud-Native Architecture',
    description: '99.99% uptime with auto-scaling infrastructure that handles any emergency volume.',
  },
  {
    title: 'Edge Computing',
    description: 'Critical data processing at the edge for millisecond response times when it matters most.',
  },
  {
    title: 'AI/ML Integration',
    description: 'Advanced algorithms that learn from every incident to improve response strategies.',
  },
];

export const Technology = () => {
  return (
    <section id="technology" className="technology">
      <Container>
        <div className="technology__header">
          <Heading level={2}>Built on Cutting-Edge Technology</Heading>
          <Text size="md">
            Enterprise-grade infrastructure designed for mission-critical operations.
          </Text>
        </div>

        <div className="technology__features">
          {techFeatures.map((feature, index) => (
            <Card key={index} variant="glass" className="technology__feature-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="technology__feature-title">{feature.title}</h3>
              <p className="technology__feature-description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
