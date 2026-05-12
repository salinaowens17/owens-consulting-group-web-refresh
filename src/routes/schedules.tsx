import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Download, MapPin, Monitor, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import seaTurtleImage from "@/assets/sea-turtle.jpg";
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

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

/**
 * Parse a session date string and return the END date of the session.
 * Returns null for unparseable strings (e.g. "TBD", "Date TBD") so they're kept.
 * Examples:
 *   "May 8th, 2026"           -> 2026-05-08
 *   "July 21st - 23rd, 2026"  -> 2026-07-23
 *   "June 2nd - 4th, 2026"    -> 2026-06-04
 */
function parseSessionEndDate(input: string): Date | null {
  const cleaned = input.replace(/\u200B/g, "").trim();
  const monthMatch = cleaned.match(/(january|february|march|april|may|june|july|august|september|october|november|december)/i);
  const yearMatch = cleaned.match(/(\d{4})/);
  if (!monthMatch || !yearMatch) return null;
  const month = MONTHS[monthMatch[1].toLowerCase()];
  const year = parseInt(yearMatch[1], 10);
  const days = Array.from(cleaned.matchAll(/(\d{1,2})(?:st|nd|rd|th)?/g))
    .map((m) => parseInt(m[1], 10))
    .filter((n) => n >= 1 && n <= 31);
  if (days.length === 0) return null;
  const day = days[days.length - 1];
  return new Date(year, month, day);
}

function isUpcoming(session: Session): boolean {
  const end = parseSessionEndDate(session.date);
  if (!end) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return end.getTime() >= today.getTime();
}


const inPersonSessions: Session[] = [
  {
    date: "July 21st - 23rd, 2026",
    course: "​MSW A",
    code: "TCEQ #513",
    duration: "24 hours",
    location: "Weslaco, Texas",
    seats: "Seats available",
  },
  {
    date: "TBD",
    course: "MSW B",
    code: "TCEQ #514",
    duration: "24 hours",
    location: "Houston, Texas",
    seats: "Seats available",
  },
  {
    date: "TBD",
    course: "MSW A",
    code: "TCEQ #513",
    duration: "24 hours",
    location: "Weslaco, Texas",
    seats: "Seats available",
  },
  {
    date: "TBD",
    course: "MSW B",
    code: "TCEQ #514",
    duration: "24 hours",
    location: "Houston, Texas",
    seats: "Seats available",
  },
];

const onlineSessions: Session[] = [
  // MSW A — 4 slots
  {
    date: "June 2nd - 4th, 2026",
    course: "MSW A Supervisor Licensing Course",
    code: "TCEQ #513",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "September 1st - 3rd, 2026",
    course: "MSW A Supervisor Licensing Course",
    code: "TCEQ #513",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "Date TBD",
    course: "MSW A Supervisor Licensing Course",
    code: "TCEQ #513",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "Date TBD",
    course: "MSW A Supervisor Licensing Course",
    code: "TCEQ #513",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  // MSW B — 8 slots
  {
    date: "June 30th - July 2nd, 2026",
    course: "MSW B Supervisor Licensing Course",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "August 4th - 6th, 2026",
    course: "MSW B Supervisor Licensing Course",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "September 29th - October 1st, 2026",
    course: "MSW B Supervisor Licensing Course",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "December 15th - 17th, 2026",
    course: "MSW B Supervisor Licensing Course",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "Date TBD",
    course: "MSW B Supervisor Licensing Course",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "Date TBD",
    course: "MSW B Supervisor Licensing Course",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  {
    date: "Date TBD",
    course: "MSW B Supervisor Licensing Course",
    code: "TCEQ #514",
    duration: "24 hours · live virtual",
    location: "Online (Zoom)",
    seats: "Seats available",
  },
  // Waste Screening — 5 slots
  {
    date: "July 3rd, 2026",
    course: "Waste Screening",
    code: "TCEQ #341",
    duration: "8 hours · live virtual",
    location: "Online",
    seats: "Open enrollment",
  },
  {
    date: "September 4th, 2026",
    course: "Waste Screening",
    code: "TCEQ #341",
    duration: "8 hours · live virtual",
    location: "Online",
    seats: "Open enrollment",
  },
  {
    date: "December 18th, 2026",
    course: "Waste Screening",
    code: "TCEQ #341",
    duration: "8 hours · live virtual",
    location: "Online",
    seats: "Open enrollment",
  },
  {
    date: "Date TBD",
    course: "Waste Screening",
    code: "TCEQ #341",
    duration: "8 hours · live virtual",
    location: "Online",
    seats: "Open enrollment",
  },
  // Waste Screening En Español — 1 slot
  {
    date: "Date TBD",
    course: "Waste Screening En Español",
    code: "TCEQ #341",
    duration: "8 hours · live virtual",
    location: "Online",
    seats: "Open enrollment",
  },
  {
    date: "Date TBD",
    course: "Specialized Medical Waste",
    code: "TCEQ #1390",
    duration: "8 hours · live virtual",
    location: "Online",
    seats: "Open enrollment",
  },
];

function SchedulesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12 md:px-8 md:py-24">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              2026 schedule
            </span>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
              Upcoming course dates — online and in person.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Browse upcoming TCEQ-approved courses. Reserve your seat by downloading the
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
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              ​
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <img
              src={seaTurtleImage}
              alt="Sea turtle swimming beneath a bright sun"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <OnlineScheduleSection sessions={onlineSessions.filter(isUpcoming)} />

      <div className="border-t border-border" />

      <ScheduleSection
        eyebrow="In-person"
        icon={<Users className="h-5 w-5" />}
        title="In-person classes across Texas"
        description="Hands-on instruction at venues in Houston and the Lower Rio Grande Valley."
        sessions={inPersonSessions.filter(isUpcoming)}
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
}: {
  eyebrow: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  sessions: Session[];
}) {
  return (
    <section id="in-person" className="mx-auto max-w-6xl px-5 py-20 md:px-8 scroll-mt-24">
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
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
        <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-5 md:px-8">
          <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">
            2026 in-person classes
          </h3>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {sessions.length} {sessions.length === 1 ? "session" : "sessions"}
          </span>
        </header>

        <ul className="divide-y divide-border">
          {sessions.map((s, i) => (
            <li
              key={`${s.code}-${s.date}-${i}`}
              className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8"
            >
              <div className="grid gap-3 md:flex-1 md:grid-cols-[1.4fr_1.2fr_1fr_0.8fr] md:items-center md:gap-6">
                <div>
                  <div className="font-serif text-base font-semibold text-primary">
                    {s.course}
                  </div>
                  <span className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-accent">
                    {s.code}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <div>
                    <div className="font-medium text-primary">{s.date}</div>
                    <div className="text-xs font-medium text-accent">{s.seats}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  {s.location}
                </div>
                <div className="text-sm text-muted-foreground">{s.duration}</div>
              </div>
              <a
                href={IN_PERSON_REGISTRATION_PDF}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Registration Form
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OnlineScheduleSection({ sessions }: { sessions: Session[] }) {
  // Group sessions by course, preserving first-seen order
  const groups = sessions.reduce<Record<string, { course: string; code: string; items: Session[] }>>(
    (acc, s) => {
      const key = `${s.course}|${s.code}`;
      if (!acc[key]) acc[key] = { course: s.course, code: s.code, items: [] };
      acc[key].items.push(s);
      return acc;
    },
    {},
  );
  const groupList = Object.values(groups);

  return (
    <section id="online" className="mx-auto max-w-6xl px-5 py-20 md:px-8 scroll-mt-24">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10">
            <Monitor className="h-5 w-5" />
          </span>
          Online · most popular
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
          Online & live virtual sessions
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Online course schedules
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {groupList.map((group) => {
          const slug = group.course
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
          <article
            key={`${group.course}-${group.code}`}
            id={slug}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card"
          >
            <header className="flex flex-col gap-2 border-b border-border bg-surface px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-primary-foreground">
                  {group.code}
                </span>
                <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">
                  {group.course}
                </h3>
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {group.items.length} {group.items.length === 1 ? "session" : "sessions"}
              </span>
            </header>

            <ul className="divide-y divide-border">
              {group.items.map((s, i) => (
                <li
                  key={`${s.code}-${s.date}-${i}`}
                  className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8"
                >
                  <div className="grid gap-3 md:flex-1 md:grid-cols-2 md:gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <div>
                        <div className="font-medium text-primary">{s.date}</div>
                        <div className="text-xs font-medium text-accent">{s.seats}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{s.duration}</div>
                  </div>
                  <a
                    href={ONLINE_REGISTRATION_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Registration Form
                  </a>
                </li>
              ))}
            </ul>
          </article>
          );
        })}
      </div>
    </section>
  );
}
