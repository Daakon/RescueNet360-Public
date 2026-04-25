import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

const quickActions = [
  {
    title: 'Register Your Pets',
    description: 'Create digital profiles so reunification and verification are faster when incidents happen.',
    accent: 'border-[#93c5fd] bg-[#eff6ff]',
  },
  {
    title: 'Report Lost Pet',
    description: 'Start a coordinated recovery flow with alerts, matching signals, and guided next steps.',
    accent: 'border-[#fda4af] bg-[#fff1f2]',
  },
  {
    title: 'Report Found Pet',
    description: 'Help reunite a pet quickly by filing a found report tied into the broader response network.',
    accent: 'border-[#86efac] bg-[#f0fdf4]',
  },
];

const lostPetEmergencyFlow = [
  {
    title: 'Upload photo / Create Pet Identity',
    description: 'Create or open your pet profile so all updates route through one persistent identity record.',
  },
  {
    title: 'Mark as Lost',
    description: 'Start the active-lost workflow to trigger matching, notification, and support sequencing.',
  },
  {
    title: 'Network notified',
    description: 'Regional pathways notify available responders, organizations, and support channels.',
  },
  {
    title: 'Verified reunification',
    description: 'Closure is confirmed with identity continuity and documented case resolution.',
  },
];

const preLaunchGuidance = [
  'Share one consistent pet profile across all outreach to reduce duplicate case records.',
  'Use recent photos and clear location details first; time-to-clarity matters in early recovery.',
  'Keep safe contact channels active and avoid posting sensitive personal information publicly.',
  'If your region is not active yet, submit support details so we can route updates and onboarding notices.',
];

export const FamiliesPage = () => {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="For Pet Families"
        title="Lost-pet support with clear next steps"
        description="RescueNet360 gives families an emergency path built for the first critical minutes: create identity, mark lost, notify the network, and move toward verified reunification."
        backgroundImage="/images/hero/hero-background.jpg"
        ctas={[
          { label: 'I Need Help Finding My Pet', to: '/app/lost', external: true },
          { label: 'Register My Pet', to: '/app/register', variant: 'soft', external: true },
        ]}
      />

      <section className="page-section border-y border-white/10 bg-[#0a1728]">
        <div className="wrap">
          <article className="surface-card border border-white/15 bg-white/5 p-6 md:p-8">
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
              You&apos;re not alone in a lost pet emergency.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c5d5ea]">
              RescueNet360 coordinates support across family actions, shelter visibility, and regional response pathways so critical steps happen with more clarity and less delay.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#9fb7d4]">
              After you upload and mark your pet as lost, the platform routes matching and coordination signals through one identity record while keeping core workflows free and privacy-respecting.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section bg-white text-[#0f172a]">
        <div className="wrap">
          <p className="kicker kicker-on-light">How It Works</p>
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
            Lost pet right now? Follow this sequence.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {lostPetEmergencyFlow.map((step, index) => (
              <article key={step.title} className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-5">
                <p className="kicker kicker-on-light">Step {index + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-[#0f172a]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <p className="kicker kicker-on-light">Quick Actions</p>
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
            Personal pet safety hub
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quickActions.map((item) => (
              <article key={item.title} className={`surface-card border p-6 ${item.accent}`}>
                <h3 className="font-display text-2xl font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white text-[#0f172a]">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
            Immediate guidance while pilot access expands
          </h2>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[#334155]">
            {preLaunchGuidance.map((item) => (
              <li key={item} className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-[#0a1728]">
        <div className="wrap grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
              Pilot mode is open to approved users
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c5d5ea]">
              The app supports registration, lost and found reporting, and reunification workflows. During pilot,
              access is invitation-based while we onboard regions, shelters, and response partners.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact?type=individual_pet_parent" className="btn-primary">
                Join Pilot Waitlist
              </Link>
              <Link to="/contact?type=individual_pet_parent" className="btn-secondary">
                Explore Support Path
              </Link>
            </div>
          </div>

          <aside className="surface-card border border-white/15 bg-white/5 p-6">
            <h3 className="font-display text-2xl font-extrabold text-white">Need organizational support too?</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c5d5ea]">
              RescueNet360 connects families with a broader shelter and rescue network so recovery actions are coordinated across both individual and institutional paths.
            </p>
            <Link to="/for-shelters-rescues" className="mt-5 inline-flex text-sm font-semibold text-teal hover:text-white">
              Explore shelter coordination path
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
};
