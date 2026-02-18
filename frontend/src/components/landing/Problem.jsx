import React from 'react';
import Section from '../ui/Section';

const Problem = () => {
    return (
        <Section id="problem" className="relative text-white !py-[100px]">
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690bca126410b423018ee398_ChatGPT%20Image%20Nov%205%2C%202025%2C%2004_04_45%20PM.png')] bg-center bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="wrap relative z-10">
                <h2 className="title-lg text-center font-extrabold text-[24px] md:text-[36px] mb-6 drop-shadow-md">
                    The Problem – Deadly Isolation
                </h2>

                <p className="lead text-center max-w-[900px] mx-auto mb-10 text-[15px] md:text-[18px]">
                    Animals die because organizations work in silos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-9 text-center">
                    <div className="p-6">
                        <div className="text-[36px] md:text-[56px] font-black text-teal mb-2 leading-none drop-shadow-[0_0_20px_rgba(31,199,182,0.4)]">607K</div>
                        <div className="text-[15px] font-medium">Animals euthanized annually in U.S. shelters</div>
                    </div>
                    <div className="p-6">
                        <div className="text-[36px] md:text-[56px] font-black text-teal mb-2 leading-none drop-shadow-[0_0_20px_rgba(31,199,182,0.4)]">60%</div>
                        <div className="text-[15px] font-medium">Foster applications sit unprocessed</div>
                    </div>
                    <div className="p-6">
                        <div className="text-[36px] md:text-[56px] font-black text-teal mb-2 leading-none drop-shadow-[0_0_20px_rgba(31,199,182,0.4)]">40%</div>
                        <div className="text-[15px] font-medium">Emergency placements fail</div>
                    </div>
                </div>

                <div className="max-w-[800px] mx-auto bg-white/10 backdrop-blur-[10px] p-6 rounded-xl border border-white/20">
                    <p className="mb-3 text-[16px] leading-[1.6]">
                        <strong className="text-teal">Shelter A euthanizes</strong> while Shelter B has empty kennels 20 miles away — no coordination system exists to connect them.
                    </p>
                    <p className="mb-3 text-[16px] leading-[1.6]">
                        <strong className="text-teal">60% of foster applications</strong> sit unprocessed due to overwhelmed coordinators managing spreadsheets and phone trees.
                    </p>
                    <p className="mb-3 text-[16px] leading-[1.6]">
                        <strong className="text-teal">40% of emergency placements fail</strong> because available resources can't be found in time-critical situations.
                    </p>
                    <p className="mb-0 text-[16px] leading-[1.6]">
                        <strong className="text-teal">During disasters,</strong> thousands of animals die while resources exist but can't be coordinated across organizations.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Problem;
