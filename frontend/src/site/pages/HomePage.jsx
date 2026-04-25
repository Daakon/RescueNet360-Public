import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { QuickSignalForm } from '../components/QuickSignalForm';

const problemStats = [
  { value: '607k', label: 'Animals euthanized annually in US shelters' },
  { value: '14,000+', label: 'Shelters and rescues operating in fragmented systems' },
  { value: '60%', label: 'Foster applications delayed or dropped in manual workflows' },
  { value: '40%', label: 'Emergency placements that fail when data is disconnected' },
];

const primaryEntryDoors = [
  {
    title: 'Pet Families',
    text: 'Start a guided recovery path with clear emergency steps and free-forever core reunification support.',
    to: '/for-pet-families',
    cta: 'I Need Help Finding My Pet',
  },
  {
    title: 'Shelter / Rescue / Network Representatives',
    text: 'Coordinate intake, custody transitions, and transfers with operational visibility that works across existing tools.',
    to: '/for-shelters-rescues',
    cta: 'Get Free Access →',
  },
];

const audiencePaths = [
  {
    title: 'Shelters and Rescues',
    text: 'Operational clarity, pilot readiness, and measurable coordination gains.',
    to: '/for-shelters-rescues',
  },
  {
    title: 'Sponsors and Strategic Partners',
    text: 'Impact-aligned sponsorship models with measurable regional outcomes.',
    to: '/for-sponsors-partners',
  },
  {
    title: 'Investors and Grant Funders',
    text: 'A credibility-forward view of market opportunity, defensibility, and growth.',
    to: '/for-investors',
  },
  {
    title: 'Pet Families',
    text: 'Register pets, report lost and found cases, and access free-forever core reunification support.',
    to: '/for-pet-families',
  },
];

const ecosystemRoles = [
  {
    label: 'Pet Family',
    text: 'Access and update pet record during intake and reunification.',
    icon: 'PF',
  },
  {
    label: 'Shelter & Rescues',
    text: 'Coordinate intake, custody changes, and placement decisions with a shared identity record across municipal shelters and rescue organizations.',
    icon: 'SH',
  },
  {
    label: 'Foster',
    text: 'Maintain continuity of care and status updates across temporary placement.',
    icon: 'FO',
  },
  {
    label: 'Transport',
    text: 'Track transfer readiness and handoffs with identity-linked movement records.',
    icon: 'TR',
  },
  {
    label: 'Sponsor',
    text: 'Support regional coordination with measurable, identity-grounded impact reporting.',
    icon: 'SP',
  },
  {
    label: 'Reporting',
    text: 'Generate operational insights from a consistent identity across transitions.',
    icon: 'RP',
  },
];

const lostPetNowSteps = [
  {
    title: 'Upload photo / Create Pet Identity',
    text: 'Create or open your pet record so matching and routing can happen against one persistent identity.',
  },
  {
    title: 'Mark as Lost',
    text: 'Switch the pet to active-lost status to trigger the guided recovery sequence.',
  },
  {
    title: 'Network notified',
    text: 'Relevant responders, organizations, and support pathways are notified based on region and readiness.',
  },
  {
    title: 'Verified reunification',
    text: 'Case resolution is logged with identity and custody continuity so closure is clear and documented.',
  },
];

const immediateGuidance = [];

const faqs = [
  {
    question: 'Is RescueNet360 available nationwide?',
    answer:
      'RescueNet360 is currently in phased pilot mode, with regional rollout based on partner readiness and coordinated onboarding capacity.',
  },
  {
    question: 'Does this replace existing shelter software?',
    answer:
      'No. RescueNet360 is a coordination layer that connects workflows across existing systems to improve visibility, handoffs, and response speed.',
  },
  {
    question: 'Is this free for pet families?',
    answer:
      'Yes. Core services are free forever for pet families, shelters, rescues, fosters, and related coordination participants. RescueNet360 does not charge for core reunification and life-saving workflows, does not run ads in core workflows, and does not sell personal or identifiable data.',
  },
  {
    question: 'What does pilot mode mean?',
    answer:
      'Pilot mode means rollout is phased by region and readiness. It affects access timing and feature progression, not the free-forever commitment for core reunification and life-saving coordination services.',
  },
];

export const HomePage = () => {
  return (
    <>
      <PageHero
        eyebrow="Pet Reunification + Coordination Network"
        title="The missing layer in animal welfare. Built."
        description="A shared identity layer for every pet, every shelter, every transition. Free for shelters. Free for rescues. Free forever."
        valueLock="Every shelter, rescue, foster, and vet works from the same record. One pet. One identity. No gaps, no lost history, no avoidable death."
        backgroundImage="/images/hero/hero-background.jpg"
        ctas={[
          { label: 'I Need Help Finding My Pet', to: '/for-pet-families' },
          { label: 'Get Free Access →', to: '/for-shelters-rescues', variant: 'soft' },
        ]}
      />

      <div className="bg-[#091628] text-[#c5d5ea] py-3 text-center text-sm">
        <p className="trust-bar">✓ Live platform &nbsp;|&nbsp; ✓ 74 patent claims filed &nbsp;|&nbsp; ✓ Public Benefit Corporation &nbsp;|&nbsp; ✓ Free forever for shelters</p>
      </div>

      <section className="bg-white py-8 border-b border-[#d7e4f5]">
        <div className="wrap text-center">
          <div className="stat-row grid gap-4 md:grid-cols-3">
            <div><strong className="block text-3xl font-extrabold text-[#057a6f]">920,000</strong><span className="text-sm text-[#334155]">pets euthanized annually — 30% are lost pets</span></div>
            <div><strong className="block text-3xl font-extrabold text-[#057a6f]">6–7M</strong><span className="text-sm text-[#334155]">animals enter shelters each year</span></div>
            <div><strong className="block text-3xl font-extrabold text-[#057a6f]">$3.5B</strong><span className="text-sm text-[#334155]">spent annually with no shared infrastructure</span></div>
          </div>
        </div>
      </section>

      <section className="page-section bg-white text-[#0f172a]">
        <div className="wrap">
          <p className="kicker kicker-on-light">Primary Entry Doors</p>
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
            Start in the right place in one click
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#334155]">
            The launch path is intentionally split into two clear entry doors so urgent pet-family actions and operational organization workflows do not compete for attention.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {primaryEntryDoors.map((door) => (
              <article key={door.title} className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-6">
                <h3 className="font-display text-2xl font-bold text-[#0f172a]">{door.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{door.text}</p>
                <Link to={door.to} className="mt-5 inline-flex text-sm font-semibold text-teal hover:text-[#0f172a]">
                  {door.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#ffffff] text-[#0f172a]">
        <div className="wrap">
          <div className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-6 md:p-8">
            <p className="kicker kicker-on-light">For Pet Families</p>
            <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
              Lost pet right now? Start here.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#334155]">
              RescueNet360 gives families a clear emergency path: create identity, trigger loss status, notify the network, and close the case with verified reunification. Core reunification workflows are free forever.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#475569]">
              Privacy and safety are built in: core workflows do not include ad targeting, and personal or identifiable data is not sold.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {lostPetNowSteps.map((step) => (
                <article key={step.title} className="surface-card border border-[#d7e4f5] bg-white p-5">
                  <h3 className="font-display text-xl font-bold text-[#0f172a]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#334155]">{step.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 surface-card border border-[#c9d8eb] bg-[#f8fbff] p-5">
              <h3 className="font-display text-2xl font-bold text-[#0f172a]">After Reunification</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                Outcome recorded. Record stays in the national directory.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/for-pet-families" className="btn-primary">
                Explore Family Features
              </Link>
              <Link to="/contact?type=individual_pet_parent" className="btn-secondary">
                Join Pilot Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <p className="kicker kicker-on-light">The Problem</p>
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
            High effort. Low coordination. Avoidable loss.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#334155]">
            Animal welfare organizations are working relentlessly, but fragmented tools force life-and-death decisions without a complete picture of available space, transport, foster capacity, and partner readiness.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problemStats.map((item) => (
              <article key={item.label} className="surface-card border border-[#d7e4f5] bg-white p-5">
                <p className="font-display text-3xl font-extrabold text-[#057a6f]">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#ffffff] text-[#0f172a]">
        <div className="wrap grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="kicker kicker-on-light">The Vision</p>
            <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
              A shared infrastructure layer built for coordinated action
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155]">
              RescueNet360 is designed to unify identity, capacity, and logistics into one real-time operating picture. Teams stop guessing and start coordinating.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="pill">AI-assisted identity and reunification support</div>
              <div className="pill">Real-time collaboration across shelters and regions</div>
              <div className="pill">Transport and foster coordination that adapts under pressure</div>
              <div className="pill">Reporting that surfaces outcomes, bottlenecks, and impact</div>
            </div>
          </div>

          <div className="grid gap-4">
            <aside className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-6">
              <h3 className="font-display text-2xl font-extrabold text-[#0c1b2d]">Technical Architecture Snapshot</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[#1f2937]">
                <li>National directory and identity layer for cross-organization continuity.</li>
                <li>Operational command surfaces for intake, transfers, and foster readiness.</li>
                <li>Regional coordination views for disasters, surge events, and mutual aid.</li>
                <li>Measurement framework for sponsor reporting and strategic planning.</li>
              </ul>
            </aside>

            <div className="surface-card overflow-hidden border border-[#d7e4f5]">
              <img
                src="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a3c7af3d8b2b517eb8c84_Untitled%20design%20(67).png"
                alt="RescueNet360 platform preview"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-[#091628]">
        <div className="wrap">
          <p className="kicker">ECOSYSTEM MODEL</p>
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
            One persistent pet identity across every transition
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c5d5ea]">
            Pet identity is the foundation. Reunification, coordination, and reporting are outcomes of that shared, persistent record across every custody transition.
          </p>

          <div className="mt-8 mx-auto max-w-5xl">
            <article className="mx-auto w-full max-w-xl surface-card border border-[rgba(31,199,182,0.6)] bg-[linear-gradient(145deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.07)_100%)] p-6 shadow-[0_0_0_1px_rgba(31,199,182,0.25),0_16px_40px_rgba(6,17,32,0.45)] md:p-8">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl font-extrabold text-white">&#x1F43E; Pet Identity</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#d2deef]">
                Persistent digital identity that remains constant across custody changes.
              </p>
            </article>

            <div className="pointer-events-none mx-auto my-4 hidden h-8 w-px border-l border-dashed border-white/30 md:block" />

            <div className="mt-4 grid gap-3 md:mt-0 md:grid-cols-2 xl:grid-cols-3">
              {ecosystemRoles.map((item) => (
                <article key={item.label} className="surface-card border border-white/15 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs font-bold text-white">
                      {item.icon}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">{item.label}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#c5d5ea]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-[#0a1625]">
        <div className="wrap">
          <p className="kicker">Who It Is For</p>
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
            Choose the path that matches your role
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {audiencePaths.map((path) => (
              <article key={path.title} className="surface-card border border-white/15 bg-white/5 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{path.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c5d5ea]">{path.text}</p>
                <Link to={path.to} className="mt-5 inline-flex text-sm font-semibold text-teal hover:text-white">
                  Explore this path
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white text-[#0f172a]">
        <div className="wrap">
          <p className="kicker kicker-on-light">Frequently Asked Questions</p>
          <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="surface-card border border-[#d7e4f5] bg-[var(--soft-surface)] p-5">
                <summary className="cursor-pointer list-none text-left font-display text-xl font-bold text-[#0f172a]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <p className="kicker kicker-on-light">Next Step</p>
            <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
              Join the launch wave and help shape the network
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155]">
              This is the final call to action from every audience path: join the waitlist, apply as a pilot partner, or request an investor brief. Structured demand signals accelerate deployment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact?type=shelter_rescue" className="btn-primary">
                Apply as Pilot Partner
              </Link>
              <Link to="/contact?type=investor" className="btn-secondary">
                Request Investor Brief
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-extrabold text-[#0c1b2d]">Join Waitlist</h3>
            <p className="mt-2 text-sm text-[#475569]">
              We use this structured funnel to route each inquiry to the right team quickly.
            </p>
            <QuickSignalForm />
          </div>
        </div>
      </section>
    </>
  );
};

