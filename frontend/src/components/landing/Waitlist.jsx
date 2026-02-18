import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { useWaitlistSubmit } from '../../hooks/useWaitlistSubmit';

const Waitlist = () => {
    const { submit, isLoading, isSuccess, error, reset } = useWaitlistSubmit();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: '',
        consent: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (isSuccess || error) {
            reset();
        }
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            name: formData.name,
            email: formData.email,
            organization: formData.organization,
            role: formData.role,
            message: formData.message,
            consent: formData.consent,
            source: 'marketing-site',
        };
        await submit(payload);
    };

    return (
        <Section id="join" className="bg-[#f6f7fb]">
            <div className="wrap">
                <div className="max-w-[820px] mx-auto">
                    <h2 className="title-lg text-center mb-6 text-[#0B0F14] text-[32px] font-extrabold">
                        Join the Waitlist
                    </h2>

                    <div className="text-center mb-10">
                        <p className="lead mb-6 font-semibold text-[#0B0F14] text-[18px]">
                            Why Join the Waitlist?
                        </p>

                        <p className="mb-4 text-[#364656] leading-[1.6]">
                            Because every single person who signs up here sends a signal.<br />
                            To investors. To shelters. To rescues. To literally anyone watching.
                        </p>

                        <p className="mb-4 text-[#364656] leading-[1.6]">
                            <strong>It says people want this.</strong><br />
                            <strong>It says this matters.</strong><br />
                            <strong>It says we're done letting pets slip through the cracks.</strong>
                        </p>

                        <p className="mb-4 text-[#364656] leading-[1.6]">
                            Your signup isn't just a name on a list — it's proof of demand. It's momentum. It's leverage.
                        </p>

                        <p className="mb-0 font-semibold text-[#364656] leading-[1.6]">
                            If you believe this should exist, hit the button.<br />
                            The more of us there are, the louder the message:
                        </p>

                        <p className="lead mt-6 text-teal font-bold text-[18px]">
                            We are building the infrastructure animal welfare has been missing — and the world is paying attention.
                        </p>
                    </div>

                    <form
                        className="max-w-[800px] mx-auto mt-10 grid gap-5 bg-white/10 backdrop-blur-[6px] border border-white/20 rounded-[16px] p-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="w-full p-[12px] rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white outline-none focus:border-teal ring-0 disabled:opacity-70"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="w-full p-[12px] rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white outline-none focus:border-teal ring-0 disabled:opacity-70"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                name="organization"
                                placeholder="Organization (optional)"
                                value={formData.organization}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="w-full p-[12px] rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white outline-none focus:border-teal ring-0 disabled:opacity-70"
                            />
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="w-full p-[12px] rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white outline-none focus:border-teal ring-0 appearance-none disabled:opacity-70"
                            >
                                <option value="">I am…</option>
                                <option>Shelter</option>
                                <option>Rescue</option>
                                <option>Foster</option>
                                <option>Volunteer</option>
                                <option>Vet / Clinic</option>
                                <option>Investor / Partner</option>
                                <option>Pet Owner</option>
                            </select>
                        </div>

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Anything we should know?"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full p-[12px] rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white outline-none focus:border-teal ring-0 min-h-[120px] resize-y disabled:opacity-70"
                        ></textarea>

                        <div className="flex items-start gap-3">
                            <input
                                id="consent"
                                name="consent"
                                type="checkbox"
                                required
                                aria-required="true"
                                checked={formData.consent}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="mt-1 w-auto"
                            />
                            <label htmlFor="consent" className="text-sm font-bold text-[#0B0F14]">I agree to receive RescueNet360 updates and understand I can unsubscribe anytime.</label>
                        </div>

                        <Button type="submit" variant="teal" className="w-full !p-3" disabled={isLoading || isSuccess}>
                            {isLoading ? 'Submitting...' : isSuccess ? "You're on the list!" : 'Join the Waitlist'}
                        </Button>

                        {error && (
                            <p className="text-center text-sm text-red-600" role="alert">
                                {error}
                            </p>
                        )}

                        {isSuccess && !error && (
                            <p className="text-center text-sm text-green-600" role="status">
                                Thanks for joining. We will be in touch soon.
                            </p>
                        )}

                        <p className="text-center text-sm text-[#8B8F97] mt-4">
                            We'll only use your info for RescueNet360 updates. Unsubscribe anytime.
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Waitlist;
