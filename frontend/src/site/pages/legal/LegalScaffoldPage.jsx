import { PageHero } from '../../components/PageHero';

export const LegalScaffoldPage = ({
  title,
  intro,
  sections,
  eyebrow = 'Legal',
  cta = null,
  metaNote = 'This policy may be updated as RescueNet services evolve.',
}) => {
  return (
    <>
      <PageHero size="compact" eyebrow={eyebrow} title={title} description={intro} ctas={cta ? [cta] : []} />

      <section className="page-section bg-[var(--soft-surface)] text-[#0f172a]">
        <div className="wrap">
          <article className="surface-card border border-[#d7e4f5] bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#475569]">{metaNote}</p>
            <div className="mt-6 grid gap-8">
              {sections.map((section) => (
                <section key={section.title} aria-label={section.title}>
                  <h2 className="font-display text-2xl font-extrabold text-[#0c1b2d]">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm leading-relaxed text-[#334155]">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

