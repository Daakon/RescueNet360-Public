import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`rounded-[18px] border border-slate-200 bg-white p-6 shadow-soft ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
