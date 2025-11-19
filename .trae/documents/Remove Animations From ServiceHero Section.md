## Scope
- Remove all CSS animations in the Service page ServiceHero section so content renders immediately without fades/zooms.

## Targets to Update
- `src/Component/ServiceHero/ServiceHero.css`
  - `.service-hero__img`: remove `animation: heroZoom ...`; optionally remove `transform: scale(1.04)` to avoid zoom.
  - `.service-hero__content`: remove `opacity:0; animation: fadeUp ...` so text appears immediately.
  - `.service-hero__cta`: remove `opacity:0; animation: fadeUp ...` so the CTA is visible without fade.
  - `.service-hero__card`: remove `opacity:0; animation: fadeUp ...` so the media card loads without fade.
  - Keep `@keyframes` definitions; or optionally delete them if unused after changes.

## Implementation Steps
1. Edit `.service-hero__img`, `.service-hero__content`, `.service-hero__cta`, `.service-hero__card` to remove `animation` and `opacity:0` declarations.
2. For `.service-hero__img`, also remove the initial `transform: scale(1.04)` so there’s no zoom effect.
3. Ensure no other ServiceWhy/Service sections include remaining animation rules (they won’t be affected by this change).
4. Build and visually verify that the section renders instantly with no motion.

## Optional (Toggle Approach)
- Instead of hard-removing, add a modifier class (e.g., `.service-hero--no-anim`) and move `animation: none` there, then apply the modifier in the JSX. This allows future enabling/disabling without code edits.

## Validation
- Reload the Services page to confirm text, CTA, image/video card appear immediately without size or position jumps.
- Confirm no layout shift due to `opacity` removal.

Confirm and I will apply the changes exactly as listed.