import React from 'react';

const Badge = ({ children, variant = 'neutral', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300";

    // Mapping semantic states to specific tonal backgrounds and text colors.
    const variants = {
        'emergency-high': "bg-state-emergency-high text-text-inverse shadow-elevation-1",
        'emergency-medium': "bg-state-emergency-medium text-text-inverse shadow-elevation-1",
        'emergency-low': "bg-state-emergency-low text-text-primary shadow-elevation-1",
        'capacity-critical': "bg-state-capacity-critical text-text-inverse shadow-elevation-1",
        'capacity-warning': "bg-state-capacity-warning text-text-inverse shadow-elevation-1",
        'capacity-safe': "bg-state-capacity-safe text-text-inverse shadow-elevation-1",
        'danger': "bg-state-danger text-text-inverse shadow-elevation-1",
        'warning': "bg-state-warning text-text-inverse shadow-elevation-1",
        'info': "bg-state-info text-text-inverse shadow-elevation-1",
        'neutral': "bg-surface-interactive text-text-primary shadow-elevation-1",
        'success': "bg-state-capacity-safe text-text-inverse shadow-elevation-1",
    };

    return (
        <span
            className={`${baseStyles} ${variants[variant] || variants.neutral} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
