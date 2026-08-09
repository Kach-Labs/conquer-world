import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ministry } from "@/lib/site-data";
import { photos } from "@/lib/images";

const linkGroups = [
  {
    title: "Explore",
    links: [
      { to: "/about", label: "About CAR" },
      { to: "/programs", label: "Programs" },
      { to: "/gallery", label: "Gallery" },
      { to: "/devotional", label: "Devotional" },
    ],
  },
  {
    title: "Engage",
    links: [
      { to: "/prayer", label: "Prayer Request" },
      { to: "/testimonies", label: "Testimonies" },
      { to: "/give", label: "Give / Partner" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white/80">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:var(--gradient-glow)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src={photos.logo}
                alt="ConquerWorld Apostolic Renaissance logo"
                width={52}
                height={45}
                className="h-12 w-auto shrink-0"
              />
              <div className="leading-tight">
                <div className="font-display text-lg font-bold text-white">ConquerWorld</div>
                <div className="text-[10px] uppercase tracking-widest text-gold">
                  Apostolic Renaissance
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {ministry.mission}
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-gold">
              {ministry.tagline}
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/70 transition-colors hover:text-fire"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fire" />
                <span>{ministry.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-fire" />
                <a href={`tel:${ministry.phone.replace(/\s/g, "")}`} className="hover:text-fire">
                  {ministry.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-fire" />
                <a href={`mailto:${ministry.emails.info}`} className="hover:text-fire break-all">
                  {ministry.emails.info}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ConquerWorld Apostolic Renaissance. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-widest text-gold">
            Built for the Glory of God
          </p>
        </div>
      </div>
    </footer>
  );
}
