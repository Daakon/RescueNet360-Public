import React, { useState } from 'react';
import { useWaitlistSubmit } from '../../hooks/useWaitlistSubmit';

export const WaitlistForm = () => {
  const { submit, isLoading, isSuccess, error, reset } = useWaitlistSubmit();
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('pet_owner');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({ email, user_type: userType, source: 'marketing-site' });
  };

  const handleEmailChange = (event) => {
    if (isSuccess || error) {
      reset();
    }
    setEmail(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    if (isSuccess || error) {
      reset();
    }
    setUserType(event.target.value);
  };

  return (
    <section id="waitlist" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join the Waitlist</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Be the first to know when RescueNet360 launches in your area.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isLoading}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="user-type" className="block text-sm font-semibold leading-6 text-gray-900">
                I am a...
              </label>
              <div className="mt-2.5">
                <select
                  id="user-type"
                  name="user-type"
                  value={userType}
                  onChange={handleUserTypeChange}
                  disabled={isLoading}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                >
                  <option value="pet_owner">Pet Owner</option>
                  <option value="shelter">Shelter / Rescue</option>
                  <option value="foster">Foster</option>
                  <option value="transporter">Transporter</option>
                  <option value="first_responder">First Responder</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Submitting...' : isSuccess ? "You're on the list!" : 'Sign Up'}
            </button>
            {error && (
              <p className="mt-3 text-center text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            {isSuccess && !error && (
              <p className="mt-3 text-center text-sm text-green-600" role="status">
                Thanks for joining. We will be in touch soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
