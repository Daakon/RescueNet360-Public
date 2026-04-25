import { LegalScaffoldPage } from './legal/LegalScaffoldPage';

const sections = [
  {
    title: 'Purpose and Scope',
    paragraphs: [
      'Placeholder: This section will define acceptable-use expectations for all users and organizations engaging with RescueNet360 services.',
      'Placeholder: Scope language will cover public site interactions and platform-assisted coordination activities.',
    ],
  },
  {
    title: 'Prohibited Conduct',
    paragraphs: [
      'Placeholder: This section will list restricted actions, misuse patterns, and abuse scenarios that are not permitted.',
      'Placeholder: Final legal copy will include enforcement thresholds and examples relevant to operational safety.',
    ],
  },
  {
    title: 'Data and Content Responsibilities',
    paragraphs: [
      'Placeholder: This section will outline obligations for data accuracy, lawful submissions, and responsible information handling.',
      'Placeholder: Requirements for third-party data use and representation standards will be defined in final policy language.',
    ],
  },
  {
    title: 'Enforcement and Remedies',
    paragraphs: [
      'Placeholder: This section will describe investigation rights, account restrictions, and remediation actions for violations.',
      'Placeholder: Due-process and appeals pathways will be established by legal counsel in final copy.',
    ],
  },
];

export const AcceptableUsePage = () => {
  return (
    <LegalScaffoldPage
      eyebrow="Acceptable Use"
      title="Acceptable Use Policy"
      intro="This structured placeholder policy outlines the sections reserved for acceptable-use standards and enforcement details."
      sections={sections}
    />
  );
};
