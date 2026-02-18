import React from 'react';

const positions = [
  {
    role: 'Waitlist Signups',
    count: '500+',
    status: 'Growing Daily',
  },
  {
    role: 'Investor Leads',
    count: '12',
    status: 'Active Conversations',
  },
  {
    role: 'Technical Co-Founder / CTO',
    count: '1',
    status: 'Actively Seeking',
    highlight: true,
  },
];

export const Team = () => {
  return (
    <section id="team" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">We're Recruiting the Dream Team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              We're building a world-class team to solve a massive problem. Join us in revolutionizing animal welfare.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
            {positions.map((pos) => (
              <div key={pos.role} className={`flex flex-col p-8 ${pos.highlight ? 'bg-primary-600' : 'bg-white/5'}`}>
                <dt className={`text-sm font-semibold leading-6 ${pos.highlight ? 'text-white' : 'text-gray-300'}`}>{pos.status}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{pos.role}</dd>
                {pos.count && <dd className={`mt-2 text-base ${pos.highlight ? 'text-white' : 'text-gray-400'}`}>{pos.count !== '1' ? pos.count : 'Open Role'}</dd>}
              </div>
            ))}
          </dl>
          <div className="mt-10 flex justify-center">
            <a href="#waitlist" className="text-sm font-semibold leading-6 text-white hover:text-secondary transition-colors">Join the Waitlist <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};
