import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/car-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/devotional", label: "Devotional" },
  { to: "/prayer", label: "Prayer" },
  { to: "/testimonies", label: "Testimonies" },
  { to: "/give", label: "Give" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="ConquerWorld Apostolic Renaissance logo"
            width={44}
            height={38}
            className="h-10 w-auto shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-white">ConquerWorld</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-gold">
              Apostolic Renaissance
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-fire" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="fire" size="sm">
            <Link to="/give">Partner</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 top-[64px] z-40 flex flex-col overflow-y-auto bg-charcoal/98 backdrop-blur-2xl transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {nav.map((item, i) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-white/5 py-4 font-display text-2xl font-semibold transition-colors",
                  active ? "text-fire" : "text-white/85 hover:text-fire",
                )}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild variant="fire" size="lg" className="mt-6">
            <Link to="/give" onClick={() => setOpen(false)}>
              Partner With Us
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
