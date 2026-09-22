# sunnypatel.net — measured design specification

Captured 2026-09-21T13:23:38.203Z from https://www.sunnypatel.net/. Chromium, CSS viewport widths 1440 / 1024 / 768 / 390, fixed height 900 CSS px, devicePixelRatio 1. Width tests are responsive desktop-browser tests, not touch-device emulation. Default dark appearance, no reduced-motion override. Each page was scrolled to trigger lazy assets/reveals, then returned to the top. Values are literal computed CSS strings unless marked source. Fractional pixel values are retained. Hidden DOM elements are included and marked by their computed display/visibility; do not treat them as visible layout. Some computed colors use oklab(), lab(), or color(srgb); they are preserved rather than approximately converted to hex.

## Evidence and navigation

Local implementation status and regression evidence are tracked separately in [IMPLEMENTATION-VERIFICATION.md](IMPLEMENTATION-VERIFICATION.md). This specification remains the reference-site measurement record; the implementation report lists tested matches, intentional differences, and verification limits.

[Component measurements](COMPONENTS.md) contains per-page, per-width typography, spacing, borders, effects, and transitions. [Assets and icons](ASSETS.md) contains font declarations, loaded font URLs, image sizes, canvas dimensions, and inline SVG markup. [Source CSS](SOURCE-CSS.md) contains root blocks with cascade context, media queries, hover rules, and keyframes. The 24 `page-width.json` files contain all collected DOM records with selectors and full styles. Screenshots are `page-1440.png` and `page-390.png`. [Hover samples](hover-states.json), [mobile menu open](mobile-menu-open.json), and [scrolled header](header-scrolled.json) record additional states.

## Global palette

| Token (source) | Literal source value |
| --- | --- |
| `--color-black` | `#000` |
| `--color-bone` | `#ede8dc` |
| `--color-bone-dim` | `#c7c3ba` |
| `--color-dot-inactive` | `#2c3338` |
| `--color-ember` | `#d9663d` |
| `--color-ember-bright` | `#e8794e` |
| `--color-emerald-400` | `lab(75.0771% -60.7313 19.4147)` |
| `--color-field` | `#5a646d` |
| `--color-ink` | `#0b0d0f` |
| `--color-ink-2` | `#0e1113` |
| `--color-line` | `#262b30` |
| `--color-muted` | `#8a929b` |
| `--color-surface` | `#121518` |
| `--color-white` | `#fff` |

Body computed background: `rgb(11, 13, 15)`; body text: `rgb(237, 232, 220)`. Transparent backgrounds and alpha variants are mapped to individual components in COMPONENTS.md. Border base token is `--color-line: #262b30`; alpha borders are distinct values, not the base hex.

## Fonts and shared layout

| Role | Computed font stack |
| --- | --- |
| Display | `Geist, "Geist Fallback"` |
| Body | `"Hanken Grotesk", "Hanken Grotesk Fallback", ui-sans-serif, system-ui, sans-serif` |
| Monospace UI | `"Geist Mono", "Geist Mono Fallback"` |

Source Container: `mx-auto w-full max-w-6xl px-6 sm:px-10`: max-width `72rem` = `1152px`; padding-inline `24px` below 640px and `40px` at/above 640px. This is border-box sizing, so usable content at 1440px is `1072px`, not 1152px.

Exact stylesheet width breakpoints: `@media (min-width: 40rem)` = 640px; `48rem` = 768px; `64rem` = 1024px. Three.js additionally evaluates `(max-width: 1024px)` for model scale. No width breakpoint is inferred from screenshots. Source media rules and their declarations are in SOURCE-CSS.md.

| Page / H1 | 1440px size / line-height / spacing | 1024px | 768px | 390px |
| --- | --- | --- | --- | --- |
| home | `75.2px / 71.44px / -2.632px` | `75.2px / 71.44px / -2.632px` | `65.6px / 62.32px / -2.296px` | `49.6px / 47.12px / -1.736px` |
| projects | `48px / 49.44px / -1.2px` | `48px / 49.44px / -1.2px` | `48px / 49.44px / -1.2px` | `38.4px / 39.552px / -0.96px` |
| work | `48px / 49.44px / -1.2px` | `48px / 49.44px / -1.2px` | `48px / 49.44px / -1.2px` | `38.4px / 39.552px / -0.96px` |
| about | `41.6px / 44.928px / -0.832px` | `41.6px / 44.928px / -0.832px` | `41.6px / 44.928px / -0.832px` | `32px / 34.56px / -0.64px` |
| resume | `48px / 48.96px / -1.44px` | `48px / 48.96px / -1.44px` | `48px / 48.96px / -1.44px` | `38.4px / 39.168px / -1.152px` |
| contact | `67.2px / 63.84px / -2.016px` | `67.2px / 63.84px / -2.016px` | `67.2px / 63.84px / -2.016px` | `48px / 45.6px / -1.44px` |

## Page components and responsive reflow

### /

| Component / source classes | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| `header fixed inset-x-0 top-0 z-40 transition-colors duration-500 border-b border-transparent` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `main page-enter min-h-dvh scroll-mt-24 outline-none` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `section relative isolate overflow-hidden` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `div mx-auto w-full max-w-6xl px-6 sm:px-10 grid items-center gap-12 pb-16 pt-28 lg:min-h-dvh lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-24 lg:pb-24` | `display=grid; columns=546px 494px; gap=32px; padding=96px 40px; order=0` | `display=grid; columns=478.797px 433.188px; gap=32px; padding=96px 40px; order=0` | `display=grid; columns=688px; gap=48px; padding=112px 40px 64px; order=0` | `display=grid; columns=342px; gap=48px; padding=112px 24px 64px; order=0` |
| `section border-t border-line/60 py-24 sm:py-32` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=96px 0px; order=0` |
| `div mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3` | `display=grid; columns=330.656px 330.672px 330.656px; gap=40px; padding=0px; order=0` | `display=grid; columns=288px 288px 288px; gap=40px; padding=0px; order=0` | `display=grid; columns=324px 324px; gap=40px; padding=0px; order=0` | `display=grid; columns=342px; gap=40px; padding=0px; order=0` |
| `section border-t border-line/60 py-24 sm:py-32` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=96px 0px; order=0` |
| `div grid gap-3 border-b border-line py-7 md:grid-cols-[1fr_1.8fr] md:gap-10` | `display=grid; columns=368.562px 663.438px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=322.844px 581.156px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=231.422px 416.578px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=342px; gap=12px; padding=28px 0px; order=0` |
| `div grid gap-3 border-b border-line py-7 md:grid-cols-[1fr_1.8fr] md:gap-10` | `display=grid; columns=368.562px 663.438px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=322.844px 581.156px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=231.422px 416.578px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=342px; gap=12px; padding=28px 0px; order=0` |
| `div grid gap-3 border-b border-line py-7 md:grid-cols-[1fr_1.8fr] md:gap-10` | `display=grid; columns=368.562px 663.438px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=322.844px 581.156px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=231.422px 416.578px; gap=40px; padding=28px 0px; order=0` | `display=grid; columns=342px; gap=12px; padding=28px 0px; order=0` |
| `section border-t border-line/60 py-24 sm:py-32` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=128px 0px; order=0` | `display=block; columns=none; gap=normal; padding=96px 0px; order=0` |
| `section border-t border-line/60 py-28 sm:py-36` | `display=block; columns=none; gap=normal; padding=144px 0px; order=0` | `display=block; columns=none; gap=normal; padding=144px 0px; order=0` | `display=block; columns=none; gap=normal; padding=144px 0px; order=0` | `display=block; columns=none; gap=normal; padding=112px 0px; order=0` |
| `footer border-t border-line py-12` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` |

### /projects

| Component / source classes | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| `header fixed inset-x-0 top-0 z-40 transition-colors duration-500 border-b border-transparent` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `main page-enter min-h-dvh scroll-mt-24 outline-none` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `article group grid items-center gap-8 lg:grid-cols-2 lg:gap-16` | `display=grid; columns=504px 504px; gap=64px; padding=0px; order=0` | `display=grid; columns=440px 440px; gap=64px; padding=0px; order=0` | `display=grid; columns=688px; gap=32px; padding=0px; order=0` | `display=grid; columns=342px; gap=32px; padding=0px; order=0` |
| `article group grid items-center gap-8 lg:grid-cols-2 lg:gap-16` | `display=grid; columns=504px 504px; gap=64px; padding=0px; order=0` | `display=grid; columns=440px 440px; gap=64px; padding=0px; order=0` | `display=grid; columns=688px; gap=32px; padding=0px; order=0` | `display=grid; columns=342px; gap=32px; padding=0px; order=0` |
| `article group grid items-center gap-8 lg:grid-cols-2 lg:gap-16` | `display=grid; columns=504px 504px; gap=64px; padding=0px; order=0` | `display=grid; columns=440px 440px; gap=64px; padding=0px; order=0` | `display=grid; columns=688px; gap=32px; padding=0px; order=0` | `display=grid; columns=342px; gap=32px; padding=0px; order=0` |
| `div grid sm:grid-cols-[0.85fr_1.15fr]` | `display=grid; columns=454.75px 615.25px; gap=normal; padding=0px; order=0` | `display=grid; columns=400.344px 541.656px; gap=normal; padding=0px; order=0` | `display=grid; columns=291.547px 394.453px; gap=normal; padding=0px; order=0` | `display=grid; columns=340px; gap=normal; padding=0px; order=0` |
| `div mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3` | `display=grid; columns=336px 336px 336px; gap=64px 32px; padding=0px; order=0` | `display=grid; columns=293.328px 293.328px 293.344px; gap=64px 32px; padding=0px; order=0` | `display=grid; columns=328px 328px; gap=64px 32px; padding=0px; order=0` | `display=grid; columns=342px; gap=64px 32px; padding=0px; order=0` |
| `footer border-t border-line py-12` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` |

### /work

| Component / source classes | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| `header fixed inset-x-0 top-0 z-40 transition-colors duration-500 border-b border-transparent` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `main page-enter min-h-dvh scroll-mt-24 outline-none` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `article grid gap-5 border-b border-line py-9 transition-[opacity,transform] duration-300 ease-[var(--ease-premium)] md:grid-cols-[210px_1fr] md:gap-10 opacity-100` | `display=grid; columns=210px 822px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=210px 694px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=210px 438px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=342px; gap=20px; padding=36px 0px; order=0` |
| `article grid gap-5 border-b border-line py-9 transition-[opacity,transform] duration-300 ease-[var(--ease-premium)] md:grid-cols-[210px_1fr] md:gap-10 opacity-100` | `display=grid; columns=210px 822px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=210px 694px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=210px 438px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=342px; gap=20px; padding=36px 0px; order=0` |
| `article grid gap-5 border-b border-line py-9 transition-[opacity,transform] duration-300 ease-[var(--ease-premium)] md:grid-cols-[210px_1fr] md:gap-10 opacity-100` | `display=grid; columns=210px 822px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=210px 694px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=210px 438px; gap=40px; padding=36px 0px; order=0` | `display=grid; columns=342px; gap=20px; padding=36px 0px; order=0` |
| `div mx-auto w-full max-w-6xl px-6 sm:px-10 mt-20 grid gap-12 border-t border-line pt-14 pb-28 lg:grid-cols-2` | `display=grid; columns=512px 512px; gap=48px; padding=56px 40px 112px; order=0` | `display=grid; columns=448px 448px; gap=48px; padding=56px 40px 112px; order=0` | `display=grid; columns=688px; gap=48px; padding=56px 40px 112px; order=0` | `display=grid; columns=342px; gap=48px; padding=56px 24px 112px; order=0` |
| `footer border-t border-line py-12` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` |

### /about

| Component / source classes | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| `header fixed inset-x-0 top-0 z-40 transition-colors duration-500 border-b border-transparent` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `main page-enter min-h-dvh scroll-mt-24 outline-none` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `div mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16` | `display=grid; columns=428.391px 579.609px; gap=64px; padding=0px; order=0` | `display=grid; columns=374px 506px; gap=64px; padding=0px; order=0` | `display=grid; columns=688px; gap=48px; padding=0px; order=0` | `display=grid; columns=342px; gap=48px; padding=0px; order=0` |
| `div mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4` | `display=grid; columns=238px 238px 238px 238px; gap=40px; padding=0px; order=0` | `display=grid; columns=206px 206px 206px 206px; gap=40px; padding=0px; order=0` | `display=grid; columns=324px 324px; gap=40px; padding=0px; order=0` | `display=grid; columns=342px; gap=40px; padding=0px; order=0` |
| `footer border-t border-line py-12` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` |

### /resume

| Component / source classes | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| `header fixed inset-x-0 top-0 z-40 transition-colors duration-500 border-b border-transparent` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `main page-enter min-h-dvh scroll-mt-24 outline-none` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `footer border-t border-line py-12` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` |

### /contact

| Component / source classes | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| `header fixed inset-x-0 top-0 z-40 transition-colors duration-500 border-b border-transparent` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `main page-enter min-h-dvh scroll-mt-24 outline-none` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` | `display=block; columns=none; gap=normal; padding=0px; order=0` |
| `div mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20` | `display=grid; columns=496px 496px; gap=80px; padding=0px; order=0` | `display=grid; columns=432px 432px; gap=80px; padding=0px; order=0` | `display=grid; columns=688px; gap=56px; padding=0px; order=0` | `display=grid; columns=342px; gap=56px; padding=0px; order=0` |
| `div grid gap-5 sm:grid-cols-2` | `display=grid; columns=238px 238px; gap=20px; padding=0px; order=0` | `display=grid; columns=206px 206px; gap=20px; padding=0px; order=0` | `display=grid; columns=334px 334px; gap=20px; padding=0px; order=0` | `display=grid; columns=342px; gap=20px; padding=0px; order=0` |
| `footer border-t border-line py-12` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` | `display=block; columns=none; gap=normal; padding=48px 0px; order=0` |

## Animation and interaction specifications

The terminal cursor's computed animation is `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`; keyframe `50% { opacity: 0.5; }`. Availability/status rings use `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite` with `75%,100% { opacity: 0; transform: scale(2); }`. Page entrance is `page-in .6s var(--ease-premium) both`, opacity 0 → 1 and translateY(14px) → translateY(0px). Contact illustration `float-bob` uses `4s ease-in-out infinite`, translateY(0px) rotate(-2deg) at endpoints and translateY(-10px) rotate(2deg) at 50%.

### Header, terminal and glow details

Header nav height is `64px`; header includes a `1px` bottom border (computed outer height `65px` in the desktop default capture). At the top the border is transparent. Scrolled class is `border-line bg-ink/80 backdrop-blur-md`; settled target background is ink at 80% alpha, border is `#262b30`, blur is `12px`; color transition duration is `0.5s`. Mobile menu open is `390px × 259px`, at `y=64px`, with `258px` inner grid row and `1px` top border. It is a collapsible panel, not a full-screen opaque menu.

Hero glow: absolute box `672px × 672px`, `right:0`, `top:50%`, translation classes `-translate-y-1/2 translate-x-1/3`; background-image `none`, computed background-color `oklab(0.642512 0.119433 0.0989074 / 0.12)`, filter `blur(140px)`, opacity `1`. This glow is a solid translucent circle with blur, not a radial gradient.

Terminal panel: max-width `384px`, padding `16px`, border `1px` in `#262b30`, radius `10px`, background `surface/60`, backdrop blur `8px`; text `11.52px`, line-height `18.72px`. Grain is `::after`, inset `0px`, opacity `0.025`, with the literal SVG data-URL background-image in SOURCE-CSS.md. Shadow source is an inset `0 1px 0 rgba(255,255,255,.03)` plus `0 24px 60px -30px rgba(0,0,0,.7)`; normalized computed shadow including Tailwind zero-shadow layers is in COMPONENTS.md.

| Component / trigger | Exact behavior | Evidence |
| --- | --- | --- |
| Section Reveal / enters viewport | opacity 0 → 1; y 18 → 0 (default); duration 0.7s; ease [0.16,1,0.3,1]; delay prop default 0; once true; viewport margin -12% 0px | 0wh--ean-efla.js, exported Reveal; Motion/Framer Motion runtime |
| Text line reveal / ScrollTrigger | GSAP SplitText; yPercent 110 → original; opacity 0 → original; duration 0.9s; ease power3.out; stagger 0.08s default; start top 85%; once true; waits for fonts | 32wy4538hz7au.js and route bundles, exported RevealText |
| Smooth scroll / wheel and anchor | Lenis 1.3.26; ReactLenis root; explicit autoRaf:false, lerp:0.1, anchors:true; driven by GSAP ticker with seconds × 1000; lagSmoothing(0); scroll event updates ScrollTrigger | 3a5r6ln92fbj5.js; runtime lenisVersion and html class |
| Route change | Lenis scrollTo(0,{immediate:true}) plus window.scrollTo(0,0) | 3a5r6ln92fbj5.js |
| Mobile menu / toggle click | grid-template-rows 0fr ↔ 1fr; opacity 0 ↔ 1; 0.3s cubic-bezier(0.22,1,0.36,1); backdrop blur 12px; 1px top border when open | source CSS and mobile-menu-open.json |
| Hamburger / toggle click | outer lines transition all 0.3s with premium cubic-bezier; rotate ±45deg; middle opacity transition 0.2s | 3a5r6ln92fbj5.js |
| Magnetic control / pointer move and leave | x/y quickTo duration 0.6s, elastic.out(1,0.4); pointer leave returns x/y to 0; fine pointer only; skipped for reduced motion | 1rqugfi3q7sw4.js |
| Custom pointer / pointer move and hover | dot x/y duration 0.12s power3; ring x/y 0.4s power3; interactive hover ring scale 1.8 vs 1 and opacity 1 vs 0.55, duration 0.3s power3.out | 3a5r6ln92fbj5.js |
| Terminal typing / repeated cycle | increments displayed character count every 34ms; holds completed text 2800ms, then restarts; reduced motion shows all characters | 32wy4538hz7au.js |
| Live user count / enters viewport | IntersectionObserver threshold 0.35, disconnects after entry; duration 2500ms; progress easing 1 - 2^(-12*t), endpoint 1 | 32wy4538hz7au.js / LiveUserCount |
| 3D hero / animation frames | rotation.y = 4.4 + 0.1*sin(0.6*t); rotation.x = -0.03 + 0.025*sin(0.46*t), t = elapsed seconds; active render gated by visibility | 3z0rwqtep0jp1.js; 32wy4538hz7au.js observer rootMargin 200px 0px |
| CSS animation / class-driven | Exact keyframes, durations, and selectors appear in SOURCE-CSS.md and per-element animation columns | Extracted CSSOM; declared rules may not all be used on these routes |

Lenis `window.lenis` exposes version metadata, not the controller instance: its options were verified in the React provider bundle. The html `lenis` class and runtime version were observed. Source includes Motion and GSAP, so attributing every reveal to only one library would be incorrect. CSS transitions use their recorded hover/focus/active selectors as triggers; numeric per-element values are in COMPONENTS.md. Instance-specific Reveal delays must be read from the route bundle; the table above labels defaults explicitly.

## Technical fingerprint

Next.js runtime `window.next.version = `16.3.5``; App Router Flight `window.__next_f` is present and `__NEXT_DATA__` is absent. Bundles include Turbopack filenames. Tailwind utility classes, `@layer theme/base/utilities`, `--tw-*` variables, arbitrary-value utilities, and a small global CSS layer are directly observable. Exact Tailwind package version is not exposed. Next font assets are self-hosted WOFF2 variable fonts. Hero uses Three.js, React Three Fiber, GLTF loading and postprocessing; camera and asset details are in ASSETS.md.

Observed analytics: same-origin `/413d7444c1f56fd2/script.js`, Vercel Analytics code. Treat analytics as informational only. Resource inventories include route prefetches; a fetched chunk does not prove its UI was rendered. Contact bundle includes conditional reCAPTCHA support; loading that external script is not assumed without a resource entry.

## Limits and interpretation

This is an audit of the six requested routes and their captured default states, plus mobile navigation, header scroll state, and representative home hover states. It does not assert exhaustive testing of every possible form error, command-palette result, network fallback, or pointer path. The full CSS hover rules are included even when not individually hovered. Screenshots and canvas bounds do not imply fixed pixel dimensions for a 3D model. Model accessor bounds are in model units, not screen pixels. Loaded font resources are separated from all declared unicode subsets. Responsive measurements at 390px retain the desktop pointer capabilities; any-pointer:coarse behavior is sourced from JS and labeled accordingly. All browser-normalized color strings remain literal, including modern color syntax. No claim of exact RGB equivalence is made for converted color spaces.
