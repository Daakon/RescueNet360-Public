import './Container.css';

export const Container = ({ children, maxWidth = 'xl', className = '', ...props }) => {
  return (
    <div className={`container container--${maxWidth} ${className}`} {...props}>
      {children}
    </div>
  );
};
