# CSS, fonts and resource evidence

The linked stylesheet is the full CSSOM serialization, preserving exposed rules rather than approximations.

[Complete exposed stylesheet](exposed-styles.css)

## Full computed root custom-property inventory

Includes inherited Next/font variables and registered Tailwind properties; it is not presented as a verbatim authored :root block. Authored blocks follow.

```json
{
  "--container-md": "28rem",
  "--tw-ring-offset-shadow": "0 0 #0000",
  "--tw-inset-shadow-alpha": "100%",
  "--tw-ring-shadow": "0 0 #0000",
  "--text-2xl": "1.5rem",
  "--leading-relaxed": "1.625",
  "--tw-drop-shadow-alpha": "100%",
  "--text-lg": "1.125rem",
  "--default-transition-timing-function": "cubic-bezier(.4, 0, .2, 1)",
  "--color-ink": "#0b0d0f",
  "--font-body": "\"Hanken Grotesk\", \"Hanken Grotesk Fallback\"",
  "--text-5xl--line-height": "1",
  "--text-2xl--line-height": "calc(2 / 1.5)",
  "--tw-inset-ring-shadow": "0 0 #0000",
  "--spacing": ".25rem",
  "--lightningcss-dark": "",
  "--tw-translate-z": "0",
  "--font-mono-src": "\"Geist Mono\", \"Geist Mono Fallback\"",
  "--tw-gradient-via": "rgba(0, 0, 0, 0)",
  "--tw-scale-y": "1",
  "--animate-ping": "ping 1s cubic-bezier(0, 0, .2, 1) infinite",
  "--font-mono": "\"Geist Mono\", \"Geist Mono Fallback\"",
  "--container-6xl": "72rem",
  "--text-xl--line-height": "calc(1.75 / 1.25)",
  "--font-weight-semibold": "600",
  "--container-3xl": "48rem",
  "--text-sm": ".875rem",
  "--tw-translate-y": "0",
  "--blur-md": "12px",
  "--font-body-src": "\"Hanken Grotesk\", \"Hanken Grotesk Fallback\"",
  "--container-4xl": "56rem",
  "--tw-inset-shadow": "0 0 #0000",
  "--tw-ring-offset-color": "#fff",
  "--color-muted": "#8a929b",
  "--text-lg--line-height": "calc(1.75 / 1.125)",
  "--tw-gradient-from": "rgba(0, 0, 0, 0)",
  "--color-white": "#fff",
  "--color-bone-dim": "#c7c3ba",
  "--color-ember": "#d9663d",
  "--color-surface": "#121518",
  "--tw-shadow-alpha": "100%",
  "--tw-gradient-to": "rgba(0, 0, 0, 0)",
  "--font-display-src": "\"Geist\", \"Geist Fallback\"",
  "--blur-3xl": "64px",
  "--radius-sm": ".25rem",
  "--lightningcss-light": "",
  "--font-sans": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
  "--tw-scale-z": "1",
  "--tw-border-style": "solid",
  "--radius": ".625rem",
  "--color-line": "#262b30",
  "--blur-2xl": "40px",
  "--container-2xl": "42rem",
  "--tw-shadow": "0 0 #0000",
  "--container-sm": "24rem",
  "--tw-translate-x": "0",
  "--tw-ring-offset-width": "0px",
  "--text-sm--line-height": "calc(1.25 / .875)",
  "--tw-gradient-via-position": "50%",
  "--text-3xl--line-height": "calc(2.25 / 1.875)",
  "--text-5xl": "3rem",
  "--text-6xl": "3.75rem",
  "--text-3xl": "1.875rem",
  "--text-xs": ".75rem",
  "--text-xs--line-height": "calc(1 / .75)",
  "--default-font-family": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
  "--color-black": "#000",
  "--color-field": "#5a646d",
  "--font-weight-medium": "500",
  "--container-lg": "32rem",
  "--tw-scale-x": "1",
  "--color-emerald-400": "lab(75.0771% -60.7313 19.4147)",
  "--ease-premium": "cubic-bezier(.22, 1, .36, 1)",
  "--tw-gradient-to-position": "100%",
  "--color-ink-2": "#0e1113",
  "--default-transition-duration": ".15s",
  "--animate-bounce": "bounce 1s infinite",
  "--color-dot-inactive": "#2c3338",
  "--radius-xl": ".75rem",
  "--animate-pulse": "pulse 2s cubic-bezier(.4, 0, .6, 1) infinite",
  "--color-bone": "#ede8dc",
  "--tw-space-y-reverse": "0",
  "--text-6xl--line-height": "1",
  "--container-xl": "36rem",
  "--radius-md": ".375rem",
  "--text-xl": "1.25rem",
  "--radius-lg": ".5rem",
  "--color-ember-bright": "#e8794e",
  "--tw-gradient-from-position": "0%",
  "--blur-sm": "8px",
  "--default-mono-font-family": "\"Geist Mono\", \"Geist Mono Fallback\"",
  "--tracking-tight": "-.025em"
}
```

## Literal exposed root/host blocks

```css
:root, :host { --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; --font-mono: var(--font-mono-src); --color-emerald-400: #00d294; --color-black: #000; --color-white: #fff; --spacing: .25rem; --container-sm: 24rem; --container-md: 28rem; --container-lg: 32rem; --container-xl: 36rem; --container-2xl: 42rem; --container-3xl: 48rem; --container-4xl: 56rem; --container-6xl: 72rem; --text-xs: .75rem; --text-xs--line-height: calc(1 / .75); --text-sm: .875rem; --text-sm--line-height: calc(1.25 / .875); --text-lg: 1.125rem; --text-lg--line-height: calc(1.75 / 1.125); --text-xl: 1.25rem; --text-xl--line-height: calc(1.75 / 1.25); --text-2xl: 1.5rem; --text-2xl--line-height: calc(2 / 1.5); --text-3xl: 1.875rem; --text-3xl--line-height: calc(2.25 / 1.875); --text-5xl: 3rem; --text-5xl--line-height: 1; --text-6xl: 3.75rem; --text-6xl--line-height: 1; --font-weight-medium: 500; --font-weight-semibold: 600; --tracking-tight: -.025em; --leading-relaxed: 1.625; --radius-sm: .25rem; --radius-md: .375rem; --radius-lg: .5rem; --radius-xl: .75rem; --animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite; --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite; --animate-bounce: bounce 1s infinite; --blur-sm: 8px; --blur-md: 12px; --blur-2xl: 40px; --blur-3xl: 64px; --default-transition-duration: .15s; --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1); --default-font-family: var(--font-sans); --default-mono-font-family: var(--font-mono-src); --radius: .625rem; --color-ink: #0b0d0f; --color-ink-2: #0e1113; --color-surface: #121518; --color-line: #262b30; --color-field: #5a646d; --color-bone: #ede8dc; --color-bone-dim: #c7c3ba; --color-muted: #8a929b; --color-ember: #d9663d; --color-ember-bright: #e8794e; --color-dot-inactive: #2c3338; --ease-premium: cubic-bezier(.22, 1, .36, 1); --font-body: var(--font-body-src); }
:root, :host { --color-emerald-400: lab(75.0771% -60.7313 19.4147); }
:root { --lightningcss-light: ; --lightningcss-dark: initial; color-scheme: dark; }
:root { --lightningcss-light: initial; --lightningcss-dark: ; color-scheme: light; }
```

## Font-face declarations (declared subsets, not all downloaded)

```css
@font-face { font-family: Geist; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/fef07dbb0973bf53-s.00az9qtie3ho1.woff2") format("woff2"); unicode-range: U+460-52F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }
@font-face { font-family: Geist; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/8a480f0b521d4e75-s.3j-a226dh71aj.woff2") format("woff2"); unicode-range: U+301, U+400-45F, U+490-491, U+4B0-4B1, U+2116; }
@font-face { font-family: Geist; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/53b9e256198e5412-s.2gwoz23eiro2t.woff2") format("woff2"); unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+300-301, U+303-304, U+308-309, U+323, U+329, U+1EA0-1EF9, U+20AB; }
@font-face { font-family: Geist; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/7178b3e590c64307-s.0i3h3th1vs4m7.woff2") format("woff2"); unicode-range: U+100-2BA, U+2BD-2C5, U+2C7-2CC, U+2CE-2D7, U+2DD-2FF, U+304, U+308, U+329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
@font-face { font-family: Geist; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/caa3a2e1cccd8315-s.p.0zr6hhvz-h9nw.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304, U+308, U+329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: "Geist Fallback"; src: local("Arial"); ascent-override: 95.94%; descent-override: 28.16%; line-gap-override: 0%; size-adjust: 104.76%; }
@font-face { font-family: "Geist Mono"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/5ce348bf30bf5439-s.27spqqad3wyeo.woff2") format("woff2"); unicode-range: U+460-52F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }
@font-face { font-family: "Geist Mono"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/4fa387ec64143e14-s.3f4zuumv8svu0.woff2") format("woff2"); unicode-range: U+301, U+400-45F, U+490-491, U+4B0-4B1, U+2116; }
@font-face { font-family: "Geist Mono"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/6306c77e7c8268e4-s.34r5yzckw0h2s.woff2") format("woff2"); unicode-range: U+2000-2001, U+2004-2008, U+200A, U+23B8-23BD, U+2500-259F; }
@font-face { font-family: "Geist Mono"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/7d817b4c03b0c5f1-s.2jyz_zw3a8jit.woff2") format("woff2"); unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+300-301, U+303-304, U+308-309, U+323, U+329, U+1EA0-1EF9, U+20AB; }
@font-face { font-family: "Geist Mono"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/bbc41e54d2fcbd21-s.30bdpjkrtcces.woff2") format("woff2"); unicode-range: U+100-2BA, U+2BD-2C5, U+2C7-2CC, U+2CE-2D7, U+2DD-2FF, U+304, U+308, U+329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
@font-face { font-family: "Geist Mono"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/797e433ab948586e-s.p.1v5bejj26fx9h.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304, U+308, U+329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: "Geist Mono Fallback"; src: local("Arial"); ascent-override: 74.67%; descent-override: 21.92%; line-gap-override: 0%; size-adjust: 134.59%; }
@font-face { font-family: "Hanken Grotesk"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/91bd2e40df15814e-s.1zpt8rrvsu92z.woff2") format("woff2"); unicode-range: U+460-52F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }
@font-face { font-family: "Hanken Grotesk"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/a63431c4ac64ea8b-s.0mxk1tgo-hrwu.woff2") format("woff2"); unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+300-301, U+303-304, U+308-309, U+323, U+329, U+1EA0-1EF9, U+20AB; }
@font-face { font-family: "Hanken Grotesk"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/8b4ed0a90d903ab5-s.1akpt5k8ff_pw.woff2") format("woff2"); unicode-range: U+100-2BA, U+2BD-2C5, U+2C7-2CC, U+2CE-2D7, U+2DD-2FF, U+304, U+308, U+329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
@font-face { font-family: "Hanken Grotesk"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("../media/c47649aa31f9e140-s.p.2rlmbw0a3_pri.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304, U+308, U+329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: "Hanken Grotesk Fallback"; src: local("Arial"); ascent-override: 99.07%; descent-override: 30.02%; line-gap-override: 0%; size-adjust: 100.94%; }
```

## Font files actually requested

| URL |
| --- |
| https://www.sunnypatel.net/_next/static/immutable/media/797e433ab948586e-s.p.1v5bejj26fx9h.woff2 |
| https://www.sunnypatel.net/_next/static/immutable/media/c47649aa31f9e140-s.p.2rlmbw0a3_pri.woff2 |
| https://www.sunnypatel.net/_next/static/immutable/media/caa3a2e1cccd8315-s.p.0zr6hhvz-h9nw.woff2 |

## Exact exposed media-query conditions

```css
(hover: hover)
(min-width: 40rem)
(min-width: 48rem)
(min-width: 64rem)
(prefers-reduced-motion: reduce)
(pointer: fine)
print
```

## Loaded script URLs

| URL |
| --- |
| https://www.sunnypatel.net/_next/static/immutable/chunks/109ct_pmo1bww.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/090kwno0-3jqr.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/0stap_ira6lrc.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/turbopack-2zdeh7ix3vkk7.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/1tf2pn9278k7y.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/1rqugfi3q7sw4.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/3a5r6ln92fbj5.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/28u5y_nt71ir9.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/2w366bbiy_y-t.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/1ahnl33xxtn6s.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/2c35pj6pzzx0d.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/1korm83uri9p-.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/0wh--ean-efla.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/32wy4538hz7au.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/0c0hxoamwjsbw.js |
| https://www.sunnypatel.net/413d7444c1f56fd2/script.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/3z0rwqtep0jp1.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/2iv_gh0grpiuz.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/0wgh2_tutk1ek.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/10pm6gd8mr09u.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/20xegr3xrkv98.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/3ff74yqaeuoaz.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/2lo6z7b905h2l.js |
| https://www.sunnypatel.net/_next/static/immutable/chunks/3n1jkm18iisbf.js |
| https://www.google.com/recaptcha/api.js?render=6Lf3gxcrAAAAACSY81KwC29xmPUQqhHReDYWcfbl |

## Pseudo-element visual effects

| Page / width | Element / pseudo | Computed content | Background image | Opacity | Filter | Background |
| --- | --- | --- | --- | --- | --- | --- |
| https://www.sunnypatel.net/ 1440 | #main-content > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)::after | "" | url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") | 0.025 | none | rgba(0, 0, 0, 0) |
| https://www.sunnypatel.net/ 1024 | #main-content > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)::after | "" | url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") | 0.025 | none | rgba(0, 0, 0, 0) |
| https://www.sunnypatel.net/ 768 | #main-content > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)::after | "" | url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") | 0.025 | none | rgba(0, 0, 0, 0) |
| https://www.sunnypatel.net/ 390 | #main-content > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)::after | "" | url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") | 0.025 | none | rgba(0, 0, 0, 0) |
