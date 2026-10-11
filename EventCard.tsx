import {
  Bug,
  Clapperboard,
  FileText,
  Gamepad2,
  HelpCircle,
  LayoutDashboard,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Accent, EventItem, IconKey } from "../data/siteData";

const icons: Record<IconKey, LucideIcon> = {
  relay: Workflow,
  paper: FileText,
  bug: Bug,
  quiz: HelpCircle,
  ai: Sparkles,
  ui: LayoutDashboard,
  gamepad: Gamepad2,
  movie: Clapperboard,
};

// Full class names must be static strings so Tailwind can detect them.
const accents: Record<Accent, { icon: string; card: string; glow: string; tag: string }> = {
  cyan: {
    icon: "bg-neon-cyan/10 text-neon-cyan",
    card: "hover:border-neon-cyan/50 hover:shadow-glow",
    glow: "from-neon-cyan/20",
    tag: "border-neon-cyan/30 text-neon-cyan",
  },
  blue: {
    icon: "bg-neon-blue/10 text-neon-blue",
    card: "hover:border-neon-blue/50",
    glow: "from-neon-blue/20",
    tag: "border-neon-blue/30 text-neon-blue",
  },
  violet: {
    icon: "bg-neon-violet/10 text-neon-violet",
    card: "hover:border-neon-violet/50 hover:shadow-glow-violet",
    glow: "from-neon-violet/20",
    tag: "border-neon-violet/30 text-neon-violet",
  },
};

export default function EventCard({ event, index }: { event: EventItem; index: number }) {
  const Icon = icons[event.icon];
  const a = accents[event.accent];

  return (
    <article
      className={`glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 ${a.card}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${a.glow} to-transparent blur-2xl transition-opacity duration-300 opacity-60 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between">
        <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.icon}`}>
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <span aria-hidden="true" className="font-display text-sm font-semibold tabular-nums text-milk/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h4 className="relative mt-6 font-display text-xl font-bold tracking-wide text-white">
        {event.title}
      </h4>
      {event.tag && (
        <span className={`relative mt-2 inline-block w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium ${a.tag}`}>
          {event.tag}
        </span>
      )}
      <p className="relative mt-3 text-sm leading-relaxed text-milk/80">{event.description}</p>
    </article>
  );
}
