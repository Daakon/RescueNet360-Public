# RescueNet360 App Style Guide

This guide defines how the authenticated app UI should match the RescueNet360 site visual system while staying practical for operations-heavy workflows.

Use this alongside `docs/THEME_GUIDE.md`.  
`docs/THEME_GUIDE.md` is the core token source.  
This document explains how to apply those tokens to app screens.

## 1) Style Goals

- Keep one recognizable RescueNet360 visual language across marketing and product.
- Preserve readability in dense operational views.
- Keep actions obvious under pressure (lost pet, transfer, custody updates).
- Pass WCAG 2.1 AA contrast and keyboard access requirements.

## 2) Source Of Truth

Use these files as the system base:

- `frontend/src/index.css`
- `frontend/tailwind.config.js`
- `docs/THEME_GUIDE.md`

Do not introduce new one-off hex values unless approved.

## 3) Core Tokens

Use the existing tokens directly:

- `--ink`: `#0f172a` (primary text)
- `--muted`: `#334155` (secondary text)
- `--teal`: `#1fc7b6` (brand accent)
- `--teal-strong`: `#0f766e` (focus + strong accent)
- `--deep`: `#061120` (dark background)
- `--soft-surface`: `#eaf0f6` (light section surface)
- `--soft-surface-alt`: `#e3eaf2` (alt light surface)
- `--chrome-dark`: `#171d27`
- `--chrome-medium`: `#2a3442`
- `--chrome-light`: `#465466`
- `--chrome-accent`: `#9aa8ba`

## 4) Typography

Use existing families:

- Body: `Manrope`
- Headings: `Sora` via `.font-display`

Recommended app sizing:

- Page title: `text-3xl md:text-4xl` + `font-display font-extrabold`
- Section title: `text-2xl` + `font-display font-bold`
- Body default: `text-sm md:text-base`
- Dense table/meta text: `text-xs` or `text-sm`

## 5) Layout And Surfaces

### Page Shell

- Default app background: `bg-[var(--soft-surface)]` for operational pages.
- Use white cards (`bg-white`) for primary content containers.
- Keep dark surfaces (`bg-[#091628]` or `bg-[var(--deep)]`) for high-emphasis panels only.

### Card Pattern

Use:

- `surface-card border border-[#d7e4f5] bg-white p-5 md:p-6`

Avoid:

- Borderless cards in data-dense areas.
- Very low-contrast separators.

## 6) Action Hierarchy

### Buttons

- Primary action: `.btn-primary` (one per panel when possible).
- Secondary action: `.btn-secondary`.
- Tertiary/link action: text link with `text-teal hover:text-[var(--ink)]`.

Rule:

- One dominant CTA per container.
- Dangerous actions should use explicit warning styles (add app-specific class; do not reuse primary).

### Focus

Keep `:focus-visible` ring from `frontend/src/index.css`:

- 3px outline
- `--focus-ring` color
- visible on all interactive controls

## 7) Forms

Use the same field pattern already used in `ContactForm`:

- Label: `text-sm font-semibold`
- Input/select/textarea:
  - `rounded-xl`
  - `border border-slate-300`
  - `focus:border-teal`
  - `disabled:opacity-70`

Validation:

- Error text: red, concise, near the field.
- Success text: `.status-success`.
- Never rely on color alone; include icon or text cue.

## 8) Data-Dense UI Patterns

### Tables / Queues / Case Lists

- Header row: slightly tinted background (`bg-[var(--soft-surface)]`).
- Row hover: subtle tint, not saturated color.
- Status chips: consistent chip system with clear text labels.
- Keep minimum click target size at 40px height where possible.

### Operational Status Semantics

Recommended semantic colors:

- Info: neutral/chrome + text
- Active/in-progress: teal family
- Success/verified: green family (already used for success text)
- Risk/blocker: amber/red family

Keep meaning consistent across all modules (intake, custody, transfer, reunification).

## 9) Navigation

- Keep header/nav treatment consistent with current site chrome language.
- Active nav item must be visually distinct (existing gradient + border approach is good).
- Keep mobile menu tap targets large and readable.

## 10) Accessibility Requirements

Minimum:

- WCAG 2.1 AA contrast
- Keyboard access for all interactive controls
- Visible focus state
- Semantic headings in order
- Meaningful labels/alt text
- Error states announced and clearly linked to fields

Do not ship if any of these fail on key workflows.

## 11) Motion

Use subtle, functional motion only:

- Hover lift: small translate + shadow change
- Expand/collapse: short, clear easing
- Avoid decorative motion in urgent workflows

Target timing:

- 120ms to 220ms for most UI transitions

## 12) App Implementation Checklist

Before merging app UI updates:

1. Tokens come from existing system (`index.css` / Tailwind config).
2. CTA hierarchy is clear (primary vs secondary).
3. Contrast is AA-compliant for all new text/background pairs.
4. Keyboard navigation works end-to-end for changed screens.
5. Form states include visible error and success messaging.
6. No ad-hoc colors, border radii, or shadows added without sign-off.
7. Dense views remain readable at common laptop widths.

## 13) Suggested Next Step (App Side)

Create an app-scoped style entrypoint that reuses site tokens:

- Example: `frontend/src/app/styles/app-theme.css`

Import shared tokens and define only app-specific additions (status chips, table states, danger actions) instead of creating a second theme.
