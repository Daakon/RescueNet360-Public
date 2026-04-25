import { LegalScaffoldPage } from './legal/LegalScaffoldPage';

const EFFECTIVE_DATE = 'Effective date: February 18, 2026';

const sections = [
  {
    title: 'Accessibility Commitment',
    paragraphs: [
      'RescueNet360 is committed to providing digital experiences that are usable by as many people as possible, including people with disabilities.',
      'As a mission-first Public Benefit Corporation, we view accessibility as part of animal welfare access, public trust, and equitable service delivery.',
      'We work to provide equal access for pet families, shelters, rescues, fosters, sponsors, and partners.',
    ],
  },
  {
    title: 'Standards and Practices',
    paragraphs: [
      'Our target is conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA for customer-facing web experiences.',
      'We align our approach with applicable accessibility and nondiscrimination expectations, including effective communication principles under U.S. law.',
      'Accessibility practices include semantic structure, keyboard support, visible focus states, color contrast checks, and assistive-technology testing during development.',
    ],
  },
  {
    title: 'Known Limitations and Ongoing Improvements',
    paragraphs: [
      'Some areas may not yet be fully accessible, especially during pilot expansion and iterative releases.',
      'When issues are identified, we prioritize fixes by user impact and safety-critical workflow relevance.',
      'We continuously review and improve accessibility as part of regular product and content updates.',
    ],
  },
  {
    title: 'Feedback and Support',
    paragraphs: [
      'If you encounter an accessibility barrier, contact us at contact@rescuenet360.com and include the page, issue, and assistive technology you are using if possible.',
      'We aim to acknowledge accessibility requests within 2 business days and provide practical alternatives while fixes are underway.',
      'Accessibility feedback directly informs prioritization and helps us improve outcomes for all users.',
    ],
  },
];

export const AccessibilityPage = () => {
  return (
    <LegalScaffoldPage
      eyebrow="Accessibility Statement"
      title="Accessibility Statement"
      intro="This statement describes RescueNet360 accessibility goals, current practices, and how to request support."
      metaNote={EFFECTIVE_DATE}
      sections={sections}
    />
  );
};
