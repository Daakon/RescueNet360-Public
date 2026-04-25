export const InfoCard = ({ title, text, tone = 'light', className = '', children }) => {
  const isDark = tone === 'dark';
  const cardClass = isDark
    ? 'border border-white/15 bg-white/5'
    : 'border border-[#d7e4f5] bg-white';
  const titleClass = isDark ? 'text-white' : 'text-[#0f172a]';
  const textClass = isDark ? 'text-[#c5d5ea]' : 'text-[#334155]';

  return (
    <article className={`surface-card p-6 ${cardClass} ${className}`}>
      <h3 className={`font-display text-2xl font-bold ${titleClass}`}>{title}</h3>
      {text && <p className={`mt-3 text-sm leading-relaxed ${textClass}`}>{text}</p>}
      {children}
    </article>
  );
};
