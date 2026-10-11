import { REGISTRATION_URL, site } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3 md:text-left">
        <div>
          <p className="font-display text-xl font-bold tracking-wider text-white">
            TECH<span className="text-gradient">SPIRE</span>’26
          </p>
          <p className="mt-1 text-sm text-milk/80">{site.tagline}</p>
        </div>

        <div className="text-sm leading-relaxed text-milk/80">
          <p className="font-semibold text-white">{site.department}</p>
          <p>{site.college}</p>
          <p>{site.address}</p>
          <p className="mt-2">In association with {site.associations.join(" & ")}</p>
        </div>

        <div className="text-sm leading-relaxed text-milk/80 md:text-right">
          <p className="font-semibold text-white">
            {site.dateLabel} · {site.venue}
          </p>
          <p className="mt-2">
            Registration:{" "}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all font-medium text-neon-cyan underline-offset-4 hover:underline"
            >
              {REGISTRATION_URL.replace(/^https:\/\//, "")}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-milk/70">
        {site.closing}
      </p>
    </footer>
  );
}
