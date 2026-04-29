import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import teamJulie from "@/assets/team-julie.jpg";
import teamErasmo from "@/assets/team-erasmo.jpg";
import teamDavid from "@/assets/team-david.jpg";
import teamGordon from "@/assets/team-gordon.jpg";
import teamMonica from "@/assets/team-monica.jpeg";
import teamBrad from "@/assets/team-brad.jpeg";
import credChmm from "@/assets/cred-chmm.png";
import credTxGeo from "@/assets/cred-tx-geoscientists.png";
import credAipg from "@/assets/cred-aipg.png";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — Owens Consulting Group, LLC" },
      {
        name: "description",
        content:
          "OCG instructors bring 30+ years of solid waste industry experience and deep TCEQ regulatory knowledge.",
      },
      {
        property: "og:title",
        content: "Meet Our Team — Owens Consulting Group, LLC",
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

type Credential = { src: string; alt: string };

type Member = {
  name: string;
  credentials: string;
  title: string;
  photo?: string;
  photoPosition?: string;
  photoScale?: number;
  badges?: Credential[];
};

const team: Member[] = [
  {
    name: "Julie Spradley",
    credentials: "CHMM, REM",
    title: "CEO",
    photo: teamJulie,
    badges: [{ src: credChmm, alt: "Certified Hazardous Materials Manager (CHMM)" }],
  },
  {
    name: "Erasmo Yarrito Jr.",
    credentials: "Solid Waste Industry Expert",
    title: "Senior Instructor",
    photo: teamErasmo,
    photoPosition: "center 30%",
  },
  {
    name: "David Dugger",
    credentials: "Solid Waste Industry Expert",
    title: "Instructor",
    photo: teamDavid,
    photoPosition: "center 8%",
    photoScale: 1,
  },
  {
    name: "Gordon Spradley",
    credentials: "AIPG, PG",
    title: "International Landfill Operations & Remediation Expert",
    photo: teamGordon,
    photoPosition: "center 30%",
    photoScale: 1.1,
    badges: [
      { src: credTxGeo, alt: "Texas Board of Professional Geoscientists" },
      { src: credAipg, alt: "American Institute of Professional Geologists (AIPG)" },
    ],
  },
  {
    name: "Brad Newton",
    credentials: "Solid Waste Industry Expert — West Texas",
    title: "Instructor",
    photo: teamBrad,
  },
  {
    name: "Monica Sowards",
    credentials: "Solid Waste Industry Expert",
    title: "Instructor",
    photo: teamMonica,
  },
];

function TeamPage() {
  return (
    <SiteShell>
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Meet the Team
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Our team
          </h1>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex flex-col rounded-lg border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {member.photo ? (
                  <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border border-border/70 bg-muted">
                    <img
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{
                        ...(member.photoPosition ? { objectPosition: member.photoPosition } : {}),
                        ...(member.photoScale ? { transform: `scale(${member.photoScale})` } : {}),
                      }}
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-semibold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <h2 className="font-serif text-xl font-semibold text-primary">{member.name}</h2>
                <p className="mt-1 text-sm font-medium text-accent">{member.credentials}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.title}</p>

                {member.badges && member.badges.length > 0 ? (
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border/60 pt-4">
                    {member.badges.map((badge) => (
                      <img
                        key={badge.alt}
                        src={badge.src}
                        alt={badge.alt}
                        title={badge.alt}
                        loading="lazy"
                        className="h-16 w-auto object-contain"
                      />
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Decades of regulatory and operational expertise.
          </h2>
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
    </SiteShell>
  );
}
