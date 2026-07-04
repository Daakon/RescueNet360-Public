import { LegalScaffoldPage } from './legal/LegalScaffoldPage';

const EFFECTIVE_DATE = 'Effective date: February 18, 2026';

const sections = [
  {
    title: 'Privacy Commitment',
    paragraphs: [
      'RescueNet is a Public Benefit Corporation. We handle data to advance reunification, animal welfare, and humane coordination outcomes.',
      'We do not sell personal or identifiable data. We also do not use third-party advertising networks in core life-saving workflows.',
      'Revenue supports mission sustainability through sponsorship and aligned programs, not surveillance or personal-data monetization.',
    ],
  },
  {
    title: 'Information We Collect',
    paragraphs: [
      'We collect information you provide directly, such as name, email, organization details, role, and inquiry content submitted through forms.',
      'For platform operations, we may process pet profile details, case status data, custody/transfer updates, and related coordination metadata.',
      'We also collect technical and usage information such as device/browser data, approximate location signals, logs, and security telemetry.',
    ],
  },
  {
    title: 'How Information Is Used',
    paragraphs: [
      'We use data to provide and improve services, route requests, operate coordination workflows, support communication, and maintain platform safety.',
      'We may use de-identified and aggregated data to measure outcomes, identify bottlenecks, support research, and advance public-good reporting.',
      'AI-supported functions may assist prioritization or matching, but they do not replace human decision-making in life-impacting workflows.',
    ],
  },
  {
    title: 'Data Sharing and Disclosure',
    paragraphs: [
      'We may share data with service providers and infrastructure vendors who process information under contract for RescueNet operations.',
      'We may disclose data when required by law, legal process, or urgent safety needs.',
      'We do not sell personal or identifiable data. Public reporting is limited to anonymized, aggregated information that is not reasonably identifiable.',
    ],
  },
  {
    title: 'Retention and Security',
    paragraphs: [
      'We retain information only as long as reasonably necessary for mission operations, legal obligations, dispute resolution, and platform security.',
      'Security controls are designed to reduce risk and include technical, administrative, and organizational safeguards appropriate to the data and context.',
      'No system is perfectly secure, but we continuously monitor and improve controls to protect users, organizations, and animals served through the platform.',
    ],
  },
  {
    title: 'Privacy Rights and Requests',
    paragraphs: [
      'Depending on your jurisdiction, you may have rights to access, correct, delete, or receive information about how your data is processed.',
      'California residents may have additional rights under California privacy law, including rights to know, delete, and correct personal information and to opt out of sale or sharing where applicable.',
      'You may submit privacy requests through contact@RescueNet.com. We may verify identity before completing certain requests.',
    ],
  },
  {
    title: 'Children and Sensitive Situations',
    paragraphs: [
      'RescueNet services are generally intended for adults and organizations. If we learn that personal information was collected from a child without required consent, we will take appropriate steps.',
      'If you believe sensitive or unsafe data has been submitted in error, contact us promptly so we can review and respond.',
    ],
  },
];

export const PrivacyPage = () => {
  return (
    <LegalScaffoldPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains what information RescueNet collects, how it is used, and how we protect mission-aligned data rights."
      metaNote={EFFECTIVE_DATE}
      sections={sections}
      path="/privacy"
    />
  );
};

