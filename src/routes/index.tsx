import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Mail, ShieldCheck, Sprout } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:py-16 md:grid-cols-12 md:gap-10 md:px-8 md:py-24 lg:py-28">
          <div className="md:col-span-7">
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
                View courses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-primary transition-colors hover:border-primary"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(20,40,80,0.35)]">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <p className="font-serif text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  2026 Schedule
                </p>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-accent">
                  In-person
                </span>
              </div>
              <p className="mt-4 font-serif text-2xl text-primary">
                In-person TCEQ-approved classes for 2026 are now scheduled.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Including Waste Screening (Course #341), TDLR-approved continuing education
                for Code Enforcement Officers.
              </p>
              <Link
                to="/schedules"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                See upcoming courses <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credential strip */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
          {[
            { label: "TCEQ Provider", value: "#782" },
            { label: "TDLR Approved", value: "Course #341" },
            { label: "OSHA Compliant", value: "29 CFR 1910.1200(g)" },
            { label: "Texas Regulation", value: "30 TAC 330.127" },
          ].map((c) => (
            <div key={c.label} className="flex flex-col">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {c.label}
              </span>
              <span className="mt-1 font-serif text-xl font-semibold text-primary">
                {c.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Featured
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
            Built for Texas operators, supervisors, and compliance teams.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <HighlightCard
            icon={<GraduationCap className="h-5 w-5" />}
            eyebrow="In-person training"
            title="2026 schedule is here"
            body="TCEQ-approved supervisor licensing, waste screening, and specialized medical waste courses delivered in person across Texas."
            to="/courses"
            cta="View courses"
          />
          <HighlightCard
            icon={<BookOpen className="h-5 w-5" />}
            eyebrow="Course #341"
            title="Waste Screening — TDLR continuing ed"
            body="An 8-hour course designed for waste acceptance, screening, and load inspection personnel. Approved by TDLR for Code Enforcement Officers."
            to="/courses"
            cta="Course details"
          />
          <HighlightCard
            icon={<ClipboardCheck className="h-5 w-5" />}
            eyebrow="On-site service"
            title="Chemical Inventory Audits"
            body="Comprehensive review of on-site chemicals with current Safety Data Sheets in accordance with OSHA Standard 29 CFR 1910.1200(g)."
            to="/services"
            cta="Request an audit"
          />
        </div>
      </section>

      {/* What we do */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              What we do
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
              Two practices. One standard of care.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              We pair regulatory training with hands-on environmental compliance support so
              your team can earn — and keep — the licenses your operations depend on.
            </p>
          </div>

          <div className="space-y-6">
            <PracticeRow
              icon={<GraduationCap className="h-5 w-5" />}
              title="TCEQ-approved training"
              body="MSW A & B supervisor licensing, waste screening, and specialized medical waste courses. All courses meet renewal requirements."
              to="/courses"
            />
            <PracticeRow
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Environmental compliance support"
              body="Site-specific SOP training and chemical inventory audits aligned with OSHA and TCEQ requirements."
              to="/services"
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
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  to: "/courses" | "/services" | "/resources" | "/contact";
  cta: string;
}) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_15px_45px_-25px_rgba(20,40,80,0.4)]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
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
  to: "/courses" | "/services";
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
