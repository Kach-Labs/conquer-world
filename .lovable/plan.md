# Ministry Gallery + Real Photo Rollout

Your 5 photos are real ministry moments: street evangelism at a fuel station, an open-air teaching under a tree, village preaching with elders, tract distribution at a city junction, and the outreach team in branded reflector vests. That's a strong "we're actually out there" story, so they should do more than sit on one page.

## 1. New Gallery page (`/gallery`)

- Added to the main nav (desktop + mobile) between Events and Devotional.
- Short fire-styled hero: "Faith in Action — Moments from the Field".
- Masonry-style responsive grid using the real photos, each with a caption and location/context line (e.g. "Street evangelism, Gulu Road junction").
- Click a photo to open a lightbox (full image, caption, arrow/keyboard navigation, Escape to close).
- Filter chips by category: Street Evangelism, Village Outreach, Teaching, Team.
- Closing CTA: "Join the next outreach" → /programs and /give.

## 2. Other ways to use the photos

- **Homepage "Who We Are" section**: swap the AI-generated preaching image for the real open-air teaching photo — instant credibility.
- **Homepage strip**: a thin scrolling/edge-to-edge band of 4 photos above the Partner CTA, linking to the gallery.
- **About page**: the village preaching photo alongside the founder/history section.
- **Programs page**: map photos to matching programs — street evangelism to Global Outreach, teaching photo to discipleship, team-in-vests photo to volunteering/get involved.
- **Give page**: the team photo as the "this is what your giving funds" visual.
- **Events page**: past-event cards use real photos instead of stock.
- **Social preview images (og:image)**: use a gallery photo so shared links show real ministry, not generic art.
- Keep the AI-generated flame/abstract art only for decorative overlays where a photo would be noise.

This plan covers the Gallery page plus swaps on Home, About, Programs and Give. Say the word if you'd rather start with only the gallery.

## Technical notes

- Upload each photo through Lovable Assets and reference the `.asset.json` pointers, so no binaries land in the repo.
- New `galleryImages` array in `src/lib/site-data.ts` (id, asset url, caption, category, alt text) as the single source used by the gallery, homepage strip, and program/give swaps.
- New route `src/routes/gallery.tsx` with its own `head()` metadata (title, description, og/twitter tags, including og:image from the CDN URL).
- Lightbox built with the existing shadcn Dialog; no new dependencies.
- Images lazy-loaded with width/height set to avoid layout shift; captions and alt text written per photo for accessibility and SEO.
- Add `/gallery` to `src/routes/sitemap[.]xml.ts`.
