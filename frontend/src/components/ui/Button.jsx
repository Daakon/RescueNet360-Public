import React from 'react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center transition-all duration-300 cursor-pointer";

    const variants = {
        default: "px-5 py-[14px] rounded-[18px] font-bold border border-slate-200 bg-gradient-to-b from-white to-soft text-ink shadow-soft hover:shadow-lg",

        primary: "px-5 py-[14px] rounded-[18px] font-bold border border-chrome-accent/60 bg-gradient-to-br from-chrome-medium to-chrome-dark text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(15,118,110,0.42),0_12px_28px_rgba(7,12,18,0.42)] hover:border-teal/80 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(31,199,182,0.55),0_16px_34px_rgba(7,12,18,0.52)]",

        dark: "px-5 py-[14px] rounded-[18px] font-bold border-0 bg-dark text-slate-100 hover:bg-chrome-dark",

        // Explicit hex for Teal to ensure visibility
        teal: "px-[32px] py-[14px] rounded-[50px] font-bold text-[15px] uppercase tracking-[0.5px] border border-chrome-accent/60 bg-gradient-to-br from-chrome-medium to-chrome-dark text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(15,118,110,0.42),0_12px_28px_rgba(7,12,18,0.42)] hover:-translate-y-[3px] hover:border-teal/80 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(31,199,182,0.55),0_16px_34px_rgba(7,12,18,0.52)]",

        // Chrome-forward variant for secondary actions
        chrome: "px-[32px] py-[14px] rounded-[50px] font-bold text-[15px] uppercase tracking-[0.5px] bg-gradient-to-br from-chrome-medium to-chrome-light text-white border-2 border-white/20 shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:-translate-y-[3px] hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-teal"
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
