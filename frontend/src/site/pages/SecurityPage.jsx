import { LegalScaffoldPage } from './legal/LegalScaffoldPage';

const sections = [
  {
    title: 'Security Program Overview',
    paragraphs: [
      'Placeholder: This section will describe RescueNet360 security objectives and governance model for protecting platform operations.',
      'Placeholder: Final language will align with risk-based controls and public-benefit operational priorities.',
    ],
  },
  {
    title: 'Technical and Administrative Safeguards',
    paragraphs: [
      'Placeholder: This section will summarize representative security measures such as access controls, monitoring, and secure development practices.',
      'Placeholder: Specific control statements will be finalized after legal and security review.',
    ],
  },
  {
    title: 'Incident Response',
    paragraphs: [
      'Placeholder: This section will define response workflows, triage, containment, and communication commitments.',
      'Placeholder: Notification procedures and timing expectations will be inserted in the final version.',
    ],
  },
  {
    title: 'Shared Responsibility',
    paragraphs: [
      'Placeholder: This section will clarify user and partner responsibilities that support safe platform operations.',
      'Placeholder: Final policy language will map responsibilities by audience type and access level.',
    ],
  },
];

export const SecurityPage = () => {
  return (
    <LegalScaffoldPage
      eyebrow="Security"
      title="Security Overview"
      intro="This page is a scaffold for formal security policy language and control disclosures pending legal review."
      sections={sections}
    />
  );
};
