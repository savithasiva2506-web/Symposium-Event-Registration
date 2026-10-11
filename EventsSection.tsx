import EventCard from "./EventCard";
import SectionHeading from "./SectionHeading";
import { nonTechnicalEvents, technicalEvents, type EventItem } from "../data/siteData";

function Group({ id, title, events }: { id: string; title: string; events: EventItem[] }) {
  return (
    <div className="mt-14 first-of-type:mt-12">
      <h3 id={id} className="flex items-center gap-4 font-display text-lg font-semibold uppercase tracking-[0.2em] text-white sm:text-xl">
        {title}
        <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
      </h3>
      <ul aria-labelledby={id} className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event, i) => (
          <li key={event.title}>
            <EventCard event={event} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section id="events" aria-labelledby="events-title" className="relative bg-ink-900/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Compete • Create • Conquer"
          title="Events"
          id="events-title"
          subtitle="Pick your arena — technical or non-technical. Up to three events per participant."
        />
        <Group id="technical-events" title="Technical Events" events={technicalEvents} />
        <Group id="non-technical-events" title="Non-Technical Events" events={nonTechnicalEvents} />
      </div>
    </section>
  );
}
