import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const HomePage = () => {
  return (
    <div className="bg-surface w-full min-h-screen flex flex-col">
      <Helmet>
        <title>RescueNet360 – Animal Shelter & Rescue Management Software</title>
        <meta name="description" content="Connect intake, foster, transport, reunification, and pet identity into one system. Built for animal shelters and rescues. Apply to be a pilot partner." />
      </Helmet>

      {/* Section 1 — Hero */}
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 relative overflow-hidden border-b border-separator" border={false}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,57,143,0.12),_transparent_60%)] pointer-events-none" />
        <Container className="relative z-10 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill shadow-sm">
            THE ANIMAL WELFARE OPERATING SYSTEM
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-text-primary">
            Animal Welfare Runs on Disconnected Systems. <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">Not Anymore.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            RescueNet360 is the operational backbone shelters and rescues have been missing. Track animals. Coordinate care. Reunite pets faster. Built to connect intake, foster coordination, transport, reunification, and pet identity into one persistent, coordinated system.
          </p>
          <div className="flex justify-center">
            <Link to="/shelters-rescues" className="btn btn-primary min-w-[240px] min-h-[56px] text-lg font-extrabold flex items-center justify-center shadow-elevated hover:scale-105 transition-transform">
              Explore Shelter & Rescue Tools →
            </Link>
          </div>
        </Container>
      </SectionWrapper>
      
      {/* Section 2 — Audience Path Cards */}
      <SectionWrapper background="surface" className="py-20 border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              Choose Your Path
            </h2>
            <p className="text-text-secondary text-lg">
              Tailored operational infrastructure designed for every role in animal welfare.
            </p>
          </div>

          <ContentGrid columns={3} className="max-w-6xl mx-auto">
            {/* Shelters & Rescues Card */}
            <div className="card card-comfortable border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl flex flex-col bg-white rounded-2xl p-8 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-2">
                <img src="/images/icons/RescueNetIcons-Color-01.svg" alt="Shelters & Rescues Icon" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-text-primary">Shelters & Rescues</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                Your team is doing critical work across disconnected systems. There is a better way.
              </p>
              <Link to="/shelters-rescues" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-deep group-hover:translate-x-1 transition-all mt-auto">
                Explore Shelter Tools <span>→</span>
              </Link>
            </div>

            {/* Pet Owners Card */}
            <div className="card card-comfortable border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl flex flex-col bg-white rounded-2xl p-8 group">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-2">
                <img src="/images/icons/RescueNetIcons-Color-02.svg" alt="Pet Owners Icon" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-text-primary">Pet Owners</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                Your pet&apos;s information should not live only in your head. Register, protect, reunite.
              </p>
              <Link to="/pet-owners" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-secondary-deep group-hover:translate-x-1 transition-all mt-auto">
                Explore Pet Owner Tools <span>→</span>
              </Link>
            </div>

            {/* Sponsors & Partners Card */}
            <div className="card card-comfortable border border-separator hover:border-primary/50 transition-all shadow-sm hover:shadow-xl flex flex-col bg-white rounded-2xl p-8 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-2">
                <img src="/images/icons/RescueNetIcons-Color-03.svg" alt="Sponsors & Partners Icon" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-text-primary">Sponsors & Partners</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                This is infrastructure that protects animals at scale. See what your support funds.
              </p>
              <Link to="/sponsorship" className="inline-flex items-center gap-2 font-bold text-text-primary hover:text-primary group-hover:translate-x-1 transition-all mt-auto">
                Explore Sponsorship <span>→</span>
              </Link>
            </div>
          </ContentGrid>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Workflow & Architecture Band */}
      <SectionWrapper background="surface-muted" className="py-20 border-b border-separator">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
                HOW IT WORKS
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                Connected infrastructure that replaces fragmented workflows
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Most organizations rely on disconnected tools—spreadsheets, disparate software, paper files, and informal social media posts. RescueNet360 integrates identity, medical tracking, transport coordination, and reunification into one system.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-state-success/20 text-state-success flex items-center justify-center font-bold text-sm">✓</span>
                  Standardized data models shared across participating shelters
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-state-success/20 text-state-success flex items-center justify-center font-bold text-sm">✓</span>
                  Real-time visibility into incoming transfers and foster capacity
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-state-success/20 text-state-success flex items-center justify-center font-bold text-sm">✓</span>
                  Automated notifications when lost pet reports match intake records
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-separator relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-separator">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 p-2">
                    <img src="/images/icons/RescueNetIcons-Color-04.svg" alt="Intake Icon" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">Intake & Identity</h4>
                    <p className="text-sm text-text-secondary">Persistent animal identity established at first contact.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-separator">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 p-2">
                    <img src="/images/icons/RescueNetIcons-Color-05.svg" alt="Foster Icon" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">Foster & Transport Coordination</h4>
                    <p className="text-sm text-text-secondary">Seamless communication across organizations and volunteers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-separator">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 p-2">
                    <img src="/images/icons/RescueNetIcons-Color-06.svg" alt="Reunification Icon" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">Automated Reunification Matching</h4>
                    <p className="text-sm text-text-secondary">Confidence-scored matching between lost reports and shelter intakes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Pilot Program CTA Band */}
      <SectionWrapper background="brand" className="py-20 text-white text-center bg-gradient-to-r from-primary to-primary-deep" border={false}>
        <Container size="narrow">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Founding Pilot Partners: Limited Slots Available
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
            RescueNet360 is selecting a small cohort of shelters and rescue organizations to receive early platform access, direct input into feature development, and founding partner status as the platform scales. This is not a waitlist. This is a seat at the table.
          </p>
          <div className="flex justify-center">
            <Link to="/shelters-rescues#apply" className="btn btn-secondary font-extrabold px-10 py-4 rounded-pill text-lg shadow-elevated hover:scale-105 transition-all">
              Explore Shelter Pilot Program →
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 5 — Mission Statement */}
      <SectionWrapper background="surface" className="py-24 text-center">
        <Container size="narrow">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary mb-2 block">Our Mission</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
            Built to Improve Outcomes for Animals
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Animal welfare teams are being asked to do more with limited resources and disconnected systems. RescueNet360 exists to improve coordination, visibility, and decision-making so more animals can get the care, protection, and reunification they deserve.
          </p>
        </Container>
      </SectionWrapper>
    </div>
  );
};
