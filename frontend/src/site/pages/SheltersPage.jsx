import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';
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
      <Helmet>
        <title>Shelter & Rescue Management Software – RescueNet360</title>
        <meta name="description" content="Stop managing animal welfare across spreadsheets and disconnected systems. RescueNet360 connects intake, foster, transport, and reunification in one place." />
      </Helmet>

      {/* Section 1 — Hero */}
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator relative overflow-hidden" border={false}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(13,148,136,0.1),_transparent_60%)] pointer-events-none" />
        <Container className="relative z-10 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill shadow-sm">
            BUILT FOR ANIMAL WELFARE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            The Connected System Built for <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">Animal Shelters and Rescues</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            Track animals. Coordinate care. Reunite pets faster. <span className="text-secondary font-bold">All in one place.</span> RescueNet360 connects animal records, intake workflows, foster coordination, transport, and reunification into a single operational system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#apply" className="btn btn-primary min-h-[56px] px-8 text-lg flex items-center justify-center font-bold shadow-elevated hover:scale-105 transition-transform">
              Apply to Be a Pilot Partner →
            </a>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 2 — Problem Statement */}
      <SectionWrapper background="surface" className="py-20 border-b border-separator">
        <Container>
          <div className="w-full">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-extrabold uppercase tracking-wider bg-primary-soft/40 text-primary rounded-pill">
                THE CHALLENGE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                Animal welfare shouldn&apos;t be this fragmented
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Most shelters and rescues are managing critical work across a mix of spreadsheets, emails, paper notes, separate software, and individual memory. That means:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Records Are Scattered', desc: 'Duplicated work and slow handoffs between teams.' },
                { title: 'Coordination Is Hard', desc: 'Limited visibility across partner organizations.' },
                { title: 'Lost Pets Are Hard to Match', desc: 'Missed reunification windows that could have been caught.' },
                { title: 'Decisions Get Delayed', desc: 'Harder decisions made with incomplete information.' },
                { title: 'Staff Time Drained', desc: 'Staff time spent chasing data instead of helping animals.' },
                { title: 'Vulnerable Institutional Knowledge', desc: 'Knowledge lives in one person\'s head and leaves when they do.' }
              ].map((point, i) => (
                <div key={i} className="card card-comfortable bg-surface-elevated border border-separator flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 p-2">
                    <img src={`/images/icons/RescueNetIcons-Color-0${i + 1}.svg`} alt={point.title} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-base mb-1">{point.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 3 — What RescueNet360 Does */}
      <SectionWrapper background="surface-muted" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-extrabold uppercase tracking-wider bg-primary-soft/40 text-primary rounded-pill">
              WHAT YOU CAN DO
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              One Platform. One Shared Source of Truth.
            </h2>
            <p className="text-text-secondary text-lg">
              When your systems are connected, your team stops fighting the data and starts making better decisions for animals. Manage the full lifecycle of every animal in one place:
            </p>
          </div>

          <ContentGrid columns={4} className="max-w-6xl mx-auto">
            {[
              { title: 'Track Every Animal', desc: 'From intake to adoption, keep a complete, real-time record.' },
              { title: 'Persistent Pet Identity', desc: 'Rich records with photos, documents, and verified medical history.' },
              { title: 'Match Lost & Found Faster', desc: 'Automated confidence-scored reunification matching alerts.' },
              { title: 'Manage Fosters & Transports', desc: 'Coordinate placements and movements across teams with ease.' },
              { title: 'Keep Records Organized', desc: 'Access verified medical and ownership history when you need it.' },
              { title: 'Public Profiles & Adoptions', desc: 'Showcase pets and accept digital adoption applications.' },
              { title: 'Coordinate Across Teams', desc: 'Stay aligned with partners, volunteers, and staff seamlessly.' },
              { title: 'Reduce Manual Work', desc: 'Eliminate duplicate data entry and save valuable operational time.' },
            ].map((item, idx) => (
              <div key={idx} className="card card-comfortable bg-surface-elevated border border-separator hover:border-primary transition-all shadow-card">
                <div className="w-10 h-10 rounded-pill bg-primary-soft/50 text-primary flex items-center justify-center font-extrabold mb-4 text-lg">
                  ✦
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </ContentGrid>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Pilot Section (Shape the Standard) */}
      <SectionWrapper background="surface" className="py-20 border-t border-separator">
        <Container>
          <div className="bg-primary-deep rounded-xl p-8 md:p-14 text-white shadow-elevated border border-primary/30 max-w-5xl mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-extrabold uppercase tracking-wider bg-secondary text-white rounded-pill">
                PILOT PROGRAM
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 text-white">
                Help Shape the Future of Animal Welfare
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                RescueNet360 is inviting shelters and rescue organizations to join our pilot program and be part of something bigger. Test real workflows, share honest feedback, and help us prioritize what matters most.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                We are not asking you to replace everything overnight. We are asking you to test what exists, tell us what works, and help build something that actually fits the way your team operates.
              </p>
              
              <div className="space-y-6 pt-6 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-3 bg-black/20 p-4 rounded-lg border border-white/10">
                    <span className="text-secondary font-extrabold text-xl">✓</span> Free Early Access during development
                  </div>
                  <div className="flex items-center gap-3 bg-black/20 p-4 rounded-lg border border-white/10">
                    <span className="text-secondary font-extrabold text-xl">✓</span> Test in Real Workflows with direct support
                  </div>
                  <div className="flex items-center gap-3 bg-black/20 p-4 rounded-lg border border-white/10">
                    <span className="text-secondary font-extrabold text-xl">✓</span> Provide Feedback that shapes development
                  </div>
                  <div className="flex items-center gap-3 bg-black/20 p-4 rounded-lg border border-white/10">
                    <span className="text-secondary font-extrabold text-xl">✓</span> Be a Founding Partner in the connected network
                  </div>
                </div>

                <div className="pt-2">
                  <a href="#apply" className="btn btn-secondary text-lg px-8 py-4 font-extrabold shadow-elevated hover:scale-105 transition-transform inline-flex items-center gap-2">
                    Apply to Be a Pilot Partner →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 5 — Application Form */}
      <SectionWrapper id="apply" background="surface-muted" className="py-20">
        <Container size="narrow">
          <div className="card card-comfortable bg-surface-elevated p-8 md:p-12 rounded-xl border border-separator shadow-elevated">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-extrabold uppercase tracking-wider bg-primary-soft/40 text-primary rounded-pill">
                READY TO BE PART OF IT?
              </span>
              <h2 className="font-display text-3xl font-extrabold text-text-primary mb-2">
                Apply for Pilot Access
              </h2>
              <p className="text-text-secondary">
                Join the pilot program and help build a better future for animals. Tell us about your organization below.
              </p>
            </div>

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
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 6 — Reassurance Strip */}
      <SectionWrapper background="surface" className="py-12 border-t border-separator bg-bg-subtle text-center">
        <Container size="narrow">
          <p className="text-text-secondary text-sm md:text-base font-medium leading-relaxed">
            No cost to participate. No obligation beyond honest feedback. RescueNet360 is free for shelters and rescues during pilot and beyond. The platform&apos;s funding model is built on sponsorships, not shelter budgets.
          </p>
        </Container>
      </SectionWrapper>
    </div>
  );
};

