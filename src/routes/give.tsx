import { createFileRoute } from "@tanstack/react-router";
import { Building2, ExternalLink, Heart, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ministry, partnerWays } from "@/lib/site-data";

export const Route = createFileRoute("/give")({
  component: GivePage,
  head: () => ({
    meta: [
      { title: "Give & Partner | ConquerWorld Apostolic Renaissance" },
      {
        name: "description",
        content:
          "Partner with CAR through prayer, financial giving, mission collaboration, and resource support. Give online, via Mobile Money, or bank transfer.",
      },
      { property: "og:title", content: "Give & Partner With CAR" },
      {
        property: "og:description",
        content:
          "Fuel revival across the earth. Every seed sown advances the fire of God.",
      },
    ],
  }),
});

function GivePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-24 text-white sm:pb-32">
        <div className="absolute inset-0 opacity-40 [background:var(--gradient-glow)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-10 w-10 text-fire" />
          <h1 className="mt-6 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Partner with the <span className="text-gradient-fire">fire.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Every vision requires a vessel; every fire needs fuel. When you partner with CAR you
            become a builder of the Kingdom and a carrier of revival to the nations.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold">
            "For we are labourers together with God." — 1 Corinthians 3:9
          </p>
          <div className="mt-10">
            <Button asChild variant="fire" size="xl">
              <a href={ministry.give.onlineUrl} target="_blank" rel="noreferrer">
                Give Online <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WAYS TO PARTNER */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fire">
              Ways to Partner
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Four ways to stand with us.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerWays.map((w, i) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-fire/50"
              >
                <div className="font-display text-2xl font-black text-fire">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVING METHODS */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fire">
              How to Give (Uganda)
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Choose your method.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <GiveCard
              icon={Smartphone}
              tag="MTN Mobile Money"
              title="Merchant Code 671873"
              accent="from-yellow-400 to-orange-500"
              steps={[
                `Dial ${ministry.give.mtn.code}`,
                `Enter Merchant Code ${ministry.give.mtn.merchant}`,
                "Enter Amount",
                "Choose Mobile Money",
                "Enter your PIN",
              ]}
            />
            <GiveCard
              icon={Smartphone}
              tag="Airtel Mobile Money"
              title="Merchant Code 4405770"
              accent="from-red-500 to-rose-600"
              steps={[
                `Dial ${ministry.give.airtel.code}`,
                `Enter Merchant Code ${ministry.give.airtel.merchant}`,
                "Enter Amount",
                "Enter your PIN",
              ]}
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fire text-white shadow-fire">
                <Building2 className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-fire">
                Bank Transfer
              </p>
              <h3 className="mt-1 font-display text-xl font-bold">{ministry.give.bank.name}</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <BankRow label="Branch" value={ministry.give.bank.branch} />
                <BankRow label="Account Name" value={ministry.give.bank.account} />
                <BankRow label="Account (UGX)" value={ministry.give.bank.ugx} mono />
                <BankRow label="Account (USD)" value={ministry.give.bank.usd} mono />
              </dl>
            </div>
          </div>

          <p className="mt-8 text-center text-xs italic text-muted-foreground">
            Note: The Mobile Money merchant codes apply only within Uganda.
          </p>
        </div>
      </section>

      {/* THANK YOU */}
      <section className="bg-fire py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Thank you.</h2>
          <p className="mt-6 text-lg text-white/90">
            Your generosity fuels revival and transformation around the world. May the Lord bless
            you abundantly, multiply your seed, and enrich you in every good work.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/80">
            2 Corinthians 9:8
          </p>
        </div>
      </section>
    </div>
  );
}

function GiveCard({
  icon: Icon,
  tag,
  title,
  steps,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  accent?: string;
  steps: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fire text-white shadow-fire">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-fire">{tag}</p>
      <h3 className="mt-1 font-display text-xl font-bold">{title}</h3>
      <ol className="mt-5 space-y-2 text-sm">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fire/10 text-xs font-bold text-fire">
              {i + 1}
            </span>
            <span className="pt-0.5 text-foreground/85">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BankRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border/60 pb-2 last:border-0">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className={`text-right font-semibold ${mono ? "font-mono text-sm" : ""}`}>{value}</dd>
    </div>
  );
}
