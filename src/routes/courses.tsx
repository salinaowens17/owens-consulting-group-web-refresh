import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  Clock,
  Download,
  FileSearch,
  FileText,
  HeartPulse,
  Activity,
  ShieldPlus,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import {
  IN_PERSON_REGISTRATION_PDF,
  ONLINE_REGISTRATION_PDF,
} from "@/lib/registration-forms";
import landfillAerial from "@/assets/courses-hero-sphere.jpeg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Services — Owens Consulting Group, LLC" },
      {
        name: "description",
        content:
          "TCEQ-approved courses (MSW A #513, MSW B #514, Waste Screening #341, Specialized Medical Waste #1390), First Aid/CPR/AED certification, on-site SOP training, and chemical inventory audits.",
      },
      {
        property: "og:title",
        content: "Courses & Services — Owens Consulting Group, LLC",
      },
      {
        property: "og:description",
        content:
          "Supervisor licensing, waste screening, specialized medical waste, First Aid/CPR/AED certification, on-site SOP training, and chemical inventory audits for Texas.",
      },
    ],
  }),
  component: CoursesAndServicesPage,
});

const courses = [
  {
    code: "TCEQ Course #513",
    title: "MSW A Supervisor Licensing",
    duration: "24 hours",
    audience:
      "Supervisors of Type I, IAE, IV and Type IVAE landfills, and Type IX landfill mining operations",
    body: "This TCEQ-approved 24-hour course is designed for supervisors seeking an MSW A License or renewal hours to renew a current MSW license.",
  },
  {
    code: "TCEQ Course #514",
    title: "MSW B Supervisor Licensing",
    duration: "24 hours",
    audience:
      "Supervisors of Processing Facilities, including recycling, composting, and medical waste management facilities",
    body: "This TCEQ-approved 24-hour course is designed for supervisors of MSW transfer stations; non-hazardous liquid waste processing facilities; Material Recycling Facilities (MRFs); and Type IX Energy Recovery facilities.",
  },
  {
    code: "TCEQ Course #341",
    title: "Waste Screening",
    duration: "8 hours",
    audience:
      "Waste acceptance, screening, and load inspection personnel; sales personnel; environmental compliance staff; supervisors, managers, and scale house staff",
    body: "This TCEQ-approved 8-hour course satisfies most Site Operating Plan (SOP) annual training requirements per 30 TAC 330.127(5). It is also approved by the TDLR for continuing education credits for Code Enforcement Officers.",
    badges: ["SOP annual training", "TDLR continuing ed"],
  },
  {
    code: "TCEQ Course #1390",
    title: "Specialized Medical Waste",
    duration: "8 hours",
    audience:
      "Personnel obtaining an MSW B License who supervise a Medical Waste facility requiring a Registration authorization",
    body: "This TCEQ-approved 8-hour course is designed for personnel who are obtaining an MSW B License and supervise a Medical Waste facility requiring a Registration authorization.",
  },
];

const safetyCourses = [
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Adult & Pediatric First Aid / CPR / AED",
    duration: "4–5 hours",
    audience:
      "Workplace responders, childcare providers, coaches, and anyone needing a 2-year certification",
    body: "American Heart Association / American Red Cross-aligned certification includes hands-on skills practice and a 2-year certification card upon successful completion.",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Basic Life Support (BLS) for Healthcare Providers",
    duration: "4–5 hours",
    audience:
      "Nurses, EMS, medical/dental office staff, and other healthcare professionals",
    body: "BLS certification course includes a 2-year BLS Provider card upon successful completion.",
  },
  {
    icon: <ShieldPlus className="h-5 w-5" />,
    title: "Bloodborne Pathogens (OSHA)",
    duration: "1–2 hours",
    audience:
      "Employees with reasonably anticipated occupational exposure to blood or other potentially infectious materials",
    body: "OSHA-compliant Bloodborne Pathogens training meeting the requirements of 29 CFR 1910.1030. Can be bundled with First Aid/CPR/AED.",
    cite: "OSHA 29 CFR 1910.1030",
  },
];

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

function CoursesAndServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent text-slate-950">
                TCEQ-approved training & environmental compliance support
              </span>
              <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
                Courses & services for Texas environmental supervisors and operators.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                TCEQ-approved supervisor licensing courses plus hands-on, on-site environmental
                compliance services. All of our courses meet the requirements to renew a current
                MSW License.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex flex-wrap gap-3">
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
                <Link
                  to="/contact"
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-primary transition-colors hover:border-primary"
                >
                  Ask about scheduling <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                <a
                  href="#courses"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  TCEQ-approved courses
                </a>
                <a
                  href="#services"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Environmental compliance services
                </a>
                <a
                  href="#first-aid"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  First Aid / CPR / AED
                </a>
              </nav>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,var(--color-accent)_0%,transparent_60%)] opacity-20" aria-hidden />
              <img
                src={landfillAerial}
                alt="Aerial view of a municipal solid waste landfill with a bulldozer working the active face — the type of operation supported by TCEQ-approved supervisor training and environmental compliance services."
                className="aspect-[2/3] w-full rounded-2xl border border-border object-cover shadow-[0_25px_60px_-30px_rgba(20,40,80,0.55)]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="scroll-mt-24 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-white">
            Courses
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white md:text-4xl">
            TCEQ-approved courses
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white">
            In-person and online schedules are available throughout 2026.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <article
              key={c.code}
              className="flex flex-col rounded-xl border border-white/20 bg-primary p-8 transition-shadow hover:shadow-[0_15px_45px_-25px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white">
                  {c.code}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-white">
                  <Clock className="h-4 w-4" /> {c.duration}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-sm font-medium text-white">{c.audience}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white">
                {c.body}
              </p>
              {c.badges && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/40 bg-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/30 bg-white/5 p-6 text-sm text-white">
          <p>
            <span className="font-semibold text-white">Note:</span> All of these courses meet
            the requirements to renew a current MSW License.
          </p>
        </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Services
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
              Environmental compliance services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Beyond training, we partner with Texas operators on the everyday work of staying
              compliant — from site-specific SOP training to comprehensive chemical inventory
              audits.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                <h3 className="mt-2 font-serif text-xl font-semibold text-primary">
                  {s.title}
                </h3>
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
        </div>
      </section>

      {/* First Aid / CPR / AED */}
      <section id="first-aid" className="border-b border-border bg-primary text-white">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white">
              Safety certification
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white md:text-4xl">
              First Aid / CPR / AED training
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white">
              Owens Consulting Group, LLC offers nationally recognized First Aid, CPR, and AED
              certification courses for workplace responders, healthcare providers, and
              community members. Courses are delivered on-site at your facility or at a
              scheduled location, with hands-on skills practice and a 2-year certification card
              issued upon successful completion.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {safetyCourses.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-xl border border-white/20 bg-primary p-7 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:shadow-[0_15px_45px_-25px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white">
                    {c.icon}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-white">
                    <Clock className="h-4 w-4" /> {c.duration}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-white">{c.audience}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white">
                  {c.body}
                </p>
                {c.cite && (
                  <p className="mt-5 border-t border-white/20 pt-4 text-[11px] font-medium uppercase tracking-wider text-white">
                    {c.cite}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/30 bg-white/5 p-6 text-sm text-white">
            <p>
              <span className="font-semibold text-white">Group &amp; on-site training:</span>{" "}
              We bring First Aid/CPR/AED certification directly to your workplace. Email{" "}
              <a
                href="mailto:owenscgtx@gmail.com?subject=First%20Aid%2FCPR%2FAED%20training"
                className="font-medium text-white underline underline-offset-4 hover:no-underline"
              >
                owenscgtx@gmail.com
              </a>{" "}
              for group rates and scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Schedules CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
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

      {/* Tailored CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="rounded-2xl border border-border bg-primary p-10 text-primary-foreground md:p-14">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Need something tailored?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/75">
                We regularly customize on-site SOP training and chemical inventory audits for
                facility teams across Texas. Email us with the details and we&rsquo;ll get back
                to you with options.
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
