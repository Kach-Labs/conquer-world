import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resolveImage } from "@/components/image-by-key";
import { devotionals, ministry } from "@/lib/site-data";

export const Route = createFileRoute("/devotional")({
  component: DevotionalPage,
  head: () => ({
    meta: [
      { title: "Today's Devotional | Youth for Jesus" },
      {
        name: "description",
        content:
          "The Youth for Jesus Devotional by Apostle John Wiseman — daily inspiration to walk in truth, live by faith, and impact your world.",
      },
      { property: "og:title", content: "Youth for Jesus — Daily Devotional" },
      {
        property: "og:description",
        content: "A daily guide to spiritual growth, empowerment, and transformation.",
      },
    ],
  }),
});

function DevotionalPage() {
  const sorted = useMemo(
    () => [...devotionals].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [],
  );
  const [index, setIndex] = useState(0);
  const current = sorted[index];
  const hasPrev = index < sorted.length - 1;
  const hasNext = index > 0;

  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-16 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src={resolveImage(current.image)}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Youth for Jesus Devotional
          </p>
          <h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            {current.title}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/70">
            {new Date(current.date).toLocaleDateString("en", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            · {current.author}
          </p>
        </div>
      </section>

      <article className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={resolveImage(current.image)}
              alt={current.title}
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-fire/20 bg-fire/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-fire">Scripture</p>
            <p className="mt-2 font-display text-xl font-semibold text-foreground">
              {current.scripture}
            </p>
          </div>

          <div className="prose prose-lg mt-10 max-w-none text-foreground/90">
            {current.body.split("\n\n").map((para, i) => (
              <p key={i} className="mt-6 text-lg leading-relaxed first:mt-0">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <MessageCircle className="mx-auto h-8 w-8 text-fire" />
            <h3 className="mt-3 font-display text-xl font-semibold">
              Get today's devotional on WhatsApp
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Join our channel and be encouraged every morning.
            </p>
            <div className="mt-5">
              <Button asChild variant="fire" size="lg">
                <a
                  href={current.whatsapp ?? ministry.whatsappChannel}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join WhatsApp Channel
                </a>
              </Button>
            </div>
          </div>

          <nav className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-8">
            <button
              type="button"
              onClick={() => hasPrev && setIndex((i) => i + 1)}
              disabled={!hasPrev}
              className="group flex items-center gap-3 text-left disabled:opacity-30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition group-enabled:hover:border-fire group-enabled:hover:text-fire">
                <ArrowLeft className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Previous
                </span>
                <span className="block font-display text-sm font-semibold">
                  {hasPrev ? sorted[index + 1].title : "—"}
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => hasNext && setIndex((i) => i - 1)}
              disabled={!hasNext}
              className="group flex items-center gap-3 text-right disabled:opacity-30"
            >
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Next
                </span>
                <span className="block font-display text-sm font-semibold">
                  {hasNext ? sorted[index - 1].title : "—"}
                </span>
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition group-enabled:hover:border-fire group-enabled:hover:text-fire">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </nav>
        </div>
      </article>
    </div>
  );
}
