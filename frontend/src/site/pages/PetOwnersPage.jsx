import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';

export const PetOwnersPage = () => {
  return (
    <div className="bg-surface w-full min-h-screen">
      <SEO
        title="Register Your Pet & Report Lost or Found – RescueNet360"
        description="Create your pet's permanent digital profile. Register, report lost or found pets, and get matched with shelters and rescues that can help bring them home."
        path="/pet-owners"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "RescueNet360 for Pet Owners & Families",
          "description": "Permanent digital identity and recovery infrastructure for pet owners. Register pets, report lost or found pets, and connect with local shelters.",
          "url": "https://rescuenet360.com/pet-owners"
        }}
      />

      {/* Section 1 — Hero */}
      <SectionWrapper background="transparent" className="bg-gradient-to-br from-primary-deep via-primary to-secondary-deep text-white text-center py-20 md:py-24" border={false}>
        <Container size="narrow" className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-white/15 text-white rounded-pill">
            Pet Owners
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
            Protect Your Pet Before They Go Missing
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-2">
            Create a free digital profile for your pet with photos, microchip details, medical notes, emergency contacts, and a shareable QR code.
          </p>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
            If your pet ever goes missing, RescueNet360 helps the right people access the right information faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.rescuenet360.com/register" className="btn btn-secondary min-h-[52px] px-8 text-base flex items-center justify-center font-bold">
              Register Your Pet Free
            </a>
            <Link to="/contact" className="btn min-h-[52px] px-8 text-base flex items-center justify-center font-bold border-2 border-white/60 text-white bg-white/10 hover:bg-white/20 transition-colors">
              Report Lost or Found
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 2 — What You Can Do */}
      <SectionWrapper background="transparent" className="py-16" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container>
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3.5">
            What You Can Do
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-8 leading-tight">
            Built to Help Pets Get Home Faster
          </h2>

          <ContentGrid columns={3} className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="8" cy="12" r="2"></circle><path d="M13 10h5M13 14h5"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Register your pet</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Create a permanent pet profile with photos, identifying details, medical notes, microchip information, emergency contacts, and a shareable QR code.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Report a lost pet</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Create a lost pet report in minutes. Add photos, last known location, contact preferences, and key details to help others recognize your pet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Report a found pet</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Found a pet? Submit a report, upload photos, and help connect that animal to existing lost reports and registered profiles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">See possible matches</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                RescueNet360 surfaces possible matches between lost and found animals using confidence levels and human review.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft flex items-center justify-center mb-4 text-primary">
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="12" r="2.5"></circle><circle cx="18" cy="6" r="2.5"></circle><circle cx="18" cy="18" r="2.5"></circle><path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6"></path></svg>
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2.5 text-text-primary">Share faster</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Pet profiles and lost reports are easier to share with shelters, rescues, neighbors, and community groups.
              </p>
            </div>
          </ContentGrid>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Owner Trust */}
      <SectionWrapper background="surface" className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3.5">Owner Trust</div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-4 leading-tight">
                Your Pet&apos;s Information Stays With Your Pet.
              </h2>
              <p className="text-text-secondary text-[15.5px] leading-relaxed mb-4">
                Microchips are helpful, but they are not the full story. Photos, markings, medical notes, emergency contacts, and recent updates also matter.
              </p>
              <p className="text-text-secondary text-[15.5px] leading-relaxed">
                RescueNet360 gives your pet a living profile that supports faster action when time matters.
              </p>
            </div>
            <div className="h-56 rounded-2xl bg-secondary-soft flex items-center justify-center text-primary">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.4-9.5 9-9.5 9z"></path></svg>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Privacy */}
      <SectionWrapper background="transparent" className="py-16" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="h-52 rounded-2xl bg-white flex items-center justify-center text-primary order-2 lg:order-1">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="11" width="16" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 018 0v4"></path></svg>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-3.5">Privacy</div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-4 leading-tight">
                Designed With Privacy in Mind
              </h2>
              <p className="text-text-secondary text-[15.5px] leading-relaxed">
                Your private contact information should not be exposed publicly to get your pet home. RescueNet360 is designed to support safe communication, controlled sharing, and better reunification without forcing owners to post personal details everywhere.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 5 — CTA */}
      <SectionWrapper background="transparent" className="py-20 text-center bg-gradient-to-br from-primary to-primary-deep" border={false}>
        <Container size="narrow">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4 text-white">
            Register Your Pet Before You Need It.
          </h2>
          <p className="text-primary-soft text-[15.5px] mb-8 max-w-xl mx-auto leading-relaxed">
            Create a free account in minutes. Be prepared before anything happens.
          </p>
          <div className="flex justify-center">
            <a href="https://app.rescuenet360.com/register" className="btn btn-secondary min-h-[52px] px-8 text-base font-bold">
              Create Free Pet Profile
            </a>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
