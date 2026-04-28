import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Download, MapPin, Monitor, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import {
  IN_PERSON_REGISTRATION_PDF,
  ONLINE_REGISTRATION_PDF,
} from "@/lib/registration-forms";

export const Route = createFileRoute("/schedules")({
  head: () => ({
    meta: [
      { title: "Course Schedules — Owens Consulting Group, LLC" },
      {
        name: "description",
        content:
          "Upcoming in-person and online TCEQ-approved course dates. Register for MSW supervisor licensing, waste screening, and specialized medical waste training.",
      },
      { property: "og:title", content: "Course Schedules — Owens Consulting Group, LLC" },
      {
        property: "og:description",
        content:
          "View upcoming in-person and online TCEQ-approved course dates and register.",
      },
    ],
  }),
  component: SchedulesPage,
});


type Session = {
  date: string;
  course: string;
  code: string;
  duration: string;
  location: string;
  seats: string;
};

const inPersonSessions: Session[] = [
  {
    date: "Feb 10–12, 2026",
    course: "MSW A Supervisor Licensing",
    code: "TCEQ #513",
    duration: "24 hours",
    location: "Houston, TX",
    seats: "Seats available",
  },
  {
    date: "Mar 24, 2026",
    course: "Waste Screening",
    code: "TCEQ #341",
    duration: "8 hours",
    location: "Kingwood, TX",
    seats: "Seats available",
  },
  {
    date: "Apr 14–16, 2026",
    course: "MSW B Supervisor Licensing",
    code: "TCEQ #514",
    duration: "24 hours",
    location: "Austin, TX",
    seats: "Limited seats",
  },
  {
    date: "May 12, 2026",
    course: "Specialized Medical Waste",
    code: "TCEQ #1390",
    duration: "8 hours",
    location: "Dallas, TX",
    seats: "Seats available",
  },
  {
    date: "Jun 9, 2026",
    course: "Waste Screening",
    code: "TCEQ #341",
    duration: "8 hours",
    location: "San Antonio, TX",
    seats: "Seats available",
  },
  {
    date: "Sep 15–17, 2026",
    course: "MSW A Supervisor Licensing",
    code: "TCEQ #513",
    duration: "24 hours",
    location: "Kingwood, TX",
    seats: "Seats available",
  },
];

const onlineSessions: Session[] = [
  {
    date: "Rolling enrollment",
    course: "Waste Screening",
    code: "TCEQ #341",
    duration: "8 hours · self-paced",
    location: "Online",
    seats: "Open enrollment",
  },
  {
    date: "Rolling enrollment",
    course: "Specialized Medical Waste",
    code: "TCEQ #1390",
    duration: "8 hours · self-paced",
    location: "Online",
    seats: "Open enrollment",
  },
  {
    date: "Mar 3–5, 2026",
    course: "MSW B Supervisor Licensing",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "Jul 21–23, 2026",
    course: "MSW A Supervisor Licensing",
    code: "TCEQ #513",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
];

function SchedulesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            2026 schedule
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Upcoming course dates — online and in person.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Browse upcoming TCEQ-approved sessions. Reserve your seat by downloading the
            registration form and emailing it back to us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={ONLINE_REGISTRATION_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" /> Online course registration (PDF)
            </a>
            <a
              href={IN_PERSON_REGISTRATION_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" /> In-person course registration (PDF)
            </a>
            <a
              href="mailto:owenscgtx@gmail.com?subject=Course%20registration"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-primary transition-colors hover:border-primary"
            >
              Email to register
            </a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Prototype note: dates shown below are placeholders for your client to review the
            layout. Real dates can be swapped in once confirmed.
          </p>
        </div>
      </section>

      <ScheduleSection
        eyebrow="Online · most popular"
        icon={<Monitor className="h-5 w-5" />}
        title="Online & live virtual sessions"
        description="Self-paced courses with rolling enrollment, plus scheduled live-virtual supervisor licensing classes — our most accessible option, with the highest enrollment."
        sessions={onlineSessions}
        accent="primary"
      />

      <div className="border-t border-border" />

      <ScheduleSection
        eyebrow="In-person"
        icon={<Users className="h-5 w-5" />}
        title="In-person classes across Texas"
        description="Hands-on instruction at venues in Houston, Kingwood, Austin, Dallas, and San Antonio."
        sessions={inPersonSessions}
        accent="accent"
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-primary text-primary-foreground">
          <div className="grid gap-8 p-8 md:grid-cols-[2fr_1fr] md:items-center md:gap-10 md:p-12">
            <div>
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Don't see a date that works?
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/75">
                We schedule additional in-person classes throughout the year and offer
                custom on-site delivery for facility teams. Email us to discuss options.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:owenscgtx@gmail.com?subject=Custom%20training%20request"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Request a custom date
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

function ScheduleSection({
  eyebrow,
  icon,
  title,
  description,
  sessions,
  accent,
}: {
  eyebrow: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  sessions: Session[];
  accent: "primary" | "accent";
}) {
  const tagClasses =
    accent === "accent"
      ? "bg-accent/10 text-accent"
      : "bg-primary text-primary-foreground";

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10">
              {icon}
            </span>
            {eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile: card list */}
      <div className="mt-10 grid gap-4 md:hidden">
        {sessions.map((s, i) => (
          <article
            key={`${s.code}-${i}`}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest ${tagClasses}`}>
                {s.code}
              </span>
              <span className="text-xs font-medium text-accent">{s.seats}</span>
            </div>
            <h3 className="mt-3 font-serif text-lg font-semibold text-primary">
              {s.course}
            </h3>
            <dl className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <dd>{s.date}</dd>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <dd>{s.location}</dd>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground/80">
                {s.duration}
              </div>
            </dl>
            <a
              href={`mailto:owenscgtx@gmail.com?subject=Register:%20${encodeURIComponent(
                `${s.course} (${s.code}) — ${s.date}`,
              )}`}
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Register
            </a>
          </article>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="mt-10 hidden overflow-hidden rounded-xl border border-border bg-card md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-surface">
            <tr className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Course</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4 text-right">Register</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sessions.map((s, i) => (
              <tr key={`${s.code}-${i}`} className="transition-colors hover:bg-secondary/40">
                <td className="px-6 py-5 align-top">
                  <div className="font-medium text-primary">{s.date}</div>
                  <div className="mt-1 text-xs font-medium text-accent">{s.seats}</div>
                </td>
                <td className="px-6 py-5 align-top">
                  <div className="font-serif text-base font-semibold text-primary">
                    {s.course}
                  </div>
                  <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest ${tagClasses}`}>
                    {s.code}
                  </span>
                </td>
                <td className="px-6 py-5 align-top text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    {s.location}
                  </div>
                </td>
                <td className="px-6 py-5 align-top text-muted-foreground">{s.duration}</td>
                <td className="px-6 py-5 text-right align-top">
                  <a
                    href={`mailto:owenscgtx@gmail.com?subject=Register:%20${encodeURIComponent(
                      `${s.course} (${s.code}) — ${s.date}`,
                    )}`}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Register
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
