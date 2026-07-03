
export const SectionWrapper = ({
  id,
  className = '',
  children,
  density = 'standard', // 'standard' | 'compact'
  background = 'surface', // 'surface' | 'elevated' | 'interactive' | 'dark' | 'brand' | 'transparent'
  border = false,
}) => {
  const paddingClass = density === 'compact' ? 'section-compact' : 'section-comfortable';
  
  let bgClass = 'bg-surface';
  if (background === 'elevated') bgClass = 'bg-surface-elevated';
  if (background === 'interactive') bgClass = 'bg-surface-muted';
  if (background === 'dark') bgClass = 'bg-bg text-text-primary';
  if (background === 'brand') bgClass = 'bg-primary';
  if (background === 'transparent') bgClass = 'bg-transparent';

  // Emphasize elevation instead of borders per the design system
  const borderClass = border ? 'shadow-soft z-10 relative' : '';
  const darkContextClass = background === 'dark' ? 'dark' : '';

  return (
    <section 
      id={id}
      className={`${paddingClass} ${bgClass} ${borderClass} ${darkContextClass} transition-colors duration-standard ${className}`}
    >
      {children}
    </section>
  );
};

export const Container = ({
  className = '',
  children,
  size = 'default' // 'default' | 'narrow'
}) => {
  const cleanClassName = className.replace(/max-w-[^\s]+/g, '').trim();
  const maxWidthClass = 'max-w-[1200px] w-full';
  // Standard layout paddings: mobile px-4, tablet px-6, desktop px-8
  return (
    <div className={`mx-auto ${maxWidthClass} px-4 md:px-6 lg:px-8 ${cleanClassName}`}>
      {children}
    </div>
  );
};

export const ContentGrid = ({
  className = '',
  children,
  columns = 3 // 2, 3, or 4
}) => {
  // Dynamically shift columns based on props
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-6 sm:grid-cols-1 ${columnClasses[columns] || columnClasses[3]} ${className}`}>
      {children}
    </div>
  );
};
