import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-chrome-dark text-[#8B8F97] py-10 border-t border-white/10">
            <div className="wrap">
                <div className="flex justify-between items-center flex-wrap gap-6">
                    <a href="/" aria-label="RescueNet360 Home" className="block">
                        <img
                            src="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690ab20eaf0a745cd9acb7da_Untitled%20design%20(72).png"
                            alt="RescueNet360 logo"
                            className="h-10 w-auto"
                        />
                    </a>
                    <div className="text-sm">
                        © <span id="year">{new Date().getFullYear()}</span> RescueNet360. Innovation That Saves Lives.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
