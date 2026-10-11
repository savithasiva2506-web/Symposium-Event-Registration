import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { REGISTRATION_URL, site } from "../data/siteData";

export default function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <div className="glass relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-70" />
          <div className="glow-blob absolute -left-20 -top-20 h-64 w-64 rounded-full bg-neon-blue/30 blur-[90px]" />
          <div className="glow-blob absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-neon-violet/30 blur-[90px]" />
        </div>

        <div className="relative">
          <h2 id="cta-title" className="font-display text-3xl font-bold text-white sm:text-5xl">
            Your Ideas. Your Skills. <span className="text-gradient">Your Moment.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-milk/90 sm:text-lg">{site.message}</p>
          <div className="mt-9 flex justify-center">
            <Button href={REGISTRATION_URL} external className="w-full sm:w-auto sm:min-w-[240px]">
              Register Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
