import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

const investorContent = [
  {
    title: 'Mission statement',
    text: 'RescueNet360 is building coordination infrastructure that helps reunite pets faster while improving operational outcomes across the animal welfare system.',
  },
  {
    title: 'Why now',
    text: 'Fragmented workflows, rising coordination pressure, and higher expectations for measurable impact have created urgency for a shared operating layer.',
  },
  {
    title: 'Founding team clarity',
    text: 'The company is led by a mission-anchored team focused on practical deployment, operational credibility, and long-term execution.',
  },
  {
    title: 'Market opportunity',
    text: 'A large, fragmented animal welfare ecosystem lacks a coordination-grade operating layer.',
  },
  {
    title: 'Revenue model overview',
    text: 'Recurring platform model aligned to institutional operations, with structured regional expansion.',
  },
  {
    title: 'Network effects and defensibility',
    text: 'Every participating organization increases data quality, operational value, and switching costs.',
  },
  {
    title: 'Growth roadmap',
    text: 'Phased deployment starts with pilot markets and expands through partner-led regional adoption.',
  },
  {
    title: 'Public-benefit corporation structure',
    text: 'Mission protection and accountability are integrated into long-term governance choices.',
  },
  {
    title: 'Use of capital',
    text: 'Capital prioritizes productization, deployment readiness, and measurable market expansion milestones.',
  },
];

export const InvestorsPage = () => {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="For Investors"
        title="Credibility-forward investment narrative"
        description="RescueNet360 is the first privately-operated national animal identity registry. The infrastructure that should have existed 20 years ago. This path is structured to make mission, timing, team, and execution logic clear before deeper diligence."
        backgroundImage="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690aa47143168c7a81e809b4_ChatGPT%20Image%20Nov%204%2C%202025%2C%2007_12_06%20PM.png"
        ctas={[
          { label: 'Request Investor Brief', to: '/contact?type=investor' },
          { label: 'Grant Inquiry', to: '/contact?type=grant_funder', variant: 'soft' },
        ]}
      />

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">Strategic investment themes</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {investorContent.map((item) => (
              <article key={item.title} className="surface-card border border-[#d7e4f5] bg-white p-6">
                <h3 className="font-display text-2xl font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-[#091628]">
        <div className="wrap grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">Built to balance mission with growth readiness</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c5d5ea]">
              RescueNet360 is designed as durable infrastructure for the sector, with disciplined rollout, measurable outcomes, and governance aligned to public-benefit impact.
            </p>
          </div>
          <aside className="surface-card border border-white/15 bg-white/5 p-6">
            <p className="kicker">Next Action</p>
            <h3 className="font-display text-2xl font-extrabold text-white">Start diligence conversation</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c5d5ea]">
              Share stage, check size, and diligence priorities to receive relevant materials quickly.
            </p>
            <ol className="mt-4 grid gap-2 text-sm leading-relaxed text-[#c5d5ea]">
              <li>1. Request investor brief.</li>
              <li>2. Share diligence priorities.</li>
              <li>3. Schedule follow-up discussion.</li>
            </ol>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/contact?type=investor" className="btn-primary">
                Request Investor Brief
              </Link>
              <Link to="/contact?type=grant_funder" className="btn-secondary">
                Grant Funder Inquiry
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
