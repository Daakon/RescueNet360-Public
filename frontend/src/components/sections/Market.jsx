import { Container, Heading, Text, Card } from '../primitives';
import './Market.css';

const marketData = [
  { metric: '$3B+', label: 'annual rescue/transport/medical spend' },
  { metric: '14,000+', label: 'active shelters & rescues (U.S.)' },
  { metric: '85M+', label: 'household pets' },
];

export const Market = () => {
  return (
    <section id="market" className="market">
      <Container>
        <div className="market__header">
          <Heading level={2}>An Untapped $3 Billion Market</Heading>
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
