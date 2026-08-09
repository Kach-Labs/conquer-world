import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Flame,
  Globe,
  Heart,
  Sparkles,
  BookOpen,
  Users,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { resolveImage } from "@/components/image-by-key";
import {
  coreValues,
  devotionals,
  galleryImages,
  ministry,
  objectives,
  programs,
  testimonies,
} from "@/lib/site-data";
import heroImg from "@/assets/hero-revival.jpg";
import { photos } from "@/lib/images";


export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "ConquerWorld Apostolic Renaissance | Set The World Ablaze" },
      {
        name: "description",
        content:
          "A Spirit-led youth revival movement raising a generation on fire for Jesus. Read today's devotional, submit a prayer request, or partner with the mission.",
      },
      { property: "og:title", content: "ConquerWorld Apostolic Renaissance | Set The World Ablaze" },
      {
        property: "og:description",
        content:
          "A Spirit-led youth revival movement raising a generation on fire for Jesus. Read today's devotional, submit a prayer request, or partner with the mission.",
      },
    ],
  }),
});

function HomePage() {
  const todayDevo = devotionals[0];
  const strip = galleryImages.slice(0, 4);

  return (
    <div className="text-foreground">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Youth revival worship gathering"
            className="h-full w-full object-cover opacity-55"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top,oklch(0.68_0.21_42/0.35),transparent_60%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
              <Flame className="h-3.5 w-3.5" />
              A Global Move of God
            </div>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
              Set The
              <br />
              World <span className="text-gradient-fire">Ablaze.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              ConquerWorld Apostolic Renaissance is a Spirit-led youth movement unleashing the fire
              of revival, impacting nations, and fulfilling the Great Commission.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              {ministry.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="fire" size="lg">
                <Link to="/about">
                  Discover CAR <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glow" size="lg">
                <Link to="/prayer">Submit Prayer Request</Link>
              </Button>
              <Button asChild variant="glow" size="lg">
                <Link to="/devotional">Read Today's Devotional</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { n: "9+", l: "Programs" },
              { n: "24/7", l: "Prayer" },
              { n: "Daily", l: "Devotionals" },
              { n: "Global", l: "Reach" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-fire/60 pl-4">
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionEyebrow>Who We Are</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                This is not another organization.{" "}
                <span className="text-gradient-fire">This is a move of God.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A global spiritual tsunami is imminent — poised to sweep the earth. We are on the
                brink of an unprecedented move of God, a historic awakening. Our mandate is clear:
                to set the world ablaze.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <MiniCard icon={Flame} title="Mission" text={ministry.mission} />
                <MiniCard icon={Globe} title="Vision" text={ministry.vision} />
                <MiniCard icon={Sparkles} title="Purpose" text={ministry.purpose} />
              </div>
              <div className="mt-8">
                <Button asChild variant="fire">
                  <Link to="/about">
                    Read Our Story <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-fire opacity-20 blur-3xl" />
              <img
                src={photos.outreach2}
                alt="CAR evangelist teaching a seated community group outdoors under a large tree"
                className="relative w-full rounded-3xl object-cover shadow-card"
                loading="lazy"
                width={1280}
                height={960}
              />

            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES + VALUES */}
      <section className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:var(--gradient-glow)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow tone="dark">Our Objectives</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Ignite. Influence. <span className="text-gradient-fire">Impact.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {objectives.map((o, i) => (
              <div
                key={o.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-fire/50 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-8 -top-8 text-[8rem] font-black text-white/[0.04] leading-none">
                  0{i + 1}
                </div>
                <Flame className="h-8 w-8 text-fire" />
                <h3 className="mt-5 font-display text-2xl font-bold">{o.title}</h3>
                <p className="mt-3 text-white/70">{o.desc}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">
                  {o.scripture}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="text-center">
              <SectionEyebrow tone="dark">Core Values</SectionEyebrow>
              <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                The DNA of the Movement
              </h3>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-fire/40"
                >
                  <div className="h-8 w-8 rounded-lg bg-fire/20 p-1.5 text-fire">
                    <Flame className="h-full w-full" />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold">{v.title}</h4>
                  <p className="mt-2 text-sm text-white/60">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <SectionEyebrow>Programs</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                Nine ways we carry the <span className="text-gradient-fire">fire</span>.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/programs">
                All programs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((p) => (
              <div
                key={p.slug}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-fire/50"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fire text-white shadow-fire">
                  <Flame className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVOTIONAL */}
      <section className="bg-charcoal py-24 text-white sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionEyebrow tone="dark">Today's Devotional</SectionEyebrow>
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            {todayDevo.title}
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold">
            {todayDevo.scripture} · {todayDevo.author}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {todayDevo.summary}
          </p>
          <div className="mt-8">
            <Button asChild variant="fire" size="lg">
              <Link to="/devotional">
                Read the full devotional <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* TESTIMONIES */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Testimonies</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              God is <span className="text-gradient-fire">still moving</span>.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonies.slice(0, 3).map((t) => (
              <blockquote
                key={t.id}
                className="relative rounded-2xl border border-border bg-card p-8 shadow-card"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-fire/25" />
                <p className="text-base leading-relaxed text-foreground/85">"{t.text}"</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fire text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    {t.location && (
                      <div className="text-xs text-muted-foreground">{t.location}</div>
                    )}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/testimonies">
                Read more testimonies <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow tone="dark">Gallery</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Faith in <span className="text-gradient-fire">action</span>.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1 text-sm font-semibold text-fire hover:underline"
            >
              View the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-1 sm:gap-2 lg:grid-cols-4">
          {strip.map((g) => (
            <Link
              key={g.id}
              to="/gallery"
              className="group relative block aspect-4/3 overflow-hidden"
            >
              <img
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {g.category}
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-white">{g.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* PARTNER CTA */}
      <section className="relative overflow-hidden bg-fire py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
          <img src={resolveImage("flame")} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-10 w-10" />
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            Partner with the fire.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
            Every vision requires a vessel; every fire needs fuel. When you partner with CAR you
            become a builder of the Kingdom and a carrier of revival to the nations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="xl" variant="glow">
              <Link to="/give">Give Now</Link>
            </Button>
            <Button asChild size="xl" variant="glow">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECONDARY LINKS */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <PromoTile
              to="/prayer"
              icon={Heart}
              title="Submit a Prayer Request"
              desc="Where two agree, Heaven responds. Our team is standing with you."
            />
            <PromoTile
              to="/devotional"
              icon={BookOpen}
              title="Youth for Jesus Devotional"
              desc="Daily inspiration to walk in truth, live by faith, and impact your world."
            />
            <PromoTile
              to="/programs"
              icon={Users}
              title="Get Involved"
              desc="Nine programs — from campus outreach to global conferences. Join the fire."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionEyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        tone === "dark"
          ? "border-white/15 bg-white/5 text-gold"
          : "border-fire/30 bg-fire/5 text-fire"
      }`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {children}
    </div>
  );
}

function MiniCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
      <Icon className="h-5 w-5 text-fire" />
      <h4 className="mt-3 font-display text-sm font-bold uppercase tracking-wider">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function PromoTile({
  to,
  icon: Icon,
  title,
  desc,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-fire/50"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fire text-white shadow-fire">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-fire">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
