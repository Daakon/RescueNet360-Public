import React from 'react';
import Button from '../ui/Button';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(26,29,35,0.95)] backdrop-blur-[10px] border-b border-[rgba(255,255,255,0.1)]">
            <div className="wrap flex items-center justify-between h-[80px]">
                <a href="/" aria-label="RescueNet360" className="flex items-center gap-2 font-extrabold text-white">
                    <img
                        src="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690ab2a4ef92467957e84474_Untitled%20design%20(73).png"
                        alt="RescueNet360 logo"
                        className="h-[46px] w-auto"
                    />
                </a>
                <nav className="flex gap-8 items-center max-md:hidden" aria-label="Primary">
                    <a href="#problem" className="text-[15px] font-semibold text-white hover:text-[#1fc7b6] transition-colors">Problem</a>
                    <a href="#solution" className="text-[15px] font-semibold text-white hover:text-[#1fc7b6] transition-colors">Solution</a>
                    <a href="#tech" className="text-[15px] font-semibold text-white hover:text-[#1fc7b6] transition-colors">Technology</a>
                    <a href="#market" className="text-[15px] font-semibold text-white hover:text-[#1fc7b6] transition-colors">Market</a>
                    <Button variant="teal" href="#join">Join Waitlist</Button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
