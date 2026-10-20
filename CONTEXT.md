# Capture context and boundaries

## Source and intent

The user requested a MagicPath recreation of the current public TikTok profile at https://www.tiktok.com/@dropship?lang=en. This is an isolated, unaffiliated UI recreation, not a TikTok client. The public, logged-out desktop profile was captured on October 20, 2026 at 1172 × 809 CSS pixels.

The observed account is Dropship, @dropship, with 1 following, 4.9M followers, and 225.9M likes. Counts and content are captured observations, not live data.

## Captured coverage

Twelve native states are embedded: Latest, Popular, Oldest, Reposts, Liked, Share, Actions, login gate, More, suggested accounts, collapsed sidebar, and its expand-button hover state.

The loaded grids contain 16 Latest cards, 16 Popular cards, 14 Oldest cards, and 28 Repost cards. These are captured positions, not a claim of unique posts or a complete account archive. The Liked tab preserves the observed private-videos state. Both playlist cards and the suggested-account carousel are retained. There are 121 embedded image/font assets.

Tabs, sorting, sidebar collapse/expand, the native overlay panels, suggested-account toggling, modal dismissal, and keyboard Escape are local interactions. Local caption search and the static post-image preview are explicit adaptations, not captured TikTok search/watch screens. Video thumbnails are still images.

## Deliberate limits

- No live video playback, audio, animated hover previews, comments, infinite scrolling, or full playlist playback.
- No login, credential collection, follow, message, report, block, upload, purchase, or other TikTok mutation.
- The captured login gate is visual only. Provider links do not start authentication.
- Other navigation, language selection, unrecorded More submenus, and theme changes are outside the capture and show an offline notice.
- The profile-link copy action depends on browser clipboard permission. External sharing is disabled.
- Phone-width styling is an adaptation checked for usable bounds, not a claim of a captured native mobile interface.
- Source-side pointer-driven video behavior is not fabricated. The replay remains a static-media interface.

## Isolation and export hygiene

The native UI lives in its own iframe. Its CSP blocks network connections, forms, media playback, external scripts, and external images/fonts. Navigation and window opening are neutralized. All native image/font resources are embedded. MagicPath's outer hosting UI is separate from this isolation boundary.

The package excludes authenticated browser state, cookies, signed asset URLs, raw capture inventories, private download tooling, and MagicPath coding-session manifests. Public profile/post references and native UI markup remain as reference data. Assets retain their original owners' rights.

## Verification

The five main views were compared against 574 captured elements at the native viewport, covering geometry and captured computed-style properties. See the verification JSON files for exact results. Real browser clicks also exercised the local and published interaction routes. The source package is built with TypeScript and a portable WebAssembly-based production bundler; the extracted deliverables are independently smoke-tested before delivery.
