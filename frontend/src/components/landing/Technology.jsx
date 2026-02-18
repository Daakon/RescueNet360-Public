import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Technology = () => {
    return (
        <Section id="tech" className="bg-[#f6f7fb]">
            <div className="wrap">
                <h2 className="title-lg text-center text-[#0B0F14] mb-4 text-[24px] md:text-[36px] font-extrabold tracking-[-.02em]">
                    The Technology That Will Save Millions
                </h2>

                <div className="text-center mb-10">
                    <div className="inline-flex gap-12 flex-wrap justify-center p-6 bg-[rgba(31,199,182,0.1)] rounded-xl border-2 border-teal mb-5">
                        <div>
                            <div className="text-[32px] md:text-[48px] font-black text-teal leading-none">74+</div>
                            <div className="text-sm text-[#364656] font-semibold mt-1">Patent Claims Filed</div>
                        </div>
                        <div>
                            <div className="text-[32px] md:text-[48px] font-black text-teal leading-none">2,000+</div>
                            <div className="text-sm text-[#364656] font-semibold mt-1">Platform Screens Designed</div>
                        </div>
                    </div>
                    <p className="body-text text-[#364656] italic">
                        Protected innovation with comprehensive UX design ready for deployment
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="!bg-[rgba(255,255,255,0.95)] !backdrop-blur-[10px] !border-[rgba(0,0,0,0.1)] !p-8 hover:!scale-[1.02] transition-transform duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Biometric Pet ID System</h3>
                        <p className="text-[#0b1016]">
                            Facial recognition + QR tag + microchip unify to create one verifiable identity for life.
                        </p>
                    </Card>

                    <Card className="!bg-[rgba(255,255,255,0.95)] !backdrop-blur-[10px] !border-[rgba(0,0,0,0.1)] !p-8 hover:!scale-[1.02] transition-transform duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">FIDO Alert Network</h3>
                        <p className="text-[#0b1016]">
                            When pets go missing, geofencing activates hyperlocal FIDO alerts, instantly notifying neighbors to mobilize community search efforts.
                        </p>
                    </Card>

                    <Card className="!bg-[rgba(255,255,255,0.95)] !backdrop-blur-[10px] !border-[rgba(0,0,0,0.1)] !p-8 hover:!scale-[1.02] transition-transform duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Foster & Rescue Management</h3>
                        <p className="text-[#0b1016]">
                            Automated matching, medical tracking, transport routing, and role-based task boards for every team.
                        </p>
                    </Card>

                    <Card className="!bg-[rgba(255,255,255,0.95)] !backdrop-blur-[10px] !border-[rgba(0,0,0,0.1)] !p-8 hover:!scale-[1.02] transition-transform duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Disaster Response Command</h3>
                        <p className="text-[#0b1016]">
                            Pre-registry, heatmaps, shelters & fleets; region-wide tasking and staged transports at the tap of a button.
                        </p>
                    </Card>

                    <Card className="!bg-[rgba(255,255,255,0.95)] !backdrop-blur-[10px] !border-[rgba(0,0,0,0.1)] !p-8 hover:!scale-[1.02] transition-transform duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Animal Abuser Registry</h3>
                        <p className="text-[#0b1016]">
                            Future module to prevent re-offense and track convictions across jurisdictions. (Design-ready.)
                        </p>
                    </Card>

                    <Card className="!bg-[rgba(255,255,255,0.95)] !backdrop-blur-[10px] !border-[rgba(0,0,0,0.1)] !p-8 hover:!scale-[1.02] transition-transform duration-300">
                        <h3 className="title-md text-teal mb-2 font-extrabold text-[22px]">Transparency & Trust Ledger</h3>
                        <p className="text-[#0b1016]">
                            Every action and donation is logged and visible — the antidote to doubt and the engine of trust.
                        </p>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default Technology;
