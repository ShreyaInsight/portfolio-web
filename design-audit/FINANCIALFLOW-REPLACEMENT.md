# FinancialFlow content replacement

Source: `sources/reference to be replaced/README FinancialFlow.md`.
Cover: `sources/reference to be replaced/Financial Flow.png`.

Updated the homepage card, Projects index card, complete case study, and incoming project navigation. The new route is `projects/financialflow/`; the old `projects/sunnify/` redirects there. Axelot links to FinancialFlow, which links to Netdash.

The narrative retains four paragraphs, five highlights, the technology-pill component and one preview panel. CSS, fonts, responsive rules and animation scripts were not changed. The new text naturally changes line wrapping and page height.

Removed Sunnify's GitHub-stars/download badges. Replaced its Live/Source links with a Project brief link because the supplied README gives neither destination. These are the only optional sections changed. Roadmap features are described as future work, and no completed test-suite claims were inferred from the README's testing suggestions.

The existing 2024 year and Actively maintained metadata were retained; the supplied README does not establish a replacement year or maintenance status. These fields are not independently verified FinancialFlow facts.

Browser verification uses `verify-financialflow.cjs`, reusing the whole-page checks from the previous replacement. Results are stored in `financialflow-verification.json`, with case-study screenshots at 1440px and 390px.
