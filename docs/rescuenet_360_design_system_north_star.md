# RescueNet360 Design System North Star
## Empathetic Sanctuary — Website & App Styling Standard v1

## Purpose

This document is the single source of truth for RescueNet360 website and application styling.

It is intended for AI-assisted implementation, engineering, design review, and future product work. It defines not only the visual look, but the system-level rules required to keep all RescueNet360 surfaces consistent across public pages, personal user flows, organization workspaces, facility operations, and platform admin.

This is not a cosmetic refresh. It is a design system standard for a pet identity platform that must remain calm, trustworthy, readable, and operationally clear under normal, stressful, and emergency conditions.

---

# 1. Foundational Design Principle

RescueNet360 is a calm, intelligent system that protects animal identity across time.

Every interface must reinforce four ideas:

- Pet identity is central
- Signals come from many places
- Time and history matter
- The system helps people understand and act without panic

The UI should feel like a protected, well-organized place where complex animal welfare information becomes clear.

## Core Feeling

RescueNet360 should feel:

- Safe
- Calm
- Trustworthy
- Warm
- Intelligent
- Grounded
- Operationally capable

It should not feel:

- Clinical
- Corporate
- Cold
- Overly emotional
- Childlike
- Decorative
- Like a pet store
- Like a generic SaaS dashboard
- Like a donation-first charity site
- Like veterinary practice software

## Design Statement

RescueNet360’s design language is Empathetic Sanctuary:

A warm, calm, systemized interface that helps people protect and understand animals without visual noise, manipulation, or operational confusion.

---

# 2. Brand Anchor: Logo and Meaning

The approved brand direction uses a stylized paw as the core mark.

## Logo Structure

The logo contains:

- One large center paw pad
- Four toe pads
- Dog and cat silhouettes as negative space inside the center pad
- Purple for the center identity pad
- Teal for the signal toe pads

## Meaning

| Logo Element | Meaning |
| --- | --- |
| Paw | Universal pet identity |
| Dog and cat silhouettes | Inclusive companion animal focus |
| Purple center pad | Core identity, intelligence, trust |
| Teal toe pads | Distributed signals, activity, connection |
| Negative space | Clarity emerging from the system |

## UI Implication

The interface should mirror the logo concept:

- Identity should be visually central
- Supporting signals should be grouped around identity
- Complex data should resolve into understandable structure
- Visual detail should be simplified until it remains readable at small sizes

The logo should not force every component to contain paw imagery. Instead, the logo’s logic should influence the whole system: a calm core, supporting signals, and clear outcomes.

---

# 3. Design System Goals

The design system must:

1. Unify all product surfaces
   - Public website
   - Public org/facility/pet pages
   - Personal app
   - Organization workspace
   - Facility operations
   - Platform admin

2. Support high-trust public use
   - Pet owners
   - Finders
   - Shelter visitors
   - Sponsors
   - Community members

3. Support operational clarity
   - Intake
   - Reunification
   - Custody
   - Foster
   - Transport
   - Medical
   - Applications
   - Contacts
   - Tasks
   - Timeline

4. Support emergency and high-stress states
   - Lost pets
   - Found pets
   - Capacity strain
   - Emergency events
   - Critical workflows

5. Prevent style drift
   - No hardcoded styling
   - No one-off page patterns
   - No visual improvisation
   - Components and tokens must govern implementation

---

# 4. Global Implementation Rules

These are non-negotiable.

## 4.1 No Hardcoded Styling

Do not hardcode:

- Colors
- Shadows
- Border radii
- Spacing
- Font sizes
- State colors
- Page backgrounds
- Component variants

All visual values must come from:

- CSS variables
- Tailwind theme tokens
- Reusable component variants

## 4.2 No One-Off Visual Patterns

If a page needs a new pattern, define it as a reusable system component or variant first.

Bad:

- Custom card classes on one dashboard
- Inline color overrides
- Page-specific badge styles
- Random spacing exceptions

Good:

- `Card variant="operational"`
- `Badge tone="capacity-critical"`
- `TimelineEvent severity="high"`
- `SectionShell density="comfortable"`

## 4.3 Clarity Over Decoration

Visual softness must never reduce understanding.

Especially in:

- Dashboards
- Emergency views
- Facility operations
- Timeline views
- Capacity states
- Match/reunification review

If a design is pretty but unclear, it is wrong.

## 4.4 State Must Be Visible

Important system state must not look neutral.

Risk, severity, capacity, urgency, incomplete workflows, and operational blockers must have visible treatment using:

- Tone
- Elevation
- Iconography
- Motion when appropriate
- Clear language

State should not rely on color alone.

## 4.5 Component-First Architecture

Build primitives first, then compose pages.

Required primitive layer:

- Button
- Input
- Select
- Checkbox
- Radio
- Textarea
- Card
- Badge
- Alert
- Modal
- Drawer
- Tabs
- Table
- Timeline item
- Status block
- Empty state
- Page shell
- Section shell

Pages must be assembled from system components, not custom visual structures.

---

# 5. Color System

## 5.1 Color Philosophy

The RescueNet360 palette should feel warm, calm, protective, and modern.

The core palette is purple, teal, and cream.

- Purple represents identity, intelligence, trust, and primary action
- Teal represents signals, activity, connection, and positive motion
- Cream represents sanctuary, warmth, and safety

The cream layer is essential. It prevents the product from feeling sterile, corporate, or overly clinical.

## 5.2 Core Light Theme Tokens

```css
:root {
  /* Brand Core */
  --color-primary: #7E57C2;
  --color-primary-deep: #5A3FA0;
  --color-primary-soft: #B39DDB;

  --color-secondary: #26A69A;
  --color-secondary-deep: #168E83;
  --color-secondary-soft: #A7E4DD;

  /* Sanctuary Neutrals */
  --color-bg: #F6F3EF;
  --color-bg-subtle: #FAF7F2;
  --color-surface: #FBF9F6;
  --color-surface-elevated: #FFFFFF;
  --color-surface-muted: #F0ECE6;

  /* Text */
  --color-text-primary: #1E1F23;
  --color-text-secondary: #5F6673;
  --color-text-muted: #8A9099;
  --color-text-inverse: #FFFFFF;

  /* Soft Separators */
  --color-separator: rgba(30, 31, 35, 0.08);
  --color-separator-strong: rgba(30, 31, 35, 0.14);
}
```

## 5.3 Core Dark Theme Tokens

Dark mode must not be a blind inversion. It should preserve the sanctuary feeling with deep blue-charcoal surfaces and consistent brand accents.

```css
.dark {
  /* Brand Core remains stable */
  --color-primary: #7E57C2;
  --color-primary-deep: #B39DDB;
  --color-primary-soft: #3F2B6F;

  --color-secondary: #26A69A;
  --color-secondary-deep: #77D8CF;
  --color-secondary-soft: #173F3D;

  /* Dark Sanctuary Surfaces */
  --color-bg: #101722;
  --color-bg-subtle: #121B28;
  --color-surface: #141C26;
  --color-surface-elevated: #1A2230;
  --color-surface-muted: #202A38;

  /* Text */
  --color-text-primary: #F5F7FA;
  --color-text-secondary: #C0C7D2;
  --color-text-muted: #8792A1;
  --color-text-inverse: #101722;

  /* Soft Separators */
  --color-separator: rgba(255, 255, 255, 0.08);
  --color-separator-strong: rgba(255, 255, 255, 0.14);
}
```

## 5.4 Color Usage Rules

### Purple Usage

Use purple for:

- Primary CTAs
- Identity anchors
- Selected navigation states
- Active context indicators
- Core profile identity moments
- Logo center pad

Do not overuse purple as decoration.

### Teal Usage

Use teal for:

- Activity signals
- Successful connection
- Progress
- Timeline signal markers
- Scans
- Updates
- Logo toe pads

Do not use teal for every positive or clickable thing. It should retain signal meaning.

### Cream Usage

Use cream for:

- Main page backgrounds
- Public pages
- Personal app backgrounds
- Calm empty states
- Onboarding areas
- Low-stress informational surfaces

Cream should be the default environmental tone for light mode.

### White Usage

Use white for elevated surfaces, not full-page backgrounds.

White should feel like a card, panel, or focused work area placed within the sanctuary environment.

---

# 6. Semantic State System

System states must be tokenized and reusable.

## 6.1 Base Semantic States

```css
:root {
  --state-success: #3BB273;
  --state-success-bg: #EAF7F0;
  --state-success-text: #1F6B43;

  --state-info: #3B82F6;
  --state-info-bg: #EAF2FF;
  --state-info-text: #1E4F9A;

  --state-warning: #F59E0B;
  --state-warning-bg: #FFF4DE;
  --state-warning-text: #8A5200;

  --state-danger: #EF4444;
  --state-danger-bg: #FDECEC;
  --state-danger-text: #9F1D1D;
}
```

Dark mode must define equivalent state backgrounds with reduced brightness and sufficient contrast.

## 6.2 Domain-Specific State Tokens

The platform requires animal-welfare-specific states beyond generic success/warning/danger.

```css
:root {
  /* Capacity */
  --capacity-safe: var(--state-success);
  --capacity-safe-bg: var(--state-success-bg);
  --capacity-warning: var(--state-warning);
  --capacity-warning-bg: var(--state-warning-bg);
  --capacity-critical: var(--state-danger);
  --capacity-critical-bg: var(--state-danger-bg);

  /* Emergency */
  --emergency-low: #4C9AFF;
  --emergency-low-bg: #EAF2FF;
  --emergency-medium: #F59E0B;
  --emergency-medium-bg: #FFF4DE;
  --emergency-high: #EF4444;
  --emergency-high-bg: #FDECEC;

  /* Reunification */
  --reunification-open: #7E57C2;
  --reunification-review: #26A69A;
  --reunification-urgent: #EF4444;
  --reunification-resolved: #3BB273;

  /* Match Confidence */
  --match-low: #8A9099;
  --match-medium: #F59E0B;
  --match-high: #26A69A;
  --match-critical: #7E57C2;
}
```

## 6.3 State Visualization Rules

State should affect more than text color.

For important states, combine:

- Background tone
- Icon
- Label
- Elevation
- Optional motion
- Clear microcopy

Examples:

### Capacity Safe

- Soft green-toned badge
- Low elevation
- Stable appearance
- Microcopy: “Capacity stable”

### Capacity Warning

- Warm amber-toned surface
- Slightly higher elevation
- Clear next action
- Microcopy: “Approaching capacity”

### Capacity Critical

- Soft red-toned surface
- Elevated card
- Strong label
- Possible gentle pulse only if live/urgent
- Microcopy: “Capacity critical. Action needed.”

## 6.4 Do Not Rely On Color Alone

Every critical state must include a textual label or icon.

Bad:

- Red number only
- Yellow card with no label
- Badge color without explanation

Good:

- “Critical” badge
- Warning icon + message
- Capacity card with clear label and action

---

# 7. Typography System

## 7.1 Font

Primary font: Plus Jakarta Sans

Fallback stack:

```css
font-family: "Plus Jakarta Sans", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## 7.2 Typography Personality

Typography should feel:

- Clear
- Modern
- Friendly
- Professional
- Calm

Avoid:

- Overly bold hero text
- Decorative typefaces
- Condensed fonts
- All-caps UI labels except very small metadata labels

## 7.3 Type Scale

```css
:root {
  --font-size-display: 48px;
  --font-size-hero: 40px;
  --font-size-h1: 32px;
  --font-size-h2: 24px;
  --font-size-h3: 20px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
  --font-size-caption: 12px;

  --line-height-tight: 1.15;
  --line-height-heading: 1.25;
  --line-height-body: 1.55;
  --line-height-compact: 1.35;
}
```

## 7.4 Usage

### Public Hero

- Large but not aggressive
- Warm and confident
- Avoid fear-based language

### Dashboard Headings

- Smaller, clearer, more functional
- Must prioritize scanning

### Captions and Metadata

- Muted but readable
- Do not drop below accessible contrast

---

# 8. Spacing and Layout System

## 8.1 Spacing Scale

Use an 8-point spacing system.

```css
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
}
```

## 8.2 Layout Principle

Breathing space creates trust.

However, operational workflows need efficient density. The system must support both.

## 8.3 Density Modes

### Comfortable Density

Use for:

- Marketing pages
- Public pages
- Personal onboarding
- Registration
- Share pages
- Sponsor/region pages
- Empty states

Traits:

- More vertical space
- Larger cards
- Larger CTAs
- More explanatory text

### Compact Density

Use for:

- Facility dashboards
- Admin tables
- Reunification queues
- Applications queues
- Contacts CRM
- Transport planning
- Foster operations
- Timeline-heavy screens

Traits:

- Reduced padding
- Denser rows
- Clear grouping
- Minimal explanatory copy
- Strong scanning hierarchy

## 8.4 Required Density Tokens

```css
:root {
  --density-comfortable-card-padding: 24px;
  --density-comfortable-section-gap: 32px;

  --density-compact-card-padding: 16px;
  --density-compact-section-gap: 20px;

  --density-table-row-comfortable: 56px;
  --density-table-row-compact: 44px;
}
```

---

# 9. Shape, Radius, and Geometry

## 9.1 Geometry Principle

RescueNet360 should use rounded, organic geometry inspired by the paw mark.

Shapes should feel soft and protective without becoming childish.

## 9.2 Radius Tokens

```css
:root {
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 999px;
}
```

## 9.3 Usage

| Token | Use |
| --- | --- |
| `--radius-sm` | Inputs, small controls |
| `--radius-md` | Buttons, badges, compact cards |
| `--radius-lg` | Standard cards and panels |
| `--radius-xl` | Hero panels, large feature cards |
| `--radius-pill` | Pills, status chips |

Avoid sharp corners except where native browser behavior requires them.

---

# 10. Elevation Over Borders

## 10.1 Core Rule

Do not use hard borders as the primary structure.

Avoid:

```css
border: 1px solid #e5e7eb;
```

Use:

- Surface layering
- Tonal contrast
- Ambient shadow
- Subtle separator tokens only where structurally necessary

## 10.2 Elevation Tokens

```css
:root {
  --shadow-soft: 0 4px 12px rgba(35, 28, 50, 0.05);
  --shadow-card: 0 8px 24px rgba(35, 28, 50, 0.07);
  --shadow-elevated: 0 16px 40px rgba(35, 28, 50, 0.10);
  --shadow-focus: 0 0 0 4px rgba(126, 87, 194, 0.18);
}
```

## 10.3 Dark Elevation

Dark mode elevation should use tonal lifting, not heavy black shadows.

```css
.dark {
  --shadow-soft: 0 4px 12px rgba(0, 0, 0, 0.24);
  --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.32);
  --shadow-elevated: 0 16px 40px rgba(0, 0, 0, 0.42);
  --shadow-focus: 0 0 0 4px rgba(179, 157, 219, 0.24);
}
```

## 10.4 When Separators Are Allowed

Subtle separators are allowed for:

- Dense tables
- Timeline grouping
- Menu sections
- Form group separation
- Accessibility clarity

They must use `--color-separator`, never arbitrary gray borders.

---

# 11. Motion System

## 11.1 Motion Principle

Motion should communicate feedback and state, not decorate.

## 11.2 Allowed Motion

- Soft fade
- Small scale changes
- Elevation shift
- Smooth expand/collapse
- Gentle loading shimmer
- Subtle urgent pulse for active critical states only

## 11.3 Motion Tokens

```css
:root {
  --motion-fast: 120ms;
  --motion-standard: 180ms;
  --motion-slow: 260ms;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## 11.4 Interaction Rules

Hover:

- Slight elevation increase
- Optional scale up to 1.01

Active press:

- Slight scale down to 0.99

Critical live state:

- Optional subtle pulse
- Must not be distracting
- Must not run on every warning card

## 11.5 Not Allowed

- Bounce animations
- Elastic effects
- Flashing colors
- Rapid pulsing
- Decorative page transitions that slow operations

---

# 12. Component System Requirements

## 12.1 Button

Buttons must use defined variants only.

Required variants:

- primary
- secondary
- ghost
- subtle
- danger
- success

Required sizes:

- sm
- md
- lg

### Primary Button

Use for the main action on a page or section.

Visual:

- Purple background
- White text
- Rounded medium radius
- Soft elevation only when needed

### Secondary Button

Use for supportive actions.

Visual:

- Soft surface
- Purple or teal text
- No hard outline unless focus state

### Danger Button

Use only for destructive or high-risk actions.

Visual:

- Danger token
- Clear label
- Confirmation required when destructive

## 12.2 Card

Cards are the primary content surface.

Required variants:

- default
- elevated
- interactive
- operational
- warning
- critical
- identity

### Default Card

- Surface elevated
- Large radius
- Soft shadow

### Operational Card

- Slightly denser
- Stronger hierarchy
- Built for dashboards

### Critical Card

- State background tint
- Elevated treatment
- Clear label and icon
- No decorative severity

## 12.3 Badge

Badges communicate state, not decoration.

Required tones:

- neutral
- success
- info
- warning
- danger
- capacity-safe
- capacity-warning
- capacity-critical
- emergency-low
- emergency-medium
- emergency-high
- match-low
- match-medium
- match-high

Badges must include readable text.

## 12.4 Inputs

Inputs should feel calm and easy to complete.

Visual:

- Soft surface
- Radius small/medium
- Clear focus ring
- No harsh default borders

States:

- default
- hover
- focus
- error
- disabled
- success/validated when appropriate

## 12.5 Modals and Drawers

Use modals for focused decisions.
Use drawers for contextual work that preserves the current page.

Visual:

- Elevated surface
- Soft shadow
- Strong title
- Clear action hierarchy

Operational preference:

- Use drawers for pet/profile/task/timeline context
- Use modals for confirmations and short forms

## 12.6 Tables and Lists

Tables are required for high-density operational data.

Rules:

- Compact density supported
- Clear row hover state
- Status visible in dedicated column
- No tiny unreadable text
- No arbitrary grid borders

Use tonal row separation or subtle separator tokens.

## 12.7 Timeline Components

Timeline is a foundational product pattern.

Required components:

- Timeline container
- Timeline event item
- Timeline track label
- Timeline severity marker
- Timeline expandable detail
- Timeline source/context label

Timeline items must support:

- Timestamp
- Actor
- Subject
- Action
- Context
- Visibility
- Source system
- Expanded payload/details

Timeline must not be treated as a simple activity feed.

---

# 13. Timeline-Aware UI Rules

RescueNet360 is time-based, not static-state-based.

Interfaces should avoid pretending that the current state is the whole truth.

## 13.1 Required Timeline Behaviors

Timeline-heavy interfaces must support:

- Chronological ordering
- Grouping by day or event type
- Expandable detail
- Related temporal tracks
- Filter by event category
- Clear source and actor labeling

## 13.2 Timeline Visual Rules

- Use subtle vertical rhythm
- Avoid heavy lines
- Use small meaningful markers
- Use color only for category or severity
- Keep timestamps easy to scan

## 13.3 Event Stacking

Where several related events happen close together, use grouped cards rather than noisy repeated rows.

Example:

- Public sighting submitted
- Match generated
- Staff note added
- Message sent

These may be grouped under a reunification case activity cluster.

---

# 14. Page and Workspace Styling

## 14.1 Public Website

Tone:

- Warm
- Clear
- Trust-building
- Human

Visual:

- Cream background
- Large rounded sections
- Strong whitespace
- Gentle use of logo colors
- Real-world pet/community imagery only where helpful

Avoid:

- SaaS-style hero sections that feel generic
- Overly emotional rescue imagery
- Donation-first framing
- Visual clutter

## 14.2 Public Pet Pages

Purpose:

- Identify the animal
- Support safe reunification
- Build trust

Visual:

- Identity-first layout
- Pet image prominent
- Clear status
- Clear safe actions
- Warm surface treatment

Avoid:

- Making the page feel like a social profile
- Overloading with operational details
- Exposing private/system-only information

## 14.3 Personal App

Tone:

- Supportive
- Reassuring
- Clear

Visual:

- Comfortable density by default
- Simple action cards
- Clear pet identity cards
- Soft cream background

Key actions:

- Register pet
- Report lost
- Mark found
- Report found
- Review matches
- Share/QR

Lost-pet flows may increase urgency visually, but should not create panic.

## 14.4 Organization Workspace

Tone:

- Professional
- Organized
- Configuration-oriented

Visual:

- Moderate density
- Clear settings sections
- Strong page structure
- Less marketing warmth, more administrative clarity

Use cream sparingly as background. Elevated white or dark surfaces may dominate work areas.

## 14.5 Facility Operations

Tone:

- Efficient
- Calm under pressure
- Operationally direct

Visual:

- Compact density supported
- Strong status visibility
- Priority queues
- Cards and tables with clear scanning hierarchy

Do not over-soften operational screens. These users need speed and clarity.

## 14.6 Platform Admin

Tone:

- Minimal
- Utilitarian
- Precise

Visual:

- Compact density
- Clear tabs/sections
- Muted brand usage
- High readability

Admin should still use the design system, but with less warmth and less visual flourish.

---

# 15. Navigation System

## 15.1 Navigation Principles

Navigation must reflect context.

The same person may be acting as:

- Public visitor
- Personal pet owner
- Org operator
- Facility operator
- Platform admin

The UI must make context clear.

## 15.2 Active Context Indicator

Every authenticated workspace should visually indicate the active context.

Examples:

- Personal
- Organization
- Facility
- Platform Admin

Use purple for active identity/context state.

## 15.3 Navigation Density

Public navigation:

- Spacious
- Simple
- Trust-building

Personal navigation:

- Friendly
- Action-focused

Facility navigation:

- Compact
- Module-focused
- Capability-aware

Admin navigation:

- Minimal
- Utility-first

---

# 16. Iconography

## 16.1 Icon Style

Icons should be:

- Simple
- Rounded
- Legible at small sizes
- Consistent stroke or fill style

## 16.2 Icon Usage

Use icons to support recognition, not decorate.

Allowed uses:

- State labels
- Navigation
- Empty states
- Timeline categories
- Pet identity actions
- Alerts

Avoid:

- Abstract network nodes
- Orbital/atomic shapes
- Hamburger-like stacked motifs unless actually a menu
- Overly detailed animal icons
- Charity symbols such as hands/hearts as primary brand language

---

# 17. Imagery and Illustration

## 17.1 Photography

Allowed:

- Real pets
- Natural light
- Calm environments
- Human-animal connection without melodrama
- Shelter/rescue work shown respectfully

Avoid:

- Sad cage imagery as primary emotional driver
- Overly staged stock photos
- Excessive puppy/kitten cuteness
- Clinical vet imagery as the dominant look

## 17.2 Illustration

If illustration is used:

- Flat or softly dimensional
- Minimal
- Rounded
- Token-based colors
- No cartoon exaggeration

Illustration should support understanding, not become the brand.

---

# 18. Accessibility Requirements

## 18.1 Contrast

All text must meet WCAG AA contrast minimums.

Critical operational text should exceed minimums where possible.

## 18.2 Focus States

Every interactive element must have visible focus treatment.

Focus should use `--shadow-focus` or an equivalent tokenized ring.

Do not remove browser focus without replacing it.

## 18.3 Color Independence

Never communicate critical information using color alone.

## 18.4 Motion Sensitivity

Respect reduced motion settings.

When `prefers-reduced-motion` is enabled:

- Disable non-essential motion
- Keep state changes clear through tone and text

---

# 19. Trust and Ethics Rules

RescueNet360 must not feel manipulative.

## 19.1 Required

- Clear actions
- Clear ownership of data
- Transparent status
- Honest uncertainty
- Calm emergency messaging
- Non-intrusive sponsor visibility

## 19.2 Not Allowed

- Dark patterns
- Fake urgency
- Ad-like sponsor placements
- Popups that interrupt core workflows
- Confusing opt-ins
- Emotionally exploitative imagery
- Hiding critical system state

## 19.3 Sponsorship UI

Sponsor visibility must feel like infrastructure funding, not advertising.

Sponsor components must be isolated from core pet recovery, emergency, and reunification workflows unless explicitly approved.

---

# 20. Responsive and Mobile Rules

## 20.1 Mobile First

All public, personal, and urgent workflows must work well on mobile.

This is especially important for:

- QR scans
- Public pet pages
- Lost pet reports
- Found pet reports
- Reunification contact paths
- Personal pet management

## 20.2 Mobile Layout Rules

- One primary action per screen section
- Large tap targets
- Avoid dense tables on mobile
- Convert tables to cards where appropriate
- Keep emergency actions visible and clear

## 20.3 Operational Mobile

Facility operations may be desktop-first for dense work, but must still remain usable on tablets and smaller screens for field use.

---

# 21. Implementation Architecture

## 21.1 Required Files / Layers

Implementation should include:

1. Design token source
   - CSS variables
   - Light/dark theme tokens

2. Tailwind configuration
   - Colors mapped to CSS variables
   - Spacing tokens
   - Radius tokens
   - Shadow tokens
   - Typography tokens

3. Component primitives
   - Built once
   - Used everywhere

4. Page composition patterns
   - Public page shell
   - Personal app shell
   - Org workspace shell
   - Facility dashboard shell
   - Admin shell

## 21.2 Tailwind Token Mapping Example

```js
theme: {
  extend: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      bg: "var(--color-bg)",
      surface: "var(--color-surface)",
      elevated: "var(--color-surface-elevated)",
      text: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        muted: "var(--color-text-muted)",
        inverse: "var(--color-text-inverse)",
      }
    },
    borderRadius: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
      pill: "var(--radius-pill)",
    },
    boxShadow: {
      soft: "var(--shadow-soft)",
      card: "var(--shadow-card)",
      elevated: "var(--shadow-elevated)",
      focus: "var(--shadow-focus)",
    }
  }
}
```

## 21.3 Prohibited Implementation Patterns

Do not use:

- Inline style attributes for visual styling
- Arbitrary Tailwind values unless approved and tokenized afterward
- Page-specific color hex codes
- Hardcoded shadows
- Hardcoded border colors
- Random gradients
- Duplicate button/card implementations
- Legacy component styling when a system primitive exists

---

# 22. AI Implementation Instructions

When an AI agent is asked to implement RescueNet360 styling, it must follow these instructions.

## Required Skills

### design-system-enforcement

- Replace hardcoded styles with tokens
- Use Tailwind config and CSS variables
- Ensure consistent styling across all surfaces
- Reject inline styling and one-off classes

### semantic-state-visualization

- Map generic and domain states to semantic tokens
- Ensure risk, capacity, emergency, and match confidence are visually distinct
- Use label + tone + icon where needed

### timeline-aware-ui

- Design for time-based data
- Support layered history
- Support expandable context
- Avoid flat current-state-only representations

### density-adaptive-layouts

- Support comfortable and compact density
- Use comfortable density for public/personal flows
- Use compact density for operations/admin where needed

### dark-mode-parity

- Implement true dark mode parity
- Do not blindly invert colors
- Keep brand colors consistent
- Adjust surfaces, text, and elevation thoughtfully

### elevation-over-borders

- Remove hard structural borders
- Use tonal layers, soft shadows, and subtle separators
- Use borders only as tokenized separators where necessary

### motion-for-feedback

- Use motion only for interaction, feedback, hierarchy, and state changes
- Respect reduced motion settings

### component-first-architecture

- Build reusable primitives first
- Compose pages from primitives
- No page-specific styling hacks

## AI Acceptance Criteria

An implementation is acceptable only if:

- All core colors are tokenized
- Cream sanctuary backgrounds are present in light mode
- Dark mode has intentional surface tokens
- Primary UI primitives exist and are reused
- No major page uses custom visual one-offs
- Critical states are visually distinct
- Facility/admin screens support compact density
- Public/personal screens feel warm and calm
- Timeline and event views support layered history
- The approved logo direction fits naturally into the theme

---

# 23. Anti-Patterns Checklist

Reject any implementation that looks like:

- Generic SaaS dashboard
- Vet clinic software
- Pet store landing page
- Donation-focused charity site
- Overly techy network visualization
- Cold gray enterprise UI
- Childlike pet app
- Cluttered admin panel
- Border-heavy legacy UI
- Gradient-heavy marketing template

Reject any implementation that uses:

- Hardcoded hex colors in components
- Hardcoded shadows
- Hardcoded spacing
- Page-specific button styles
- Unlabeled severity colors
- Critical states shown as neutral cards
- Timeline as a simple unordered feed
- Pure white page background everywhere

---

# 24. Final North Star Statement

RescueNet360’s design system is a calm, sanctuary-like interface built on warm cream surfaces, purple identity anchors, teal signal language, soft elevation, tokenized components, and timeline-driven clarity.

It must help users understand complex, real-world animal welfare systems without stress, confusion, manipulation, or visual noise.

The design system succeeds when every surface feels like part of the same trusted identity platform, whether someone is scanning a lost pet QR code, registering their own pet, reviewing a reunification case, managing shelter operations, or administering regional infrastructure funding.

