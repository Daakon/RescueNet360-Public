import React from 'react';
import Section from '../ui/Section';

const MockupPreview = () => {
    return (
        <Section tight className="bg-white overflow-hidden">
            <div className="wrap text-center">
                <h2 className="title-lg text-[#14171a] mb-4 text-[32px] font-extrabold tracking-[-.02em]">
                    The First Real Infrastructure for Animal Rescue.
                </h2>
                <p className="lead text-[#6b7a8c] max-w-[800px] mx-auto mb-10 text-[18px]">
                    Because the system was never missing effort — just a way to connect it all.
                </p>
                <div className="max-w-[900px] mx-auto transform rotate-[-2deg] perspective-[1000px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] rounded-[16px] overflow-hidden border-[10px] border-[#0a0d12]">
                    <img
                        src="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a3c7af3d8b2b517eb8c84_Untitled%20design%20(67).png"
                        alt="RescueNet360 UI mockup"
                        className="w-full h-auto block"
                    />
                </div>
            </div>
        </Section>
    );
};

export default MockupPreview;
