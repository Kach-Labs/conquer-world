import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { resolveImage } from "@/components/image-by-key";

export const Route = createFileRoute("/prayer")({
  component: PrayerPage,
  head: () => ({
    meta: [
      { title: "Submit a Prayer Request | CAR" },
      {
        name: "description",
        content:
          "Submit your prayer request privately to the CAR prayer team. Where two agree, Heaven responds — James 5:16.",
      },
      { property: "og:title", content: "Submit a Prayer Request" },
      {
        property: "og:description",
        content: "Our prayer team is standing with you in faith.",
      },
    ],
  }),
});

const categories = [
  "Salvation",
  "Healing",
  "Family",
  "Finances",
  "Marriage",
  "Deliverance",
  "Direction",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  category: z.string().min(1, "Please choose a category"),
  request: z.string().trim().min(10, "Please share a bit more").max(2000),
});

function PrayerPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      category: fd.get("category"),
      request: fd.get("request"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    // Placeholder: emails will be wired to Resend in a follow-up pass.
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
    toast.success("Your prayer request has been received.");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-20 text-white">
        <div className="absolute inset-0 opacity-30">
          <img src={resolveImage("prayer")} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Prayer Requests
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Where two agree,{" "}
            <span className="text-gradient-fire">Heaven responds.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            "The effectual fervent prayer of a righteous man availeth much." — James 5:16.
            Submit your request and our team will stand with you in faith.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <Heart className="h-8 w-8 text-fire" />
              <h2 className="mt-4 font-display text-2xl font-bold">Your request is private.</h2>
              <p className="mt-3 text-muted-foreground">
                Every request is delivered directly to our prayer team. Nothing is published on the
                website. Our intercessors will stand with you and declare God's promises over your
                situation.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fire" />
                  Received in confidence by our prayer team
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fire" />
                  Prayed over in agreement with you
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fire" />
                  Never shared publicly
                </li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-2xl border border-fire/30 bg-fire/5 p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-fire text-white shadow-fire">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">
                  Your request has been received.
                </h3>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Our prayer team is standing with you. May the God of hope fill you with all joy
                  and peace as you trust in Him.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSent(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-card"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone (optional)" name="phone" type="tel" />
                  <div>
                    <Label htmlFor="category" className="mb-2 block">
                      Prayer Category
                    </Label>
                    <Select name="category" required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Choose a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="request" className="mb-2 block">
                    Your Prayer Request
                  </Label>
                  <Textarea
                    id="request"
                    name="request"
                    rows={7}
                    required
                    placeholder="Share your heart with us…"
                  />
                </div>
                <Button
                  type="submit"
                  variant="fire"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Submit Prayer Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name} className="mb-2 block">
        {label} {required && <span className="text-fire">*</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}
