[Source and hosting status](docs/SOURCE-HOSTING.md) · [Music Nerd Lab](https://lab.musicnerd.net)

# Medellín Metal

Standalone bilingual Music Nerd Lab documentary. Published at https://medellinmetal-mn.vercel.app. No runtime dependencies or credentials are needed to run locally.

[Build protocol and copyable brief](BUILD-PROTOCOL.md) documents the actual tools, editorial iterations, research method, contribution flow and verification boundaries. [API authoring proposal](API-AUTHORING-PROPOSAL.md) covers the separate future integration.

```sh
npm start
```

Open http://127.0.0.1:4179. Choose English or Spanish, read eight main chapters and three optional routes, explore 50 illustrated entries, and play 11 recordings or documentaries. Six listening guides suggest tracks and comparisons. Sources, edition notes and a research dossier explain evidence and limitations. The player persists through navigation and language changes; closing it stops playback.

`public/data.js` holds bilingual content and sourced relationships. `public/app.js` contains navigation, the explorer, dialogs and provider embeds. `public/contributions.js` prepares contextual correction/archive emails, with a copy fallback; the visitor sends the email. It does not automatically send, save or publish submissions. `public/style.css` and `public/editorial.css` use the approved Music Nerd design. `research/RESEARCH.md` holds the dossier; the raw transcript remains private.

The local server binds to loopback. Publishing uses a separate directory containing only public assets and a sanitized research dossier. Exclude `qa-mobile.html`, source caches, transcripts and scraper output. Media uses Bandcamp, YouTube and Spotify; access depends on providers. Sacrilegio is explicitly labeled as a listener upload. Music Nerd's API and database are not connected. This standalone deployment does not change the main MusicNerdWeb app.

The November 4 revision adds differentiated soundtrack-band histories, NecroMetal, radio, Ramiro Meneses and Rosa Colorado, a three-place circuit guide, source-based listening prompts, contribution forms and public edition notes. Original letters, fanzine issues, additional firsthand interviews, and independently auditioned technical listening analysis remain research work. See `VERIFICATION.md` for actual checks and gaps.

Expansion: four guided trails, sourced relationship context, photographic profiles, persistent saved listening, chronology/glossary, and reading-position restoration. Mobile chapter navigation uses an in-flow sticky dropdown instead of a left-side rail.

Run `npm run check` and `node check-content.mjs`. Run `npm ci && npm test` for syntax, content and DOM interaction checks. jsdom is a development-only dependency.
