import { Container, Heading, Text, Card } from '../primitives';
import './Market.css';

const marketData = [
  { metric: '$180B', label: 'Global Emergency Services Market' },
  { metric: '350K+', label: 'Emergency Departments in US' },
  { metric: '1.2M', label: 'First Responders Nationwide' },
];

export const Market = () => {
  return (
    <section id="market" className="market">
      <Container>
        <div className="market__header">
          <Heading level={2}>Massive Market Opportunity</Heading>
          <Text size="md">
            Emergency response is a critical infrastructure need affecting millions daily.
          </Text>
        </div>

        <div className="market__metrics">
          {marketData.map((data, index) => (
            <Card key={index} variant="glass" className="market__metric-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="market__metric-number">{data.metric}</div>
              <div className="market__metric-label">{data.label}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
