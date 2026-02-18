import React from 'react';

export const Founder = () => {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-secondary">The Origin</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why This Became My Mission</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                When my dog went missing, I experienced the chaos firsthand. Shelters across town had no idea what each other had. Foster networks operated in isolation. Emergency responders couldn't access critical animal data during disasters.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With two decades of enterprise experience at Microsoft and ADP, and having built AutoRealty (a platform that brought transparency to car buying), I knew this problem could be solved with the right technology.
              </p>
              <figure className="mt-10 border-l border-primary pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    "RescueNet360 isn't just software—it's a mission to build the first truly coordinated system that gives every shelter, rescue, and foster network the tools they need to save more lives."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Misty Harrison</div>
                    <div className="text-gray-600">Founder of RescueNet360</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/team/misty-harrison.jpg"
              alt="Misty Harrison, Founder"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
