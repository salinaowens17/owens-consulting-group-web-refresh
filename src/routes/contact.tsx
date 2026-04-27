import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Owens Consulting Group" },
      {
        name: "description",
        content:
          "Contact Owens Consulting Group in Kingwood, Texas. Email owenscgtx@gmail.com to schedule courses, audits, or training.",
      },
      { property: "og:title", content: "Contact — Owens Consulting Group" },
      {
        property: "og:description",
        content: "Email us to schedule courses, audits, or on-site SOP training.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Contact
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Let's talk about your next course or audit.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Email us to request a Chemical Inventory Audit, schedule on-site SOP training,
            or enroll in an upcoming TCEQ-approved course.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary">
                Reach out directly
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The fastest way to reach us is by email. We respond personally to every
                inquiry.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:owenscgtx@gmail.com"
                    className="mt-1 block font-medium text-primary hover:text-accent"
                  >
                    owenscgtx@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Mailing address
                  </p>
                  <p className="mt-1 font-medium text-primary">
                    PO Box 6909
                    <br />
                    Kingwood, Texas 77325
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Credentials
                  </p>
                  <ul className="mt-1.5 space-y-1 text-sm">
                    <li className="font-medium text-primary">TCEQ Training Provider #782</li>
                    <li className="text-muted-foreground">State of Texas HUB Approved</li>
                    <li className="text-muted-foreground">City of Houston OBO Approved</li>
                    <li className="text-muted-foreground">Women&rsquo;s Business Enterprise Approved</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-2xl border border-border bg-card p-7 md:p-9"
            >
              <h2 className="font-serif text-2xl font-semibold text-primary">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us a bit about what you need and we'll follow up by email.
              </p>

              <div className="mt-7 grid gap-5">
                <Field label="Your name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Subject" name="subject" type="text" />
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your facility, course interest, or audit needs."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Send className="h-4 w-4" /> Send message
              </button>

              {submitted && (
                <div className="mt-5 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
                  Thanks — this is a prototype, so the form isn't wired up yet. Please email{" "}
                  <a
                    href="mailto:owenscgtx@gmail.com"
                    className="font-medium underline"
                  >
                    owenscgtx@gmail.com
                  </a>{" "}
                  directly.
                </div>
              )}

              <p className="mt-4 text-[11px] text-muted-foreground">
                Prototype note: this contact form is front-end only and can be wired to email
                delivery later.
              </p>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
