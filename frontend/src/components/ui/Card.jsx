import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`bg-white rounded-[18px] shadow-soft p-6 border border-[#edf1f5] ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
