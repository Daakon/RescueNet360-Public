import { SEO } from '../components/SEO';
import { SectionWrapper, Container } from '../components/LayoutWrappers';

const WHY_CARDS = [
  {
    title: 'The coordination layer animal welfare has needed',
    description:
      'Most shelter and rescue systems were built to manage work inside one organization. Animal welfare does not stay inside one organization. RescueNet360 works alongside existing tools as the coordination layer between people, organizations, and animal records.',
  },
  {
    title: 'The scale of the problem demands better coordination',
    description:
      'Millions of animals enter U.S. shelters each year. Many more are reported lost, found, transferred, fostered, transported, adopted, or reclaimed. Every one of those moments depends on information moving quickly. RescueNet360 was built to help animal welfare teams coordinate at the speed the work requires.',
  },
];

const TEAM = [
  {
    initials: 'MH',
    name: 'Misty Harrison',
    title: 'Founder and CEO',
    bio: 'Leads product vision, business architecture, and sponsor model development. Nearly two decades of operational and technical experience. Her focus: make animal welfare coordination easier, faster, and more connected.',
  },
  {
    initials: 'EL',
    name: 'Ed Lent',
    title: 'Co-Founder and CTO',
    bio: 'Built the production platform while maintaining his full-time career. 30 years of full-stack experience across government, healthcare, financial services, and e-commerce. Believes better systems create better outcomes for animals.',
  },
  {
    initials: 'ML',
    name: 'Melanie Lent',
    title: 'Head of Marketing and Growth',
    bio: 'Supports marketing direction, growth, website execution, content coordination, and partner-facing communication. Turns the RescueNet360 vision into clear public messaging.',
  },
];

export const AboutPage = () => {
  return (
    <div className="bg-surface w-full min-h-screen">
      <SEO
        title="About RescueNet360 – Why We Built This"
        description="RescueNet360 was built to make the connections between animal welfare organizations visible. Learn about the mission, the founder story, and the team."
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About RescueNet360",
          "description": "Learn why we built the national pet identity infrastructure and operational operating system for animal shelters and rescues.",
          "url": "https://rescuenet360.com/about",
          "mainEntity": { "@id": "https://rescuenet360.com/#organization" }
        }}
      />

      {/* Section 1 — Intro */}
      <SectionWrapper background="surface" className="py-20 border-b border-separator">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
                About
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6 leading-tight">
                Why RescueNet360 Exists
              </h1>
              <div className="space-y-4 text-text-secondary text-[15.5px] leading-relaxed">
                <p>
                  Every day, animal welfare teams work to save lives with limited time, limited space, and limited visibility. The people who want to help often exist. The information they need does not always reach them in time.
                </p>
                <p>
                  A lost pet report might never connect with the shelter holding that pet. A rescue might never see an urgent animal one county over. A foster coordinator might spend hours matching pets to homes when the right family is already in the network.
                </p>
                <p className="font-bold text-text-primary">
                  RescueNet360 exists to make those connections visible.
                </p>
              </div>
            </div>
            <div className="h-56 rounded-2xl bg-secondary-soft flex items-center justify-center text-primary">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.4-9.5 9-9.5 9z"></path></svg>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 2 — Why Cards */}
      <SectionWrapper background="surface" className="py-20 border-b border-separator">
        <Container size="narrow">
          <div className="flex flex-col gap-5">
            {WHY_CARDS.map((card) => (
              <div key={card.title} className="border border-secondary/20 rounded-2xl p-8">
                <h3 className="font-display text-lg font-extrabold text-text-primary mb-2.5">
                  {card.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Founder Story */}
      <SectionWrapper background="transparent" className="py-20" style={{ backgroundColor: 'rgb(var(--color-secondary-soft))' }}>
        <Container size="narrow">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Founder Story</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-6">
            Why Misty Started RescueNet360
          </h2>
          <div className="bg-white border-l-[5px] border-primary rounded-r-2xl p-8 md:p-11 space-y-4 text-text-primary text-[15px] leading-loose">
            <p>
              I kept seeing missing dog posts online. Most looked like digital flyers, shared over and over by families who were scared, tired, and hoping someone had seen their pet. One story stayed with me.
            </p>
            <p>
              An elderly dog went missing. Her owner searched relentlessly. I offered to help go door to door. She gently declined. When I asked if I could share her story to help others, she said no. She said sharing it would make it feel final. That moment changed how I saw the problem.
            </p>
            <p>
              Lost pets are not only a neighborhood problem. They are an information problem. Shelters, rescues, pet owners, and community members all care, but they are often working from different places with different pieces of the story.
            </p>
            <p>
              I built RescueNet360 because pets deserve a better chance, families deserve faster answers, and animal welfare teams deserve infrastructure that supports the work they are already doing.
            </p>
            <p className="font-bold text-primary pt-1">— Misty Harrison, Founder and CEO, RescueNet360</p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Team */}
      <SectionWrapper background="surface" className="py-20 border-t border-separator">
        <Container>
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3 block">The Team</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-8">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="border border-secondary/20 rounded-2xl p-8">
                <div className="w-[52px] h-[52px] rounded-full bg-secondary-soft text-primary flex items-center justify-center font-display font-extrabold text-sm mb-5">
                  {member.initials}
                </div>
                <h3 className="font-display font-extrabold text-lg text-text-primary mb-1">{member.name}</h3>
                <div className="font-bold text-sm text-secondary mb-3">{member.title}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
