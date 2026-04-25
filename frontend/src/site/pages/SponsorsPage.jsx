import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

const sponsorSections = [
  {
    title: 'Why this infrastructure needs modernization',
    text: 'Animal welfare coordination remains under-instrumented despite high operational complexity and public demand for better outcomes.',
  },
  {
    title: 'The power of coordinated networks',
    text: 'Regional network effects improve placement speed, reduce duplication, and raise system-level resilience.',
  },
  {
    title: 'Regional sponsorship model',
    text: 'Sponsors can activate specific geographies with planning calibrated to regional pet population and operational complexity.',
  },
  {
    title: 'Measurable impact metrics',
    text: 'Reporting is anchored to concrete operating outcomes, not generic impressions or vanity metrics.',
  },
  {
    title: 'Brand visibility opportunities',
    text: 'Mission-aligned visibility is connected to tangible outcomes and long-term regional impact.',
  },
  {
    title: 'Public-benefit mission alignment',
    text: 'Sponsorship supports sustained improvements in a public-facing, welfare-first coordination model.',
  },
];

export const SponsorsPage = () => {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="For Sponsors & Strategic Partners"
        title="Impact-aligned partnership with visible regional outcomes"
        description="This path is designed for organizations that want measurable animal welfare impact, clear sponsorship structure, and long-term mission alignment."
        backgroundImage="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a9c954e957c8de8b63999_A_digital_visualization_displays_a_glowing_network.png"
        ctas={[{ label: 'Sponsor a Region', to: '/contact?type=sponsor_partner' }]}
      />

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">Strategic sponsorship opportunities</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sponsorSections.map((item) => (
              <article key={item.title} className="surface-card border border-[#d7e4f5] bg-white p-6">
                <h3 className="font-display text-2xl font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white text-[#0f172a]">
        <div className="wrap grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-6 md:p-8">
            <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
              Regional sponsorship model (dynamic)
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#334155]">
              Sponsorship planning is not fixed-price. Scope is modeled from regional pet population, partner density, and coordination requirements.
            </p>
            <ol className="mt-6 grid gap-3 text-sm leading-relaxed text-[#334155]">
              <li>1. Define target region and operating context.</li>
              <li>2. Model sponsorship scope based on pet population and coordination complexity.</li>
              <li>3. Fund regional coordination infrastructure and rollout support.</li>
              <li>4. Receive quarterly reporting tied to measurable operational outcomes.</li>
            </ol>
          </article>

          <aside className="surface-card border border-[#d7e4f5] bg-white p-6">
            <p className="kicker kicker-on-light">Impact Metrics Preview</p>
            <h3 className="font-display text-2xl font-extrabold text-[#0c1b2d]">Sample measurable views</h3>
            <div className="mt-5 grid gap-3">
              {['Matches attempted', 'Reunifications assisted', 'Transfers coordinated'].map((metric) => (
                <div key={metric} className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] px-4 py-3 text-sm font-semibold text-[#334155]">
                  {metric}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-[#081426]">
        <div className="wrap grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">Designed for impact discussion, not generic visibility</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c5d5ea]">
              The model supports focused regional partnerships with defined goals and transparent reporting, so sponsorship decisions can map directly to measurable outcomes.
            </p>
          </div>
          <aside className="surface-card border border-white/15 bg-white/5 p-6">
            <p className="kicker">Next Action</p>
            <h3 className="font-display text-2xl font-extrabold text-white">Schedule Impact Discussion</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c5d5ea]">
              Share your target regions, estimated pet population context, and impact goals. We will route your inquiry to sponsorship planning.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/contact?type=sponsor_partner" className="btn-primary">
                Sponsor a Region
              </Link>
              <Link to="/contact?type=sponsor_partner" className="btn-secondary">
                Explore Sponsorship Model
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
