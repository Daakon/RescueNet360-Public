import React from 'react';
import Section from '../ui/Section';

const MockupPreview = () => {
    return (
        <Section tight className="bg-white overflow-hidden">
            <div className="wrap text-center">
                <h2 className="title-lg mb-4 text-[32px] font-extrabold tracking-[-.02em] text-ink">
                    The First Real Infrastructure for Animal Rescue.
                </h2>
                <p className="lead mx-auto mb-10 max-w-[800px] text-[18px] text-muted">
                    Because the system was never missing effort — just a way to connect it all.
                </p>
                <div className="mx-auto max-w-[900px] transform overflow-hidden rounded-[16px] border-[10px] border-dark perspective-[1000px] rotate-[-2deg] shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
                    <img
                        src="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a3c7af3d8b2b517eb8c84_Untitled%20design%20(67).png"
                        alt="RescueNet UI mockup"
                        className="w-full h-auto block"
                    />
                </div>
            </div>
        </Section>
    );
};

export default MockupPreview;

