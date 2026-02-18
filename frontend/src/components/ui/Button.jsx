import React from 'react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center transition-all duration-300 cursor-pointer";

    const variants = {
        default: "px-5 py-[14px] rounded-[18px] font-bold border border-[#e5ebf2] bg-gradient-to-b from-white to-[#eef3f8] text-[#0b1220] shadow-[0_10px_30px_rgba(16,22,35,0.14)] hover:shadow-lg",

        primary: "px-5 py-[14px] rounded-[18px] font-bold border-0 bg-gradient-to-b from-[#27e3d1] to-[#12b3a5] text-[#05201c] hover:opacity-90",

        dark: "px-5 py-[14px] rounded-[18px] font-bold border-0 bg-[#0e141b] text-[#eaf6f4] hover:bg-[#1a2029]",

        // Explicit hex for Teal to ensure visibility
        teal: "px-[32px] py-[14px] rounded-[50px] font-bold text-[15px] uppercase tracking-[0.5px] border-none bg-[#1fc7b6] text-black shadow-[0_6px_25px_rgba(31,199,182,0.4)] hover:-translate-y-[3px] hover:bg-[#00E5D0] hover:shadow-[0_10px_35px_rgba(31,199,182,0.6)]",

        // Chrome variant matching the screenshot/CSS exactly
        chrome: "px-[32px] py-[14px] rounded-[50px] font-bold text-[15px] uppercase tracking-[0.5px] bg-gradient-to-br from-[#2C2F35] to-[#4A4E56] text-white border-2 border-[rgba(255,255,255,0.2)] shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:-translate-y-[3px] hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-[#1fc7b6]"
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
