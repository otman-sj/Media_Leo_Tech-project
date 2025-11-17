## Overview
Implement a new site footer that matches the provided design and JSON spec: 3-column grid inside a light-gray section, plus a centered copyright row and three floating action buttons (scroll-to-top, chat, WhatsApp) stacked on the right.

## Files To Add
1. src/Component/Footer/Footer.jsx – semantic, accessible footer markup
2. src/Component/Footer/Footer.css – theme variables, grid, links, copyright, FAB styles
3. (Optional) src/Component/Footer/icons/*.svg – inline or imported icons if not using existing assets

## Implementation Details
- Section wrapper: `<footer class="site-footer" role="contentinfo">` with CSS vars:
  - `--bg: #f5f5f5`, `--ink: #2b2b2b`, `--muted: #6c6c6c`, `--accent: #F59A23`, `--divider: #e6e6e6`, `--whatsapp: #25D366`, `--white: #fff`
- Inner grid: `.footer__grid` max-width 1280px, 3 columns: 1.2fr / 1fr / 1fr, gap 80px
- Column 1 (Brand/About/Contact):
  - Logo `<img class="footer__logo" src={Logo.svg} alt="Media Leo Tech" />`
  - Tagline paragraph from JSON
  - Contact list `<address>` with `mailto:` and `tel:` links
- Column 2 (Quick Links):
  - `<nav aria-label="Footer Quick Links">` with list items and hrefs
- Column 3 (Services):
  - `<nav aria-label="Footer Services">` with service links
- Copyright row:
  - `.footer__copyright` centered text, underline orange link to `https://www.medialeotech.com`
- Floating Actions (FAB):
  - Container `.fab` fixed at right-middle; buttons `.fab__btn`
  - Top + Chat orange; WhatsApp green with white 4px border
  - Buttons include accessible `aria-label`: "Scroll to top", "Open chat", "WhatsApp chat"
  - Scroll-to-top smooth scroll to `#root` or window top; chat button is a placeholder action for now
- Icons:
  - Use inline SVG for arrow-up, chat-bubble outline, WhatsApp; color white

## Accessibility & Semantics
- Footer landmark `role="contentinfo"`
- Separate `nav` regions with aria-labels
- Address for contact block; icons `aria-hidden="true"`
- Visible focus styles for links/buttons

## Responsive Behavior
- ≤1024px: 2 columns (brand + quick links | services)
- ≤640px: 1 column stacked; padding reduced
- FAB position adjusted slightly: right: 20px; bottom: 84px

## Integration
- Import and render `<Footer />` at the end of `App.jsx` (below Process)
- Reuse existing fonts (`Inter`, `Poppins`, `Segoe UI`) via index.css

## Deliverables
- Footer.jsx markup matching JSON content
- Footer.css styles implementing the provided skeleton and palette
- Working FABs with hover/focus states

## Next Steps After Approval
- Implement files and styles
- Wire smooth scroll behavior for the top button
- Optionally hook chat/WhatsApp to real widgets or links