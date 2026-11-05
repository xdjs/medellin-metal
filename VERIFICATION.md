# Local verification — 3 November 2026

Scope: standalone artifact only. No MusicNerdWeb routes, database, jobs or deployment changes.

Passed:
- `npm run check`: JS/server syntax.
- `node check-content.mjs`: bilingual content, source and entity references, 43 image paths/captions, media links, expanded relationships, removed unrelated band branch.
- `node check-interactions.mjs`: DOM regression checks for profiles, sourced trails, EN/ES, saved listening, chronology/glossary, all 11 sections, provider switching, persistent embed through navigation, cinema cleanup.
- Native Chrome desktop inspection: photographic Rutan profile, Rutan → Internal Suffering trail, save and reload retaining the selection, guided connection trails.
- Chrome 402 × 900 emulation: mobile hero without the obstructing left rail; wrapping navigation; contextual prologue; sticky chapter dropdown; English and Spanish paragraphs remained at the same reading passage after language-route change.

Limits:
- DOM tests do not prove provider playback. The added Bandcamp, Spotify and YouTube embeds were structurally checked; each provider/account/region combination and native phone audio remain unverified.
- Chrome reported a console error in the review profile, but its selected-context console did not expose the message; do not claim a clean browser console.
- Original letters/booklet, full transcript audition, complete regional coverage and 1980s women’s oral histories remain research gaps documented in RESEARCH.md.
- Image credit is recorded; public publication rights are not cleared except the explicitly public-domain Rutan photograph.

The live review URL is http://127.0.0.1:4179/#/en/story/context .

## Timeline and photographic prologue pass — 3 November 2026

Added credited, chapter-linked imagery to all 11 timeline entries. Converted prologue passages 1, 3 and 5 to full-bleed photography with alternating text positions; retained framed archival material for pacing. Responsive CSS provides a photograph-to-text gradient on narrow screens.

Passed syntax, content-integrity and interaction DOM checks. Chrome loaded the current illustrated timeline and the first full-bleed prologue transition. Full visual review of timeline rows and updated mobile compositions remains incomplete: native browser automation was repeatedly interrupted by active user changes. No API/database integration or deployment performed. See API-AUTHORING-PROPOSAL.md for the separate research-system discussion draft.

## Link contrast and connection pass — 3 November 2026

Dark photographic passages now use white inline links with pink underlines and light pink source links, including visited/focus states. Confirmed both fixes rendered in desktop Chrome. Linked existing named entities through chapter leads, prose and listening notes; added soundtrack-connected entries for Pestes, Mutantex and Amén with clearly labeled context imagery. Localized Various artists and Digital edition display labels, and aligned Explore labels with their destination entries.

Syntax, content integrity and DOM interaction checks pass, including clicking the Mutantex listening-note link and checking that narrative markup does not leak into visible prose. Targeted mobile passage verification was interrupted by user browser activity; mobile hero was viewed but the changed passages were not fully reviewed at phone width.

## Entrance and mobile navigation — 3 November 2026

Replaced the white framed-photo entrance with a full-bleed archival photograph and dark header. Added bilingual reading estimates (7–10 minutes for the approximately 1,300-word story; 15–20 with profiles, excluding optional playback). Homepage prepares the actual Bandcamp control rather than requiring a custom opener then a second play click. In Chrome at 402px, clicking the visible provider control switched to pause and produced the tab audio indicator; no unsolicited autoplay.

Added a mobile hamburger menu with a full-screen modal, blurred backdrop, current-section styling, native focus containment, Escape/close handling, scroll locking and reduced-motion-aware entrance/page fade. Verified the compact header, menu open and navigation to Timeline at 402px in Chrome; persistent player remained mounted. DOM checks cover menu routing and close state alongside existing bilingual/media flows. Desktop entrance still needs a dedicated visual pass.


## Published 3 November 2026
- Title: Medellín Metal; scoped to Medellín and selected outward connections.
- Production: https://medellinmetal-mn.vercel.app
- Vercel project musicnerd/medellinmetal-mn; deployment dpl_HhUGN79pzY8uMDe3ats98bMXwZVo. Standalone static publication, no main MusicNerdWeb deployment.
- Requested medellinmetal.mn.vercel.app rejected: Music Nerd does not control *.mn.vercel.app.
- Public HTTP 200; deployed app.js/style.css byte-match local files. Syntax, content and interaction checks pass.
- Centered glass menu visually verified in Chrome at 402px; published desktop entrance rendered successfully. Scroll arrow implemented with reduced-motion support; final live animation capture interrupted by browser tool timeout.
- Public package contains only site assets and sanitized research dossier; raw transcript and scraper payloads remain local.


## Editorial and visitor contributions — 4 November 2026

Eight main chapters now concentrate on Medellín; three longer connections remain optional routes. Added six sourced listening guides, differentiated soundtrack-band profiles, NecroMetal and radio connections, Ramiro Meneses and Rosa Colorado, a three-place guide, and contextual correction/archive forms. The evidence field accepts multiple links and explanatory notes. Historical claims distinguish attributed recollections from inspected original material.

Passed `npm run check`, `node check-content.mjs` and `node check-interactions.mjs`. Regression checks cover the existing profile/trail, bilingual, saved-listening and provider-switching flows; eight main chapters and optional-route return; six guides; correction validation, escaped input, multiple evidence links, canonical entry URL, private defaults, tab-only draft retention, Spanish archive permission text and lack of personal-data localStorage writes. Added regression checks for initial Spanish deep links and the chapter indicator during interludes.

Rendered in native Safari: desktop Bull Metal profile, correction dialog and prepared email; the Spanish house chapter at 390 CSS px; archive form and review with two evidence links at 390px; the neighborhood guide at 390px; listening guides at 1100px. These reuse the existing Music Nerd font, pink accent, paper surfaces and blurred dialog backdrop. No alternate theme is supplied by this artifact. Desktop Safari with a narrow iframe is not a native iPhone/keyboard test. Additional optional-route visual review was interrupted by activity in the shared browser; its navigation/return and content passed DOM checks.

The standalone project has no mail-service configuration. A third-party setup request failed with HTTP 522 and is not used. The shipped flow prepares an email for the specified private review inbox and offers copying for webmail. Visitors must send it; no test email was sent and delivery is not verified. There is no automatic submission backend, upload hosting, review queue or Music Nerd database write. Form fields remain in tab memory until reload, and nothing is published automatically.

Provider playback has not been independently auditioned in this pass; earlier playback evidence is recorded above. Current listening guidance is source-based, not a claim of independent audio analysis. Original letters, fanzine issues, expanded firsthand testimony and image-rights clearance remain separate research work.


### Publication — 4 November 2026

Production alias: https://medellinmetal-mn.vercel.app
Deployment: `dpl_groev5hyPkpM28G5BxhzwL44sYpb` (`medellinmetal-obgf1appj-musicnerd.vercel.app`), READY in the existing `musicnerd/medellinmetal-mn` project. No main-app release. Public verification fetched 35 files: each returned HTTP 200 and byte-matched the publication manifest. Raw transcript, scraper output and the local QA fixture return HTTP 404. Production-only browser inspection was not completed because the shared browser was being used concurrently; local native Safari rendering and exact-file comparison are the available evidence.
