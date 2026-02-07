import './Typography.css';

export const Heading = ({ level = 1, children, className = '', ...props }) => {
  const Tag = `h${level}`;
  const sizeClass = level === 1 ? 'xl' : level === 2 ? 'lg' : 'md';

  return (
    <Tag className={`heading heading--${sizeClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export const Text = ({ children, size = 'base', className = '', ...props }) => {
  return (
    <p className={`text text--${size} ${className}`} {...props}>
      {children}
    </p>
  );
};
