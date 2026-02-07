import { Container, Heading, Text, Card } from '../primitives';
import './Technology.css';

const patents = [
  { number: '74+', label: 'patent claims filed' },
  { number: '2,000+', label: 'screens designed' },
];

const techFeatures = [
  {
    title: 'Biometric Pet ID System',
    description: 'AI-powered facial recognition and nose-print matching to reunite lost pets with their families instantly.',
  },
  {
    title: 'FIDO Alert Network',
    description: 'Real-time missing pet alerts that notify shelters, rescues, and volunteers within a customizable radius.',
  },
  {
    title: 'Foster & Rescue Management',
    description: 'Streamlined application processing, automated matching, and coordination tools that reduce placement time from weeks to days.',
  },
  {
    title: 'Disaster Response Command',
    description: 'Emergency mode activates during natural disasters, enabling rapid cross-state evacuations and emergency foster placements.',
  },
  {
    title: 'Animal Abuser Registry',
    description: 'Nationwide database to prevent known abusers from adopting, with automated background checks and cross-referencing.',
  },
];

export const Technology = () => {
  return (
    <section id="technology" className="technology">
      <Container>
        <div className="technology__header">
          <Heading level={2}>Core Technologies</Heading>
        </div>

        <div className="technology__patents">
          {patents.map((patent, index) => (
            <div key={index} className="technology__patent-item">
              <div className="technology__patent-number">{patent.number}</div>
              <div className="technology__patent-label">{patent.label}</div>
            </div>
          ))}
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
