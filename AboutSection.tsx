import { Lightbulb, Puzzle, Rocket, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutPoints, site } from "../data/siteData";

const icons = [Rocket, Sparkles, Puzzle, Lightbulb];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About" title="About the Symposium" id="about-title" />

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-milk/80 sm:text-lg">
          {site.name} is a student-focused symposium by the {site.department}, bringing
          together learners who love building, solving and imagining. It is a
          platform to celebrate technical knowledge, creativity, problem-solving
          and innovation through a mix of technical and non-technical events.
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {aboutPoints.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li
                key={point}
                className="glass flex flex-col items-center rounded-2xl p-5 text-center transition duration-200 hover:-translate-y-1 hover:border-neon-cyan/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-violet/10 text-neon-violet">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="mt-3 font-display text-sm font-semibold text-white sm:text-base">
                  {point}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-center font-display text-lg font-semibold text-gradient sm:text-xl">
          {site.closing}
        </p>
      </div>
    </section>
  );
}
