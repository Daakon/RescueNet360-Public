import React from 'react';

const stats = [
  { id: 1, name: 'Total Addressable Market', value: '$3.2B' },
  { id: 2, name: 'Annual Pet Industry Spend', value: '$136B' },
  { id: 3, name: 'Pet Owners in the US', value: '86M' },
];

export const Market = () => {
  return (
    <section id="market" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary">The Opportunity</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              An Untapped $3 Billion Market. <br /> A Mission Money Can't Ignore.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              While the pet industry booms, animal welfare remains in the dark ages. We're bringing the first enterprise-grade SaaS platform to a sector desperate for modernization.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
