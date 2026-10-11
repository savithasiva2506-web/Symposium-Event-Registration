import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/siteData";

export default function VenueSection() {
  return (
    <section id="venue" aria-labelledby="venue-title" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="When & Where" title="Event Date & Venue" id="venue-title" />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="glass rounded-2xl p-7 hover:border-neon-cyan/40">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
              <CalendarDays className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-xs font-medium uppercase tracking-widest text-milk/70">Date</p>
            <p className="mt-1 font-display text-3xl font-bold text-white">{site.dateLabel}</p>
          </div>

          <div className="glass rounded-2xl p-7 hover:border-neon-violet/40">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-violet/10 text-neon-violet">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-xs font-medium uppercase tracking-widest text-milk/70">Venue</p>
            <p className="mt-1 font-display text-3xl font-bold text-white">{site.venue}</p>
            <address className="mt-3 text-base not-italic leading-relaxed text-milk/80">
              {site.college}
              <br />
              {site.address}
            </address>

            {site.mapUrl ? (
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-lg text-sm font-semibold text-neon-cyan hover:text-white"
              >
                View on map
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <p className="mt-5 rounded-lg border border-dashed border-white/20 px-3 py-2 text-sm text-milk/70">
                Map link: to be added by the organiser.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
