import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, FileSearch } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Environmental Compliance Services — Owens Consulting Group" },
      {
        name: "description",
        content:
          "On-site SOP training and chemical inventory audits per OSHA 29 CFR 1910.1200(g) across Texas.",
      },
      {
        property: "og:title",
        content: "Environmental Compliance Services — Owens Consulting Group",
      },
      {
        property: "og:description",
        content: "SOP training and chemical inventory audits for Texas facilities.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: <FileSearch className="h-5 w-5" />,
    eyebrow: "On-site",
    title: "Site-Specific SOP Training",
    body: "Site Operating Plan (SOP) training — annual & refresher — designed to meet the requirements in 30 TAC 330.127. Delivered on-site for your team and tailored to your facility's operating plan.",
    cite: "Meets 30 TAC 330.127",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    eyebrow: "Audit & review",
    title: "Chemical Inventory Audits",
    body: "Professional review and audit of all chemicals maintained on-site, paired with the most current Safety Data Sheets (SDSs). Comprehensive and compliant with OSHA Standard 29 CFR 1910.1200(g).",
    cite: "OSHA 29 CFR 1910.1200(g)",
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Environmental compliance support
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Hands-on services to keep your operation compliant and your team prepared.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Beyond training, we partner with Texas operators on the everyday work of
            staying compliant — from site-specific SOP training to comprehensive chemical
            inventory audits.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_15px_45px_-25px_rgba(20,40,80,0.4)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                {s.icon}
              </span>
              <span className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {s.eyebrow}
              </span>
              <h2 className="mt-2 font-serif text-xl font-semibold text-primary">
                {s.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <p className="mt-5 border-t border-border pt-4 text-[11px] font-medium uppercase tracking-wider text-gold">
                {s.cite}
              </p>
              <a
                href="mailto:owenscgtx@gmail.com?subject=Service%20inquiry"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Request details <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="rounded-2xl border border-border bg-primary p-10 text-primary-foreground md:p-14">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Need something tailored?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/75">
                We regularly customize on-site SOP training and chemical inventory audits
                for facility teams across Texas. Email us with the details and we'll get
                back to you with options.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 md:justify-self-end"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
