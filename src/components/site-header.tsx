import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/schedules", label: "Schedules" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
            <Leaf className="h-5 w-5 text-accent" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-primary">
              Owens Consulting Group
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              TCEQ Provider #782
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-primary after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-primary" }}
              className="relative px-4 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border/70 bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
