# Dropship TikTok profile recreation

## Open immediately

Open `offline.html` in a current Chrome, Edge, Firefox, or Safari browser. Images, fonts, captured markup, and styles are embedded. This entry does not need npm or a network connection.

Published preview: https://api.magicpath.ai/v1/cleverly-minute-5016

MagicPath project: https://www.magicpath.ai/files/463196290357010432

## Run the React source

Use Node.js 22 or newer:

```sh
npm ci --ignore-scripts
npm run build
npm run preview
```

Open the localhost URL printed by the server. `npm run dev` builds and starts the same server. Restart/rebuild after source changes; it is not a hot-reload server. The portable build uses esbuild-wasm and does not require a native esbuild executable.

## Edit the recreation

- `src/components/generated/DropshipTikTokProfile.tsx`: isolated React iframe wrapper. This is the same component source submitted to MagicPath.
- `runtime.js`: readable interaction engine and responsive adaptations.
- `src/components/generated/profile-data.ts`: compressed capture data, CSS, and 121 embedded image/font assets.
- `src/components/generated/profile-runtime.ts`: generated UTF-8-safe runtime module.
- `src/App.tsx` and `src/index.css`: preserved MagicPath wrapper/scaffold. The local entry does not need Tailwind because all native styling is isolated inside the iframe.

To inspect or edit captured content:

```sh
npm run unpack
# Edit capture-data.json and/or runtime.js.
npm run regenerate
npm run build
```

Do not hand-edit the generated runtime module. Do not add live TikTok APIs or remove the network/account-action protections accidentally.

## Included verification

See `evidence/` and `CONTEXT.md` for the captured scope, measured comparisons, hosted verification, and limitations. `CHECKSUMS.sha256` covers the delivered files other than itself.
