# RescueNet360 Shelters Page Visual Style Guide

This document captures the visual system shown in the provided webpage screenshot for the RescueNet360 shelters and rescues landing page.

It is intended as a page-specific reference, not a replacement for the broader site theme docs.

Use this alongside:

- `docs/THEME_GUIDE.md`
- `docs/APP_STYLE_GUIDE.md`

## Scope

This guide is based on a static screenshot. Some values below are approximate visual matches rather than exact exported design tokens.

Treat these items as:

- `Directly visible`: layout, hierarchy, section order, component types, relative emphasis
- `Approximate`: hex values, spacing scale, font family, exact pixel sizes
- `Recommended`: responsive behavior and implementation rules needed to reproduce the design faithfully

## 1. Overall Visual Direction

The page presents a clean, mission-driven SaaS marketing style with:

- warm documentary-style animal welfare photography
- a bright, optimistic palette built around teal and purple
- soft tinted section backgrounds instead of heavy borders
- rounded cards and buttons with gentle shadows
- strong heading hierarchy with short, high-clarity messaging
- a balance of emotional imagery and operational/product credibility

The design should feel:

- trustworthy
- compassionate
- modern
- energetic but not playful
- polished enough for B2B software buyers and nonprofit partners

## 2. Page Structure

The screenshot shows this order:

1. Top navigation bar
2. Hero section with split layout
3. Challenge section
4. Solution band
5. "What You Can Do" feature grid
6. Audience/persona card row
7. Pilot program banner
8. Closing three-column value/mission/CTA block

This page is designed as a long-form conversion landing page with repeated CTA opportunities.

## 3. Layout System

### Container

- Max content width: approximately `1200px` to `1280px`
- Horizontal padding: approximately `24px` mobile, `32px` tablet, `48px` desktop
- Sections align to one primary centered container

### Vertical Rhythm

- Major section padding: approximately `56px` to `88px`
- Small label-to-heading spacing: `8px` to `12px`
- Heading-to-body spacing: `12px` to `20px`
- Body-to-CTA spacing: `24px` to `32px`
- Card gaps: `16px` to `24px`

### Grid Patterns

- Hero: `2-column`, roughly `48/52`
- Challenge row: `4 issue items + 1 highlighted result card`
- Feature grid: `3 columns x 2 rows`
- Audience grid: `4 equal-width cards`
- Closing row: `3 columns`, with the right column functioning as a CTA card

## 4. Color Palette

These are visually inferred from the screenshot and should be treated as close reference values.

### Core Brand Colors

- Deep navy text: `#18324B`
- Primary purple: `#6C35B4`
- Deep purple CTA/background: `#5B2C99`
- Bright teal: `#1FC7C8`
- Dark teal accent: `#0E9FA6`

### Supporting Surfaces

- Soft lavender background: `#F2EEFB`
- Light aqua band: `#CCF3F3`
- White card surface: `#FFFFFF`
- Pale gray page surface: `#F7F8FC`
- Soft lilac card tint: `#EEE9F8`

### Utility / UI Colors

- Primary text: `#18324B`
- Secondary text: `#44566C`
- Border / divider: `#DCE4EE`
- Soft shadow color: `rgba(24, 50, 75, 0.10)`

### Usage Rules

- Use navy for nearly all headings and core text.
- Use purple for primary CTA fills and emphasized heading fragments.
- Use teal for support accents, labels, icon backgrounds, and selected emphasis text.
- Use tinted section backgrounds to break up long scrolling sections instead of adding heavy rules.
- Keep pure black off the page; the screenshot uses softened dark ink instead.

## 5. Typography

The screenshot suggests a clean geometric or neo-grotesk sans-serif family.

Recommended implementation:

- Headings: `Sora`, `Manrope`, or a similarly rounded modern sans
- Body: `Manrope`, `Inter`, or a similarly neutral sans

### Type Hierarchy

#### Navigation

- Size: approximately `15px` to `17px`
- Weight: `500` to `600`
- Color: deep navy

#### Eyebrow / Section Label

- Size: approximately `11px` to `13px`
- Weight: `700`
- Transform: uppercase
- Letter spacing: slight positive tracking
- Background: tinted pill
- Text color: purple or dark teal depending on section

#### Hero Heading

- Size: approximately `52px` to `64px`
- Weight: `800`
- Line height: tight, approximately `0.95` to `1.05`
- Color: deep navy with emphasized phrase in purple

#### Section Heading

- Size: approximately `36px` to `46px`
- Weight: `800`
- Line height: approximately `1.05` to `1.15`
- Color: deep navy

#### Card Title

- Size: approximately `20px` to `24px`
- Weight: `700`
- Color: deep navy

#### Body Copy

- Size: approximately `16px` to `18px`
- Weight: `400` to `500`
- Line height: approximately `1.45` to `1.65`
- Color: secondary text

#### Short Emphasis Line

- Size: approximately `18px` to `22px`
- Weight: `700`
- Color: navy or teal depending on role

### Text Style Rules

- Headlines are short and declarative.
- Many sections use a two-line or three-line headline block.
- Important phrases inside headlines are color-shifted to purple or teal.
- Paragraphs remain compact and readable, generally `2` to `4` lines wide at desktop.

## 6. Navigation

### Header Bar

- White background
- Fixed or visually anchored at top
- Subtle bottom separation via shadow or `1px` border
- Logo left, nav links centered or slightly right-biased, CTA at far right

### Logo

- Brandmark includes teal and purple iconography
- Wordmark uses navy and teal
- Keep ample whitespace around logo

### Nav Links

- Horizontal layout
- Moderate spacing, approximately `32px` to `40px`
- Minimal decoration
- Hover should likely use color shift to purple or teal, not underline-heavy styling

### Header CTA

- Filled purple rounded rectangle
- White text
- Larger and more prominent than nav links
- Corner radius: approximately `12px` to `16px`

## 7. Buttons

### Primary Button

- Fill: deep purple
- Text: white
- Optional right-arrow icon
- Radius: `12px` to `16px`
- Padding: approximately `14px 24px`
- Weight: `700`
- Shadow: subtle, not dramatic

Used for:

- "Apply to Be a Pilot Partner"

### Secondary Button

- White or very light fill
- Teal border
- Teal text
- Same corner radius as primary
- Similar size to primary

Used for:

- "Learn How It Works"

### Button Behavior

- Hover should deepen fill or slightly lift
- Active state should reduce shadow and move back to base plane
- Focus state should use visible high-contrast ring

## 8. Hero Section

### Composition

- Left side: messaging block on a soft lavender background
- Right side: large photo cropped edge-to-edge within the section
- The split is clean, with the image occupying about half the hero width

### Left Content Order

1. Eyebrow pill
2. Large headline
3. Short supporting emphasis line
4. Body paragraph
5. Primary and secondary CTA row

### Hero Background

- Base surface: soft lavender
- Optional subtle radial wash or blurred transition where the image meets the text panel

### Photo Style

- Bright, natural light
- Human-animal connection
- Emotionally warm but still operationally relevant
- Documentary realism, not stock-photo artificiality

## 9. Challenge Section

### Layout

- White background
- Left-aligned section intro
- A row of four issue cards/icons
- A separate highlighted "result" panel on the right

### Issue Items

Each item uses:

- circular or softly rounded icon container
- simple single-color icon, usually purple or teal
- short bold title
- 1 to 2 lines of explanatory text

### Result Panel

- light tinted lavender card
- larger bold text block
- purple text emphasis
- decorative paw graphic in lower corner

This panel visually summarizes the negative impact of fragmentation.

## 10. Solution Band

### Treatment

- Full-width light aqua background
- Strong left headline
- Supporting paragraph on the right

This section acts as a tonal reset after the problem framing.

### Style Rules

- Use fewer decorative elements here
- Let the background color create emphasis
- Keep copy concise and strategic

## 11. Feature Grid: "Do More for Animals"

### Structure

- Section intro above
- Six white feature cards in a `3 x 2` grid
- Even card heights
- Soft shadows and rounded corners

### Card Anatomy

1. Circular or softly rounded icon badge
2. Bold feature title
3. Short supporting sentence

### Card Visual Rules

- Background: white
- Radius: approximately `14px` to `18px`
- Border: very light or none
- Shadow: subtle, likely `0 6px 18px rgba(24, 50, 75, 0.08)`
- Icon area uses pastel teal or lavender backing

### Icon Style

- Simple outlined or solid glyphs
- Monotone purple or teal
- Friendly, legible, low-detail iconography

## 12. Audience / Persona Cards

### Layout

- Four cards in a single row
- Large image on top portion
- Colored caption block on lower portion

### Persona Categories Shown

- Shelters & Rescue
- Foster Coordinators & Volunteers
- Transport & Partner Organizations
- Pet Owners

### Visual Pattern

- Card top: photo crop
- Card bottom: bold colored band
- Band colors alternate between purple and teal
- White icon and white text on the colored band

### Card Style

- Radius: approximately `12px` to `16px`
- Overflow hidden
- Minimal visible border
- Stronger visual contrast than the earlier white feature cards

### Imagery Guidance

- Use real people, real animals, and real environments
- Prefer warm daylight and authentic action
- Avoid sterile studio shots

## 13. Pilot Program Banner

### Role

This is the strongest mid-page conversion block.

### Background

- Full-width purple gradient or layered purple surface
- Brighter center glow / subtle lighting effect
- High contrast against surrounding sections

### Layout

- Left: headline and supporting copy
- Center: four short benefit points with simple icons
- Bottom/center: prominent teal CTA button
- Right: supporting photo of a person holding a dog

### Color Behavior

- White text dominates
- Teal button provides the main accent
- Icons are white outlines

### CTA Treatment

- This section reverses the usual primary pattern by making teal the key action color against purple

## 14. Final Closing Section

### Layout

- Three-column structure
- Left: urgency / "Why now?"
- Center: mission statement
- Right: CTA card with button

### Surface Treatment

- Very light page background
- Right CTA block uses a soft lavender card
- Decorative paw graphic repeats as a branding motif

### Messaging Role

- End on urgency, mission, and action
- Keep the final CTA visually easy to find without rebuilding a full hero

## 15. Shape Language

- Rounded rectangles are used throughout
- Circular icon holders soften the interface
- No sharp, severe angles
- Decorative paw graphics act as occasional low-contrast brand flourishes

Recommended radii:

- Pills: `9999px`
- Buttons: `12px` to `16px`
- Standard cards: `14px` to `18px`
- Large banners/panels: `20px` to `24px`

## 16. Shadows And Borders

### Shadows

- Soft and shallow
- Used mostly on cards and buttons
- Avoid heavy dark elevation

Recommended ranges:

- Cards: `0 6px 18px rgba(24, 50, 75, 0.08)`
- Large surfaces: `0 10px 30px rgba(24, 50, 75, 0.08)`
- Buttons: `0 6px 14px rgba(91, 44, 153, 0.18)` for purple buttons

### Borders

- Minimal
- Often replaced by tint differences and shadow
- When present, use very light cool gray or tinted teal borders

## 17. Photography Direction

The imagery is central to the page identity.

Use photos that show:

- people physically interacting with animals
- volunteers, staff, foster coordinators, and pet owners
- shelters, transport contexts, or real welfare environments
- joy, care, trust, and action

Avoid:

- overly polished corporate stock imagery
- flat or emotionless pet portraits
- imagery without human context

## 18. Copy Style

The page copy uses:

- plain language
- high empathy
- operational clarity
- short sentence length
- outcome-driven phrasing

Preferred tone:

- compassionate
- practical
- credible
- optimistic

Avoid:

- jargon-heavy SaaS phrasing
- overly cute pet-marketing language
- inflated claims without grounded outcomes

## 19. Responsive Behavior

The screenshot is desktop-first, but the following behavior is implied for smaller screens.

### Tablet

- Hero stacks or becomes a tighter split
- Feature grid drops from `3 x 2` to `2 x 3`
- Audience cards drop to `2 x 2`
- Pilot banner content becomes vertically stacked with CTA kept high in the flow

### Mobile

- Single-column section flow
- Hero image moves below text or becomes a reduced-height top image
- Nav collapses to a menu button
- Buttons stack vertically or wrap with full-width emphasis
- Challenge items become stacked cards
- Final three-column section becomes three stacked blocks

### Mobile Spacing

- Reduce heading size proportionally, but preserve strong hierarchy
- Maintain generous card padding
- Keep touch targets at least `44px` tall

## 20. Accessibility And Implementation Notes

To reproduce the design without losing usability:

- ensure purple-on-light and teal-on-white combinations pass WCAG AA
- do not rely on color alone for hierarchy; use size and weight too
- keep white text only on sufficiently dark purple or teal surfaces
- provide visible focus rings on all buttons and links
- maintain alt text quality for all animal and human imagery

## 21. Recommended Token Mapping

If implemented in the current codebase, this screenshot can map approximately to:

- `--ink`: deep navy text
- `--teal`: bright teal accent
- add a page-specific purple token such as `--brand-purple: #6C35B4`
- add a soft lavender section token such as `--lavender-soft: #F2EEFB`
- add a light aqua section token such as `--aqua-soft: #CCF3F3`

Do not treat this screenshot as requiring a full redesign of the existing token system. It is better handled as a page-level extension of the existing RescueNet360 palette.

## 22. Build Checklist

Before calling the page visually complete, confirm:

- section order matches the screenshot
- purple and teal are balanced rather than competing
- headline emphasis colors match the original hierarchy
- cards use rounded corners and soft elevation consistently
- photography feels authentic and emotionally warm
- the pilot banner is the boldest non-hero conversion block
- mobile stacking preserves CTA visibility and reading order

## 23. Summary

This page style is defined by:

- compassionate real-world imagery
- navy, purple, and teal brand contrast
- rounded SaaS card patterns
- strong conversion-oriented CTAs
- soft pastel section changes
- clean editorial hierarchy with minimal visual clutter

That combination creates a page that feels both mission-led and operationally credible.
