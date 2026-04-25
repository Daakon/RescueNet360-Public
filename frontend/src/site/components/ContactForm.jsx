import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useWaitlistSubmit } from '../../hooks/useWaitlistSubmit';

const VISITOR_TYPES = [
  { value: 'shelter_rescue', label: 'Shelter or Rescue' },
  { value: 'sponsor_partner', label: 'Sponsor or Strategic Partner' },
  { value: 'investor', label: 'Investor' },
  { value: 'grant_funder', label: 'Grant Funder' },
  { value: 'individual_pet_parent', label: 'Pet Parent or Individual Supporter' },
];

const DEFAULT_FORM = {
  visitorType: '',
  fullName: '',
  email: '',
  organization: '',
  region: '',
  message: '',
  consent: false,
  shelterType: '',
  monthlyIntake: '',
  pilotTimeline: '',
  sponsorshipRange: '',
  sponsorshipGoals: '',
  investorStage: '',
  checkSize: '',
  diligenceNeeds: '',
  grantFocus: '',
  grantCycle: '',
  reportingNeeds: '',
  supportType: '',
  petUseCase: '',
  pilotReadiness: '',
};

const FIELD_GROUPS = {
  shelter_rescue: [
    {
      name: 'shelterType',
      label: 'Organization type',
      type: 'select',
      required: true,
      options: ['Municipal Shelter', 'Nonprofit Rescue', 'Regional Network', 'Foster-Led Organization'],
    },
    {
      name: 'monthlyIntake',
      label: 'Approximate monthly intake',
      placeholder: 'Example: 80-120 animals',
      required: true,
    },
    {
      name: 'pilotTimeline',
      label: 'Pilot timeline',
      type: 'select',
      required: true,
      options: ['Immediately', 'Next 90 days', 'Next 6 months', 'Just exploring'],
    },
  ],
  sponsor_partner: [
    {
      name: 'sponsorshipRange',
      label: 'Sponsorship planning scope',
      type: 'select',
      required: true,
      options: [
        'Dynamic regional model (pet-population based)',
        'Single-region sponsorship exploration',
        'Multi-region sponsorship exploration',
        'Need help defining the right scope',
      ],
    },
    {
      name: 'sponsorshipGoals',
      label: 'Primary impact objective',
      placeholder: 'Regional activation, measurable outcomes, mission alignment, etc.',
      required: true,
    },
  ],
  investor: [
    {
      name: 'investorStage',
      label: 'Stage focus',
      type: 'select',
      required: true,
      options: ['Pre-seed', 'Seed', 'Series A', 'Mission-aligned evergreen capital'],
    },
    {
      name: 'checkSize',
      label: 'Typical check size',
      placeholder: 'Example: $250k-$1M',
      required: true,
    },
    {
      name: 'diligenceNeeds',
      label: 'Diligence priorities',
      placeholder: 'Model, market validation, team depth, roadmap, etc.',
      required: true,
    },
  ],
  grant_funder: [
    {
      name: 'grantFocus',
      label: 'Funding focus area',
      placeholder: 'Innovation, rescue outcomes, disaster readiness, etc.',
      required: true,
    },
    {
      name: 'grantCycle',
      label: 'Next grant cycle timing',
      placeholder: 'Month or quarter',
      required: true,
    },
    {
      name: 'reportingNeeds',
      label: 'Reporting requirements',
      placeholder: 'Metrics and evaluation criteria',
      required: false,
    },
  ],
  individual_pet_parent: [
    {
      name: 'supportType',
      label: 'What do you need today?',
      type: 'select',
      required: true,
      options: ['Register My Pets', 'Report a Lost Pet', 'Report a Found Pet', 'Pilot App Access', 'General Help'],
    },
    {
      name: 'petUseCase',
      label: 'Primary use case',
      placeholder: 'Example: family safety, rescue support, neighborhood reunification',
      required: false,
    },
    {
      name: 'pilotReadiness',
      label: 'Pilot readiness',
      placeholder: 'Need access now, exploring, coordinating with local shelter, etc.',
      required: false,
    },
  ],
};

const LEGACY_VISITOR_ALIASES = {
  individual_volunteer: 'individual_pet_parent',
};

const buildStructuredDetails = (formData, visitorLabel) => {
  const lines = [`Visitor type: ${visitorLabel}`];

  if (formData.region) {
    lines.push(`Region focus: ${formData.region}`);
  }

  const activeFields = FIELD_GROUPS[formData.visitorType] || [];
  activeFields.forEach((field) => {
    if (formData[field.name]) {
      lines.push(`${field.label}: ${formData[field.name]}`);
    }
  });

  return lines;
};

const isValidVisitorType = (value) => VISITOR_TYPES.some((type) => type.value === value);

export const ContactForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { submit, isLoading, isSuccess, error, reset } = useWaitlistSubmit();
  const [formData, setFormData] = useState(DEFAULT_FORM);

  useEffect(() => {
    const incomingType = searchParams.get('type');
    const resolvedType = LEGACY_VISITOR_ALIASES[incomingType] || incomingType;
    if (resolvedType && isValidVisitorType(resolvedType)) {
      setFormData((previous) => ({
        ...previous,
        visitorType: resolvedType,
      }));
    }
  }, [searchParams]);

  const selectedVisitor = useMemo(
    () => VISITOR_TYPES.find((type) => type.value === formData.visitorType),
    [formData.visitorType]
  );

  const dynamicFields = FIELD_GROUPS[formData.visitorType] || [];

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

  const renderField = (field) => {
    if (field.type === 'select') {
      return (
        <label key={field.name} className="text-sm font-semibold text-ink">
          {field.label}
          <select
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            disabled={isLoading}
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
          >
            <option value="">Select one</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      );
    }

    return (
      <label key={field.name} className="text-sm font-semibold text-ink">
        {field.label}
        <input
          name={field.name}
          type="text"
          value={formData[field.name]}
          onChange={handleChange}
          required={field.required}
          disabled={isLoading}
          placeholder={field.placeholder || ''}
          className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
        />
      </label>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const visitorLabel = selectedVisitor?.label || 'General Contact';
    const details = buildStructuredDetails(formData, visitorLabel);
    const combinedMessage = [formData.message.trim(), '', 'Structured details:', ...details.map((line) => `- ${line}`)]
      .filter((line) => line !== '')
      .join('\n');

    const result = await submit(
      {
        name: formData.fullName,
        email: formData.email,
        organization: formData.organization,
        role: visitorLabel,
        message: combinedMessage,
        consent: formData.consent,
        source: `website-contact-${formData.visitorType || 'general'}`,
      },
      `website-contact-${formData.visitorType || 'general'}`
    );

    if (result.success) {
      navigate('/contact/confirmation');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="surface-card grid gap-5 bg-white p-6 text-ink md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold">
          Full name
          <input
            name="fullName"
            type="text"
            required
            value={formData.fullName}
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
          Visitor type
          <select
            name="visitorType"
            required
            value={formData.visitorType}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
          >
            <option value="">Select one</option>
            {VISITOR_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold">
          Organization
          <input
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Optional for individuals"
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
          />
        </label>
      </div>

      <label className="text-sm font-semibold">
        Region focus
        <input
          name="region"
          type="text"
          value={formData.region}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="City, state, or multi-region scope"
          className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
        />
      </label>

      {dynamicFields.length > 0 && (
        <div className="grid gap-4 border-t border-slate-300 pt-5 md:grid-cols-2">
          {dynamicFields.map((field) => renderField(field))}
        </div>
      )}

      <label className="text-sm font-semibold">
        Message
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="Share goals, timing, and what a successful engagement looks like."
          className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition-colors focus:border-teal disabled:opacity-70"
        />
      </label>

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
        I agree to receive RescueNet360 updates and understand I can unsubscribe at any time.
      </label>

      <button type="submit" className="btn-primary w-full justify-center" disabled={isLoading || isSuccess}>
        {isLoading ? 'Submitting...' : isSuccess ? 'Submitted' : 'Submit Inquiry'}
      </button>

      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      {isSuccess && !error && (
        <p className="status-success text-sm" role="status">
          Inquiry received. We will follow up with the right team.
        </p>
      )}
    </form>
  );
};
