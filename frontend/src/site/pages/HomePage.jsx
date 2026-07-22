import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const HomePage = () => {
  return (
    <div className="bg-surface w-full min-h-screen flex flex-col">
      <SEO
        title="RescueNet360 | National Pet Identity Infrastructure — Free for Shelters"
        description="Connect intake, foster, transport, reunification, and pet identity into one system. Built for animal shelters and rescues. 100% Free for shelters."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "RescueNet360 | National Pet Identity Infrastructure",
          "description": "Connect intake, foster, transport, reunification, and pet identity into one system. Built for animal shelters and rescues.",
          "url": "https://rescuenet360.com/",
          "isPartOf": { "@id": "https://rescuenet360.com/#website" },
          "about": { "@id": "https://rescuenet360.com/#organization" }
        }}
      />

      {/* Section 1 — Hero */}
      <SectionWrapper background="transparent" className="bg-gradient-to-br from-primary-deep via-primary to-secondary-deep text-white text-center py-20 md:py-28 relative overflow-hidden" border={false}>
        <Container className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-white/15 text-white rounded-pill">
            Now Accepting Pilot Partners
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
            Animal welfare has the heart. RescueNet360 brings the infrastructure.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            RescueNet360 gives every pet a persistent identity and connects the people who help them; owners, finders, shelters, rescues, and fosters. One shared system to reunite lost pets faster, reduce shelter workload, protect kennel space, and improve outcomes at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shelters-rescues#apply" className="btn btn-secondary min-w-[220px] min-h-[56px] text-lg font-extrabold flex items-center justify-center shadow-elevated hover:scale-105 transition-transform">
              Apply for Pilot Access
            </Link>
            <a href="https://app.rescuenet360.com/register" className="btn min-w-[220px] min-h-[56px] text-lg font-extrabold flex items-center justify-center border-2 border-white/60 text-white bg-white/10 hover:bg-white/20 transition-colors">
              Register Your Pet Free
            </a>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 2 — Audience Path Cards */}
      <SectionWrapper background="surface" className="py-16">
        <Container>
          <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-6">
            Who Are You Here For?
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shelters & Rescues Card */}
            <div className="border border-secondary/20 rounded-2xl p-8 bg-secondary-soft">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8"></path><path d="M5 10v10h14V10"></path></svg>
              </div>
              <h3 className="font-display text-xl font-extrabold mb-2.5 text-text-primary">Shelters &amp; Rescues</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Your team is doing critical work with tools that were never designed to work together. There is a better way.
              </p>
              <Link to="/shelters-rescues" className="font-bold text-sm text-secondary hover:text-secondary-deep">
                Explore shelter tools →
              </Link>
            </div>

            {/* Pet Owners Card */}
            <div className="border border-secondary/20 rounded-2xl p-8 bg-secondary-soft">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.4-9.5 9-9.5 9z"></path></svg>
              </div>
              <h3 className="font-display text-xl font-extrabold mb-2.5 text-text-primary">Pet Owners</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Your pet&apos;s information should not live only in your head. Register, protect, reunite.
              </p>
              <Link to="/pet-owners" className="font-bold text-sm text-secondary hover:text-secondary-deep">
                Explore pet owner tools →
              </Link>
            </div>

            {/* Sponsors & Partners Card */}
            <div className="border border-secondary/20 rounded-2xl p-8 bg-secondary-soft">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="3"></circle><circle cx="16" cy="8" r="3"></circle><path d="M2 20c0-3 3-5 6-5s6 2 6 5M10 20c0-3 3-5 6-5s6 2 6 5"></path></svg>
              </div>
              <h3 className="font-display text-xl font-extrabold mb-2.5 text-text-primary">Sponsors &amp; Partners</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                This is infrastructure that protects animals at scale. See what your support builds.
              </p>
              <Link to="/sponsorship" className="font-bold text-sm text-secondary hover:text-secondary-deep">
                Explore sponsorship →
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Platform Overview */}
      <SectionWrapper background="transparent" className="py-16" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-3.5">
                Platform Overview
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-4 leading-tight">
                One Network. Every Animal. Every Organization.
              </h2>
              <p className="text-text-secondary text-[15.5px] leading-relaxed mb-4">
                RescueNet360 gives every animal one persistent identity and a clearer information trail. Photos, records, reports, notes, and status updates all stay connected to the animal&apos;s identity as they move through the system.
              </p>
              <p className="text-text-secondary text-[15.5px] leading-relaxed">
                This helps teams spend less time rebuilding context and more time making the next right decision.
              </p>
            </div>
            <div
              className="h-60 rounded-2xl flex items-center justify-center"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D3EDEA, #D3EDEA 12px, #C3E4E0 12px, #C3E4E0 24px)' }}
            >
              <span className="font-mono text-sm text-text-secondary">[ network diagram ]</span>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Pilot Program CTA Band */}
      <SectionWrapper background="transparent" className="py-20 text-white text-center bg-gradient-to-br from-primary to-primary-deep" border={false}>
        <Container size="narrow">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-soft mb-3 block">Pilot Program</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Founding Pilot Partners Are Now Being Selected
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            RescueNet360 is selecting a small group of shelters and rescues to test real workflows, give honest feedback, and help shape the platform before broader launch. This is early access with a real seat at the table.
          </p>
          <div className="flex justify-center">
            <Link to="/shelters-rescues#apply" className="btn btn-secondary font-extrabold px-10 py-4 rounded-pill text-lg shadow-elevated hover:scale-105 transition-all">
              Apply for Pilot Access
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 5 — Mission Statement */}
      <SectionWrapper background="surface" className="py-24 text-center">
        <Container size="narrow">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary mb-2 block">Our Mission</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
            Animals Start Over at Every Facility They Enter
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            A found pet report, shelter intake record, foster note, medical update, or rescue request should not sit isolated in separate systems. RescueNet360 helps the right people see the right information sooner, so more animals have a better chance at getting home, getting placed, or getting help.
          </p>
        </Container>
      </SectionWrapper>
    </div>
  );
};
