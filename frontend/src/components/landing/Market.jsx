import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Market = () => {
    return (
        <Section id="market" className="relative !py-[100px] text-white">
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a9c954e957c8de8b63999_A_digital_visualization_displays_a_glowing_network.png')] bg-center bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="wrap relative z-10">
                <h2 className="title-lg text-center font-extrabold text-[24px] md:text-[36px] mb-[14px] shadow-black/80 drop-shadow-md">
                    An Untapped $3 Billion Market. A Mission Money Can't Ignore.
                </h2>

                <p className="lead text-center max-w-[900px] mx-auto mb-9 text-[#FFFFFF] shadow-black/80 drop-shadow-sm text-[15px] md:text-[18px]">
                    RescueNet360 isn't another startup — it's a new infrastructure layer for animal welfare. Investors in this bridge help set the standard for every rescue organization in America.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="text-center !bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white">
                        <div className="text-[36px] md:text-[56px] font-black text-teal mb-[10px] leading-none drop-shadow-[0_0_20px_rgba(31,199,182,0.4)]">$3B+</div>
                        <p className="text-[#FFFFFF]">Annual rescue, transport & medical spend in shelters</p>
                    </Card>

                    <Card className="text-center !bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white">
                        <div className="text-[36px] md:text-[56px] font-black text-teal mb-[10px] leading-none drop-shadow-[0_0_20px_rgba(31,199,182,0.4)]">14,000+</div>
                        <p className="text-[#FFFFFF]">Active shelters & rescues (U.S.)</p>
                    </Card>

                    <Card className="text-center !bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white">
                        <div className="text-[36px] md:text-[56px] font-black text-teal mb-[10px] leading-none drop-shadow-[0_0_20px_rgba(31,199,182,0.4)]">85M+</div>
                        <p className="text-[#FFFFFF]">Pets in households ready to pay for peace of mind</p>
                    </Card>
                </div>

                <div className="max-w-[800px] mx-auto mt-12 p-8 bg-white/10 backdrop-blur-[10px] rounded-[16px] border border-white/20">
                    <h3 className="title-md text-center text-teal mb-5 text-[22px] font-extrabold">SaaS Platform with Network Effects</h3>
                    <p className="text-white text-center mb-3">
                        Tiered subscription model serving shelters, rescues, and enterprise networks
                    </p>
                    <p className="text-[#8B8F97] text-center text-sm">
                        Every organization that joins makes the platform more valuable for everyone — creating a powerful competitive moat through network effects
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Market;
