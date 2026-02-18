import React from 'react';

export const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold uppercase tracking-wide text-secondary">The Problem</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Deadly Isolation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Animals die because organizations work in silos. Without a unified system, resources are wasted and lives are lost.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-gray-900 uppercase">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-secondary/10">
                  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                Siloed Shelters
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-16 pt-2">
                <p className="flex-auto">Shelter A euthanizes while Shelter B has empty kennels 20 miles away — no coordination system exists to connect them.</p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-gray-900 uppercase">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-secondary/10">
                  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Failed Emergency Placements
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-16 pt-2">
                <p className="flex-auto">40% of emergency placements fail because available resources can't be found in time-critical situations.</p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-gray-900 uppercase">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-secondary/10">
                  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                Administrative Bottlenecks
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-16 pt-2">
                <p className="flex-auto">60% of foster applications sit unprocessed due to overwhelmed coordinators managing spreadsheets and phone trees.</p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-gray-900 uppercase">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-secondary/10">
                  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                Disaster Chaos
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-16 pt-2">
                <p className="flex-auto">During disasters, thousands of animals die while resources exist but can't be coordinated across organizations.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
