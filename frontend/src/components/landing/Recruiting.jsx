import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Recruiting = () => {
    return (
        <Section id="recruit" className="relative !py-[100px] text-white">
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a9fd391dcd66ba7e7d580_dream%20team.png')] bg-center bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="wrap relative z-10">
                <h2 className="title-lg text-center mb-4 text-[#FFFFFF] font-extrabold shadow-black/80 drop-shadow-md text-[24px] md:text-[36px]">
                    We're Recruiting the Dream Team
                </h2>

                <p className="lead text-center max-w-[840px] mx-auto mb-9 text-[#eafdfb] text-[15px] md:text-[18px]">
                    Builders and doers across Dev, AI/ML, Mobile, Backend, Product, Design, Partnerships, Funding Strategy, and Ops.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="text-center !bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white">
                        <h3 className="title-md text-teal mb-3 text-[22px] font-extrabold">Waitlist Signups</h3>
                        <p className="text-[#FFFFFF]">Growing daily</p>
                    </Card>

                    <Card className="text-center !bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white">
                        <h3 className="title-md text-teal mb-3 text-[22px] font-extrabold">Build Team Applications</h3>
                        <p className="text-[#FFFFFF]">Open now</p>
                    </Card>

                    <Card className="text-center !bg-white/15 !backdrop-blur-[20px] !border-white/25 !text-white">
                        <h3 className="title-md text-teal mb-3 text-[22px] font-extrabold">Investor Leads</h3>
                        <p className="text-[#FFFFFF]">Actively reviewing</p>
                    </Card>
                </div>

                <div className="max-w-[700px] mx-auto mt-9 p-8 bg-[rgba(31,199,182,0.15)] border-2 border-teal rounded-xl text-center">
                    <h3 className="title-md text-teal mb-3 text-[22px] font-extrabold">Actively Seeking Technical Co-Founder / CTO</h3>
                    <p className="text-[#FFFFFF] mb-0">
                        Looking for an exceptional technical leader to build the infrastructure that will save millions of animals. Platform architecture designed, patents filed, now we need the right partner to bring it to life.
                    </p>
                </div>

                <div className="text-center mt-9">
                    <Button variant="teal" href="#join">Join the Movement</Button>
                </div>
            </div>
        </Section>
    );
};

export default Recruiting;
