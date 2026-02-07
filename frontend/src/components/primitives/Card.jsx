import './Card.css';

export const Card = ({ children, variant = 'glass', className = '', ...props }) => {
  return (
    <div className={`card card--${variant} ${className}`} {...props}>
      {children}
    </div>
  );
};
