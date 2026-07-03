import { Helmet } from 'react-helmet-async';
import { SectionWrapper, Container } from '../components/LayoutWrappers';

const PRINCIPLES = [
  {
    icon: <img src="/images/icons/shield-logo.svg" alt="Shield Logo" className="w-12 h-12 object-contain" />,
    title: 'Permanently Free for Shelters & Rescues',
    description:
      'Underwritten by mission-aligned sponsors so animal welfare organizations never have to choose between software tools and saving animal lives.',
  },
  {
    icon: <img src="/images/icons/RescueNetIcons-Color-05.svg" alt="Persistent Digital Identity" className="w-12 h-12 object-contain" />,
    title: 'Persistent Digital Identity',
    description:
      'Animals maintain a single continuous record across organizations through advanced recognition and cross-system tracking, ensuring medical and custody history never resets.',
  },
  {
    icon: <img src="/images/icons/RescueNetIcons-Color-06.svg" alt="Public Benefit Structure" className="w-12 h-12 object-contain" />,
    title: 'Public Benefit Structure',
    description:
      'Structured as a Public Benefit Corporation committed to long-term mission accountability, transparent reporting, and systemic collaboration over short-term profit extraction.',
  },
];

export const AboutPage = () => {
  return (
    <div className="bg-surface w-full min-h-screen">
      <Helmet>
        <title>About RescueNet360 – Why We Built This</title>
        <meta name="description" content="RescueNet360 was built to close the gaps that cost animals their lives. Learn about the mission, the team, and the coordination problem we exist to solve." />
      </Helmet>

      {/* Hero */}
      <SectionWrapper background="surface" className="bg-gradient-to-br from-[#EAE6FF] via-surface to-bg text-text-primary text-center py-20 md:py-28 border-b border-separator" border={false}>
        <Container size="narrow">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
            OUR MISSION &amp; TEAM
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-text-primary">
            Why We Built This
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-3xl mx-auto">
            RescueNet360 was built to close the gaps that cost animals their lives.
          </p>
        </Container>
      </SectionWrapper>

      {/* Section 1 — Why This Exists */}
      <SectionWrapper background="surface" className="py-20 border-b border-separator">
        <Container size="narrow">
          <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Our Purpose</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
            Why This Exists
          </h2>
          <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
            <p>
              Every year, animals die in shelters. Not because there are not people willing to help, but because the people who could help cannot see each other. A shelter holding a found dog does not know the owner filed a lost report across town. A foster coordinator does not know transport capacity opened up. A rescue does not know a dog is two days from euthanasia at the next county.
            </p>
            <p className="font-bold text-text-primary text-xl border-l-4 border-primary pl-6 py-2 bg-surface rounded-r-xl">
              RescueNet360 was built to make those invisible connections visible. Because the gap between life and death for an animal is often just a piece of information that did not move fast enough.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 2 — The Problem We Are Solving */}
      <SectionWrapper background="surface-muted" className="py-20">
        <Container size="narrow">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary mb-2 block">The Challenge</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
            Animal Welfare Data Is Too Fragmented
          </h2>
          <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
            <p>
              Animal welfare data and workflows are spread across thousands of disconnected systems. Each organization maintains its own records. When an animal moves from one organization to another, its identity resets. Medical history fragments. Custody chains break. Reunification slows.
            </p>
            <p>
              This is not a software failure inside any single organization. The failure occurs between systems. RescueNet360 sits above existing shelter software as the horizontal coordination layer the ecosystem has never had.
            </p>
          </div>
        </Container>
      </SectionWrapper>
      <SectionWrapper background="surface" className="py-20 border-t border-separator">
        <Container size="narrow">
          <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Urgency</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
            The Need Is Measurable
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface p-6 rounded-2xl border border-separator text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">6–7 Million</div>
              <div className="text-sm font-bold text-text-primary">Animals enter U.S. shelters each year</div>
            </div>
            <div className="bg-surface p-6 rounded-2xl border border-separator text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-state-danger mb-2">~920,000</div>
              <div className="text-sm font-bold text-text-primary">Estimated euthanized annually*</div>
            </div>
          </div>
          <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
            <p>
              In many U.S. shelters, animals are euthanized purely due to lack of space or resources. A transport organization two counties away might have open seats to a low-intake rescue in another state—but without unified visibility, the connection is never made.
            </p>
            <p>
              Simultaneously, pet owners searching for lost animals rely on informal social media networks while shelters track intakes in siloed systems. By establishing persistent digital identity and centralized operational visibility, we transform animal welfare from reactive crisis management into proactive, coordinated protection.
            </p>
            <p className="text-sm text-text-muted italic pt-2">
              *Estimates based on national animal shelter reporting data from Shelter Animals Count and ASPCA industry metrics.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 3 — Core Principles */}
      <SectionWrapper background="surface-muted" className="py-20 border-t border-separator">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Foundational Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              Core Principles
            </h2>
            <p className="text-text-secondary text-lg">
              We operate differently than legacy software vendors. Our architecture and business model reflect our commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, index) => (
              <div key={index} className="card card-comfortable bg-white border border-separator shadow-sm p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="mb-6">{principle.icon}</div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 4 — Founder Story */}
      <SectionWrapper background="surface" className="py-20 bg-gradient-to-b from-surface to-bg border-t border-separator" border={false}>
        <Container size="narrow">
          <div className="w-full">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-extrabold uppercase tracking-wider bg-secondary-soft text-secondary-deep rounded-pill">
              FOUNDER STORY
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 text-text-primary">
              Why Misty Built This
            </h2>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-separator-strong space-y-6 text-text-secondary leading-relaxed italic relative shadow-elevated">
              <span className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none select-none">&ldquo;</span>
              
              <p className="relative z-10 pt-2 text-text-primary font-medium">
                I kept seeing missing dog posts on Nextdoor. Over and over, like digital lost-and-found flyers. But one stood out. An elderly dog had gone missing, and her owner posted relentlessly, day after day, searching and hoping. And I felt it. That ache. That helpless pain of not knowing.
              </p>
              <p className="relative z-10">
                I messaged the owner and offered to go door to door. I just wanted to help bring her dog home. She gently declined. I think she already knew, deep down, her pup was not coming back. When I asked if I could share her story to help others, she said no. She said, &apos;If you share it... that means she&apos;s really gone.&apos;
              </p>
              <p className="relative z-10">
                That moment changed everything. I had not even thought of it that way. I was hoping for a happy ending. But it never came. That is when something in me shifted.
              </p>
              <p className="relative z-10">
                Then came the kill lists. People sharing shelter dogs with hours left. Pleading for someone, anyone, to save them. Beautiful, adoptable animals whose only crime was running out of time in a cage. And I realized: they weren&apos;t dying because nobody cared. They were dying because the right person didn&apos;t know they were there. The information was fragmented, buried in localized shelter databases or lost in social media algorithms.
              </p>
              <p className="relative z-10">
                That is not a peaceful death. That is a system failure. I could not ignore it anymore. I am a compassionate person. A fixer. A builder. And I knew this system, this heartbreaking cycle, was something I could help change. So I started RescueNet360.
              </p>
              <p className="relative z-10">
                Because no pet should disappear without a chance. No family should wonder if they gave up too soon. And no shelter should have to choose who lives or dies because they are out of space.
              </p>

              <div className="pt-6 border-t border-separator text-right not-italic">
                <div className="font-bold text-text-primary text-lg">— Misty Harrison</div>
                <div className="text-primary text-sm font-medium">Founder of RescueNet360</div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section 5 — Leadership & Team */}
      <SectionWrapper background="surface-muted" className="py-20 border-t border-separator">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Who We Are</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              Leadership
            </h2>
            <p className="text-text-secondary text-lg">
              Experienced builders and advocates united by a passion for animal protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Misty */}
            <div className="card card-comfortable bg-white border border-separator shadow-sm flex flex-col p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl mb-6">
                MH
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-1">Misty Harrison</h3>
              <div className="text-sm font-bold text-primary mb-4">Founder and CEO</div>
              <p className="text-text-secondary text-sm leading-relaxed space-y-3 flex-grow">
                <span>
                  Misty Harrison is the Founder and CEO of RescueNet360, a Public Benefit Corporation building the coordination infrastructure animal welfare has never had. She brings 19 years of technical and operational experience spanning Microsoft, ADP, Practitioners Publishing Company, Boy Scouts of America National HQ, and AutoRealty.
                </span>
                <span className="block mt-3">
                  At RescueNet360, Misty owns product vision, brand, business architecture, and the sponsor underwriting model that keeps the platform permanently free for shelters and rescues. She originated the concept of persistent digital pet identity assigned through facial recognition, the core innovation that makes cross-organizational reunification possible at scale.
                </span>
              </p>
            </div>

            {/* Ed */}
            <div className="card card-comfortable bg-white border border-separator shadow-sm flex flex-col p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-2xl mb-6">
                ED
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-1">Ed</h3>
              <div className="text-sm font-bold text-secondary mb-4">Co-Founder and CTO</div>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                Ed is the Co-Founder and CTO of RescueNet360, and the engineer who built it. He brings 30 years of experience across the full technology stack. At RescueNet360, Ed single-handedly built the production platform in six months while maintaining his full-time career.
              </p>
            </div>

            {/* Melanie */}
            <div className="card card-comfortable bg-white border border-separator shadow-sm flex flex-col p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-surface text-text-primary flex items-center justify-center font-bold text-2xl mb-6">
                ML
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-1">Melanie</h3>
              <div className="text-sm font-bold text-text-secondary mb-4">Brand &amp; Content Strategy</div>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                Melanie leads content architecture, brand communication, and public engagement for RescueNet360, ensuring that every shelter, rescue, sponsor, and pet family experiences clear, purpose-driven support across the platform.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};
