# ShreyaDesk AI content replacement

## Scope

The home card, Projects index card, full case study and KnifeThrow next-project link now refer to ShreyaDesk AI. The case study is at `projects/shreyadesk-ai/`; `projects/basalt/` redirects there to preserve old links.

Copy is summarized from the supplied `sources/reference to be replaced/README (5).md` and relevant sections of `README detailed.md`. The supplied `market-hero.svg` is used as an illustration, not described as a product screenshot. The requested public name is ShreyaDesk AI even though the detailed source document uses ShivuDesk. No machine-learning capability is inferred from the new name.

## Preserved formatting

No CSS or animation code was changed for this replacement. Existing heading, metadata, preview frame, five-paragraph narrative, highlights, technology pills and next-project components retain their classes and responsive layout. Different copy length naturally changes line wrapping and page height.

## Necessary content-dependent changes

- Removed Basalt's DOI/PyPI badges and APA/BibTeX citation section: no corresponding ShreyaDesk publication identifiers were supplied.
- Replaced Basalt Source/Docs links with the supplied Project brief. No public repository or live-product URL was invented.
- Changed technology labels, title, tagline, descriptions, highlights, image/alt text and project route.
- Preserved the original source Markdown files and historical reference audit captures.

The warm-cache benchmark is explicitly attributed to the supplied documentation and retains its test conditions. No application tests, broker connections or trades were run; this task only updates the portfolio presentation.

## Verification

`verify-shreyadesk.cjs` checks the home page, Projects index and new case study at 1440px and 390px, including overflow, missing images, local links, remaining Basalt copy, reveal visibility and the legacy-route redirect. Results are recorded in `shreyadesk-verification.json`; case-study screenshots are saved alongside it.

The six page/viewport checks passed, and the legacy Basalt route redirected successfully. Browser-based verification follows the agent-browser and server-verification skills; no deployment was performed.
