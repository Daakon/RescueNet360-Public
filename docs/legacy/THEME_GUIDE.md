# RescueNet360 Theme Guide

## Goal
Use one visual system across the marketing site and app, with:
- Accessible text contrast (WCAG 2.1 AA minimum).
- Darker neutral backgrounds (instead of very pale blue-gray).
- Chrome-forward CTA treatment with teal brand accents.

## Core Tokens
### Neutrals
- `--ink`: `#0f172a` (primary text)
- `--muted`: `#334155` (secondary text)
- `--soft-surface`: `#eaf0f6` (default light section background)
- `--soft-surface-alt`: `#e3eaf2` (subtle card/pill background)
- `--deep`: `#061120` (dark page background)

### Brand + Status
- `--teal`: `#1fc7b6` (brand accent)
- `--teal-strong`: `#0f766e` (focus ring / accessible accent text)
- `--success-text`: `#166534` (success message text on light surfaces)

### Chrome Palette
- `--chrome-dark`: `#171d27`
- `--chrome-medium`: `#2a3442`
- `--chrome-light`: `#465466`
- `--chrome-accent`: `#9aa8ba`

## Accessibility Rules
- Standard text must meet at least `4.5:1` contrast ratio.
- Large text (18px+ regular or 14px+ bold) must meet at least `3:1`.
- Never use light mint text (`#76f0e2`) on white/light backgrounds.
- Use:
  - `.kicker` on dark backgrounds.
  - `.kicker.kicker-on-light` on light backgrounds.
- Use `.status-success` for success text instead of `text-green-600` on white.
- Preserve visible keyboard focus (`:focus-visible` ring is required).

## CTA Styles
### Primary CTA (`.btn-primary`, `Button` `primary`)
- Chrome gradient fill (`chrome-medium` -> `chrome-dark`)
- Light text (`#f5f8fc`)
- Teal accent edge/glow for brand continuity
- Use for highest-priority actions only

### Secondary CTA (`.btn-secondary`)
- Light chrome/neutral gradient
- Dark text
- Works on both light and dark sections without contrast loss

## Implementation Sources of Truth
- CSS variables + shared classes: `frontend/src/index.css`
- Tailwind color map: `frontend/tailwind.config.js`
- JS color constants: `frontend/src/utils/constants.js`

When adding new UI, prefer these existing tokens and classes over one-off hex values.

## Section Background Guidance
- Default light sections: `bg-[var(--soft-surface)]`
- White sections: use only when contrast and separation are still clear
- Dark hero/feature sections: retain dark backgrounds and high-contrast text

## Review Checklist (Before Merge)
- All new text/background pairs pass WCAG AA.
- No direct low-contrast green text on white.
- New CTAs follow primary/secondary rules.
- No new ad-hoc palette values without design sign-off.
