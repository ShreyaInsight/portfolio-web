# Literal CSSOM rules

Browser-serialized rules; original downloaded stylesheet is in sources/2umqilmtll602.css. Context distinguishes theme, supports, and print overrides.

## Root variable blocks

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `theme`

```css
:root, :host { --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; --font-mono: var(--font-mono-src); --color-emerald-400: #00d294; --color-black: #000; --color-white: #fff; --spacing: .25rem; --container-sm: 24rem; --container-md: 28rem; --container-lg: 32rem; --container-xl: 36rem; --container-2xl: 42rem; --container-3xl: 48rem; --container-4xl: 56rem; --container-6xl: 72rem; --text-xs: .75rem; --text-xs--line-height: calc(1 / .75); --text-sm: .875rem; --text-sm--line-height: calc(1.25 / .875); --text-lg: 1.125rem; --text-lg--line-height: calc(1.75 / 1.125); --text-xl: 1.25rem; --text-xl--line-height: calc(1.75 / 1.25); --text-2xl: 1.5rem; --text-2xl--line-height: calc(2 / 1.5); --text-3xl: 1.875rem; --text-3xl--line-height: calc(2.25 / 1.875); --text-5xl: 3rem; --text-5xl--line-height: 1; --text-6xl: 3.75rem; --text-6xl--line-height: 1; --font-weight-medium: 500; --font-weight-semibold: 600; --tracking-tight: -.025em; --leading-relaxed: 1.625; --radius-sm: .25rem; --radius-md: .375rem; --radius-lg: .5rem; --radius-xl: .75rem; --animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite; --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite; --animate-bounce: bounce 1s infinite; --blur-sm: 8px; --blur-md: 12px; --blur-2xl: 40px; --blur-3xl: 64px; --default-transition-duration: .15s; --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1); --default-font-family: var(--font-sans); --default-mono-font-family: var(--font-mono-src); --radius: .625rem; --color-ink: #0b0d0f; --color-ink-2: #0e1113; --color-surface: #121518; --color-line: #262b30; --color-field: #5a646d; --color-bone: #ede8dc; --color-bone-dim: #c7c3ba; --color-muted: #8a929b; --color-ember: #d9663d; --color-ember-bright: #e8794e; --color-dot-inactive: #2c3338; --ease-premium: cubic-bezier(.22, 1, .36, 1); --font-body: var(--font-body-src); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `theme > (color:lab(0% 0 0))`

```css
:root, :host { --color-emerald-400: lab(75.0771% -60.7313 19.4147); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
:root { --lightningcss-light: ; --lightningcss-dark: initial; color-scheme: dark; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `print`

```css
:root { --lightningcss-light: initial; --lightningcss-dark: ; color-scheme: light; }
```

## Font variables

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.geist_35aa2f0c-module__wso70G__variable { --font-display-src: "Geist", "Geist Fallback"; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.geist_mono_3715ce9e-module__ucpjTW__variable { --font-mono-src: "Geist Mono", "Geist Mono Fallback"; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.hanken_grotesk_5b3ab99e-module__xfY1XG__variable { --font-body-src: "Hanken Grotesk", "Hanken Grotesk Fallback"; }
```

## Media queries

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
@media (hover: hover) {
  .group-hover\:-translate-x-0\.5:is(:where(.group):hover *) { --tw-translate-x: calc(var(--spacing) * -.5); translate: var(--tw-translate-x) var(--tw-translate-y); }
  .group-hover\:translate-x-0\.5:is(:where(.group):hover *) { --tw-translate-x: calc(var(--spacing) * .5); translate: var(--tw-translate-x) var(--tw-translate-y); }
  .group-hover\:-translate-y-0\.5:is(:where(.group):hover *) { --tw-translate-y: calc(var(--spacing) * -.5); translate: var(--tw-translate-x) var(--tw-translate-y); }
  .group-hover\:scale-x-100:is(:where(.group):hover *) { --tw-scale-x: 100%; scale: var(--tw-scale-x) var(--tw-scale-y); }
  .group-hover\:scale-\[1\.04\]:is(:where(.group):hover *) { scale: 1.04; }
  .group-hover\:text-ember:is(:where(.group):hover *) { color: var(--color-ember); }
  .group-hover\/cs\:translate-x-0\.5:is(:where(.group\/cs):hover *) { --tw-translate-x: calc(var(--spacing) * .5); translate: var(--tw-translate-x) var(--tw-translate-y); }
  .group-hover\/cs\:-translate-y-0\.5:is(:where(.group\/cs):hover *) { --tw-translate-y: calc(var(--spacing) * -.5); translate: var(--tw-translate-x) var(--tw-translate-y); }
  .group-hover\/metric\:text-ember:is(:where(.group\/metric):hover *) { color: var(--color-ember); }
  .group-hover\/portrait\:opacity-100:is(:where(.group\/portrait):hover *) { opacity: 1; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
@media (hover: hover) {
  .hover\:border-ember:hover { border-color: var(--color-ember); }
  .hover\:border-ember\/40:hover { border-color: rgba(217, 102, 61, 0.4); }
  @supports (color:color-mix(in lab, red, red)) {
  .hover\:border-ember\/40:hover { border-color: color-mix(in oklab, var(--color-ember) 40%, transparent); }
}
  .hover\:border-ember\/50:hover { border-color: rgba(217, 102, 61, 0.5); }
  @supports (color:color-mix(in lab, red, red)) {
  .hover\:border-ember\/50:hover { border-color: color-mix(in oklab, var(--color-ember) 50%, transparent); }
}
  .hover\:bg-ember\/20:hover { background-color: rgba(217, 102, 61, 0.2); }
  @supports (color:color-mix(in lab, red, red)) {
  .hover\:bg-ember\/20:hover { background-color: color-mix(in oklab, var(--color-ember) 20%, transparent); }
}
  .hover\:bg-surface:hover { background-color: var(--color-surface); }
  .hover\:text-bone:hover { color: var(--color-bone); }
  .hover\:text-ember:hover { color: var(--color-ember); }
  .hover\:text-ember-bright:hover { color: var(--color-ember-bright); }
  .hover\:decoration-ember:hover { text-decoration-color: var(--color-ember); }
  .hover\:opacity-100:hover { opacity: 1; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
@media (min-width: 40rem) {
  .sm\:order-last { order: 9999; }
  .sm\:contents { display: contents; }
  .sm\:w-44 { width: calc(var(--spacing) * 44); }
  .sm\:w-64 { width: calc(var(--spacing) * 64); }
  .sm\:w-full { width: 100%; }
  .sm\:max-w-\[280px\] { max-width: 280px; }
  .sm\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0px, 1fr)); }
  .sm\:grid-cols-\[0\.85fr_1\.15fr\] { grid-template-columns: 0.85fr 1.15fr; }
  .sm\:grid-cols-\[1\.3fr_0\.7fr\] { grid-template-columns: 1.3fr 0.7fr; }
  .sm\:flex-row { flex-direction: row; }
  .sm\:items-center { align-items: center; }
  .sm\:items-end { align-items: flex-end; }
  .sm\:items-start { align-items: flex-start; }
  .sm\:justify-between { justify-content: space-between; }
  .sm\:gap-12 { gap: calc(var(--spacing) * 12); }
  :where(.sm\:space-y-36 > :not(:last-child)) { --tw-space-y-reverse: 0; margin-block-start: calc(calc(var(--spacing) * 36) * var(--tw-space-y-reverse)); margin-block-end: calc(calc(var(--spacing) * 36) * calc(1 - var(--tw-space-y-reverse))); }
  .sm\:p-7 { padding: calc(var(--spacing) * 7); }
  .sm\:p-8 { padding: calc(var(--spacing) * 8); }
  .sm\:px-8 { padding-inline: calc(var(--spacing) * 8); }
  .sm\:px-10 { padding-inline: calc(var(--spacing) * 10); }
  .sm\:py-32 { padding-block: calc(var(--spacing) * 32); }
  .sm\:py-36 { padding-block: calc(var(--spacing) * 36); }
  .sm\:text-2xl { font-size: var(--text-2xl); line-height: var(--tw-leading,var(--text-2xl--line-height)); }
  .sm\:text-3xl { font-size: var(--text-3xl); line-height: var(--tw-leading,var(--text-3xl--line-height)); }
  .sm\:text-5xl { font-size: var(--text-5xl); line-height: var(--tw-leading,var(--text-5xl--line-height)); }
  .sm\:text-6xl { font-size: var(--text-6xl); line-height: var(--tw-leading,var(--text-6xl--line-height)); }
  .sm\:text-lg { font-size: var(--text-lg); line-height: var(--tw-leading,var(--text-lg--line-height)); }
  .sm\:text-xl { font-size: var(--text-xl); line-height: var(--tw-leading,var(--text-xl--line-height)); }
  .sm\:text-\[2\.6rem\] { font-size: 2.6rem; }
  .sm\:text-\[2\.75rem\] { font-size: 2.75rem; }
  .sm\:text-\[4\.1rem\] { font-size: 4.1rem; }
  .sm\:text-\[4\.2rem\] { font-size: 4.2rem; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
@media (min-width: 48rem) {
  .md\:block { display: block; }
  .md\:flex { display: flex; }
  .md\:hidden { display: none; }
  .md\:inline-block { display: inline-block; }
  .md\:inline-flex { display: inline-flex; }
  .md\:translate-x-1\.5 { --tw-translate-x: calc(var(--spacing) * 1.5); translate: var(--tw-translate-x) var(--tw-translate-y); }
  .md\:grid-cols-\[1fr_1\.8fr\] { grid-template-columns: 1fr 1.8fr; }
  .md\:grid-cols-\[210px_1fr\] { grid-template-columns: 210px 1fr; }
  .md\:gap-10 { gap: calc(var(--spacing) * 10); }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
@media (min-width: 64rem) {
  .lg\:order-1 { order: 1; }
  .lg\:order-2 { order: 2; }
  .lg\:order-none { order: 0; }
  .lg\:flex { display: flex; }
  .lg\:inline { display: inline; }
  .lg\:h-\[80vh\] { height: 80vh; }
  .lg\:min-h-dvh { min-height: 100dvh; }
  .lg\:w-56 { width: calc(var(--spacing) * 56); }
  .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0px, 1fr)); }
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0px, 1fr)); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0px, 1fr)); }
  .lg\:grid-cols-\[0\.85fr_1\.15fr\] { grid-template-columns: 0.85fr 1.15fr; }
  .lg\:grid-cols-\[1\.1fr_0\.9fr\] { grid-template-columns: 1.1fr 0.9fr; }
  .lg\:grid-cols-\[1\.05fr_0\.95fr\] { grid-template-columns: 1.05fr 0.95fr; }
  .lg\:grid-cols-\[1\.5fr_1fr\] { grid-template-columns: 1.5fr 1fr; }
  .lg\:grid-cols-\[1\.55fr_1fr\] { grid-template-columns: 1.55fr 1fr; }
  .lg\:justify-end { justify-content: flex-end; }
  .lg\:gap-8 { gap: calc(var(--spacing) * 8); }
  .lg\:gap-16 { gap: calc(var(--spacing) * 16); }
  .lg\:gap-20 { gap: calc(var(--spacing) * 20); }
  .lg\:border-l { border-left-style: var(--tw-border-style); border-left-width: 1px; }
  .lg\:border-line { border-color: var(--color-line); }
  .lg\:pt-24 { padding-top: calc(var(--spacing) * 24); }
  .lg\:pb-24 { padding-bottom: calc(var(--spacing) * 24); }
  .lg\:pl-12 { padding-left: calc(var(--spacing) * 12); }
  .lg\:text-\[4\.7rem\] { font-size: 4.7rem; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@media (prefers-reduced-motion: reduce) {
  .page-enter { animation: auto ease 0s 1 normal none running none; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@media (pointer: fine) {
  .cursor-active { cursor: none; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@media print {
  header, footer, .cursor-dot, .cursor-ring, canvas { display: none !important; }
  :root { --lightningcss-light: initial; --lightningcss-dark: ; color-scheme: light; }
  body { color: rgb(0, 0, 0); background: rgb(255, 255, 255); }
}
```

## Hover / focus / active states

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\:-translate-x-0\.5:is(:where(.group):hover *) { --tw-translate-x: calc(var(--spacing) * -.5); translate: var(--tw-translate-x) var(--tw-translate-y); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\:translate-x-0\.5:is(:where(.group):hover *) { --tw-translate-x: calc(var(--spacing) * .5); translate: var(--tw-translate-x) var(--tw-translate-y); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\:-translate-y-0\.5:is(:where(.group):hover *) { --tw-translate-y: calc(var(--spacing) * -.5); translate: var(--tw-translate-x) var(--tw-translate-y); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\:scale-x-100:is(:where(.group):hover *) { --tw-scale-x: 100%; scale: var(--tw-scale-x) var(--tw-scale-y); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\:scale-\[1\.04\]:is(:where(.group):hover *) { scale: 1.04; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\:text-ember:is(:where(.group):hover *) { color: var(--color-ember); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\/cs\:translate-x-0\.5:is(:where(.group\/cs):hover *) { --tw-translate-x: calc(var(--spacing) * .5); translate: var(--tw-translate-x) var(--tw-translate-y); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\/cs\:-translate-y-0\.5:is(:where(.group\/cs):hover *) { --tw-translate-y: calc(var(--spacing) * -.5); translate: var(--tw-translate-x) var(--tw-translate-y); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\/metric\:text-ember:is(:where(.group\/metric):hover *) { color: var(--color-ember); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.group-hover\/portrait\:opacity-100:is(:where(.group\/portrait):hover *) { opacity: 1; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:border-ember:hover { border-color: var(--color-ember); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:border-ember\/40:hover { border-color: rgba(217, 102, 61, 0.4); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover) > (color:color-mix(in lab, red, red))`

```css
.hover\:border-ember\/40:hover { border-color: color-mix(in oklab, var(--color-ember) 40%, transparent); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:border-ember\/50:hover { border-color: rgba(217, 102, 61, 0.5); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover) > (color:color-mix(in lab, red, red))`

```css
.hover\:border-ember\/50:hover { border-color: color-mix(in oklab, var(--color-ember) 50%, transparent); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:bg-ember\/20:hover { background-color: rgba(217, 102, 61, 0.2); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover) > (color:color-mix(in lab, red, red))`

```css
.hover\:bg-ember\/20:hover { background-color: color-mix(in oklab, var(--color-ember) 20%, transparent); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:bg-surface:hover { background-color: var(--color-surface); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:text-bone:hover { color: var(--color-bone); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:text-ember:hover { color: var(--color-ember); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:text-ember-bright:hover { color: var(--color-ember-bright); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:decoration-ember:hover { text-decoration-color: var(--color-ember); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities > (hover: hover)`

```css
.hover\:opacity-100:hover { opacity: 1; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.focus\:border-ember:focus { border-color: var(--color-ember); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.active\:text-bone:active { color: var(--color-bone); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.active\:text-ember:active { color: var(--color-ember); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
:focus-visible { outline: 2px solid var(--color-ember); outline-offset: 2px; box-shadow: rgba(237, 232, 220, 0.28) 0px 0px 0px 4px; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `(color:color-mix(in lab, red, red))`

```css
:focus-visible { box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-bone) 28%, transparent); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
:focus-visible { border-radius: 3px; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.cmdk-input:focus-visible { box-shadow: none; outline: none; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
::-webkit-scrollbar-thumb:hover { background: rgb(49, 58, 66); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.skip-link:focus { transform: translateY(0px); }
```

## Keyframes and named effects

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.cursor-default { cursor: default; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.shadow-float { --tw-shadow: 0 40px 90px -40px var(--tw-shadow-color,#000000d9); box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.shadow-panel { --tw-shadow: 0 1px 0 0 var(--tw-shadow-color,#ffffff08) inset, 0 24px 60px -30px var(--tw-shadow-color,#000000b3); box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.drop-shadow-\[0_12px_30px_rgba\(0\,0\,0\,0\.45\)\] { --tw-drop-shadow-size: drop-shadow(0 12px 30px var(--tw-drop-shadow-color,#00000073)); --tw-drop-shadow: var(--tw-drop-shadow-size); filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `utilities`

```css
.drop-shadow-\[0_14px_34px_rgba\(0\,0\,0\,0\.5\)\] { --tw-drop-shadow-size: drop-shadow(0 14px 34px var(--tw-drop-shadow-color,#00000080)); --tw-drop-shadow: var(--tw-drop-shadow-size); filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.grain { position: relative; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.grain::after { content: ""; pointer-events: none; opacity: 0.025; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); position: absolute; inset: 0px; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@keyframes float-bob { 
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.float-bob { animation: 4s ease-in-out 0s infinite normal none running float-bob; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@keyframes page-in { 
  0% { opacity: 0; transform: translateY(14px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.page-enter { animation: page-in .6s var(--ease-premium) both; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `(prefers-reduced-motion: reduce)`

```css
.page-enter { animation: auto ease 0s 1 normal none running none; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.cursor-dot { background: var(--color-ember); pointer-events: none; z-index: 100; border-radius: 999px; width: 8px; height: 8px; position: fixed; top: 0px; left: 0px; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.cursor-ring { border: 1px solid rgba(237, 232, 220, 0.35); width: 38px; height: 38px; position: fixed; top: 0px; left: 0px; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `(color:color-mix(in lab, red, red))`

```css
.cursor-ring { border: 1px solid color-mix(in srgb, var(--color-bone) 35%, transparent); }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
.cursor-ring { pointer-events: none; z-index: 100; border-radius: 999px; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `(pointer: fine)`

```css
.cursor-active { cursor: none; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `print`

```css
header, footer, .cursor-dot, .cursor-ring, canvas { display: none !important; }
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@keyframes ping { 
  75%, 100% { opacity: 0; transform: scale(2); }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@keyframes pulse { 
  50% { opacity: 0.5; }
}
```

Source: https://www.sunnypatel.net/_next/static/immutable/chunks/2umqilmtll602.css; context: `top-level`

```css
@keyframes bounce { 
  0%, 100% { animation-timing-function: cubic-bezier(0.8, 0, 1, 1); transform: translateY(-25%); }
  50% { animation-timing-function: cubic-bezier(0, 0, 0.2, 1); transform: none; }
}
```

## Computed root custom properties (1440px homepage)

```json
{
  "--animate-bounce": "bounce 1s infinite",
  "--animate-ping": "ping 1s cubic-bezier(0, 0, .2, 1) infinite",
  "--animate-pulse": "pulse 2s cubic-bezier(.4, 0, .6, 1) infinite",
  "--blur-2xl": "40px",
  "--blur-3xl": "64px",
  "--blur-md": "12px",
  "--blur-sm": "8px",
  "--color-black": "#000",
  "--color-bone": "#ede8dc",
  "--color-bone-dim": "#c7c3ba",
  "--color-dot-inactive": "#2c3338",
  "--color-ember": "#d9663d",
  "--color-ember-bright": "#e8794e",
  "--color-emerald-400": "lab(75.0771% -60.7313 19.4147)",
  "--color-field": "#5a646d",
  "--color-ink": "#0b0d0f",
  "--color-ink-2": "#0e1113",
  "--color-line": "#262b30",
  "--color-muted": "#8a929b",
  "--color-surface": "#121518",
  "--color-white": "#fff",
  "--container-2xl": "42rem",
  "--container-3xl": "48rem",
  "--container-4xl": "56rem",
  "--container-6xl": "72rem",
  "--container-lg": "32rem",
  "--container-md": "28rem",
  "--container-sm": "24rem",
  "--container-xl": "36rem",
  "--default-font-family": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
  "--default-mono-font-family": "\"Geist Mono\", \"Geist Mono Fallback\"",
  "--default-transition-duration": ".15s",
  "--default-transition-timing-function": "cubic-bezier(.4, 0, .2, 1)",
  "--ease-premium": "cubic-bezier(.22, 1, .36, 1)",
  "--font-body": "\"Hanken Grotesk\", \"Hanken Grotesk Fallback\"",
  "--font-body-src": "\"Hanken Grotesk\", \"Hanken Grotesk Fallback\"",
  "--font-display-src": "\"Geist\", \"Geist Fallback\"",
  "--font-mono": "\"Geist Mono\", \"Geist Mono Fallback\"",
  "--font-mono-src": "\"Geist Mono\", \"Geist Mono Fallback\"",
  "--font-sans": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
  "--font-weight-medium": "500",
  "--font-weight-semibold": "600",
  "--leading-relaxed": "1.625",
  "--lightningcss-dark": "",
  "--lightningcss-light": "",
  "--radius": ".625rem",
  "--radius-lg": ".5rem",
  "--radius-md": ".375rem",
  "--radius-sm": ".25rem",
  "--radius-xl": ".75rem",
  "--spacing": ".25rem",
  "--text-2xl": "1.5rem",
  "--text-2xl--line-height": "calc(2 / 1.5)",
  "--text-3xl": "1.875rem",
  "--text-3xl--line-height": "calc(2.25 / 1.875)",
  "--text-5xl": "3rem",
  "--text-5xl--line-height": "1",
  "--text-6xl": "3.75rem",
  "--text-6xl--line-height": "1",
  "--text-lg": "1.125rem",
  "--text-lg--line-height": "calc(1.75 / 1.125)",
  "--text-sm": ".875rem",
  "--text-sm--line-height": "calc(1.25 / .875)",
  "--text-xl": "1.25rem",
  "--text-xl--line-height": "calc(1.75 / 1.25)",
  "--text-xs": ".75rem",
  "--text-xs--line-height": "calc(1 / .75)",
  "--tracking-tight": "-.025em",
  "--tw-border-style": "solid",
  "--tw-drop-shadow-alpha": "100%",
  "--tw-gradient-from": "rgba(0, 0, 0, 0)",
  "--tw-gradient-from-position": "0%",
  "--tw-gradient-to": "rgba(0, 0, 0, 0)",
  "--tw-gradient-to-position": "100%",
  "--tw-gradient-via": "rgba(0, 0, 0, 0)",
  "--tw-gradient-via-position": "50%",
  "--tw-inset-ring-shadow": "0 0 #0000",
  "--tw-inset-shadow": "0 0 #0000",
  "--tw-inset-shadow-alpha": "100%",
  "--tw-ring-offset-color": "#fff",
  "--tw-ring-offset-shadow": "0 0 #0000",
  "--tw-ring-offset-width": "0px",
  "--tw-ring-shadow": "0 0 #0000",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "--tw-scale-z": "1",
  "--tw-shadow": "0 0 #0000",
  "--tw-shadow-alpha": "100%",
  "--tw-space-y-reverse": "0",
  "--tw-translate-x": "0",
  "--tw-translate-y": "0",
  "--tw-translate-z": "0"
}
```
