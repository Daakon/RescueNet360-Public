export const sheltersContent = {
  heroContent: {
    headline: "The Connected System Built for Animal Shelters and Rescues",
    subheadline: "Track animals. Coordinate care. Reunite pets faster. All in one place. RescueNet helps your team manage intake, foster, transport, and reunification without juggling spreadsheets and disconnected systems.",
    imageSrc: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=154&auto=format&fit=crop",
    primaryCta: { intent: "apply", label: "Apply to Be a Pilot Partner \u2192" },
    secondaryCta: { intent: "explore", label: "Explore Platform" }
  },
  challengeItems: [
    {
      id: "records-scattered",
      iconToken: "brand-accent",
      title: "Records Are Scattered",
      description: "Data lives in spreadsheets, inboxes, and disconnected tools."
    },
    {
      id: "coordination-hard",
      iconToken: "brand-primary",
      title: "Coordination Is Hard",
      description: "Teams struggle to share updates and work together."
    },
    {
      id: "lost-pets",
      iconToken: "brand-accent",
      title: "Lost Pets Hard to Match",
      description: "Finding owners takes longer than it should."
    },
    {
      id: "decisions-delayed",
      iconToken: "brand-primary",
      title: "Decisions Get Delayed",
      description: "Missing information slows down critical decisions."
    }
  ],
  solutionContent: {
    headline: "How RescueNet Works for Organizations",
    bodyParagraphs: [
      "A seamless, shared system that connects every phase of an animal's journey through your organization and across the rescue network."
    ],
    diagramSrc: null // Placeholder if we need an image
  },
  capabilityItems: [
    {
      id: "intake",
      title: "Intake",
      description: "Create persistent identity records immediately upon animal arrival.",
      timelineStep: "1"
    },
    {
      id: "custody",
      title: "Custody",
      description: "Manage in-shelter care, medical tracking, and behavioral assessments.",
      timelineStep: "2"
    },
    {
      id: "foster",
      title: "Foster",
      description: "Coordinate placement, schedule appointments, and communicate with fosters.",
      timelineStep: "3"
    },
    {
      id: "transport",
      title: "Transport",
      description: "Organize transfers between rescue partners to save at-risk animals.",
      timelineStep: "4"
    },
    {
      id: "outcome",
      title: "Outcome",
      description: "Finalize adoptions or reunify lost pets with their verified owners.",
      timelineStep: "5"
    }
  ],
  audienceSegments: [
    {
      id: "municipal",
      role: "Municipal Shelter",
      imageSrc: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
      benefits: [
        "Manage high-volume intake efficiently",
        "Coordinate with partner rescues for transport",
        "Streamline pet reunification"
      ],
      ctaIntent: "explore"
    },
    {
      id: "rescue",
      role: "Private Rescue",
      imageSrc: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=154&auto=format&fit=crop",
      benefits: [
        "Seamless foster coordination",
        "Medical and behavioral tracking",
        "Unified adoption workflows"
      ],
      ctaIntent: "apply"
    }
  ],
  pilotContent: {
    badge: "Pilot Program",
    headline: "Help Shape the Future of Animal Welfare",
    subheadline: "We're inviting shelters and rescue organizations to join our pilot program and be part of something bigger. Free early access. Test in real workflows.",
    primaryCta: { intent: "apply", label: "Apply to Be a Pilot Partner" },
    secondaryCta: { intent: "explore", label: "Explore Platform" }
  },
  faqItems: [
    {
      question: "If shelters are free, how does RescueNet make money?",
      answer: "Shelters access the core identity and coordination platform at no cost \u2014 forever. Revenue comes from enterprise partnerships, sponsor integrations, API licensing for third-party developers, and premium coordination modules for regional transport networks and foster management."
    },
    {
      question: "Is RescueNet available nationwide?",
      answer: "RescueNet is currently in phased pilot mode, with regional rollout based on partner readiness and coordinated onboarding capacity."
    },
    {
      question: "Does this replace existing shelter software?",
      answer: "No. RescueNet is a coordination layer that connects workflows across existing systems to improve visibility, handoffs, and response speed."
    }
  ]
};

