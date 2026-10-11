import { ArrowRight, Info } from "lucide-react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { feeNote, fees, REGISTRATION_URL, type Accent } from "../data/siteData";

const feeStyles: Record<Accent, string> = {
  cyan: "text-neon-cyan hover:border-neon-cyan/50 hover:shadow-glow",
  blue: "text-neon-blue hover:border-neon-blue/50",
  violet: "text-neon-violet hover:border-neon-violet/50 hover:shadow-glow-violet",
};

export default function RegistrationSection() {
  return (
    <section id="registration" aria-labelledby="registration-title" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Registration" title="Registration & Fees" id="registration-title" />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {fees.map((fee) => (
            <li
              key={fee.amount}
              className={`glass rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-1 ${feeStyles[fee.accent]}`}
            >
              <p className="font-display text-5xl font-bold sm:text-6xl">{fee.amount}</p>
              <p className="mt-3 text-base font-medium text-milk/90">{fee.rest}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2.5 text-center text-sm text-milk/80 sm:text-base">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
          <span>{feeNote}</span>
        </p>

        <div className="mt-10 flex justify-center">
          <Button href={REGISTRATION_URL} external className="w-full sm:w-auto sm:min-w-[240px]">
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
