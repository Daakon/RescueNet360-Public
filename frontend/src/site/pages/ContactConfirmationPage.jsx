import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const ContactConfirmationPage = () => {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Contact"
        title="Thank you - your inquiry has been received."
        description="Your submission is now in our structured intake queue and routed to the appropriate team."
      />

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <article className="surface-card border border-[#d7e4f5] bg-white p-6 md:p-8">
            <h2 className="font-display text-2xl font-extrabold text-[#0c1b2d] md:text-3xl">What happens next</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#334155]">
              Expected response time: within 2 business days.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#334155]">
              Our team reviews your audience type and details, then follows up with the next step, requested material, or scheduling options relevant to your inquiry.
            </p>

            <Link to="/" className="btn-primary mt-6">
              Return to Homepage
            </Link>
          </article>
        </div>
      </section>
    </>
  );
};
