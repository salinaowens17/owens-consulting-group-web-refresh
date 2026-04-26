import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — Owens Consulting Group" },
      {
        name: "description",
        content:
          "OCG instructors bring 30+ years of solid waste industry experience and deep TCEQ regulatory knowledge.",
      },
      {
        property: "og:title",
        content: "Meet Our Team — Owens Consulting Group",
      },
      {
        property: "og:description",
        content:
          "Experienced TCEQ-approved instructors with deep regulatory and operational expertise in solid waste.",
      },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Julie Spradley",
    credentials: "CHMM, REM",
    title: "CEO",
  },
  {
    name: "Erasmo Yarrito Jr.",
    credentials: "Solid Waste Industry Expert",
    title: "Senior Instructor",
  },
  {
    name: "David Dugger",
    credentials: "Solid Waste Industry Expert",
    title: "Instructor",
  },
  {
    name: "Gordon Spradley",
    credentials: "AIPG, PG",
    title: "International Landfill Operations & Remediation Expert",
  },
  {
    name: "Brad Newton",
    credentials: "Solid Waste Industry Expert — West Texas",
    title: "Instructor",
  },
  {
    name: "Monica Sowards",
    credentials: "Solid Waste Industry Expert",
    title: "Instructor",
  },
] as const;

function TeamPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Our Team
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Decades of regulatory and operational expertise.
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              OCG is a TCEQ-approved training provider of MSW courses for Solid Waste Supervisors
              and associated staff.
            </p>
            <p className="font-medium text-foreground">
              Each of our instructors has over 30 years of experience in the solid waste industry
              with deep regulatory knowledge and practical experience.
            </p>
            <p>
              Our courses cover background history on rule-making, obtaining and maintaining
              compliance with commission rules and site-specific authorization documents, as well
              as technical and operational expertise.
            </p>
            <p>
              OCG takes great pride in ensuring that our materials reflect the most recent rules,
              regulations, policies and procedures of the TCEQ and industry practices.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex flex-col rounded-lg border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-semibold text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h2 className="font-serif text-xl font-semibold text-primary">{member.name}</h2>
                <p className="mt-1 text-sm font-medium text-accent">{member.credentials}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
