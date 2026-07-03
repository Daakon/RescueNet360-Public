import { ActionCTA } from './ActionCTA';

/**
 * AudienceCard component for audience segmentation.
 */
export const AudienceCard = ({
  imageSrc,
  audienceType,
  benefits = [],
  ctaIntent = 'explore',
  emphasis = 'standard', // 'standard' | 'highlighted'
  className = ''
}) => {
  const isHighlighted = emphasis === 'highlighted';
  const baseClasses = 'group card hover:scale-[1.01] flex flex-col overflow-hidden transition-transform duration-standard ease-out';
  const bgClass = isHighlighted ? 'bg-text-primary text-text-inverse' : 'bg-surface-elevated text-text-primary border-none';
  
  return (
    <div className={`${baseClasses} ${bgClass} ${className}`}>
      {/* Image container with fixed aspect ratio to prevent CLS */}
      <div className="relative w-full aspect-[4/3] bg-surface-muted overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={audienceType} 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-surface flex items-center justify-center text-text-muted">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display font-extrabold text-2xl text-white">{audienceType}</h3>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <ul className="space-y-3 mb-8 flex-grow">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start">
              <svg className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${isHighlighted ? 'text-secondary' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={`text-sm ${isHighlighted ? 'text-text-muted' : 'text-text-secondary'}`}>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <ActionCTA 
            role="shelter" 
            intent={ctaIntent} 
            label={ctaIntent === 'apply' ? 'Apply Now \u2192' : 'Explore Features \u2192'} 
            variant={isHighlighted ? 'primary' : 'ghost'} 
            sourceSection="audience"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
