# Gallery Page + Remove Events

Your 5 photos are real ministry moments: street evangelism at a fuel station, an open-air teaching under a tree, village preaching with elders, tract distribution at a city junction, and the outreach team in branded reflector vests. That story deserves more than one page — and the Events section goes away entirely, which also tidies the top nav.

## 1. Remove Events

- Delete the `/events` route and page.
- Remove Events from the top nav and the footer links.
- Remove the "Upcoming" events panel from the homepage; the Today's Devotional section expands to fill that space (this also clears a date-rendering warning coming from that panel).
- Change the Programs page CTA from "See Upcoming Events" to "View the Gallery".
- Drop `/events` from the sitemap; remove the now-unused event data and countdown code.

## 2. New Gallery page (`/gallery`)

- Takes the Events slot in the top nav, so the menu stays the same length.
- Fire-styled hero: "Faith in Action — Moments from the Field".
- Masonry-style responsive grid of the real photos, each with a caption and context line.
- Click a photo for a lightbox: full image, caption, arrow/keyboard navigation, Escape to close.
- Filter chips: Street Evangelism, Village Outreach, Teaching, Team.
- Closing CTA: "Join the next outreach" → /programs and /give.

## 3. Other ways to use the photos

- **Homepage "Who We Are"**: swap the AI-generated preaching image for the real open-air teaching photo.
- **Homepage strip**: a thin edge-to-edge band of 4 photos above the Partner CTA, linking to the gallery.
- **About page**: village preaching photo alongside the history/founder section.
- **Programs page**: match photos to programs — street evangelism to Global Outreach, teaching photo to discipleship, team-in-vests photo to volunteering.
- **Give page**: the team photo as the "this is what your giving funds" visual.
- **Social preview (og:image)**: use a gallery photo so shared links show real ministry, not generic art.
- Keep the AI flame/abstract art only for decorative overlays.

## Technical notes

- Upload each photo via Lovable Assets and reference the `.asset.json` pointers so no binaries land in the repo.
- New `galleryImages` array in `src/lib/site-data.ts` (id, url, caption, category, alt) as the single source for the gallery, homepage strip, and page swaps; remove `events` and `EventItem`.
- New `src/routes/gallery.tsx` with its own `head()` metadata (title, description, og/twitter tags, og:image from the CDN URL).
- Delete `src/routes/events.tsx`; the route tree regenerates automatically.
- Lightbox built with the existing shadcn Dialog — no new dependencies.
- Images lazy-loaded with width/height set to avoid layout shift; per-photo alt text for accessibility and SEO.
- Nav becomes: Home, About, Programs, Gallery, Devotional, Prayer, Testimonies, Give, Contact.
