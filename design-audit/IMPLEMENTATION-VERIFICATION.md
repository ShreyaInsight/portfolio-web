# Implementation and verification

Updated: 2026-09-22. Local site: http://127.0.0.1:5500/.

## Project case-study implementation

Added six project routes (`projects/basalt/`, `projects/ats-screener/`, `projects/sunnify/`, `projects/axelot/`, `projects/netdash/`, `projects/knifethrow/`) and the independently structured `research/` route. Each uses its own full live capture, including narrative paragraphs, links, badges, preview, highlights, stack and optional citations/team note. Added the missing Sunnify index card and wired all seven case-study destinations. Basalt and ATS index Source/Docs links now use their captured destinations.

See [CASE-STUDY-SPEC.md](CASE-STUDY-SPEC.md) for exact component measurements, per-project structure differences and implementation boundaries. `case-studies/COMPONENT-CSS.json` contains the literal computed values; the 28 full reference captures retain untruncated content.

`case-studies/verification.json` records 38,464 property comparisons across seven routes at 1440, 1024, 768 and 390px: zero differences in the checked properties, no horizontal overflow, broken main-content images or recorded JavaScript errors. This is a defined-property comparison, not a claim of exhaustive pixel/behavior equivalence. Dynamic badges/counters are snapshots, and reference attribution is preserved. Shared Shreya identity and the existing laptop remain unchanged.

Interaction rerun (`case-studies/interactions.json`): all seven routes passed internal-link HTTP checks, 259px mobile-menu opening/closing, reveal visibility, and real wheel reversal (900px to 600px, unchanged after settling, velocity zero). Basalt and Research citation copy buttons reported successful copy then reset; both passed reduced-motion checks. No JavaScript errors were recorded. Synthetic `.click()` had initially lacked clipboard activation; real browser clicks passed. Browser reload interruptions were excluded by completing an uninterrupted rerun.

## Follow-up precision pass

Compared this report with SPEC-SHEET.md and the linked raw DOM captures. The previous typography checks did not cover all layout properties. This pass corrected:

- Desktop navigation gap: 32px.
- Footer: flex layout; column-to-row change at 640px, top gap 32px, bottom gap 8px, link-group gaps 20px.
- Project list: top margin 80px; row spacing 112px below 640px and 144px above; removed inherited extra bottom padding and duplicate article margins.
- Research: top margin 128px and top padding 64px; figure padding 20px/28px and copy padding 24px/32px at the 640px breakpoint.
- More work: top margin 112px, top padding 64px, restored top border.
- Project preview glows: inset -32px, radius 40px, blur 64px, and the captured ember gradient. The glow is outside the clipped preview frame.
- Project action-row margin 28px and gap 24px.
- Profile facts: baseline-aligned flex rows and 16px gap.
- Résumé preview: maximum width 840px and top margin 56px, taken from the raw `max-w-[840px] mt-14` capture; action gap 20px.

Added 348 layout/effect assertions across all 24 page/viewport combinations. All passed. The reference records—not visual estimates—are the source of these values. Typography and interaction regressions are checked separately below.

The control-transition pass also corrected standard links to 150ms and primary controls to 300ms, with the exact recorded transition-property lists and cubic-bezier(0.4,0,0.2,1). It covers desktop/mobile navigation, search, primary actions, résumé links, contact links, footer links, and the skip link. Navigation number spacing and the home résumé link's padding/type size were corrected as well. All 348 transition-property comparisons passed at 1440px and 390px across all six pages.

The final responsive regression caught an 8px mobile overflow from the decorative project glow. The Projects page now clips horizontal decorative overflow. Projects was re-tested at all four widths after this correction; other page results are retained in the same verification file. The responsive runner now exits unsuccessfully if body width exceeds the viewport, an element overflows, an image is broken, scrolling is unavailable, or scroll position drifts after settling.

## Applied

- Shared palette, locally hosted Geist/Hanken Grotesk/Geist Mono fonts, responsive typography, containers, grids, spacing, borders, shadows, and radii across the six existing pages.
- Shared fixed header, 300ms collapsible mobile navigation, searchable keyboard-accessible command menu, and local page navigation.
- Lenis 1.3.26 with lerp 0.1 and one GSAP ticker. There are no wheel timeout cutoffs or scroll-event handlers that repeatedly call scrollTo.
- GSAP line reveals: 0.9 seconds, power3.out, 0.08-second stagger, top 85%, automatic line re-splitting on resize.
- Section reveals: opacity and 18px translation, 0.7 seconds, cubic-bezier(0.16,1,0.3,1), once-only IntersectionObserver with root margin -12% 0px.
- Magnetic controls: strength 0.35, 0.6 seconds, elastic.out(1,0.4). Custom cursor dimensions, movement, and hover scaling match the recorded values.
- Terminal: 34ms typing, 2800ms completed hold, cursor follows the active line, fixed line boxes, and the recorded pulse animation.
- Project-image hover: 800ms, cubic-bezier(0.22,1,0.36,1), scale 1.04. Restored captured SVG paths for common controls and the bouncing scroll indicator.
- Portrait: 320px maximum width, 4:5 ratio, captured gradient glow, blur 40px, opacity 0.8 to 1 over 500ms.
- Contact: measured field backgrounds, borders, padding and focus state; floating illustration animation.
- Reduced-motion support for CSS effects, text/section reveals, cursor, terminal, scrolling, and laptop idle motion.

## Verification evidence

| Check | Evidence |
| --- | --- |
| Six pages × 1440, 1024, 768, 390px | `local-verification.json` |
| 348 layout/effect assertions, no mismatches | `layout-verification.json`, `verify-layout.cjs` |
| 348 transition-property comparisons, no mismatches | `transition-verification.json`, `transition-map.cjs` |
| 1,536 mapped typography-property comparisons, no mismatches | `spec-verification.json`, mappings in `component-map.cjs` |
| Mobile menu opens to 390 × 259px, closes to zero height and becomes inert | `local-interactions.json` |
| Accent-insensitive search, focus, and Escape dismissal | `local-interactions.json` |
| All tested reveal targets visible after traversing every page | `local-interactions.json` |
| Broken images and JavaScript page errors | `local-interactions.json` |
| Real wheel reversal settles; hover matrix, resize and reduced-motion behavior | `motion-verification.json` |
| Desktop/mobile visual checks | `local-*-1440.png`, `local-*-390.png`, `local-full-*.png` |

JavaScript syntax was checked for site.js, smooth-scroll.js, and threeD.js.

## Intentional differences and limits

- The user explicitly chose to retain the laptop. Its idle oscillation uses the reference amplitudes and frequencies; its model, base orientation, lighting, and framing remain adapted to the laptop rather than the reference retro computer.
- Shreya-specific content, portrait, résumé, and existing contact artwork remain. Different text and assets naturally produce different page heights and image appearance.
- The site remains static HTML/CSS/JavaScript. Matching the visible design does not require migrating it to the reference's Next.js/React stack. Analytics were not copied.
- The contact form retains its existing mailto workflow. No delivery service or reCAPTCHA was added, and no message was sent during verification.
- Project case-study routes are now implemented as described above; externally hosted products remain external destinations, not locally recreated product flows.
- The 2,232 property checks (1,536 typography, 348 layout/effect, 348 transition) cover explicitly mapped properties, not every possible DOM property or interaction state. The original audit also excludes exhaustive form-error and search-result states. These tests do not establish blanket pixel-for-pixel equivalence or a guarantee against all browser/device issues.
- The scroll checks reproduce reversal and settling in Chrome; they do not prove the cause of the previously reported VS Code embedded-preview behavior.

The shared implementation is in `spec.css`, `spec-details.css`, `site.js`, `smooth-scroll.js`, and `threeD.js`. HTML asset URLs are versioned to avoid stale preview caches.
