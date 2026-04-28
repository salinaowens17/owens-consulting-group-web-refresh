import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, HeartPulse, Mail, Monitor, ShieldCheck, Sprout, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import heroTeaching from "@/assets/ocg-logo-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Owens Consulting Group — TCEQ-Approved Environmental Training in Texas" },
      {
        name: "description",
        content:
          "TCEQ-approved environmental compliance training and consulting. MSW supervisor licensing, waste screening, and chemical inventory audits in Texas.",
      },
      {
        property: "og:title",
        content: "Owens Consulting Group — TCEQ-Approved Environmental Training",
      },
      {
        property: "og:description",
        content:
          "TCEQ-approved training and environmental compliance services for Texas. Provider #782.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 -z-10 opacity-[0.04]" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--color-primary)_0%,transparent_55%),radial-gradient(circle_at_80%_70%,var(--color-accent)_0%,transparent_50%)]" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 md:px-8 md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                <Sprout className="h-3.5 w-3.5" />
                Texas-based · TCEQ Provider #782
              </span>
              <h1 className="mt-5 text-balance font-serif text-[1.9rem] font-semibold leading-[1.15] tracking-tight text-primary sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl">
                TCEQ-approved training provider in Texas.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-6">
                From MSW supervisor licensing and waste screening to chemical inventory
                audits and site-specific SOP training, Owens Consulting Group helps Texas
                facilities and professionals stay licensed, compliant, and prepared.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-9">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  View courses & services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-primary transition-colors hover:border-primary"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,var(--color-accent)_0%,transparent_60%)] opacity-20" aria-hidden />
              <img
                src={heroTeaching}
                alt="Owens Consulting Group logo — gear and leaf emblem."
                className="aspect-[4/3] w-full rounded-2xl border border-border bg-background object-contain p-6 shadow-[0_25px_60px_-30px_rgba(20,40,80,0.55)]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Highlights */}
      <section className="bg-[#3a8a3a]">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:px-8 md:pt-16">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent text-slate-950">
            What we do
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
            Built for Texas operators, supervisors, and compliance teams.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <HighlightCard
            icon={<Monitor className="h-5 w-5" />}
            eyebrow="Most accessible"
            title="Online Courses"
            body="TCEQ-approved supervisor licensing, waste screening, and specialized medical waste courses."
            to="/schedules"
            cta="View online schedule"
            featured
          />
          <HighlightCard
            icon={<GraduationCap className="h-5 w-5" />}
            eyebrow="In-person training"
            title="In-person Training"
            body="Scheduled in-person classes across Texas covering MSW A & B supervisor licensing, waste screening, and specialized medical waste."
            to="/schedules"
            cta="View in-person schedule"
          />
          <HighlightCard
            icon={<Users className="h-5 w-5" />}
            eyebrow="On-site & custom"
            title="Custom, site-specific, in-person classes"
            body="Need training delivered at your facility? We schedule custom, site-specific in-person classes built around your team's operations and SOP."
            to="/contact"
            cta="Contact us"
          />
          <HighlightCard
            icon={<BookOpen className="h-5 w-5" />}
            eyebrow="TDLR Course #341"
            title="TDLR Code Enforcement Officer License CEUs — Waste Screening"
            body="An 8-hour course approved by TDLR for Code Enforcement Officer continuing education credits."
            to="/courses"
            cta="Course details"
          />
          <HighlightCard
            icon={<ClipboardCheck className="h-5 w-5" />}
            eyebrow="On-site service"
            title="Chemical Inventory Audits"
            body="Comprehensive review of on-site chemicals with current Safety Data Sheets in accordance with OSHA Standard 29 CFR 1910.1200(g)."
            to="/courses"
            cta="Request an audit"
          />
          <HighlightCard
            icon={<HeartPulse className="h-5 w-5" />}
            eyebrow="Certification"
            title="First Aid / CPR / AED"
            body="Nationally recognized First Aid, CPR, and AED certification for adults, children, and infants. Includes a 2-year certification card upon successful completion."
            to="/courses"
            cta="Course details"
          />
        </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-primary text-primary-foreground">
          <div className="grid gap-8 p-8 md:grid-cols-[2fr_1fr] md:items-center md:gap-10 md:p-12">
            <div>
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Ready to schedule a course or audit?
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/75">
                Email us for course registration, on-site SOP training, or to schedule a
                chemical inventory audit.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:owenscgtx@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Mail className="h-4 w-4" /> owenscgtx@gmail.com
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function HighlightCard({
  icon,
  eyebrow,
  title,
  body,
  to,
  cta,
  featured,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  to: "/courses" | "/resources" | "/contact" | "/schedules";
  cta: string;
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured
          ? "group relative flex flex-col rounded-xl border border-accent/50 bg-card p-7 shadow-[0_15px_45px_-25px_rgba(20,40,80,0.45)] ring-1 ring-accent/20 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_20px_55px_-25px_rgba(20,40,80,0.55)]"
          : "group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_15px_45px_-25px_rgba(20,40,80,0.4)]"
      }
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
          Most Popular
        </span>
      )}
      <span
        className={
          featured
            ? "inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"
            : "inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent"
        }
      >
        {icon}
      </span>
      <span className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </span>
      <h3 className="mt-2 font-serif text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function PracticeRow({
  icon,
  title,
  body,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  to: "/courses";
}) {
  return (
    <Link
      to={to}
      className="group flex gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
        {icon}
      </span>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-semibold text-primary">{title}</h3>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </Link>
  );
}
