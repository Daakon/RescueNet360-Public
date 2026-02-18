import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Solution = () => {
    return (
        <Section id="solution" className="relative !py-[100px] text-white">
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690aa47143168c7a81e809b4_ChatGPT%20Image%20Nov%204%2C%202025%2C%2007_12_06%20PM.png')] bg-center bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="wrap relative z-10">
                <h2 className="title-lg text-center mb-5 text-[24px] md:text-[36px] font-extrabold shadow-black/80 drop-shadow-md">
                    The Solution – The First Coordination Platform for Animal Welfare
                </h2>

                <p className="lead text-center max-w-[900px] mx-auto mb-6 text-[#f8f9fa] text-[15px] md:text-[18px]">
                    RescueNet360 connects shelters, rescues, fosters, volunteers, transport, and emergency responders in real-time.
                </p>

                <p className="text-center max-w-[800px] mx-auto mb-9 text-[#8B8F97] text-sm">
                    Instead of isolated spreadsheets, phone trees, and social posts — every organization works from the same live network.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="!bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white hover:!bg-white/20 hover:!border-teal/60 transition-all duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Live Capacity Dashboard</h3>
                        <p className="text-white">
                            See open kennels and foster availability instantly across every partner organization.
                        </p>
                    </Card>

                    <Card className="!bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white hover:!bg-white/20 hover:!border-teal/60 transition-all duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Network Effect</h3>
                        <p className="text-white">
                            Every sign-up is a potential foster, volunteer, or advocate we didn't have yesterday.
                        </p>
                    </Card>

                    <Card className="!bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white hover:!bg-white/20 hover:!border-teal/60 transition-all duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Disaster Response Mode</h3>
                        <p className="text-white">
                            Mobilize temporary fosters and mass transport during emergencies within minutes.
                        </p>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default Solution;
