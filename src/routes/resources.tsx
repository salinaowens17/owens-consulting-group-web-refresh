import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, FileText, ShieldAlert } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Regulatory References — Owens Consulting Group" },
      {
        name: "description",
        content:
          "Safety Data Sheets information, course registration forms, and regulatory references for TCEQ, TDLR, and OSHA.",
      },
      { property: "og:title", content: "Resources — Owens Consulting Group" },
      {
        property: "og:description",
        content:
          "SDS information, registration forms, and links to TCEQ, TDLR, and OSHA references.",
      },
    ],
  }),
  component: ResourcesPage,
});

const licensingLinks = [
  {
    label: "Renew License",
    href: "https://www.texasonline.state.tx.us/NASApp/rap/apps/license/jsp/eng/welcome.jsp?agency=86&instance=tceq_ind",
    note: "Renew a current MSW License through Texas.gov",
  },
  {
    label: "TCEQ Licensing",
    href: "https://www.tceq.texas.gov/licensing",
    note: "TCEQ general licensing information — obtaining and renewing an MSW License",
  },
  {
    label: "License Exam Results",
    href: "https://www2.tceq.texas.gov/lic_dpa/index.cfm?fuseaction=oler.searchexam",
    note: "Look up TCEQ occupational licensing exam results",
  },
  {
    label: "Individual License Search",
    href: "https://www2.tceq.texas.gov/lic_dpa/index.cfm?fuseaction=licall.searchindiv",
    note: "Search for an individual TCEQ license holder",
  },
  {
    label: "OLEA — On-Line Electronic Application",
    href: "https://www.tceq.texas.gov/licensing/olea",
    note: "Apply for or renew a TCEQ occupational license online",
  },
  {
    label: "Register for an Exam",
    href: "https://www.tceq.texas.gov/licensing/exams/cbt_occ_lic.html",
    note: "Schedule a computer-based TCEQ occupational licensing exam",
  },
];

function ResourcesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Resources
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Forms, regulatory references, and safety information.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Helpful documents for current students, facility employees, and compliance
            teams.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-gold/40 bg-gold/5 p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold text-primary-foreground">
                <ShieldAlert className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                  For employees
                </p>
                <h2 className="font-serif text-xl font-semibold text-primary">
                  Safety Data Sheets (SDS)
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Safety Data Sheets information for employees. SDSs document the hazards,
              handling, storage, and emergency procedures for every chemical maintained
              on-site, in compliance with OSHA Standard 29 CFR 1910.1200(g).
            </p>
            <a
              href="mailto:owenscgtx@gmail.com?subject=SDS%20information%20request"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Request SDS access <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>

          <article className="rounded-xl border border-border bg-card p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Registration
                </p>
                <h2 className="font-serif text-xl font-semibold text-primary">
                  Course Registration Form
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Download the current course registration form to enroll in upcoming TCEQ-approved
              in-person or online courses.
            </p>
            <a
              href="https://storage.googleapis.com/wzukusers/user-34981497/documents/c9a456e7d67a4c91a9227d1fb85a6598/05-2026%20Registration%20Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </article>
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            TCEQ licensing resources
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            General information on obtaining and renewing an MSW License, plus direct links to
            TCEQ exam registration, license lookup, and the On-Line Electronic Application (OLEA).
          </p>
          <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
            {licensingLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 px-6 py-5 transition-colors hover:bg-secondary"
                >
                  <div>
                    <p className="font-medium text-primary group-hover:text-accent">
                      {l.label}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{l.note}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
