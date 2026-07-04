import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';

export const SponsorsPage = () => {
  return (
    <div className="bg-surface w-full min-h-screen">
      <SEO
        title="Sponsor Animal Welfare Infrastructure – RescueNet360"
        description="Fund the coordination tools that protect animals in your community. RescueNet360 sponsors are woven into regional animal welfare infrastructure, not pasted on top."
        path="/sponsorship"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sponsor Animal Welfare Infrastructure – RescueNet360",
          "description": "Fund the coordination tools that protect animals in your community. Become a regional or national underwriting partner.",
          "url": "https://rescuenet360.com/sponsorship"
        }}
      />

      {/* Section 1 — Hero */}
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator" border={false}>
        <Container size="narrow">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
            SPONSORS &amp; PARTNERS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            Support the Infrastructure That Protects Animals
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-10">
            RescueNet360 connects shelters, rescues, and pet owners across regions into a single coordinated system. Sponsors fund the infrastructure that makes that coordination possible and their presence is woven into the communities they serve, not pasted on top.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="btn btn-primary min-h-[56px] px-8 text-lg font-bold shadow-elevated flex items-center justify-center">
              Contact Us About Sponsorship →
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 2 — Positioning */}
      <SectionWrapper background="surface" className="py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Sponsor Positioning</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                This Is Not Traditional Advertising
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Sponsors help support tools and infrastructure that improve animal welfare operations, pet protection, and reunification efforts within their communities and regions. Sponsor presence is visible without feeling like advertising.
              </p>
            </div>
            <div className="dark bg-bg p-8 md:p-10 rounded-2xl text-text-primary shadow-xl border border-separator">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center p-2 shadow-sm">
                  <img src="/images/icons/shield-logo-white.svg" alt="RescueNet360 Shield Logo" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Community-First Integration</h3>
                  <p className="text-text-secondary text-sm font-medium">Visible, ethical brand alignment</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm">
                Instead of intrusive banners or generic ad placements, sponsors are recognized as essential underwriters of the life-saving operational tools used daily by local shelters, rescues, and pet families.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Regional Model */}
      <SectionWrapper background="surface-muted" className="py-20">
        <Container>
          <div className="w-full text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-secondary mb-2 block">Regional Funding Concept</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
              Your Dollars Work Where Animals Live
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              When a sponsor funds a region, that investment directly supports the shelters, rescues, and pet families in that specific geography. Shelter directors in your community know your name. Pet owners registering their animals in your region see your organization as part of the infrastructure keeping them safe. This is local investment with visible, verifiable impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-primary font-extrabold text-2xl mb-2">Local Impact</div>
                <p className="text-sm text-text-muted leading-relaxed">Direct support for shelters and rescues operating in your exact geographical footprint.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-primary font-extrabold text-2xl mb-2">Visible Goodwill</div>
                <p className="text-sm text-text-muted leading-relaxed">Pet owners see your organization as a vital pillar keeping their pets protected.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-primary font-extrabold text-2xl mb-2">Zero Shelter Cost</div>
                <p className="text-sm text-text-muted leading-relaxed">Your underwriting ensures shelters and rescues never have to pay out of their own limited budgets.</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Sponsorship Options */}
      <SectionWrapper background="surface" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-text-secondary text-lg">
              Explore how your organization can partner with RescueNet360 to build sustainable animal welfare infrastructure.
            </p>
          </div>

          <ContentGrid columns={4} className="max-w-6xl mx-auto">
            <div className="card card-comfortable border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Regional infrastructure underwriting</h3>
              <p className="text-text-muted text-sm leading-relaxed mt-auto">
                Fund the core operational platform across an entire city, county, or multi-state region.
              </p>
            </div>

            <div className="card card-comfortable border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Shelter and rescue sponsorship programs</h3>
              <p className="text-text-muted text-sm leading-relaxed mt-auto">
                Directly subsidize onboarding, training, and hardware tools for designated local rescue teams.
              </p>
            </div>

            <div className="card card-comfortable border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Community pet protection initiatives</h3>
              <p className="text-text-muted text-sm leading-relaxed mt-auto">
                Support public microchip scans, QR identity tag distribution, and lost pet alert networks.
              </p>
            </div>

            <div className="card card-comfortable border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Event and awareness partnerships</h3>
              <p className="text-text-muted text-sm leading-relaxed mt-auto">
                Collaborate on community adoption drives, reunification education, and welfare awareness campaigns.
              </p>
            </div>
          </ContentGrid>
        </Container>
      </SectionWrapper>

      {/* Section 5 — Contact CTA */}
      <SectionWrapper background="surface" className="py-20 bg-gradient-to-t from-surface to-bg text-center border-t border-separator" border={false}>
        <Container size="narrow">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 text-text-primary">
            Interested in Supporting RescueNet360?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss regional support, underwriting models, and how your organization can become part of the infrastructure protecting animals in your community.
          </p>
          <Link to="/contact" className="btn btn-primary min-h-[56px] px-10 text-lg inline-flex items-center justify-center font-bold shadow-elevated hover:scale-105 transition-transform">
            Contact Us About Sponsorship Opportunities →
          </Link>
        </Container>
      </SectionWrapper>
    </div>
  );
};
