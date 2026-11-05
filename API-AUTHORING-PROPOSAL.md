# Music Nerd Labs: research that can become an experience

Discussion draft · 3 November 2026; status clarified 4 November 2026. No API or database integration implemented by this document.

For the shipped build and reusable workflow, read [BUILD-PROTOCOL.md](BUILD-PROTOCOL.md). The current artifact has local structured content and an email-preparation contribution flow; it does not send submissions or write to Music Nerd. The API code observations below are from the earlier investigation and must be rechecked before implementation.

## What this build teaches us

The Instagram reel was a lead, not a complete brief or an authoritative history. The local process extracted a machine transcript, expanded its names and claims through reporting, artist testimony and catalogs, wrote a research dossier, and assembled bilingual entities, sourced relationships, chapters and listening moments. Subsequent editorial feedback changed the scope: social and political context before bands; producers explained as people; attributed influence distinguished from recording credits; images attached to entries; mobile navigation adjusted; missing voices and geographic limits disclosed.

This is a reconstructable sequence of artifacts and decisions, not a claim that we retained every model thought or tool invocation. A reusable workflow should retain the brief, source records, tool outcomes, editorial decisions and revisions from the start. The seed could equally be a scene, artist, question, uploaded interview or collection of records.

## Product boundary

A request should create a research project. A publishable experience is one output of that project. Other outputs could be a sourced answer, listening itinerary, artist profile enrichment or interview preparation. Do not make a website build mandatory for every question.

Start with an internal editorial tool. A public self-service generator changes the requirements: cost ceilings, abuse controls, privacy, publication permissions and expectations about unfinished research. Establish reliability with a curated Labs collection before promising an instant documentary about any scene.

## Existing foundations, checked against API main

- `lib/knowledge/createArtistKnowledgeTools.ts` provides brief, source inventory, search, exact source reads, interview history and research status. Its descriptions correctly distinguish generated summaries from evidence. Reads use source IDs, revisions and passage offsets; unavailable historical revisions produce a conflict rather than invented continuity.
- Artist-scoped `/research/questions` routes and `lib/questionResearch/researchOutputSchemas.ts` provide research progress and evidence references. Outputs distinguish pending/approved sources, original text/captions/provider transcripts, limitations, quotas and unresolved states. A completed job is not a complete scene history.
- `/research/discoveries/.../review` exists. The current README describes authorization and publication boundaries between public social material, approved-claim Lore and private preparation. A Labs page must not flatten these scopes.
- `lib/bioCorrections/reviewBioCorrection.ts` records resolution/dismissal, reviewer and time for pending About reports. This is a useful correction precedent, not evidence of a general relationship correction API.

These are code-contract observations, not authenticated production end-to-end verification. Sources: https://github.com/xdjs/MusicNerdAPI/blob/main/lib/knowledge/createArtistKnowledgeTools.ts ; https://github.com/xdjs/MusicNerdAPI/blob/main/lib/questionResearch/researchOutputSchemas.ts ; https://github.com/xdjs/MusicNerdAPI/blob/main/lib/bioCorrections/reviewBioCorrection.ts ; https://github.com/xdjs/MusicNerdAPI/blob/main/README.md

## Proposed flow

1. Save a brief: topic, place, dates, audience, languages, seed materials, desired depth, exclusions and research budget. Turn broad prompts into an explicit initial scope; preserve later scope changes.
2. Resolve existing Music Nerd artists and retrieve permitted originals first. Keep ambiguous identities unresolved. A scene is not a synthetic artist profile.
3. Build a question plan: origins, infrastructure, sound, records, people, circulation, disagreements and missing perspectives. Queue bounded research for actual gaps through existing supported jobs. Record partial failures and paid-provider reuse.
4. Save evidence and candidate assertions separately. Each assertion identifies its subject, relationship, object, relevant period, supporting source revision/passage, attribution and review status. Do not treat repeated retellings as independent confirmation. Do not equate a model confidence score with historical certainty.
5. Assemble a versioned editorial manifest: chapters, short passages, referenced assertion IDs, images and captions, focal points, audio/video provider IDs, geographic scope, translations and sources. This is a proposed contract, not an existing API endpoint.
6. Render it with tested Music Nerd components. An agent chooses pacing and composition from a small vocabulary; custom layouts remain possible. Consistent mobile, focus, captions and playback should not depend on regenerating arbitrary application code every time.
7. Review and publish a revision. Keep private research separate from a public projection. Image identity, date and usage permission are separate fields; having a source URL is not publication permission.
8. Accept a correction against an entity, assertion, source attribution or editorial passage. Keep the previous value and the evidence. Accepted knowledge changes flag dependent English and Spanish passages for review; do not silently rewrite published history.

## What belongs where

Music Nerd API owns authorized reads/writes, entity resolution, durable jobs, reusable originals, review and audit history. A new project layer coordinates a topic spanning artists and non-artist entities. Initially, venues, scenes and events can remain explicitly typed project records linked to canonical artists; promote them to shared entities when cross-project reuse warrants it. Do not force scene, archive, person and record entries into the artists table.

A skill owns the repeatable working method: how to scope research, assess source support, preserve disagreements, write an editorial outline and check a manifest. Keep this understandable and testable rather than one giant prompt.

Labs owns the reader experience and an optional “How this was made” view: original brief, scope revisions, evidence collection, limitations and publication history. Raw private transcripts, credentials and internal reasoning do not belong in that public view.

## Consequences worth deciding deliberately

- **Correction authority:** an artist can speak authoritatively about their experience without unilaterally resolving a disputed history involving other people. Preserve attribution and conflicting testimony where necessary.
- **Evidence bias:** searchable English material and available streams can make internationally visible bands seem historically more important. Missing evidence should create research gaps, not disappear from the account.
- **Visual bias:** a compelling photograph from a later period can imply the wrong date. The current prologue already uses later contextual photographs; captions must remain visible and explicit.
- **Reproducibility:** retain inputs, outputs, source versions and decisions. Exact model regeneration is not guaranteed; the saved published manifest is the reproducible artifact.
- **Publication versus live data:** revisioned editions preserve accountability. Withdrawal of private/revoked evidence should take effect immediately; ordinary factual updates should create a reviewed edition with a change note.
- **Feedback loops:** generated Labs prose must not later be ingested as independent corroboration for the same underlying claim. Preserve derivation links.
- **Cost:** one project can branch across dozens of artists. Cache and reuse originals, deduplicate requests and set a project-wide budget; per-artist limits alone do not bound the whole experience.

## First experiment

Use the existing Medellín dossier. Resolve five existing artists, import a small reviewed set of source-backed assertions through supported contracts, and keep unsupported scene records project-scoped. Render one chapter from a saved manifest. Then submit one deliberate correction in a test environment and demonstrate that affected passages in both languages are identified, reviewed and revised without losing the prior edition. Finally, start a second related brief and show it reuses those originals rather than paying to rediscover them.

Success means traceable passage-to-source lineage, no duplicate artist identities, no unauthorized/private evidence exposure, stable media attribution, a complete correction audit and measurable reuse/cost. A convincing page alone does not prove the system works.
