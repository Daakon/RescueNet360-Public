import React from 'react';

const Section = ({ children, className = '', tight = false, id = '', ...props }) => {
    return (
        <section
            id={id}
            className={`relative ${tight ? 'py-[60px]' : 'py-[80px]'} ${className}`}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;
