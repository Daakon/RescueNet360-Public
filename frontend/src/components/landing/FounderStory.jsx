import React from 'react';
import Section from '../ui/Section';

const FounderStory = () => {
    return (
        <Section id="founder" className="bg-white">
            <div className="wrap relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-[60px] items-center">
                    <div className="rounded-[16px] overflow-hidden shadow-soft">
                        <img
                            src="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690a325b25e3e88b934de9f0_misty.jpg"
                            alt="Misty Harrison, Founder of RescueNet"
                            className="w-full h-auto block"
                        />
                    </div>
                    <div>
                        <h2 className="title-lg mb-6 text-[32px] font-extrabold tracking-[-.02em] text-ink">
                            Why This Became My Mission
                        </h2>

                        <p className="mb-5 leading-[1.6] text-muted">
                            <strong>With 19 years of technical and management experience</strong> across Microsoft, ADP, and 12 years at AutoRealty managing teams and operations, I've built the expertise to create systems that scale. But this mission started with a moment that changed everything.
                        </p>

                        <p className="mb-5 leading-[1.6] text-muted">
                            I kept seeing missing dog posts on Nextdoor — over and over, like digital lost-and-found flyers. But one stood out. An elderly dog had gone missing, and her owner posted relentlessly, day after day, searching and hoping. And I felt it — that ache. That helpless pain of not knowing.
                        </p>

                        <p className="mb-5 leading-[1.6] text-muted">
                            I messaged the owner and offered to go door to door. She gently declined. I think she already knew — deep down — her pup wasn't coming back.
                        </p>

                        <p className="mb-5 leading-[1.6] text-muted">
                            <strong>"If you share it... that means she's really gone."</strong>
                        </p>

                        <p className="mb-5 leading-[1.6] text-muted">
                            That moment changed everything. I hadn't even thought of it that way. I was hoping for a happy ending. But it never came. That's when something in me shifted.
                        </p>

                        <p className="mb-5 leading-[1.6] text-muted">
                            Because what happens next — for dogs like hers — is unthinkable. They end up in a shelter. Cold. Confused. Hungry. And too often, they're euthanized. Scared. Alone. Forgotten.
                        </p>

                        <p className="mb-8 leading-[1.6] text-muted">
                            <strong>That's not a peaceful death. That's a system failure. And I knew I could help fix it. So I started RescueNet.</strong>
                        </p>

                        <div className="mb-8 rounded-lg border-l-4 border-teal bg-soft p-6">
                            <p className="mb-0 italic text-muted">
                                No pet should disappear without a chance. No family should wonder if they gave up too soon. And no shelter should have to choose who lives or dies because they're out of space.
                            </p>
                        </div>

                        <p className="mb-2 text-muted">
                            <strong>— Misty Harrison</strong>
                        </p>
                        <p className="text-muted">
                            Founder & CEO, RescueNet
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FounderStory;

