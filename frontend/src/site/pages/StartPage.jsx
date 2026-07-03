import { Link } from 'react-router-dom';
import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';

export const StartPage = () => {
  return (
    <div className="bg-surface w-full min-h-[calc(100vh-80px)]">
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator" border={false}>
        <Container size="narrow">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
            SELECT YOUR ROLE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            Get Started with RescueNet360
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-8">
            Choose your path to enter the system.
          </p>
        </Container>
      </SectionWrapper>
      
      <SectionWrapper background="surface" className="py-16">
        <Container>
          <ContentGrid columns={2} className="max-w-4xl mx-auto">
            <div className="card card-comfortable text-center flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-text-primary">Pet Owners</h2>
              <p className="text-text-muted mb-8 leading-relaxed">
                Protect your pet with a connected identity record and be prepared for emergencies.
              </p>
              <a href="https://app.rescuenet360.com/register" className="btn btn-primary w-full mt-auto">
                Register Your Pet
              </a>
            </div>
            
            <div className="card card-comfortable text-center flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-text-primary">Shelters & Rescues</h2>
              <p className="text-text-muted mb-8 leading-relaxed">
                Join the network to track animals, coordinate care, and improve outcomes.
              </p>
              <Link to="/shelters-rescues#apply" className="btn btn-secondary font-extrabold w-full mt-auto shadow-elevated">
                Apply to Be a Pilot Partner →
              </Link>
            </div>
          </ContentGrid>
        </Container>
      </SectionWrapper>
    </div>
  );
};
