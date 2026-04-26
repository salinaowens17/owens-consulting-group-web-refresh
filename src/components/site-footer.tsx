import { Link } from "@tanstack/react-router";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import ocgLogo from "@/assets/ocg-logo.svg";
import certWbe from "@/assets/cert-wbe.png";
import certTdlr from "@/assets/cert-tdlr.png";
import certAipg from "@/assets/cert-aipg.png";
import certIhmm from "@/assets/cert-ihmm.png";
import certNrep from "@/assets/cert-nrep.png";
import certHouston from "@/assets/cert-houston.png";
import certHub from "@/assets/cert-hub.png";

const certifications = [
  { src: certWbe, alt: "Certified Women's Business Enterprise" },
  { src: certTdlr, alt: "Texas TDLR Approved" },
  { src: certAipg, alt: "American Institute of Professional Geologists" },
  { src: certIhmm, alt: "Institute of Hazardous Materials Management" },
  { src: certNrep, alt: "National Registry of Environmental Professionals" },
  { src: certHouston, alt: "City of Houston" },
  { src: certHub, alt: "Texas Historically Underutilized Business" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      {/* Certifications strip */}
      <div className="border-b border-primary-foreground/10 bg-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
          <p className="text-center font-serif text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
            Certifications & Affiliations
          </p>
          <ul className="mt-6 grid grid-cols-3 items-center gap-6 sm:grid-cols-4 md:grid-cols-7">
            {certifications.map((cert) => (
              <li key={cert.alt} className="flex items-center justify-center">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  title={cert.alt}
                  loading="lazy"
                  width={120}
                  height={120}
                  className="h-16 w-auto object-contain transition-opacity hover:opacity-100 md:h-20"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary-foreground p-1.5">
              <img src={ocgLogo} alt="Owens Consulting Group" className="h-full w-auto" />
            </span>
            <div>
              <p className="font-serif text-lg font-semibold">Owens Consulting Group</p>
              <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/60">
                Environmental compliance & training
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            A TCEQ-approved training provider serving Texas with regulatory training and
            environmental compliance support.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/courses" className="text-primary-foreground/80 hover:text-accent">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/schedules" className="text-primary-foreground/80 hover:text-accent">
                Schedules
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-primary-foreground/80 hover:text-accent">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                PO Box 6909
                <br />
                Kingwood, Texas 77325
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:owenscgtx@gmail.com" className="hover:text-accent">
                owenscgtx@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>TCEQ Provider #782</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} Owens Consulting Group. All rights reserved.</p>
          <p>TCEQ Provider #782 · TDLR Approved Course Provider</p>
        </div>
      </div>
    </footer>
  );
}
