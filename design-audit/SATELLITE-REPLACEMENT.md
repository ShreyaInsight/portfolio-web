# Satellite Crop Health Scanner replacement

ATS Screener was replaced with Satellite Crop Health Scanner using `sources/reference to be replaced/README Satellite Crop Health Scanner).md` and the supplied `Satellite Crop Health Scanner.png` cover.

## Updated data

- Homepage selected-work card
- Projects index title, tagline, summary, stack, stats, links and cover
- Full case study: metadata, introduction, five narrative paragraphs, highlights, stack, Live/Source links, cover and next-project navigation
- Incoming project-cycle links
- Legacy `projects/ats-screener/` route now redirects to `projects/satellite-crop-health-scanner/`

## Formatting

No CSS, component classes, animations or responsive rules were changed. The ATS-only dynamic users/engines counter was removed from the full case study because the supplied project documentation contains no equivalent live metric. The Projects index retains the existing two-stat component with documented project facts: two Sentinel-2 bands and three export formats. Different title and copy lengths naturally change wrapping and total page height.

## Verification

`verify-satellite.cjs` checked the homepage, Projects index and full case study at 1440px and 390px. All six combinations passed with no horizontal overflow, broken images, broken local links, hidden reveal targets, stale ATS copy or browser errors. The supplied PNG loaded at 1919 × 1079 pixels. The legacy ATS route redirect passed. Evidence is stored in `satellite-verification.json`, with desktop/mobile case-study screenshots alongside it.
