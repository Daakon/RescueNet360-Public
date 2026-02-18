import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative pt-[110px] pb-[140px] text-[#eafdfb] overflow-hidden min-h-screen flex items-center">
            {/* Background with lighter veil as requested in CSS override */}
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690970ed44294f1ae3cdcaba_img.png')] bg-center bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,9,12,.38)] to-[rgba(8,10,12,.52)]"></div>

            <div className="wrap relative z-10 text-center">
                <h1 className="title-xl text-white font-extrabold text-[44px] md:text-[56px] leading-[1.05] tracking-[-.02em] mb-5 drop-shadow-md">
                    The Operating System for Animal Welfare
                </h1>

                <h2 className="text-[22px] md:text-[28px] font-bold text-teal mb-5 drop-shadow-[0_0_30px_rgba(31,199,182,0.4)]">
                    Powered by a National AI-Driven Pet Directory
                </h2>

                <p className="lead text-[18px] text-[#cfe8e5] leading-[1.6] max-w-[800px] mx-auto mb-5">
                    Breaking down silos to create the first coordinated network connecting shelters, rescues, fosters, volunteers, and pet owners.
                </p>

                <p className="max-w-[760px] mx-auto mb-8 text-[#8B8F97] text-base md:text-[18px]">
                    Every year, <strong className="text-teal">607,000 animals are euthanized</strong> in the U.S. Not from neglect — from disconnection. RescueNet360 is the technology and the movement that ends it.
                </p>

                <div className="flex gap-3 justify-center flex-wrap mt-4">
                    <Button variant="teal" href="#join">Join the Waitlist</Button>
                    <Button variant="chrome" href="#problem">See the Problem</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
