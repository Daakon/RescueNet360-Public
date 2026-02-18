import React from 'react';

export const Hero = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8 bg-gray-900 min-h-screen flex items-center">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />
        <img
          src="/images/hero/hero-background.jpg"
          alt="RescueNet360 Hero"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
          The Operating System for <span className="text-primary-400">Animal Welfare</span>
        </h1>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl tracking-tight">
            Powered by a National AI-Driven Pet Directory
          </h2>
          <h2 className="text-xl font-medium text-gray-300 sm:text-2xl">
            The First Real Infrastructure for Animal Rescue.
          </h2>
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
          Rescues pull from shelters to save lives, often covering food, vet care, and transport. Constant social posts aren't enough — the system needs structure.
        </p>

        {/* Stat highlight */}
        <div className="mt-8 text-lg font-medium text-gray-300">
          Every year, <span className="text-secondary font-bold">607,000 animals</span> are euthanized in the U.S. Not from neglect — from disconnection.
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#waitlist"
            className="rounded-full bg-secondary px-8 py-3.5 text-sm font-bold uppercase text-white shadow-lg hover:bg-secondary/90 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all transform hover:-translate-y-1 tracking-wider"
          >
            Join the Waitlist
          </a>
          <a
            href="#problem"
            className="rounded-full border-2 border-white/20 hover:border-white/40 px-8 py-3 text-sm font-bold uppercase text-white hover:text-white transition-all tracking-wider"
          >
            See the Problem
          </a>
        </div>
      </div>
    </section>
  );
};
