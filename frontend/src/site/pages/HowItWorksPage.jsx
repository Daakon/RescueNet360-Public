import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';
import { Link } from 'react-router-dom';

export const HowItWorksPage = () => {
  return (
    <div className="bg-surface w-full min-h-[calc(100vh-80px)]">
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator" border={false}>
        <Container size="narrow">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
            SYSTEM ARCHITECTURE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            How RescueNet360 Works
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-8">
            One connected system for faster, coordinated animal recovery.
          </p>
          <Link to="/start" className="btn btn-primary min-h-[56px] px-8 text-lg font-bold shadow-elevated">Get Started →</Link>
        </Container>
      </SectionWrapper>
      
      <SectionWrapper background="surface" className="py-16">
        <Container>
          <ContentGrid columns={3} className="max-w-6xl mx-auto">
            <div className="card card-comfortable">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 text-xl font-bold">1</div>
              <h2 className="text-2xl font-bold mb-4 text-text-primary">Establish Identity</h2>
              <p className="text-text-secondary leading-relaxed">
                Create a persistent digital record for your pet. If they ever go missing, their secure information is already in the system.
              </p>
            </div>
            
            <div className="card card-comfortable">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6 text-xl font-bold">2</div>
              <h2 className="text-2xl font-bold mb-4 text-text-primary">Broadcast Signals</h2>
              <p className="text-text-secondary leading-relaxed">
                When a pet is marked lost, the network instantly alerts connected local shelters and verified community responders.
              </p>
            </div>
            
            <div className="card card-comfortable">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 text-xl font-bold">3</div>
              <h2 className="text-2xl font-bold mb-4 text-text-primary">Coordinate Recovery</h2>
              <p className="text-text-secondary leading-relaxed">
                Matches are flagged automatically, providing a direct, coordinated path to reuniting the pet with their family.
              </p>
            </div>
          </ContentGrid>
          
          <div className="mt-16 text-center">
            <Link to="/start" className="btn btn-primary">Start</Link>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
