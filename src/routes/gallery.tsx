import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/lib/site-data";

const OG_IMAGE = "https://conquer-world.lovable.app" + galleryImages[0].url;

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery | Faith in Action — ConquerWorld Apostolic Renaissance" },
      {
        name: "description",
        content:
          "Photos from the field: street evangelism, village outreach, open-air teaching, and the CAR outreach team carrying the gospel across northern Uganda.",
      },
      { property: "og:title", content: "Faith in Action — CAR Ministry Gallery" },
      {
        property: "og:description",
        content:
          "Real moments from CAR outreaches — street storming, village preaching, and open-air teaching.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://conquer-world.lovable.app/gallery" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://conquer-world.lovable.app/gallery" }],
  }),
});

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shown = galleryImages.filter((g) => filter === "All" || g.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : shown[openIndex];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-20 text-white">
        <div className="absolute inset-0 opacity-40 [background:var(--gradient-glow)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <Camera className="h-3.5 w-3.5" /> Gallery
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Faith in <span className="text-gradient-fire">Action.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Moments from the field — streets, markets, junctions, and villages where the fire of
            the gospel is carried by ordinary young believers.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {(["All", ...galleryCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setFilter(c);
                  setOpenIndex(null);
                }}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  filter === c
                    ? "border-fire bg-fire text-white shadow-fire"
                    : "border-border bg-card text-muted-foreground hover:border-fire/50 hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {shown.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card transition hover:-translate-y-1 hover:border-fire/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={g.url}
                    alt={g.alt}
                    loading="lazy"
                    width={g.orientation === "landscape" ? 1280 : 720}
                    height={g.orientation === "landscape" ? 960 : 1280}
                    className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fire">
                    {g.category}
                  </p>
                  <h2 className="mt-2 font-display text-lg font-semibold">{g.caption}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{g.context}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fire py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Join the next outreach.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            These photos are invitations. Come and carry the fire with us — on the streets, in the
            markets, and to the villages.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="glow" size="lg">
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button asChild variant="glow" size="lg">
              <Link to="/give">Fuel the Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex flex-col bg-charcoal/95 backdrop-blur-xl"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {active.category}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close image"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-fire sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={active.url}
              alt={active.alt}
              className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-fire sm:right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 pb-8 text-center sm:px-6">
            <p className="font-display text-xl font-semibold text-white">{active.caption}</p>
            <p className="mt-1 text-sm text-white/60">{active.context}</p>
            <p className="mt-3 text-xs text-white/40">
              {openIndex! + 1} / {shown.length} · Use arrow keys to browse
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

