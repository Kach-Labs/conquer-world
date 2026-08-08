import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bus,
  Flame,
  Globe,
  GraduationCap,
  Home,
  BookOpen,
  Megaphone,
  Radio,
  Sun,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/site-data";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs & Initiatives | ConquerWorld Apostolic Renaissance" },
      {
        name: "description",
        content:
          "Conferences, online courses, the Youth for Jesus Devotional, global outreach, campus ministry, radio, and street evangelism — nine ways CAR carries the fire.",
      },
      { property: "og:title", content: "CAR Programs & Initiatives" },
      {
        property: "og:description",
        content: "Nine dynamic programs advancing the Kingdom across the nations.",
      },
    ],
  }),
});

const iconMap: Record<string, LucideIcon> = {
  flame: Flame,
  book: BookOpen,
  sun: Sun,
  globe: Globe,
  megaphone: Megaphone,
  home: Home,
  "graduation-cap": GraduationCap,
  radio: Radio,
  bus: Bus,
};

const photoBySlug: Record<string, { url: string; alt: string }> = {
  "global-outreach": {
    url: galleryImages.find((g) => g.id === "g-003")!.url,
    alt: "Evangelist preaching to village elders during a CAR outreach",
  },
  "market-evangelism": {
    url: galleryImages.find((g) => g.id === "g-001")!.url,
    alt: "Young evangelist preaching aloud at a busy town junction",
  },
  "door-to-door": {
    url: galleryImages.find((g) => g.id === "g-004")!.url,
    alt: "Evangelist handing out gospel tracts at a city junction",
  },
  campus: {
    url: galleryImages.find((g) => g.id === "g-002")!.url,
    alt: "Open-air teaching to a seated group of young people",
  },
  conferences: {
    url: galleryImages.find((g) => g.id === "g-005")!.url,
    alt: "CAR outreach team in reflector vests before a market storming",
  },
};


function ProgramsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-24 text-white sm:pb-32">
        <div className="absolute inset-0 opacity-40 [background:var(--gradient-glow)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Programs & Initiatives
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Nine ways we carry the{" "}
            <span className="text-gradient-fire">fire.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            From packed conferences and campus outreaches to buses, radios, and door-to-door
            visits — the harvest is plentiful, and we are raising laborers.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => {
              const Icon = iconMap[p.icon] ?? Flame;
              return (
                <article
                  key={p.slug}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-fire/50"
                >
                  <div className="absolute -right-6 -top-6 text-[7rem] font-black text-fire/[0.06] leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-fire text-white shadow-fire">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-fire">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-fire py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Equip yourself for evangelism.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Join our discipleship programs to grow in knowledge, faith, and spiritual influence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="glow" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="glow" size="lg">
              <Link to="/gallery">See the Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
