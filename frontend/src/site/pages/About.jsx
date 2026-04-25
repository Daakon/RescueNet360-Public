import { Link } from 'react-router-dom';
import { InfoCard } from '../components/about/InfoCard';
import { SectionIntro } from '../components/about/SectionIntro';
import { PageHero } from '../components/PageHero';

const systemicChallenges = [
  {
    title: 'Urgency without shared visibility',
    text: 'Families often need immediate help, while critical case details are spread across disconnected systems and channels.',
  },
  {
    title: 'Manual coordination overhead',
    text: 'Shelters and rescues spend significant time reconciling status updates instead of focusing on placement and care.',
  },
  {
    title: 'Fragmented regional response',
    text: 'Sponsors and partners lack a consistent operational picture when they support cross-organization initiatives.',
  },
];

const whyNowSignals = [
  {
    title: 'Higher operational complexity',
    text: 'Intake variability, transport constraints, and foster availability now shift faster than manual workflows can absorb.',
  },
  {
    title: 'Stronger accountability expectations',
    text: 'Stakeholders increasingly expect measurable outcomes, faster coordination, and transparent reporting.',
  },
  {
    title: 'Readiness for shared infrastructure',
    text: 'Organizations are more prepared to align around interoperable tools that reduce duplication and improve continuity.',
  },
];

const approachPillars = [
  {
    title: 'Identity Continuity',
    text: 'Persistent identity records support reunification and case continuity across participating organizations.',
  },
  {
    title: 'Coordinated Operations',
    text: 'Shared workflows improve handoffs between families, shelters, rescues, and partner teams.',
  },
  {
    title: 'Regional Infrastructure',
    text: 'A coordination layer supports day-to-day operations and surge periods without requiring system-by-system workarounds.',
  },
  {
    title: 'Partner Activation',
    text: 'Sponsors and mission-aligned partners can support structured initiatives tied to regional operational goals.',
  },
  {
    title: 'Decision-Grade Data',
    text: 'Clear metrics on response times, placement flow, and outcomes inform planning and accountability.',
  },
];

const audiences = [
  {
    title: 'Pet Families',
    text: 'Find clear pathways for lost and found support through connected family-facing tools.',
    to: '/for-pet-families',
    cta: 'Explore Family Path',
  },
  {
    title: 'Shelters & Rescues',
    text: 'Coordinate intake, transfers, and placement activity with better cross-team visibility.',
    to: '/for-shelters-rescues',
    cta: 'Explore Operational Path',
  },
  {
    title: 'Sponsors & Partners',
    text: 'Support measurable regional capability with transparent coordination and reporting.',
    to: '/for-sponsors-partners',
    cta: 'Explore Partnership Path',
  },
];

const benefitCommitments = [
  'Advance animal welfare outcomes through durable coordination infrastructure.',
  'Balance long-term mission accountability with disciplined operational execution.',
  'Prioritize transparent measurement for families, partners, and participating organizations.',
];

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    text: 'Establish identity, intake, and family support workflows in pilot regions.',
  },
  {
    phase: 'Phase 2',
    title: 'Regional Coordination',
    text: 'Expand cross-organization operations for transfers, foster workflows, and capacity alignment.',
  },
  {
    phase: 'Phase 3',
    title: 'Partner Integration',
    text: 'Scale sponsor and partner participation with structured impact models and reporting.',
  },
  {
    phase: 'Phase 4',
    title: 'Network Intelligence',
    text: 'Strengthen planning with system-wide data insights that improve speed, resilience, and outcomes.',
  },
];

export const About = () => {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="About RescueNet360"
        title="Coordination infrastructure for pet families and the animal welfare system"
        description="RescueNet360 is a Public Benefit Corporation building the shared operating layer that helps families find help faster while enabling shelters, rescues, and partners to coordinate with greater clarity."
        ctas={[
          { label: 'Explore Pet Family Path', to: '/for-pet-families' },
          { label: 'Explore Partnership Path', to: '/for-sponsors-partners', variant: 'soft' },
        ]}
      />

      <section id="public-benefit-commitment" className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <SectionIntro
            eyebrow="System Challenge"
            title="Family urgency meets fragmented operations"
            description="When a family needs immediate support, outcomes depend on fast coordination between people and organizations that often operate in disconnected systems."
          />
          <div className="grid gap-4">
            {systemicChallenges.map((challenge) => (
              <InfoCard key={challenge.title} title={challenge.title} text={challenge.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section relative overflow-hidden border-y border-white/10 bg-[#091629]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(31,199,182,0.18),transparent_40%),radial-gradient(circle_at_82%_22%,rgba(96,165,250,0.2),transparent_34%)]" />
        <div className="wrap relative z-10">
          <SectionIntro
            onDark
            eyebrow="Why Now"
            title="The sector is shifting from isolated tools to coordinated systems"
            description="Operational demands are increasing while expectations for measurable performance and interoperability continue to rise."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whyNowSignals.map((signal) => (
              <InfoCard key={signal.title} title={signal.title} text={signal.text} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <SectionIntro
            eyebrow="Our Approach"
            title="A practical framework for coordinated execution"
            description="Our model centers on identity continuity, connected workflows, resilient infrastructure, partner activation, and decision-grade data."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {approachPillars.map((pillar) => (
              <InfoCard key={pillar.title} title={pillar.title} text={pillar.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-[#0a1628]">
        <div className="wrap">
          <SectionIntro
            onDark
            eyebrow="Who We Serve"
            title="Designed for each role in the coordination network"
            description="The platform supports direct family needs and institutional workflows across the broader welfare ecosystem."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((audience) => (
              <InfoCard key={audience.title} title={audience.title} text={audience.text} tone="dark">
                <Link to={audience.to} className="mt-5 inline-flex text-sm font-semibold text-teal hover:text-white">
                  {audience.cta}
                </Link>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <article className="surface-card border border-[#d7e4f5] bg-white p-6 md:p-8">
            <SectionIntro
              eyebrow="Public Benefit Commitment"
              title="Governed for mission continuity and measurable impact"
              description="As a Public Benefit Corporation, RescueNet360 aligns strategy, operations, and accountability with long-term public-benefit outcomes."
            />
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[#334155]">
              {benefitCommitments.map((item) => (
                <li key={item} className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="page-section bg-white text-[#0f172a]">
        <div className="wrap">
          <SectionIntro
            eyebrow="Strategic Roadmap"
            title="Structured expansion with operational discipline"
            description="Our roadmap prioritizes implementation readiness, regional reliability, and network-level visibility."
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {roadmapPhases.map((phase) => (
              <li key={phase.phase} className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-6">
                <p className="kicker kicker-on-light">{phase.phase}</p>
                <h3 className="font-display mt-2 text-2xl font-bold text-[#0f172a]">{phase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{phase.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-[#081425]">
        <div className="wrap">
          <article className="surface-card border border-white/15 bg-white/5 p-6 md:p-8">
            <SectionIntro
              onDark
              eyebrow="Next Step"
              title="Move forward through the path that matches your role"
              description="Families can access support pathways now, and partners can explore structured collaboration aligned to measurable outcomes."
            />
            <div className="mt-6 flex flex-wrap gap-3" aria-label="About page primary actions">
              <Link to="/for-pet-families" className="btn-primary">
                Explore Pet Family Path
              </Link>
              <Link to="/for-sponsors-partners" className="btn-secondary">
                Explore Partnership Path
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
