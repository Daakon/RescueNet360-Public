# RescueNet360 Design System & Styling Skill

## Goal
Enforce the "Empathetic Sanctuary" design system and strict 90/10 global-to-local CSS ratio when writing frontend code for RescueNet360.

## Rules
1. **NO HARDCODED COLORS:** Never use arbitrary Tailwind color utility classes like `bg-white`, `text-slate-700`, `bg-slate-50`, `border-gray-200`, `text-amber-600`.
2. **USE SEMANTIC TOKENS:** Always use the design system semantic classes defined in `tailwind.config.js`:
   - Surfaces: `bg-surface`, `bg-surface-elevated`, `bg-surface-muted`, `bg-bg-subtle`.
   - Text: `text-text-primary`, `text-text-secondary`, `text-text-muted`, `text-text-inverse`.
   - Structural: `border-separator`, `border-separator-strong`.
   - Status: `text-state-warning-text`, `bg-state-success-bg`, `text-state-danger`.
3. **COMPONENT FIRST:** Avoid combining dozens of utility classes. Use semantic component classes defined in `@layer components` of `index.css`:
   - `card`, `card-hover`, `card-comfortable`, `card-compact` (Provides background, rounded corners, padding, and elevation/shadow).
   - `btn`, `btn-primary`, `btn-secondary` (Provides standard button interaction).
   - `section-comfortable`, `section-compact` (Provides standard vertical padding).
4. **ELEVATION OVER BORDERS:** Use shadows (`shadow-soft`, `shadow-card`, `shadow-elevated`) instead of solid 1px borders unless strictly necessary.
5. **EXCEPTION RULE (10%):** You may only use an inline or arbitrary Tailwind class if it is a structural necessity (e.g. `grid`, `flex`, `p-4`, `m-2`) or an explicit one-off design requirement that cannot be solved by the global theme (e.g., a specific hero image gradient `bg-white/10`).

## Enforcement
Whenever you generate or modify a JSX/TSX component or CSS:
- SCAN your output for any legacy color names (`slate`, `gray`, `white`, `black`, `indigo`, `purple`, `teal`, `amber`).
- PURGE these classes and map them to their `surface`, `text-*`, `bg-*`, or `state-*` equivalents.
