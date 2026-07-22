import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { SectionWrapper, Container } from '../components/LayoutWrappers';
import { submitPilotApplication } from '../../utils/api';

export const SheltersPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    orgType: 'shelter',
    challenge: '',
  });

  useEffect(() => {
    if (window.location.hash === '#apply') {
      setTimeout(() => {
        const el = document.getElementById('apply');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await submitPilotApplication({
        orgName: formData.orgName,
        contactName: formData.contactName,
        email: formData.email,
        orgType: formData.orgType,
        challenge: formData.challenge,
        source: 'pilot-application',
      });
      setFormSubmitted(true);
    } catch (err) {
      setError(err?.message || 'Something went wrong while submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface w-full min-h-screen">
      <SEO
        title="Shelter & Rescue Management Software – RescueNet360"
        description="Stop managing animal welfare across spreadsheets and disconnected systems. RescueNet360 connects intake, foster, transport, and reunification in one place — 100% free."
        path="/shelters-rescues"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "RescueNet360 for Shelters & Rescues",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "description": "Comprehensive operational software built for animal shelters, rescues, foster networks, and transport coordinators.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "100% Free for Animal Shelters and Rescues"
          },
          "url": "https://rescuenet360.com/shelters-rescues"
        }}
      />

      {/* Section 1 — Hero */}
      <SectionWrapper background="transparent" className="bg-gradient-to-br from-primary-deep via-primary to-secondary-deep text-white text-center py-20 md:py-24" border={false}>
        <Container size="narrow" className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-white/15 text-white rounded-pill">
            Shelters &amp; Rescues
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
            Animal Welfare Is Hard Enough. Your Tools Should Make the Work Easier.
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
            RescueNet360 connects animal records, intake workflows, reunification, foster coordination, and rescue visibility through one regional network. You only share what you choose to share — RescueNet360 adds the coordination layer around the tools you already use.
          </p>
          <a href="#apply" className="btn btn-secondary min-h-[52px] px-8 text-base inline-flex items-center justify-center font-bold">
            Apply for Pilot Access
          </a>
        </Container>
      </SectionWrapper>

      {/* Section 2 — Problem / Solution */}
      <SectionWrapper background="transparent" className="py-16" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3.5">The Problem</div>
              <h2 className="font-display text-2xl font-extrabold text-text-primary mb-4 leading-tight">
                You Already Know the Pressure.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Shelters and rescues work inside a system that asks too much from too few people. Records live in different places. The people care. The problem is coordination.
              </p>
              <div className="flex flex-col">
                {[
                  'Animal history gets harder to follow every time a pet moves',
                  'Staff spend time chasing records instead of moving work forward',
                  'Lost and found matches rely too much on manual searching',
                  'Rescue teams miss animals they might have helped',
                ].map((text, i, arr) => (
                  <div
                    key={text}
                    className={`flex items-start gap-3 py-3.5 border-t border-secondary/20 ${i === arr.length - 1 ? 'border-b' : ''}`}
                  >
                    <span className="text-secondary flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>
                    </span>
                    <span className="text-sm text-text-primary">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3.5">The Solution</div>
              <h2 className="font-display text-2xl font-extrabold text-text-primary mb-5 leading-tight">
                One Connected Network
              </h2>
              <div className="grid grid-cols-2 gap-3.5">
                {[
                  'Intake and animal tracking',
                  'Persistent pet identity',
                  'Lost/found and reunification',
                  'Foster placement tools',
                  'Transport workflow',
                  'Public profiles and apps',
                  'Reporting and analytics',
                  'Contacts, tasks, and docs',
                ].map((label) => (
                  <div key={label} className="bg-white rounded-xl p-4 flex items-center gap-3">
                    <span className="text-primary flex-shrink-0">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><path d="M9 12l2 2 4-4"></path></svg>
                    </span>
                    <span className="text-sm font-semibold text-text-primary">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Pilot Program */}
      <SectionWrapper background="surface" className="py-16">
        <Container size="narrow">
          <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-5">Pilot Program</div>
          <div className="border border-secondary/20 rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4 text-text-primary leading-tight">
              Shape the Standard. Help Build the Network Animal Welfare Has Always Needed.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We are inviting a small group of shelters and rescues to test real workflows, tell us what fits, and help prioritize the next build decisions. No cost. No obligation beyond honest feedback.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
              {[
                { icon: <><rect x="4" y="11" width="16" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 018 0v4"></path></>, label: 'Early platform access' },
                { icon: <><path d="M21 12a8 8 0 01-11.5 7.2L4 21l1.8-5.5A8 8 0 1121 12z"></path></>, label: 'Direct input into features' },
                { icon: <><path d="M12 17.3L6.2 21l1.6-6.6L2.5 9.7l6.7-.6L12 3l2.8 6.1 6.7.6-5.3 4.7L18 21z"></path></>, label: 'Founding Partner recognition' },
              ].map((item) => (
                <div key={item.label} className="bg-secondary-soft rounded-2xl p-6 text-center">
                  <div className="text-primary mb-2.5 flex justify-center">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                  </div>
                  <div className="font-bold text-sm text-text-primary">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              Also includes priority onboarding support and a practical way to help shape regional animal welfare infrastructure.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Application Form */}
      <SectionWrapper id="apply" background="transparent" className="py-16" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container size="narrow" className="max-w-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-elevated">
            <h2 className="font-display text-2xl font-extrabold text-text-primary mb-3">
              Ready to Join the Pilot?
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              Tell us about your organization and your biggest coordination challenge. We will review your request and follow up.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center bg-state-success-bg rounded-lg border border-state-success">
                <div className="w-16 h-16 bg-state-success text-white rounded-pill flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold">✓</div>
                <h3 className="text-2xl font-bold text-state-success-text mb-2">Application Received!</h3>
                <p className="text-state-success-text font-medium">Thank you for applying to be a founding pilot partner. Our team will review your organization&apos;s details and reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-state-danger-bg text-state-danger-text rounded-lg border border-state-danger text-sm font-bold">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="orgName" className="block text-sm font-bold text-text-primary mb-2">Organization Name *</label>
                  <input 
                    id="orgName"
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-separator-strong focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-surface text-text-primary"
                    placeholder="e.g. Hope Valley Animal Rescue"
                    value={formData.orgName}
                    onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-bold text-text-primary mb-2">Contact Name *</label>
                    <input 
                      id="contactName"
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-separator-strong focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-surface text-text-primary"
                      placeholder="Jane Doe"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-2">Email Address *</label>
                    <input 
                      id="email"
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-separator-strong focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-surface text-text-primary"
                      placeholder="jane@hopevalley.org"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="orgType" className="block text-sm font-bold text-text-primary mb-2">Organization Type *</label>
                  <select 
                    id="orgType"
                    className="w-full px-4 py-3 rounded-lg border border-separator-strong focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-surface text-text-primary"
                    value={formData.orgType}
                    onChange={(e) => setFormData({...formData, orgType: e.target.value})}
                  >
                    <option value="shelter">Shelter</option>
                    <option value="rescue">Rescue</option>
                    <option value="foster-based rescue">Foster-based rescue</option>
                    <option value="transport org">Transport org</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-bold text-text-primary mb-2">Tell us about your current setup or biggest challenge *</label>
                  <textarea 
                    id="challenge"
                    required 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-separator-strong focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-surface text-text-primary resize-none"
                    placeholder="What software do you currently use? What causes the most operational friction for your team?"
                    value={formData.challenge}
                    onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-4 text-lg font-extrabold shadow-elevated hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Apply to Be a Pilot Partner →'}
                </button>
              </form>
            )}
            <p className="mt-6 bg-secondary-soft rounded-xl p-4 text-center text-sm text-secondary leading-relaxed">
              No cost to participate. Rescues receive free access. RescueNet360&apos;s funding model is built on sponsorships, not shelter budgets.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

