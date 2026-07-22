import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { SectionWrapper, Container } from '../components/LayoutWrappers';

export const ContactPage = () => {
  return (
    <div className="bg-surface w-full min-h-screen">
      <SEO
        title="Contact RescueNet360 – Pilots, Sponsors & Support"
        description="Questions about RescueNet360? Reach out about pilot partnerships, sponsorship opportunities, or platform support. We read every message and respond to every one."
        path="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact RescueNet360",
          "description": "Reach out about pilot partnerships, sponsorship opportunities, or platform support.",
          "url": "https://rescuenet360.com/contact"
        }}
      />

      {/* Hero + Routing Cards */}
      <SectionWrapper background="transparent" className="py-16" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-white border border-secondary/20 text-text-primary rounded-pill">
            Contact
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-text-primary">
            Let&apos;s Talk.
          </h1>
          <p className="text-text-secondary text-[15.5px] leading-relaxed max-w-xl mb-10">
            Have a question, idea, partnership request, or pilot inquiry? Send us a message. We read every submission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pilot Interest */}
            <div className="bg-white border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full bg-secondary-soft text-primary flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10z"></path><circle cx="12" cy="10" r="1.5"></circle></svg>
              </div>
              <h3 className="font-display text-lg font-extrabold mb-2.5 text-text-primary">Interested in joining the pilot?</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                If you represent a shelter, rescue, foster-based organization, transport group, or animal welfare partner, tell us about your organization and current coordination needs.
              </p>
              <Link to="/shelters-rescues#apply" className="font-bold text-sm text-primary hover:text-primary-deep">
                Apply for Pilot Access →
              </Link>
            </div>

            {/* Sponsor Interest */}
            <div className="bg-white border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full bg-white border border-secondary/20 text-secondary flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="3"></circle><circle cx="16" cy="8" r="3"></circle><path d="M2 20c0-3 3-5 6-5s6 2 6 5M10 20c0-3 3-5 6-5s6 2 6 5"></path></svg>
              </div>
              <h3 className="font-display text-lg font-extrabold mb-2.5 text-text-primary">Interested in sponsorship?</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Support regional animal welfare infrastructure and help bring RescueNet360 to the communities you care about.
              </p>
              <Link to="/sponsorship" className="font-bold text-sm text-secondary hover:text-secondary-deep">
                Talk to Our Sponsorship Team →
              </Link>
            </div>

            {/* Support Inquiry */}
            <div className="bg-white border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full bg-white border border-secondary/20 text-secondary flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2 1.7-2 3.3M12 17h.01"></path></svg>
              </div>
              <h3 className="font-display text-lg font-extrabold mb-2.5 text-text-primary">Need help with a pet profile or report?</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Reach out for support with pet registration, profile updates, QR codes, lost reports, found reports, or general platform questions.
              </p>
              <a href="#inquiry-form" className="font-bold text-sm text-text-primary hover:text-primary">
                Contact Support →
              </a>
            </div>

            {/* General Inquiries */}
            <div className="bg-white border border-secondary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full bg-secondary-soft text-primary flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 6l9 7 9-7"></path></svg>
              </div>
              <h3 className="font-display text-lg font-extrabold mb-2.5 text-text-primary">General inquiries</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Questions, feedback, or ideas? We read every message and respond to every one.
              </p>
              <a href="mailto:pilot@rescuenet360.com" className="font-bold text-sm text-text-primary hover:text-primary">
                pilot@rescuenet360.com →
              </a>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Main Inquiry Form Section */}
      <SectionWrapper id="inquiry-form" background="surface" className="py-16">
        <Container>
          <div className="w-full">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-3">
                Send Us a Message
              </h2>
              <p className="text-text-secondary text-[15.5px]">
                Select your role below so your message reaches the right team immediately.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-separator shadow-elevated">
              <ContactForm />
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
