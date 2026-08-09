import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coreValues, ministry, objectives } from "@/lib/site-data";
import preachingImg from "@/assets/about-preaching.jpg";
import villagePhoto from "@/assets/outreach3.webp.asset.json";


export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About CAR | ConquerWorld Apostolic Renaissance" },
      {
        name: "description",
        content:
          "The story, mission, vision, and founder of ConquerWorld Apostolic Renaissance — a Spirit-led youth revival movement raised to set the world ablaze.",
      },
      { property: "og:title", content: "About CAR — ConquerWorld Apostolic Renaissance" },
      {
        property: "og:description",
        content:
          "Meet Apostle John Wiseman and discover the mission, vision, and core values of CAR.",
      },
    ],
  }),
});

const timeline = [
  { year: "1998", title: "A life begins in Kalongo", desc: "John Wiseman is born on February 22 in Kalongo Town Council, Uganda, into a devoted Acholi family." },
  { year: "2022", title: "A divine mandate", desc: "He graduates from Makerere University Business School (BBA) and receives the mandate to write the Youth for Jesus Devotional." },
  { year: "2022+", title: "Streets, campuses, buses", desc: "Preaching passionately in markets, universities, high schools, buses, and taxis — carrying the fire wherever he goes." },
  { year: "2025", title: "CAR is founded", desc: "ConquerWorld Apostolic Renaissance is birthed — a global, Spirit-led movement for revival and Kingdom impact." },
];

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal py-32 pt-40 text-white sm:py-40">
        <div className="absolute inset-0 opacity-30">
          <img src={preachingImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Flame className="h-3.5 w-3.5" /> About the Movement
          </div>
          <h1 className="mt-6 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            A new era. A new wave.{" "}
            <span className="text-gradient-fire">The same fire.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            ConquerWorld Apostolic Renaissance is not another organization. It is a move of God —
            raising a generation ready to spread the flame across the earth.
          </p>
        </div>
      </section>

      {/* MISSION/VISION/PURPOSE */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Mission", text: ministry.mission },
              { label: "Vision", text: ministry.vision },
              { label: "Purpose", text: ministry.purpose },
            ].map((b) => (
              <div
                key={b.label}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card"
              >
                <div className="absolute -right-6 -top-6 text-[7rem] font-black text-fire/[0.07] leading-none">
                  {b.label.charAt(0)}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fire">
                  {b.label}
                </p>
                <p className="mt-4 font-display text-2xl font-bold leading-snug text-foreground">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-charcoal py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Objectives
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Why we exist.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {objectives.map((o, i) => (
              <div
                key={o.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8"
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
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fire">
              Core Values
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              The DNA of the movement.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-fire/40"
              >
                <div className="font-display text-2xl font-black text-fire">0{i + 1}</div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCRIPTURE */}
      <section className="relative overflow-hidden bg-ember py-24 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Quote className="mx-auto h-10 w-10 text-white/80" />
          <p className="mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            "I have told you these things, so that in Me you may have perfect peace and confidence.
            In the world you have tribulation and distress; but be of good cheer — for I have
            overcome the world."
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
            John 16:33
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-white/85">
            Jesus has already overcome the world. Our confidence rests in His finished work. We do
            not fight for victory — we live from victory. Hallelujah.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-fire opacity-20 blur-3xl" />
                <img
                  src={villagePhoto.url}
                  alt="Apostle John Wiseman preaching to village elders during a CAR outreach"
                  className="relative w-full rounded-3xl object-cover shadow-card"
                  loading="lazy"
                  width={720}
                  height={1280}
                />

              </div>
              <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-fire">
                Founder
              </p>
              <p className="text-center font-display text-2xl font-bold">Apostle John Wiseman</p>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fire">
                Meet the Founder
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                A voice of truth, a vessel of grace.
              </h2>
              <div className="mt-8 space-y-5 text-muted-foreground">
                <p>
                  Born on <strong className="text-foreground">February 22, 1998</strong> in Kalongo
                  Town Council, Uganda, Apostle John Wiseman was raised in a devoted Catholic family
                  rooted in the Acholi heritage. His parents, Mr. Okello John Wilfred Ateng and Ms.
                  Aciro Susan, instilled in him faith, discipline, and integrity.
                </p>
                <p>
                  He attended Dr. Ambrosoli Memorial Primary School, St. Francis High School, and St.
                  Charles Lwanga College before earning a Bachelor of Business Administration from{" "}
                  <strong className="text-foreground">Makerere University Business School</strong>{" "}
                  in 2022.
                </p>
                <p>
                  In 2022, Apostle John received a divine mandate to write daily devotionals —
                  giving birth to the Youth for Jesus Devotional. Obeying the voice of God, he
                  began preaching in streets, universities, churches, high schools, buses, and
                  taxis.
                </p>
                <p>
                  In 2025, he founded ConquerWorld Apostolic Renaissance (CAR) — a dynamic,
                  Spirit-led movement dedicated to reviving nations, empowering believers, and
                  demonstrating the power, love, and glory of God.
                </p>
              </div>

              <ol className="mt-10 space-y-4">
                {timeline.map((t) => (
                  <li key={t.year} className="flex gap-5 rounded-xl border border-border bg-card p-5">
                    <div className="w-20 shrink-0 font-display text-xl font-black text-fire">
                      {t.year}
                    </div>
                    <div>
                      <div className="font-display text-base font-semibold">{t.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fire py-20 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to join the fire?
            </h2>
            <p className="mt-2 max-w-2xl text-white/90">
              Explore our programs, partner with us, or stand with us in prayer.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="glow" size="lg">
              <Link to="/programs">Our Programs</Link>
            </Button>
            <Button asChild variant="glow" size="lg">
              <Link to="/give">Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
