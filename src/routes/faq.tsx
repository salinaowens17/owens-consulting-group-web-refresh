import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import faqBeachImage from "@/assets/faq-beach.jpeg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Owens Consulting Group, LLC" },
      {
        name: "description",
        content:
          "Answers to common questions about MSW licensing, course registration, online classes, exams, renewals, and CEUs.",
      },
      {
        property: "og:title",
        content: "Frequently Asked Questions — Owens Consulting Group, LLC",
      },
      {
        property: "og:description",
        content:
          "MSW A & B license requirements, registration, exams, and license renewals — answered.",
      },
    ],
  }),
  component: FaqPage,
});

type FaqEntry = {
  q: string;
  a: React.ReactNode;
};

const faqs: FaqEntry[] = [
  {
    q: "How do I register for a class?",
    a: (
      <p>
        Download and complete the course registration form, then email the completed form to{" "}
        <a href="mailto:owenscgtx@gmail.com" className="text-accent underline-offset-4 hover:underline">
          owenscgtx@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    q: "What are the requirements for an MSW A License?",
    a: (
      <>
        <p>
          To obtain an MSW A license, an applicant with a high school degree is required to have
          four (4) years&rsquo; actual experience gained from participating as a principal
          operator, foreman, supervisor, or manager of a solid waste facility.
        </p>
        <p>
          College credit hours may be substituted for experience in some cases. Reference: 30 TAC
          30.18(h).
        </p>
        <p>
          An applicant must also complete the MSW A Supervisor Course #513 and the MSW B
          Supervisor Course #514. Reference: 30 TAC 30.207 and 30.210.
        </p>
      </>
    ),
  },
  {
    q: "What are the requirements for an MSW B License?",
    a: (
      <>
        <p>
          To obtain an MSW B license, an applicant with a high school degree is required to have
          two (2) years&rsquo; actual experience gained from participating as a principal
          operator, foreman, supervisor, or manager of a solid waste facility.
        </p>
        <p>
          College credit hours may be substituted for experience in some cases. Reference: 30 TAC
          30.18(h).
        </p>
        <p>An applicant must also complete the MSW B Supervisor Course #514.</p>
        <p>
          Individuals managing or supervising medical waste or compost facilities requiring a
          Permit or Registration shall complete a TCEQ recognized or approved specialized training
          course that is applicable to that facility before being issued a standard MSW B license.
          Reference: 30 TAC 30.207 and 30.210.
        </p>
      </>
    ),
  },
  {
    q: "If I'm seeking an MSW A license, do I have to take the courses in a certain order?",
    a: (
      <p>
        <strong>No.</strong> There is no regulation or rule citation that requires you to take the
        courses in any particular order. Take the courses according to availability and to suit
        your schedule.
      </p>
    ),
  },
  {
    q: "What if I don't meet the experience requirement?",
    a: (
      <p>
        You have the option of a &ldquo;Provisional License.&rdquo; A Provisional license is valid
        for 2 years and is <em>not</em> renewable. When you meet the requirement, you may apply
        for the standard license. Reference: 30 TAC 30.211.
      </p>
    ),
  },
  {
    q: "Do you have online classes? In-person classes?",
    a: (
      <>
        <p>Yes, and yes.</p>
        <p>Both our online and in-person course schedules are available on our website.</p>
      </>
    ),
  },
  {
    q: "What format are the online classes conducted in?",
    a: (
      <p>
        Online classes are held on the Web-Ex platform with a live instructor. After registering
        for a class, the manual(s) will be mailed out two Fridays prior to the course start date
        (classes always begin on a Tuesday). You will receive an email the Friday before the
        course start date with the link to the course and other related information and material.
      </p>
    ),
  },
  {
    q: "Where do I submit my initial license application?",
    a: (
      <>
        <p>
          Those who complete the MSW A and/or MSW B course(s) will receive an email with the link
          to the application, a <em>Helpful Hints</em> sheet for successful completion of the
          application, an Exam Question Matrix, and a Study Guide for the respective course.
        </p>
        <p>
          Begin the application here:{" "}
          <a
            href="https://www3.tceq.texas.gov/sunss/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            https://www3.tceq.texas.gov/sunss/
          </a>
        </p>
      </>
    ),
  },
  {
    q: "How can I check the status of my application?",
    a: (
      <>
        <p>
          The application review and approval process takes approximately 3&ndash;4 weeks. Once
          approved, you will be able to register to take the exam.
        </p>
        <p>
          Check the status of your application here:{" "}
          <a
            href="https://www2.tceq.texas.gov/lic_dpa/index.cfm?fuseaction=licall.searchindiv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline break-all"
          >
            https://www2.tceq.texas.gov/lic_dpa/index.cfm?fuseaction=licall.searchindiv
          </a>
        </p>
      </>
    ),
  },
  {
    q: "Upon application approval, where do I sign up to take the test?",
    a: (
      <>
        <p>
          <a
            href="https://www.tceq.texas.gov/licensing/exams/cbt_occ_lic.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline break-all"
          >
            https://www.tceq.texas.gov/licensing/exams/cbt_occ_lic.html
          </a>
        </p>
        <p>
          Please note that there will be a fee to take the test. Fees are at the discretion of the
          testing facility.
        </p>
      </>
    ),
  },
  {
    q: "I received a Notice of Deficiency (NOD) letter. What do I do now?",
    a: (
      <>
        <p>
          Read the letter carefully &mdash; it will detail the required corrective action(s) you
          are to complete. When requested, respond to the letter&rsquo;s corrective action(s) as
          directed.
        </p>
        <p>
          All deficiencies must be resolved within 120 days of notification, or the application
          will be considered expired. Reference: 30 TAC 30.18(g).
        </p>
      </>
    ),
  },
  {
    q: "My license has expired. What are my options?",
    a: (
      <>
        <p>
          If your license has expired, you have a 180-day window to submit your renewal
          application.
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Days 1&ndash;90: the renewal fee is 1.5 times the regular fee of $111.</li>
          <li>Days 91&ndash;180: the renewal fee is 2 times the regular fee of $111.</li>
        </ul>
        <p>
          Reference: HB 1237, effective September 1, 2025.{" "}
          <a
            href="https://www.tceq.texas.gov/licensing/renewal-online-folder/Renewal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline break-all"
          >
            View renewal information
          </a>
          .
        </p>
        <p>
          This &ldquo;grace period&rdquo; applies when you have completed your renewal CEUs{" "}
          <strong>prior</strong> to the expiration date of your license. If you have not completed
          your hours within that time frame, you will need to contact the TCEQ Licensing Section
          to coordinate your options.
        </p>
        <div className="rounded-md border border-border/70 bg-surface p-4 text-sm">
          <p className="font-semibold text-primary">Martha Hull</p>
          <p>
            <a
              href="mailto:Martha.Hull@tceq.texas.gov"
              className="text-accent underline-offset-4 hover:underline"
            >
              Martha.Hull@tceq.texas.gov
            </a>
          </p>
          <p>512.239.0156</p>
        </div>
      </>
    ),
  },
  {
    q: "How long is the MSW License valid?",
    a: <p>Three years from the approval date.</p>,
  },
  {
    q: "When can I renew my license?",
    a: (
      <>
        <p>
          You may renew your license after you have completed the Continuing Education Units (CEU)
          requirement (16 hours) and only during the 90-day period prior to the expiration of said
          license. You will receive a renewal post card in the mail from TCEQ reminding you of
          your license expiration date.
        </p>
        <p>
          <strong>Please</strong> make sure your address is accurate in the TCEQ database. You may
          update administrative information{" "}
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=pIMah86hekuBVjvNk6CPujFZeBvjx2FEj6mk2GWmpTpUNExSN0pHMlVHUlpLM0FSU1g3OVQwT09NNCQlQCN0PWcu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    q: "Where do I submit my renewal application?",
    a: (
      <>
        <p>
          Once you have completed your CEUs, you will receive an email confirming that your hours
          have been uploaded to the TCEQ database, along with the link to the license renewal
          application.
        </p>
        <p>
          Apply to renew your license here:{" "}
          <a
            href="https://www.texasonline.state.tx.us/NASApp/rap/apps/license/jsp/eng/welcome.jsp?agency=86&instance=tceq_ind"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline break-all"
          >
            TCEQ License Renewal
          </a>
        </p>
      </>
    ),
  },
  {
    q: "Who is responsible for renewing my license?",
    a: (
      <p>
        <strong>You</strong> are responsible for renewing your license. The license is in your
        name &mdash; no one else&rsquo;s. Your company is not responsible for renewing your
        license. Your training provider is not responsible for renewing your license.
      </p>
    ),
  },
];

function FaqPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12 md:px-8 md:py-24">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Support
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Answers to the questions we hear most often about MSW licensing, registration, exams,
              and renewals. Don&rsquo;t see what you&rsquo;re looking for?{" "}
              <a
                href="mailto:owenscgtx@gmail.com"
                className="text-accent underline-offset-4 hover:underline"
              >
                Email us
              </a>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <img
              src={faqBeachImage.url}
              alt="Tropical beach with palm trees overlooking turquoise ocean water"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="overflow-hidden rounded-lg border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-md data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-5 py-5 text-left font-serif text-base font-semibold text-primary hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteShell>
  );
}
