import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SectionWrapper, Container } from '../components/LayoutWrappers';

export const PilotProgramPage = () => {
  return (
    <div className="bg-surface w-full min-h-[calc(100vh-80px)]">
      <SEO
        title="Pilot Program – RescueNet360 Founding Partners"
        description="Partner with us to build the coordination infrastructure for modern animal welfare. Apply to be a founding pilot partner."
        path="/pilot-program"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "The RescueNet360 Pilot Program",
          "description": "Partner with us to build the coordination infrastructure for modern animal welfare.",
          "url": "https://rescuenet360.com/pilot-program"
        }}
      />
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator" border={false}>
        <Container size="narrow">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
            FOUNDING PARTNERS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            The RescueNet360 Pilot Program
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-8">
            Partner with us to build the coordination infrastructure for modern animal welfare.
          </p>
          <Link to="/shelters-rescues#apply" className="btn btn-primary min-h-[56px] px-8 text-lg font-bold shadow-elevated">Apply to Be a Pilot Partner →</Link>
        </Container>
      </SectionWrapper>
      
      <SectionWrapper background="surface" className="py-16">
        <Container size="narrow">
          <div className="card card-comfortable prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">What is the Pilot?</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              We are currently selecting forward-thinking shelters and rescues to deploy the RescueNet360 platform. Pilot partners receive early access to our centralized reunification tools, helping us refine the system while solving their most pressing operational challenges.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-text-primary">Who We&apos;re Looking For</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Ideal partners are municipal shelters or high-volume rescue organizations that struggle with fragmented data, inefficient intake processes, and manual lost-and-found coordination.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-text-primary">The Benefits</h2>
            <p className="text-text-secondary leading-relaxed">
              Pilot partners receive dedicated onboarding, direct influence over product development, and priority access to the unified signal network that connects your facility directly with pet owners.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/shelters-rescues#apply" className="btn btn-secondary font-extrabold shadow-elevated">Apply to Be a Pilot Partner →</Link>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
