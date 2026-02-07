import { Container, Heading, Text, Card } from '../primitives';
import './Problem.css';

const stats = [
  { number: '607K', label: 'animals euthanized annually' },
  { number: '60%', label: 'foster applications sit unprocessed' },
  { number: '40%', label: 'emergency placements fail' },
];

const problems = [
  'Shelter coordination gaps exist across 20-mile distances',
  'Overwhelmed coordinators manage spreadsheets manually',
  'Time-critical resource discovery fails during disasters',
];

export const Problem = () => {
  return (
    <section id="problem" className="problem">
      <Container>
        <div className="problem__header">
          <Heading level={2}>The Problem – Deadly Isolation</Heading>
        </div>

        <div className="problem__stats">
          {stats.map((stat, index) => (
            <Card key={index} variant="glass" className="problem__stat-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="problem__stat-number">{stat.number}</div>
              <div className="problem__stat-label">{stat.label}</div>
            </Card>
          ))}
        </div>

        <ul className="problem__list">
          {problems.map((problem, index) => (
            <li key={index} className="problem__list-item">
              {problem}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
