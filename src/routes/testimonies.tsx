import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Quote, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { testimonies } from "@/lib/site-data";

export const Route = createFileRoute("/testimonies")({
  component: TestimoniesPage,
  head: () => ({
    meta: [
      { title: "Testimonies | ConquerWorld Apostolic Renaissance" },
      {
        name: "description",
        content:
          "Real stories of God's faithfulness — healings, salvations, restored families, and lives transformed by the fire of God.",
      },
      { property: "og:title", content: "Testimonies of God's Faithfulness" },
      {
        property: "og:description",
        content: "Read stories of what God is doing and share your own.",
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(200),
  testimony: z.string().trim().min(20, "Please share a bit more").max(3000),
});

function TestimoniesPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      testimony: fd.get("testimony"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
    toast.success("Thank you! Your testimony has been submitted.");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-20 text-white">
        <div className="absolute inset-0 opacity-40 [background:var(--gradient-glow)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Testimonies
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            They overcame by the{" "}
            <span className="text-gradient-fire">word of their testimony.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Your testimony is proof of God's faithfulness and fuel for another's breakthrough.
            Revelation 12:11.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonies.map((t) => (
              <blockquote
                key={t.id}
                className="relative rounded-2xl border border-border bg-card p-8 shadow-card"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-fire/25" />
                <p className="text-base leading-relaxed text-foreground/85">"{t.text}"</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-fire text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.location} · {new Date(t.date).toLocaleDateString("en", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Sparkles className="mx-auto h-8 w-8 text-fire" />
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Share Your Testimony
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              What has God done for you? Send it in — we'd love to celebrate His faithfulness with
              you.
            </p>
          </div>

          {sent ? (
            <div className="mt-10 rounded-2xl border border-fire/30 bg-fire/5 p-10 text-center">
              <h3 className="font-display text-2xl font-bold">Thank you for sharing.</h3>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Your testimony has been received. Once reviewed, we may share it (with your
                permission) to encourage others.
              </p>
              <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                Share another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Full Name <span className="text-fire">*</span>
                  </Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    Email <span className="text-fire">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>
              <div>
                <Label htmlFor="testimony" className="mb-2 block">
                  Your Testimony <span className="text-fire">*</span>
                </Label>
                <Textarea
                  id="testimony"
                  name="testimony"
                  rows={8}
                  required
                  placeholder="Tell us what God has done…"
                />
              </div>
              <Button
                type="submit"
                variant="fire"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending…" : "Submit Testimony"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
