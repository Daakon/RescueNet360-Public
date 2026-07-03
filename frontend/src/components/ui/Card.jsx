import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`rounded-[18px] bg-surface-elevated p-comfortable-pad shadow-elevation-1 transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
