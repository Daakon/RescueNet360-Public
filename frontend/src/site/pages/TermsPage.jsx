import { LegalScaffoldPage } from './legal/LegalScaffoldPage';

const EFFECTIVE_DATE = 'Effective date: February 18, 2026';

const sections = [
  {
    title: 'Mission and Public Benefit Commitment',
    paragraphs: [
      'RescueNet360 is a Public Benefit Corporation dedicated to reuniting lost pets with their families and advancing animal welfare through ethical, accessible technology.',
      'Our platform is operated to produce a public benefit, including faster reunification, better coordination, and reduced euthanasia risk through improved visibility and response.',
      'We structure operations and governance to protect this mission and reduce mission drift over time, including balancing stockholder interests, stakeholder interests, and our stated public benefit.',
    ],
  },
  {
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using RescueNet360 websites, applications, or services, you agree to these Terms of Service.',
      'If you use RescueNet360 on behalf of an organization, you confirm you are authorized to bind that organization to these terms.',
      'If you do not agree with these terms, do not use the services.',
    ],
  },
  {
    title: 'Use of Platform',
    paragraphs: [
      'You agree to provide accurate information, use the platform lawfully, and avoid harmful or fraudulent activity.',
      'You may not interfere with platform integrity, bypass safeguards, scrape data without authorization, or misuse content or identity records.',
      'AI-assisted features are decision-support tools only. Human users remain responsible for final custody, care, and operational decisions.',
    ],
  },
  {
    title: 'Free Forever Core Services and No-Ad Commitment',
    paragraphs: [
      'Core life-saving services are free forever for individual pet owners, shelters, rescues, fosters, and related coordination participants.',
      'RescueNet360 will not paywall essential reunification or life-saving workflows, including core reporting, matching, and coordination pathways.',
      'We do not run third-party advertising in core workflows. Mission sustainability is supported by sponsorship and other mission-aligned programs that are optional and not required for access.',
    ],
  },
  {
    title: 'Data Ethics and Confidentiality',
    paragraphs: [
      'We do not sell personal or identifiable data. Data handling is governed by our Privacy Policy and mission guardrails.',
      'Anonymized and aggregated reporting may be used for research, public-good analysis, and system improvement where individuals cannot reasonably be identified.',
      'Users must respect confidentiality and may not use the platform to expose, exploit, or misuse sensitive information.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'RescueNet360 is provided on an as-is and as-available basis. We work to maintain reliability but cannot guarantee uninterrupted or error-free service.',
      'To the extent permitted by law, RescueNet360 is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the services.',
      'Nothing in these terms excludes liability that cannot be limited under applicable law.',
    ],
  },
  {
    title: 'Pilot Program Disclaimer',
    paragraphs: [
      'Some regions or features may operate in pilot mode with phased access, evolving functionality, and additional onboarding controls.',
      'Pilot mode affects rollout and operational readiness, not the free-forever commitment for core life-saving services.',
      'We may modify pilot features to improve safety, quality, and coordination outcomes.',
    ],
  },
  {
    title: 'Changes, Suspension, and Termination',
    paragraphs: [
      'We may update these terms from time to time and will post the latest version with an updated effective date.',
      'We may suspend or terminate access for abuse, unlawful use, security risks, or material violation of these terms.',
      'Users may stop using the services at any time.',
    ],
  },
  {
    title: 'Contact Information',
    paragraphs: [
      'Questions about these Terms may be sent to contact@rescuenet360.com.',
      'Legal notices, rights requests, and policy inquiries may be submitted through the Contact page or this email address.',
      'These terms should be reviewed by counsel before final production enforcement in specific jurisdictions.',
    ],
  },
];

export const TermsPage = () => {
  return (
    <LegalScaffoldPage
      eyebrow="Terms of Service"
      title="Terms of Service"
      intro="These terms describe how RescueNet360 services are provided and how users, organizations, and partners participate in a mission-first coordination platform."
      metaNote={EFFECTIVE_DATE}
      sections={sections}
    />
  );
};
