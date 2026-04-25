import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Download, FileText } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "TCEQ-Approved Courses — Owens Consulting Group" },
      {
        name: "description",
        content:
          "TCEQ-approved courses: MSW A Supervisor Licensing #513, MSW B #514, Waste Screening #341, and Specialized Medical Waste #1390.",
      },
      { property: "og:title", content: "TCEQ-Approved Courses — Owens Consulting Group" },
      {
        property: "og:description",
        content:
          "Supervisor licensing, waste screening, and specialized medical waste courses for Texas.",
      },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  {
    code: "TCEQ #513",
    title: "MSW A Supervisor Licensing",
    duration: "24 hours",
    audience: "Supervisors of Type I, IAE, IV and Type IVAE landfills, and Type IX landfill mining operations",
    body: "This TCEQ-approved 24-hour course is designed for supervisors seeking an MSW A License or renewal hours to renew a current MSW license.",
  },
  {
    code: "TCEQ #514",
    title: "MSW B Supervisor Licensing",
    duration: "24 hours",
    audience:
      "Supervisors of Processing Facilities, including recycling, composting, and medical waste management facilities",
    body: "This TCEQ-approved 24-hour course is designed for supervisors of MSW transfer stations; non-hazardous liquid waste processing facilities; Material Recycling Facilities (MRFs); and Type IX Energy Recovery facilities.",
  },
  {
    code: "TCEQ #341",
    title: "Waste Screening",
    duration: "8 hours",
    audience:
      "Waste acceptance, screening, and load inspection personnel; sales personnel; environmental compliance staff; supervisors, managers, and scale house staff",
    body: "This TCEQ-approved 8-hour course satisfies most Site Operating Plan (SOP) annual training requirements per 30 TAC 330.127(5). It is also approved by the TDLR for continuing education credits for Code Enforcement Officers.",
    badges: ["SOP annual training", "TDLR continuing ed"],
  },
  {
    code: "TCEQ #1390",
    title: "Specialized Medical Waste",
    duration: "8 hours",
    audience:
      "Personnel obtaining an MSW B License who supervise a Medical Waste facility requiring a Registration authorization",
    body: "This TCEQ-approved 8-hour course is designed for personnel who are obtaining an MSW B License and supervise a Medical Waste facility requiring a Registration authorization.",
  },
];

function CoursesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            TCEQ-approved training provider
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Courses for Texas environmental supervisors and operators.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            All of our courses meet the requirements to renew a current MSW License. In-person
            and online schedules are available throughout 2026.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://storage.googleapis.com/wzukusers/user-34981497/documents/c9a456e7d67a4c91a9227d1fb85a6598/05-2026%20Registration%20Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" /> Course registration form (PDF)
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-primary transition-colors hover:border-primary"
            >
              Ask about scheduling <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <article
              key={c.code}
              className="flex flex-col rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-[0_15px_45px_-25px_rgba(20,40,80,0.4)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent">
                  {c.code}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" /> {c.duration}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-primary">
                {c.title}
              </h2>
              <p className="mt-3 text-sm font-medium text-foreground/80">{c.audience}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
              {c.badges && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-gold"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6 text-sm text-foreground">
          <p>
            <span className="font-semibold text-accent">Note:</span> All of these courses meet
            the requirements to renew a current MSW License.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="grid gap-4 rounded-2xl border border-border bg-surface p-8 md:grid-cols-2 md:gap-8 md:p-10">
          <Link
            to="/schedules"
            className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-background"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-accent">
                Online course schedule
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                See current online and live-virtual course dates and register.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent">
                View schedule <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
          <Link
            to="/schedules"
            className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-background"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-accent">
                In-person 2026 schedule
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse upcoming in-person classes across Texas and reserve your seat.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent">
                View schedule <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
