export const SectionIntro = ({ eyebrow, title, description, onDark = false, className = '' }) => {
  const titleColor = onDark ? 'text-white' : 'text-[#0c1b2d]';
  const descriptionColor = onDark ? 'text-[#c5d5ea]' : 'text-[#334155]';
  const kickerClass = onDark ? 'kicker' : 'kicker kicker-on-light';

  return (
    <div className={className}>
      {eyebrow && <p className={kickerClass}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl font-extrabold md:text-4xl ${titleColor}`}>{title}</h2>
      {description && <p className={`mt-4 max-w-3xl text-base leading-relaxed ${descriptionColor}`}>{description}</p>}
    </div>
  );
};
