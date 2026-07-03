import { Helmet } from 'react-helmet-async';
import { SectionWrapper, Container, ContentGrid } from '../components/LayoutWrappers';

export const PetOwnersPage = () => {
  return (
    <div className="bg-surface w-full min-h-screen">
      <Helmet>
        <title>Register Your Pet &amp; Report Lost or Found – RescueNet360</title>
        <meta name="description" content="Create your pet's permanent digital profile. Register, report lost or found pets, and get matched with shelters and rescues that can help bring them home." />
      </Helmet>

      {/* Section 1 — Hero */}
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator" border={false}>
        <Container size="narrow">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
            FOR PET OWNERS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            Protect Your Pet Before They Go Missing
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            Create your pet&apos;s permanent digital identity. Photos, records, microchip information, emergency contacts. If they ever go missing, the right information is already in the hands of the people who can help.
          </p>
          <div className="flex justify-center">
            <a href="https://app.rescuenet360.com/register" className="btn btn-primary min-h-[56px] px-10 text-lg flex items-center justify-center font-bold shadow-elevated hover:scale-105 transition-transform">
              Get Started →
            </a>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 2 — Feature Cards */}
      <SectionWrapper background="surface" className="py-20 border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              How RescueNet360 Works For You
            </h2>
            <p className="text-text-secondary text-lg">
              Comprehensive tools designed to safeguard your pets every day of their lives.
            </p>
          </div>

          <ContentGrid columns={4} className="max-w-6xl mx-auto">
            <div className="card card-comfortable bg-white border border-slate-200 hover:border-secondary/50 transition-all shadow-sm hover:shadow-md flex flex-col p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 p-2">
                <img src="/images/icons/RescueNetIcons-Color-01.svg" alt="Register Pet" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Register Your Pet</h3>
              <p className="text-sm text-text-muted leading-relaxed mt-auto">
                Create a pet profile with photos, identifying details, ownership information, emergency contacts, and QR and share tools.
              </p>
            </div>

            <div className="card card-comfortable bg-white border border-slate-200 hover:border-secondary/50 transition-all shadow-sm hover:shadow-md flex flex-col p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 p-2">
                <img src="/images/icons/RescueNetIcons-Color-02.svg" alt="Report Lost or Found" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Report Lost or Found Pets</h3>
              <p className="text-sm text-text-muted leading-relaxed mt-auto">
                Quickly submit lost or found pet reports and get your information in front of the shelters and rescues who need to see it.
              </p>
            </div>

            <div className="card card-comfortable bg-white border border-slate-200 hover:border-secondary/50 transition-all shadow-sm hover:shadow-md flex flex-col p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 p-2">
                <img src="/images/icons/RescueNetIcons-Color-03.svg" alt="Review Matches" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Review Possible Matches</h3>
              <p className="text-sm text-text-muted leading-relaxed mt-auto">
                RescueNet360 surfaces confidence-scored matches between lost and found pets to support faster, more accurate reunification.
              </p>
            </div>

            <div className="card card-comfortable bg-white border border-slate-200 hover:border-secondary/50 transition-all shadow-sm hover:shadow-md flex flex-col p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 p-2">
                <img src="/images/icons/RescueNetIcons-Color-04.svg" alt="Coordinated Reunification" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Coordinated Reunification</h3>
              <p className="text-sm text-text-muted leading-relaxed mt-auto">
                When your pet goes missing, RescueNet360 surfaces your registration data to connected shelters, rescues, and community members so the network works for you automatically.
              </p>
            </div>
          </ContentGrid>
        </Container>
      </SectionWrapper>

      {/* Section 3 — CTA */}
      <SectionWrapper background="surface-muted" className="py-20 text-center">
        <Container size="narrow">
          <div className="dark bg-bg text-text-primary p-10 md:p-14 rounded-3xl shadow-xl border border-separator">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Protect your pet starting today
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto font-medium">
              Don&apos;t wait until an emergency happens. Ensure your pet&apos;s records are active in the national recovery network.
            </p>
            <div className="flex justify-center">
              <a href="https://app.rescuenet360.com/register" className="btn btn-primary min-h-[56px] px-12 text-lg font-bold shadow-lg hover:scale-105 transition-transform">
                Get Started
              </a>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
