# Move images to /public for Vercel-safe paths

Goal: every image loads from a plain root-relative path like `/images/outreach1.webp`, with no dependency on the internal `/__l5e/` asset route.

## What changes

1. Download the 6 CDN-hosted files and commit them as static files:
   - `public/images/outreach1.webp` … `outreach5.webp`
   - `public/images/car-logo.png`
2. Update the 6 referencing files to use string paths instead of JSON imports:
   - `src/lib/site-data.ts` (gallery: 5 images)
   - `src/routes/index.tsx` (teaching photo)
   - `src/routes/about.tsx` (village photo)
   - `src/routes/give.tsx` (team photo)
   - `src/components/site-header.tsx` (logo)
   - `src/components/site-footer.tsx` (logo)
3. Delete the 6 now-unused `src/assets/*.asset.json` pointer files.
4. Leave the AI-generated `.jpg` files in `src/assets/` alone — they are bundler imports and already work in production. `public/favicon.png` is unchanged.

## Technical notes

- Introduce a small constant map (e.g. `src/lib/images.ts`) exporting `/images/...` strings so paths live in one place, and reference it from the components.
- Files in `public/` are copied verbatim into the build output, so `/images/x.webp` resolves on Vercel and locally.
- Verify with a production build plus a check that no `__l5e` or `.asset.json` reference remains in `src/`.

## Note

The CDN URLs stop being referenced but the uploaded assets are not deleted, so this is fully revertible.
