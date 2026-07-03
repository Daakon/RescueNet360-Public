import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { SectionWrapper, Container } from '../components/LayoutWrappers';

export const ContactPage = () => {
  return (
    <div className="bg-surface w-full min-h-screen">
      <Helmet>
        <title>Contact RescueNet360 – Pilots, Sponsors &amp; Support</title>
        <meta name="description" content="Questions about RescueNet360? Reach out about pilot partnerships, sponsorship opportunities, or platform support. We read every message and respond to every one." />
      </Helmet>

      {/* Hero / Section 1 — General Contact */}
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator" border={false}>
        <Container size="narrow">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
            GET IN TOUCH
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            How Can We Help?
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
            Questions, feedback, or ideas? We read every message and respond to every one.
          </p>
        </Container>
      </SectionWrapper>

      {/* Routing Cards (Sections 2, 3, 4) */}
      <SectionWrapper background="surface" className="py-16 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Section 2 — Pilot Interest */}
            <div className="card card-comfortable bg-white border border-slate-200 shadow-sm flex flex-col p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4 text-xl">🏥</div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Pilot Interest</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                Interested in becoming a pilot partner? We would love to learn more about your organization and workflows.
              </p>
              <Link to="/shelters-rescues#apply" className="btn btn-secondary w-full text-center mt-auto text-sm py-3 font-bold">
                Apply for Pilot Access
              </Link>
            </div>

            {/* Section 3 — Sponsor Interest */}
            <div className="card card-comfortable bg-white border border-slate-200 shadow-sm flex flex-col p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold mb-4 text-xl shadow-sm">🤝</div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Sponsor Interest</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                Interested in sponsorship opportunities? Contact us to discuss regional support and underwriting models.
              </p>
              <a href="#inquiry-form" className="btn btn-primary w-full text-center mt-auto text-sm py-3 font-bold">
                Contact Sponsorship Team
              </a>
            </div>

            {/* Section 4 — Support Inquiry */}
            <div className="card card-comfortable bg-white border border-slate-200 shadow-sm flex flex-col p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-4 text-xl">💡</div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Support Inquiry</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                Need help with a pet profile, lost and found report, or general platform question? Reach out to our support team.
              </p>
              <a href="#inquiry-form" className="btn bg-slate-100 hover:bg-slate-200 text-slate-800 w-full text-center mt-auto text-sm py-3 font-bold rounded-xl transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Main Inquiry Form Section */}
      <SectionWrapper id="inquiry-form" background="surface-muted" className="py-20">
        <Container>
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                Send Us a Message
              </h2>
              <p className="text-text-secondary text-lg">
                Select your role below so your message reaches the right team immediately.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
