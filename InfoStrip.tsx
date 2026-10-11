import { CalendarDays, Landmark, MapPin, Users } from "lucide-react";
import { site } from "../data/siteData";

const items = [
  { icon: CalendarDays, label: "Date", value: site.dateLabel },
  { icon: MapPin, label: "Venue", value: site.venue },
  { icon: Landmark, label: "Organised by", value: site.department },
  { icon: Users, label: "In association with", value: site.associations.join(" & ") },
];

/** Milk-white band that contrasts with the Atlantic-blue page. */
export default function InfoStrip() {
  return (
    <section aria-label="Event information" className="relative z-10 bg-milk">
      <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 bg-milk px-6 py-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-milk">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-ink-700">{label}</dt>
              <dd className="mt-0.5 font-display text-base font-semibold text-ink-950">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
