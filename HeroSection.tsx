import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Button from "./Button";
import Countdown from "./Countdown";
import Logo from "./Logo";
import { REGISTRATION_URL, site } from "../data/siteData";

// Fixed positions (no randomness) so the layout is stable between renders.
const particles = [
  { x: "8%", y: "22%", d: "0s" },
  { x: "18%", y: "68%", d: "1.2s" },
  { x: "30%", y: "34%", d: "2.4s" },
  { x: "44%", y: "80%", d: "0.6s" },
  { x: "58%", y: "18%", d: "3s" },
  { x: "70%", y: "62%", d: "1.8s" },
  { x: "82%", y: "30%", d: "4s" },
  { x: "92%", y: "74%", d: "2.1s" },
];

function CircuitBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="glow-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-neon-blue/25 blur-[100px]" />
      <div className="glow-blob absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-neon-violet/25 blur-[110px]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8fe0ee" />
            <stop offset="1" stopColor="#FBF8F1" />
          </linearGradient>
        </defs>
        {/* Static faint traces */}
        <g stroke="rgba(251,248,241,0.16)" strokeWidth="1.5">
          <path d="M0 160h220l60 60h200" />
          <path d="M1200 120H980l-70 70H760" />
          <path d="M0 640h180l80-80h240" />
          <path d="M1200 690H940l-60-60H700" />
          <path d="M120 0v110l50 50" />
          <path d="M1080 800V700l-50-50" />
        </g>
        {/* Animated signal pulses along the traces */}
        <g stroke="url(#trace)" strokeWidth="2.5" strokeLinecap="round">
          <path className="circuit-line" d="M0 160h220l60 60h200" />
          <path className="circuit-line" style={{ animationDelay: "-3s" }} d="M1200 120H980l-70 70H760" />
          <path className="circuit-line" style={{ animationDelay: "-5s" }} d="M0 640h180l80-80h240" />
          <path className="circuit-line" style={{ animationDelay: "-7s" }} d="M1200 690H940l-60-60H700" />
        </g>
        <g fill="#8fe0ee">
          <circle cx="480" cy="220" r="4" />
          <circle cx="760" cy="190" r="4" />
          <circle cx="500" cy="560" r="4" />
          <circle cx="700" cy="630" r="4" />
        </g>
      </svg>

      {particles.map((p, i) => (
        <span
          key={i}
          className="particle absolute h-1.5 w-1.5 rounded-full bg-neon-cyan"
          style={{ left: p.x, top: p.y, animationDelay: p.d }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <CircuitBackground />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="glass inline-flex max-w-full rounded-2xl px-4 py-3">
          <Logo />
        </div>

        <p className="mt-6 text-sm font-medium tracking-wide text-neon-cyan sm:text-base">
          {site.department}
          <span className="mx-2 text-milk/50">•</span>
          In association with {site.associations.join(" & ")}
        </p>

        <h1
          className="mt-4 font-display font-bold leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(2.4rem, 11.5vw, 7.5rem)" }}
        >
          TECH<span className="text-gradient">SPIRE</span>’26
        </h1>

        <p className="mt-5 max-w-2xl font-display text-xl font-medium text-milk sm:text-2xl md:text-3xl">
          {site.tagline}
        </p>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-sm font-semibold tracking-[0.25em] text-milk/80 sm:text-base">
          {site.slogan.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              {word}
              {i < site.slogan.length - 1 && (
                <span aria-hidden="true" className="text-neon-violet">•</span>
              )}
            </span>
          ))}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 text-base text-milk sm:flex-row sm:gap-8">
          <span className="inline-flex items-center gap-2 font-semibold">
            <CalendarDays className="h-5 w-5 text-neon-cyan" aria-hidden="true" />
            {site.dateHero}
          </span>
          <span className="inline-flex items-center gap-2 font-semibold">
            <MapPin className="h-5 w-5 text-neon-violet" aria-hidden="true" />
            {site.venue}
          </span>
        </div>

        <div className="mt-8">
          <Countdown />
        </div>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <Button href={REGISTRATION_URL} external className="sm:min-w-[200px]">
            REGISTER NOW
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#events" variant="secondary" className="sm:min-w-[200px]">
            EXPLORE EVENTS
          </Button>
        </div>
      </div>
    </section>
  );
}
