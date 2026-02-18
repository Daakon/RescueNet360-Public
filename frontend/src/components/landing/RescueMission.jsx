import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const RescueMission = () => {
    return (
        <Section className="bg-[#0f141a] text-[#eaf1f7] relative !py-[100px]">
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a321850d6faa7ecbadd29_Screenshot%202025-10-19%20214915.png')] bg-center bg-cover bg-no-repeat filter brightness-[0.8] saturate-[1.05]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,6,8,.40)] to-[rgba(4,6,8,.55)]"></div>

            <div className="wrap relative z-10 text-center">
                <h2 className="title-lg text-white font-bold max-w-[900px] mx-auto mb-6 text-[20px] md:text-[32px] leading-[1.4] shadow-black/80 drop-shadow-md">
                    Rescues pull from shelters to save lives, often covering food, vet care, and transport. Constant social posts aren't enough — the system needs structure.
                </h2>
                <div className="flex gap-3 justify-center mt-8">
                    <Button variant="teal" href="#solution">See the Solution</Button>
                    <Button variant="chrome" href="#founder">Learn More</Button>
                </div>
            </div>
        </Section>
    );
};

export default RescueMission;
