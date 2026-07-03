import React from 'react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center transition-all duration-300 cursor-pointer rounded-[18px] font-bold outline-none";

    // Replaced legacy borders with elevation and tonal contrast.
    const variants = {
        default: "px-comfortable-pad py-[14px] bg-surface-elevated text-text-primary shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.01]",
        
        primary: "px-comfortable-pad py-[14px] bg-primary text-text-inverse shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.01] focus:ring-2 focus:ring-surface-focus",
        
        secondary: "px-comfortable-pad py-[14px] bg-surface-interactive text-text-primary hover:bg-surface-focus hover:scale-[1.01]",
        
        tertiary: "px-comfortable-pad py-[14px] bg-transparent text-text-primary hover:bg-surface-interactive",

        // Mapping legacy variants to new system equivalents to prevent breaks
        dark: "px-comfortable-pad py-[14px] bg-surface-dark-elevated text-text-inverse hover:bg-surface-dark-interactive",
        teal: "px-comfortable-pad py-[14px] bg-secondary text-text-inverse shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.01]",
        chrome: "px-comfortable-pad py-[14px] bg-surface-interactive text-text-primary shadow-elevation-1 hover:shadow-elevation-2 hover:scale-[1.01]"
    };

    const Component = props.href ? 'a' : 'button';

    return (
        <Component
            className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
