import { Container, Heading, Text, Card } from '../primitives';
import './Solution.css';

const features = [
  {
    title: 'Real-Time Coordination',
    description: 'Instant communication and resource allocation across all emergency services.',
  },
  {
    title: 'Intelligent Routing',
    description: 'AI-powered dispatch that factors in traffic, weather, and resource availability.',
  },
  {
    title: 'Unified Dashboard',
    description: 'Single view of all incidents, resources, and critical information for command centers.',
  },
  {
    title: 'Mobile-First Design',
    description: 'Access critical data from any device, optimized for use in the field.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models that anticipate needs and optimize resource deployment.',
  },
  {
    title: 'Secure Integration',
    description: 'HIPAA-compliant platform that integrates with existing CAD and RMS systems.',
  },
];

export const Solution = () => {
  return (
    <section id="solution" className="solution">
      <Container>
        <div className="solution__header">
          <Heading level={2}>Our Solution</Heading>
          <Text size="md">
            A comprehensive platform that brings emergency response into the 21st century.
          </Text>
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
