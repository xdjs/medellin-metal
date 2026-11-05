# Medellín Metal — design decisions

Current status · 4 November 2026: published as a standalone artifact. The dated local-review notes below preserve earlier decisions; the former no-publication restriction was superseded by Pete’s publication request. [BUILD-PROTOCOL.md](BUILD-PROTOCOL.md) records subsequent entrance, navigation, listening and contribution decisions.

Pete selected Style B (Cut & Paste) from http://127.0.0.1:8087/ during the local review. Reference inspected: /private/tmp/mntv-style-review/b-v2.png and gallery index.html. It is a static visual concept, not a live interaction implementation.

Use white paper, near-black type, pink tape/marker accents, offset photographs and record sleeves, and irregular paper edges. The page is a continuous visual story with sticky images and brief passages; it does not use the reference's artist-card grid as the narrative.

Actual Music Nerd assets and patterns inspected: src/app/_components/nav/NavContent.tsx uses src/app/icon.ico; HomePageSplash.tsx uses the lowercase system-sans wordmark; tailwind.config.ts defines pastypink #ef95ff, pastyblue #2ad4fc and jellygreen #19ffb8. The copied icon is used in the header and favicon. The reference's alternate MUSIC NERD logo is not substituted for the actual brand asset.

System font stack retained at Pete's request. Pink is used for tape and primary play controls. Body text stays high contrast. Source images retain attribution. CSS paper edges are decorative framing, not claims about original artifact condition.

Music: compact Bandcamp embed, maximum 700px, persistent across routes/language. Film: inline 16:9 frames at each narrative viewing stop; optional cinema modal also preserves 16:9. New video selection stops music and previous videos.

Mobile: stacked hero, readable paper passages, single-column archive entries, horizontally scrollable relationship map with equivalent list. Reduced-motion disables image drift and smooth jumps.

## Documentary expansion — 3 November 2026
Keep the approved white #f7f7f5 paper, black #111 type, pink #ef95ff marker/tape, gray #555 captions, system sans typography. Add photographic entry headers with captions, a compact path of visited entries, a relationship sentence explaining why a reader arrived, dated career details and media actions. On phones place the image above text and keep Close/Return reachable. Preserve exact story beat and relative reading position across language and navigation.

The story gains rehearsal-room and 1990s chapters, a chronology and glossary, plus later regional and women-led rock context explicitly separated from original ultrametal. Archive photography replaces documentary thumbnails wherever verified. Entity images may be contextual objects or group photographs when a portrait cannot be verified; label that distinction in both languages.

Completion: reader can enter via a paragraph, see an attributed image, follow a sourced relationship, save a record, and return to the same passage. No public deployment.
