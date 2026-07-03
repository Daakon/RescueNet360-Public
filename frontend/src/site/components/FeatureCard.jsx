
/**
 * FeatureCard component for representing problem items or capabilities.
 */
export const FeatureCard = ({
  icon,
  title,
  description,
  colorEmphasis = 'brand-primary', // 'brand-primary' | 'brand-accent' | 'slate'
  layout = 'vertical', // 'vertical' | 'horizontal'
  timelineStep = null,
  className = ''
}) => {
  
  let iconBgClass = 'bg-surface-muted text-text-muted';
  if (colorEmphasis === 'brand-primary' || colorEmphasis === 'primary') {
    iconBgClass = 'bg-primary/10 text-primary';
  } else if (colorEmphasis === 'brand-accent') {
    iconBgClass = 'bg-secondary/10 text-secondary';
  }

  const baseContainer = 'card card-comfortable hover:scale-[1.01] transition-transform duration-standard ease-out';
  const flexLayout = layout === 'horizontal' ? 'flex items-start gap-4 text-left' : 'flex flex-col items-start text-left';

  return (
    <div className={`${baseContainer} ${flexLayout} ${className} relative`}>
      {timelineStep && (
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-text-primary text-text-inverse font-bold flex items-center justify-center shadow-soft">
          {timelineStep}
        </div>
      )}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0 ${iconBgClass}`}>
        {icon ? icon : (
          // Default placeholder icon if none provided
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        )}
      </div>
      <div>
        <h4 className="font-bold text-text-primary mb-2 text-lg leading-tight">{title}</h4>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
