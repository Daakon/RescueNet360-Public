import { ContactForm } from '../components/ContactForm';
import { PageHero } from '../components/PageHero';

const inboundNotes = [
  'Visitor-type segmentation routes requests to the correct audience path.',
  'Structured fields improve conversion clarity and reduce follow-up delays.',
  'All submissions feed the same intake system with role-specific context.',
];

export const ContactPage = () => {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Contact"
        title="Structured inbound funnel for every audience"
        description="Select your path and provide context once. We use this intake flow to route inquiries to the right team quickly and professionally."
        backgroundImage="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a321850d6faa7ecbadd29_Screenshot%202025-10-19%20214915.png"
      />

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-[#0c1b2d] md:text-4xl">
              Submit your inquiry
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155]">
              Form fields adapt to your audience type: Shelter/Rescue, Sponsor, Investor, Grant Funder, or Pet Parent/Individual.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="surface-card h-fit border border-[#d7e4f5] bg-white p-6">
            <p className="kicker kicker-on-light">Why this structure</p>
            <h3 className="font-display text-2xl font-extrabold text-[#0c1b2d]">Built for professionalism and clarity</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[#334155]">
              {inboundNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};
