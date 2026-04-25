import { useState } from 'react';
import { useWaitlistSubmit } from '../../hooks/useWaitlistSubmit';

const INITIAL_FORM = {
  name: '',
  email: '',
  organization: '',
  role: '',
  consent: false,
};

export const QuickSignalForm = () => {
  const { submit, isLoading, isSuccess, error, reset } = useWaitlistSubmit();
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (isSuccess || error) {
      reset();
    }

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submit(
      {
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        role: formData.role || 'General Interest',
        consent: formData.consent,
        source: 'website-home-signal',
      },
      'website-home-signal'
    );
  };

  return (
    <form onSubmit={handleSubmit} className="surface-card mt-8 grid gap-4 bg-white/95 p-6 text-ink">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold">
          Full name
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
          />
        </label>

        <label className="text-sm font-semibold">
          Email
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold">
          Organization
          <input
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Optional"
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
          />
        </label>

        <label className="text-sm font-semibold">
          I am a
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
          >
            <option value="">Select one</option>
            <option value="Shelter or Rescue">Shelter or Rescue</option>
            <option value="Sponsor or Partner">Sponsor or Partner</option>
            <option value="Investor">Investor</option>
            <option value="Grant Funder">Grant Funder</option>
            <option value="Pet Parent or Individual">Pet Parent or Individual</option>
          </select>
        </label>
      </div>

      <label className="flex items-start gap-2 text-xs text-muted">
        <input
          name="consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={handleChange}
          disabled={isLoading}
          className="mt-0.5"
        />
        I agree to receive RescueNet360 updates and may unsubscribe at any time.
      </label>

      <button type="submit" className="btn-primary w-full justify-center" disabled={isLoading || isSuccess}>
        {isLoading ? 'Submitting...' : isSuccess ? 'Submitted' : 'Join the Waitlist'}
      </button>

      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      {isSuccess && !error && (
        <p className="status-success text-sm" role="status">
          Thanks. Your signal helps us prove demand and prioritize launch partnerships.
        </p>
      )}
    </form>
  );
};
