# Dropship TikTok Profile Recreation

An isolated, offline MagicPath recreation of the public logged-out TikTok profile at `@dropship`, captured October 20, 2026.

**Live preview:** https://api.magicpath.ai/v1/cleverly-minute-5016
**MagicPath project:** https://www.magicpath.ai/files/463196290357010432

## Run

Open `offline.html` directly for the self-contained offline replay.

Or build the React wrapper:

```sh
npm install --ignore-scripts
npm run build
npm run preview
```

## What works locally

- Captured Latest, Popular, Oldest, Reposts, and private Liked views
- Tabs, sort switches, suggested accounts, sidebar collapse/expand, share/actions/login-gate visuals
- Safe local caption search and static post previews
- Keyboard Escape dismissal and responsive phone-width adaptation

This is not a TikTok client. It has no live network/API calls, authentication, video playback, audio, account mutations, or external sharing. Read [`CONTEXT.md`](CONTEXT.md) for full scope, asset provenance, limitations, and verification details. [`INSTRUCTIONS.md`](INSTRUCTIONS.md) explains the source layout and rebuild path.

## Verification

The package includes 121 embedded image/font assets, 574 captured-element measurements across five main views, and 31 hosted interaction checks. See `evidence/` for the recorded results.
