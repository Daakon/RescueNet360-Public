/**
 * InfoCard enforces identical padding, border radius, and shadow.
 */
export const InfoCard = ({
  title,
  description,
  icon,
  accentClass = 'text-text-primary',
  className = '',
  footer
}) => {
  return (
    <article className={`card card-comfortable card-hover flex flex-col h-full ${className}`}>
      {icon && (
        <div className={`mb-6 flex-shrink-0 ${accentClass}`}>
          {icon}
        </div>
      )}
      <h3 className={`font-display text-xl font-bold mb-3 ${accentClass}`}>
        {title}
      </h3>
      {/* Description should be 1-2 lines max, handled by content length or line-clamp */}
      <p className="text-sm leading-relaxed text-text-secondary flex-grow line-clamp-2">
        {description}
      </p>
      {footer && (
        <div className="mt-6 pt-6 border-t border-separator">
          {footer}
        </div>
      )}
    </article>
  );
};
