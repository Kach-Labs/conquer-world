import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ministry } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | ConquerWorld Apostolic Renaissance" },
      {
        name: "description",
        content:
          "Get in touch with ConquerWorld Apostolic Renaissance. Reach us by email, phone, or send a message.",
      },
      { property: "og:title", content: "Contact CAR" },
      {
        property: "og:description",
        content: "We'd love to hear from you. Reach the ministry team.",
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10).max(3000),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
    toast.success("Message received — we'll get back to you shortly.");
    (e.currentTarget as HTMLFormElement).reset();
  }

  const contactEmails = [
    { label: "General Inquiries", value: ministry.emails.info },
    { label: "Prayer Requests", value: ministry.emails.prayer },
    { label: "Pastoral Care", value: ministry.emails.pastor },
    { label: "Partnerships", value: ministry.emails.partnerships },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-20 text-white">
        <div className="absolute inset-0 opacity-40 [background:var(--gradient-glow)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Let's <span className="text-gradient-fire">connect.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            We'd love to hear from you — whether you have a question, a prayer request, or want to
            partner with the ministry.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <aside className="space-y-6 lg:col-span-2">
            <InfoCard icon={MapPin} title="Visit">
              <p className="text-muted-foreground">{ministry.address}</p>
            </InfoCard>
            <InfoCard icon={Phone} title="Call">
              <a
                href={`tel:${ministry.phone.replace(/\s/g, "")}`}
                className="text-foreground hover:text-fire"
              >
                {ministry.phone}
              </a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <ul className="space-y-2">
                {contactEmails.map((e) => (
                  <li key={e.value}>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {e.label}
                    </div>
                    <a
                      href={`mailto:${e.value}`}
                      className="break-all text-sm text-foreground hover:text-fire"
                    >
                      {e.value}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </aside>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-2xl border border-fire/30 bg-fire/5 p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-fire text-white shadow-fire">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">Message received.</h3>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-card"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      Name <span className="text-fire">*</span>
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
                  <Label htmlFor="subject" className="mb-2 block">
                    Subject <span className="text-fire">*</span>
                  </Label>
                  <Input id="subject" name="subject" required />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Message <span className="text-fire">*</span>
                  </Label>
                  <Textarea id="message" name="message" rows={7} required />
                </div>
                <Button
                  type="submit"
                  variant="fire"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="CAR Location — Gulu, Uganda"
              src="https://www.google.com/maps?q=Laroo%20Division%2C%20Gulu%2C%20Uganda&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fire text-white shadow-fire">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
