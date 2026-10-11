import SectionHeading from "./SectionHeading";
import { rules } from "../data/siteData";

export default function RulesSection() {
  return (
    <section id="rules" aria-labelledby="rules-title" className="bg-ink-900/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Participation" title="Rules & Participation" id="rules-title" />

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {rules.map((rule, i) => (
            <li
              key={rule.title}
              className="glass relative overflow-hidden rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-neon-violet/50"
            >
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-4 select-none font-display text-8xl font-bold text-white/[0.05]"
              >
                {i + 1}
              </span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet font-display text-base font-bold text-ink-950">
                {i + 1}
              </span>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-white">{rule.title}</h3>
              <p className="relative mt-2 text-base leading-relaxed text-milk/80">{rule.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
