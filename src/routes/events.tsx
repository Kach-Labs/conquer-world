import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resolveImage } from "@/components/image-by-key";
import { events, type EventItem } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Events | ConquerWorld Apostolic Renaissance" },
      {
        name: "description",
        content:
          "Conferences, summits, and campus outreaches from CAR. Come and encounter God — see what's next.",
      },
      { property: "og:title", content: "CAR Events — Conferences, Summits, Outreaches" },
      {
        property: "og:description",
        content: "Register for the next ConquerWorld gathering.",
      },
    ],
  }),
});

function EventsPage() {
  const upcoming = events.filter((e) => e.status === "Upcoming");
  const past = events.filter((e) => e.status === "Past");

  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-20 text-white">
        <div className="absolute inset-0 opacity-40 [background:var(--gradient-glow)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Events</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Come and <span className="text-gradient-fire">encounter</span> God.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Every gathering is a platform for revival, revelation, and renewal — where destinies
            are aligned with God's purpose.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Upcoming Events</h2>
          <p className="mt-2 text-muted-foreground">Save your seat. Bring a friend.</p>
          <div className="mt-10 grid gap-8">
            {upcoming.map((e) => (
              <UpcomingEventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {past.length > 0 && (
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Past Events</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {past.map((e) => (
                <div
                  key={e.id}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <img
                    src={resolveImage(e.image)}
                    alt={e.name}
                    className="h-48 w-full object-cover grayscale"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {new Date(e.date).toLocaleDateString("en", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{e.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function UpcomingEventCard({ event }: { event: EventItem }) {
  const d = new Date(event.date);
  return (
    <article className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-card md:grid-cols-2">
      <div className="relative min-h-[280px] overflow-hidden">
        <img
          src={resolveImage(event.image)}
          alt={event.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute left-6 top-6 flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-fire text-white shadow-fire">
          <span className="text-xs font-semibold uppercase">
            {d.toLocaleString("en", { month: "short" })}
          </span>
          <span className="font-display text-3xl font-black leading-none">{d.getDate()}</span>
        </div>
        <Countdown target={event.date} />
      </div>
      <div className="flex flex-col justify-between p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-fire">
            {event.status}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{event.name}</h3>
          <p className="mt-4 text-muted-foreground">{event.description}</p>
          <dl className="mt-6 grid gap-3 text-sm">
            <MetaRow icon={Calendar} label={d.toLocaleDateString("en", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })} />
            <MetaRow icon={Clock} label={event.time} />
            <MetaRow icon={MapPin} label={event.venue} />
            <MetaRow icon={User} label={event.speaker} />
          </dl>
        </div>
        {event.registerUrl && (
          <div className="mt-8">
            <Button asChild variant="fire" size="lg">
              <a href={event.registerUrl} target="_blank" rel="noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

function MetaRow({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-start gap-2.5 text-foreground/85">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-fire" />
      <span>{label}</span>
    </div>
  );
}

function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);
  const ms = new Date(target).getTime() - now;
  if (ms <= 0) return null;
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  return (
    <div className="absolute right-4 bottom-4 rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
      Starts in <span className="text-gold">{days}d {hours}h</span>
    </div>
  );
}
