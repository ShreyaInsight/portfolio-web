# Project case-study specification

Measured live on 2026-09-22 at 1440, 1024, 768 and 390px, each 900px high. All seven destinations linked from the [reference index](https://www.sunnypatel.net/projects) were visited independently and scrolled to the bottom. The research destination is /research, not /projects/research.

The complete literal computed CSS for every main-content element at every width is in [COMPONENT-CSS.json](case-studies/COMPONENT-CSS.json), keyed by project, viewport and DOM selector. Full DOM, full untruncated body copy, inline SVGs, image dimensions, source CSS rules, external links and runtime evidence are in case-studies/<slug>-<width>.json. These are observations, not visual estimates.

## Structure and optional sections

| Page | Primary links | Previews | Additional / conditional content |
|---|---|---|---|
| [basalt](https://www.sunnypatel.net/projects/basalt) | Source, Docs | 1 | Maintained status; DOI + PyPI badges; 5 narrative paragraphs; highlights; stack; APA/BibTeX citation cards, DOI/ORCID |
| [ATS Screener](https://www.sunnypatel.net/projects/ats-screener) | Live, Source, Docs | 1 | Maintained status; animated user metric and 6-engine metric; 4 narrative paragraphs; highlights; stack |
| [Sunnify](https://www.sunnypatel.net/projects/sunnify) | Live, Source | 1 | Maintained status; stars + downloads badges; 4 narrative paragraphs; highlights; stack |
| [Axelot](https://www.sunnypatel.net/projects/axelot) | Live, Source | 1 | No maintained badge; 4 narrative paragraphs; highlights; stack; Team note |
| [Netdash](https://www.sunnypatel.net/projects/netdash) | Live, Source | 1 | Maintained status; 4 narrative paragraphs; highlights; stack |
| [KnifeThrow](https://www.sunnypatel.net/projects/knifethrow) | Source only | 1 | No maintained badge; 4 narrative paragraphs; highlights; stack |
| [Research](https://www.sunnypatel.net/research) | Read the paper, Code and data | 1 figure | 21-pages metadata; caption; Abstract (2 paragraphs); Key findings; citations; no tech-stack list |

No extra screenshot galleries or changelogs appeared below these sections. Project next-navigation order is basalt → ATS Screener → Axelot → Sunnify → Netdash → KnifeThrow → basalt. Research ends with Back to / All projects.

## Shared component measurements

Values below are literal desktop/mobile computed values; expanded selectors and all intermediate widths are in COMPONENT-CSS.json.

| Component | Measured values |
|---|---|
| Page wrapper | padding-top/bottom 112px |
| Container | max-width 1152px; horizontal padding 40px at ≥640px, 24px below |
| Back navigation | mono 12px / 16px, weight 400; gap 6px; muted rgb(138,146,155); arrow 14px |
| Meta row | margin-top 36px; flex-wrap; gap 12px; mono 12px / 16px |
| Project title | 60px / 58.8px at ≥640px; 44.8px / 43.904px below; weight 600; tracking -1.8px / -1.344px; margin-top 16px |
| Intro paragraph | max-width 672px; margin-top 20px; 20px / 32.5px desktop, 18px / 29.25px mobile |
| Primary links | margin-top 28px; gap 24px; mono 14px / 20px; icons 16px |
| Badges / metrics | margin-top 36px; column-gap 28px; row-gap 16px; badge height 21.6px |
| Preview section | margin-top 56px; inner max-width 980px; screenshot aspect-ratio 16 / 10 |
| Browser panel | radius 12px; border 1px rgb(38,43,48); background rgb(18,21,24); shadow rgba(0,0,0,.85) 0px 40px 90px -40px |
| Browser bar | padding 10px 14px; gap 6px; border-bottom 1px; 10px dots; optional URL text |
| Preview glow | inset -32px; radius 40px; blur(64px); exact color-space gradient in COMPONENT-CSS.json |
| Narrative/sidebar grid | margin-top 64px; at ≥1024px columns 1.55fr 1fr, gap 64px; below one column, gap 48px |
| Narrative | 16.8px / 27.3px; paragraph spacing 20px; rgb(199,195,186) |
| Sidebar | at ≥1024px left border 1px rgb(38,43,48), padding-left 48px; no left border/padding below |
| Section labels | mono 11.2px / 16.8px; tracking 2.464px; uppercase; gap 12px; rule width 28px |
| Highlight list | margin-top 20px; item spacing 12px; 15.2px / 24.7px; bullet/text gap 12px |
| Stack pills | list margin-top 20px, gap 8px; mono 12.48px / 18.72px; padding 4px 10px; radius 4px; surface background |
| Citation shell | margin-top 64px; padding 32px ≥640px / 24px below; border 1px; radius 12px |
| Citation cards | radius 8px; padding 16px; border 1px; gap 16px between cards |
| Copy controls | padding 6px 10px; gap 6px; radius 6px; border 1px; mono 11.2px / 16.8px |
| APA / BibTeX | mono 12.8px / 20.8px and 11.52px / 18.72px respectively; margin-top 10px; BibTeX horizontally scrollable |
| Next project | margin-top 96px; top border 1px; padding-top 40px; title 24px / 32px desktop, 20px / 28px mobile |

## Color and typography tokens

Page rgb(11,13,15); panel rgb(18,21,24); headline rgb(237,232,220); body rgb(199,195,186); muted rgb(138,146,155); accent rgb(217,102,61); hover accent rgb(232,121,78); border rgb(38,43,48). Transparent/color-mix backgrounds and exact gradients are retained in the scoped stylesheet and per-element evidence.

Headings: Geist, \"Geist Fallback\". Body: \"Hanken Grotesk\", \"Hanken Grotesk Fallback\", ui-sans-serif, system-ui, sans-serif. Mono: \"Geist Mono\", \"Geist Mono Fallback\". Existing local variable fonts (100–900) are reused.

## Motion and interactions

- Heading SplitText: yPercent 110 → 0, opacity 0 → 1, .9s, power3.out, stagger .08s, top 85%, once.
- Section reveals: y 18 → 0, opacity 0 → 1, .7s, cubic-bezier(.16,1,.3,1), viewport margin -12% 0px, once.
- Preview parallax: supplied speed .96; yPercent (1 - .96) × 30; ease none; ScrollTrigger top bottom → bottom top, scrub true.
- Status ping: 1s infinite cubic-bezier(0,0,.2,1); scale 2 and opacity 0 at 75% and 100%.
- Link colors: .15s cubic-bezier(.4,0,.2,1). Back arrow translates -2px on hover. Outward arrows translate +2px x / -2px y.
- Preview image declares scale 1.04 on group hover, .8s cubic-bezier(.22,1,.36,1); case-study panel has no enclosing group, so this declaration is not an active hover zoom on these pages.
- Copy APA/BibTeX: copies that card's text, displays check/Copied, resets after 1800ms.
- ATS count: 2500ms, floor((1 - 2^(-12p)) × total), threshold .35; tabular invisible width reservation prevents layout shift.
- Shared Lenis, header, mobile menu and custom cursor remain. Reduced-motion removes nonessential page effects.

## Implementation boundaries

Seven static routes were created with local screenshots/badge snapshots and reference-authored case-study text and attribution preserved. The surrounding header/footer keep the existing Shreya identity. These are reference-content replicas, not a claim that the current site owner authored those projects. Replace the case-study copy with owned work before publishing if that is not intended.

Badges and ATS metrics are capture-time snapshots, not a connection to the reference owner's live services. Their values can change; the original ATS capture even caught a count mid-animation. No third-party analytics or Firestore account/configuration was copied. Research PDF remains an external reference link. No unseen gallery or section was invented.

