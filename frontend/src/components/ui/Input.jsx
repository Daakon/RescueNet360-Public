import React from 'react';

const Input = React.forwardRef(({ className = '', error, ...props }, ref) => {
    return (
        <div className="relative w-full">
            <input
                ref={ref}
                className={`
                    w-full rounded-[18px] px-comfortable-pad py-[14px] 
                    bg-surface-interactive text-text-primary 
                    placeholder-text-primary/50
                    transition-all duration-300 outline-none
                    shadow-elevation-1
                    hover:bg-surface-focus
                    focus:bg-surface-focus focus:ring-2 focus:ring-surface-focus focus:shadow-elevation-2
                    ${error ? 'ring-2 ring-state-danger' : ''}
                    ${className}
                `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-state-danger pl-2">
                    {error}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
