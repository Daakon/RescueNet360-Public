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
      <SectionWrapper background="transparent" className="bg-gradient-to-br from-primary-deep via-primary to-secondary-deep text-white text-center py-20 md:py-24" border={false}>
        <Container size="narrow" className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-white/15 text-white rounded-pill">
            Sponsors &amp; Partners
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
            Fund the Infrastructure. Show the Impact.
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
            RescueNet360 helps connect shelters, rescues, pet owners, and regional partners through one coordinated animal welfare network. Sponsors help bring this infrastructure to the communities they serve.
          </p>
          <Link to="/contact" className="btn btn-secondary min-h-[52px] px-8 text-base inline-flex items-center justify-center font-bold">
            Talk to Our Sponsorship Team
          </Link>
        </Container>
      </SectionWrapper>

      {/* Section 2 — Why Sponsorship Matters */}
      <SectionWrapper background="surface" className="py-16">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3.5">Why Sponsorship Matters</div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-4 leading-tight">
                This Is Local Impact People See.
              </h2>
              <p className="text-text-secondary text-[15.5px] leading-relaxed mb-4">
                Animal welfare teams need more than awareness. They need working infrastructure.
              </p>
              <p className="text-text-secondary text-[15.5px] leading-relaxed">
                When sponsors support RescueNet360, they help fund the systems that move information faster, strengthen reunification, support shelters and rescues, and give communities a better way to respond when animals are lost, displaced, or at risk.
              </p>
            </div>
            <div className="h-56 rounded-2xl bg-secondary-soft flex items-center justify-center text-primary">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="3"></circle><circle cx="16" cy="8" r="3"></circle><path d="M2 20c0-3 3-5 6-5s6 2 6 5M10 20c0-3 3-5 6-5s6 2 6 5"></path></svg>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Regional Model */}
      <SectionWrapper background="transparent" className="py-16" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <div className="h-56 rounded-2xl bg-white flex items-center justify-center text-primary order-2 lg:order-1">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-3.5">Regional Model</div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-4 leading-tight">
                Your Support Works Where Animals Live.
              </h2>
              <p className="text-text-secondary text-[15.5px] leading-relaxed mb-4">
                RescueNet360 is built around regional deployment. A regional sponsor helps bring the network to a specific community, county, metro area, or service region.
              </p>
              <p className="text-text-secondary text-[15.5px] leading-relaxed">
                This gives sponsors visible local impact tied to real animal welfare outcomes.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Sponsorship Options */}
      <SectionWrapper background="surface" className="py-16">
        <Container>
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3.5">Ways to Get Involved</div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-8 leading-tight">
            Sponsorship Options
          </h2>

          <ContentGrid columns={3} className="max-w-6xl mx-auto">
            <div className="border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"></path><path d="M9 4v14M15 6v14"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Regional network underwriting</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Help launch RescueNet360 in a specific region.
              </p>
            </div>

            <div className="border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8"></path><path d="M5 10v10h14V10"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Shelter support sponsorship</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Help fund access, onboarding, and operational support for shelter partners.
              </p>
            </div>

            <div className="border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.4-9.5 9-9.5 9z"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Rescue support sponsorship</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Help keep RescueNet360 free for rescues and support better placement coordination.
              </p>
            </div>

            <div className="border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Community pet protection</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Support pet registration, lost and found awareness, disaster readiness, and public education.
              </p>
            </div>

            <div className="border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 9h18M8 3v4M16 3v4"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Event and awareness partnerships</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Partner on adoption events, registration drives, shelter campaigns, and community outreach.
              </p>
            </div>
          </ContentGrid>
        </Container>
      </SectionWrapper>

      {/* Section 5 — Contact CTA */}
      <SectionWrapper background="transparent" className="py-20 text-center bg-gradient-to-br from-secondary to-secondary-deep" border={false}>
        <Container size="narrow">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4 text-white">
            Ready to Bring RescueNet360 to Your Region?
          </h2>
          <p className="text-white/90 text-[15.5px] mb-8 max-w-xl mx-auto leading-relaxed">
            Let&apos;s talk about your community, your goals, and the kind of impact your organization wants to support.
          </p>
          <Link to="/contact" className="btn bg-white text-secondary hover:bg-white/90 min-h-[52px] px-8 text-base inline-flex items-center justify-center font-bold">
            Talk to Our Sponsorship Team
          </Link>
        </Container>
      </SectionWrapper>
    </div>
  );
};
