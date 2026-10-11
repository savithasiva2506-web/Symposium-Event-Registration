/**
 * ===========================================================
 *  TECHSPIRE'26 — all editable content lives in this file.
 *  Update text, events, rules or links here; no component
 *  changes needed.
 * ===========================================================
 */

// Single source of truth for the registration link (used everywhere).
export const REGISTRATION_URL = "https://techspire-26.vercel.app/";

// Event runs on 15 October 2026 (India Standard Time, UTC+05:30).
export const EVENT_START_ISO = "2026-10-15T00:00:00+05:30";
export const EVENT_END_ISO = "2026-10-15T23:59:59+05:30";

export const site = {
  name: "TECHSPIRE’26",
  tagline: "Where Technology Meets Creativity!",
  slogan: ["COMPETE", "CREATE", "CONQUER"],
  message: "Bring your ideas. Showcase your skills. Challenge yourself. Make your mark!",
  closing: "TECHSPIRE’26 — Ignite Your Technical Spirit!",
  college: "Er. Perumal Manimekalai College of Engineering",
  collegeStatus: ["AUTONOMOUS", "NBA ACCREDITED", "NAAC “A” GRADE"],
  address: "Koneripalli, Hosur – 635117",
  department: "Department of CSE & AIML",
  associations: ["ACM", "Techsta Club"],
  dateLabel: "15 October 2026",
  dateHero: "15 OCTOBER 2026",
  venue: "West Block Auditorium",
  /**
   * Google Maps link to the campus.
   * TODO (organiser): paste a verified map link here. While this is empty,
   * the Venue section shows a clearly labelled placeholder.
   */
  mapUrl: "",
  /**
   * Logo placeholder. To use the real college logo, drop the file into
   * /public (e.g. /public/college-logo.png) and set the path below.
   */
  logoSrc: "" as string,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Rules", href: "#rules" },
  { label: "Venue", href: "#venue" },
];

export type Accent = "cyan" | "blue" | "violet";

export type IconKey =
  | "relay"
  | "paper"
  | "bug"
  | "quiz"
  | "ai"
  | "ui"
  | "gamepad"
  | "movie";

export interface EventItem {
  title: string;
  description: string;
  icon: IconKey;
  accent: Accent;
  tag?: string;
}

export const technicalEvents: EventItem[] = [
  {
    title: "TECH RELAY",
    description:
      "A team-based technical challenge that rewards coordination, speed and sharp problem-solving.",
    icon: "relay",
    accent: "cyan",
  },
  {
    title: "PAPER PRESENTATION",
    description:
      "Present your technical ideas and findings to an audience of peers and faculty.",
    icon: "paper",
    accent: "blue",
  },
  {
    title: "DEBUGGING",
    description:
      "Hunt down faults, trace errors and fix the code. An individual event.",
    icon: "bug",
    accent: "violet",
    tag: "Individual",
  },
  {
    title: "TECHNICAL QUIZ",
    description:
      "Put your knowledge of computing and technology to the test against fellow participants.",
    icon: "quiz",
    accent: "cyan",
  },
];

export const nonTechnicalEvents: EventItem[] = [
  {
    title: "AI PROMPT",
    description:
      "Show how creatively and cleverly you can work with AI tools through well-crafted prompts.",
    icon: "ai",
    accent: "violet",
  },
  {
    title: "UI WITHOUT CODE",
    description:
      "Bring interface ideas to life visually, with design thinking instead of programming.",
    icon: "ui",
    accent: "blue",
  },
  {
    title: "E-SPORTS",
    description:
      "A gaming showdown built on skill, strategy and teamwork.",
    icon: "gamepad",
    accent: "cyan",
  },
  {
    title: "TECH MOVIE",
    description:
      "A creative, technology-themed movie event for storytellers and film lovers.",
    icon: "movie",
    accent: "violet",
  },
];

/**
 * Fee text is shown exactly as supplied by the organisers.
 * TODO (organiser): confirm how the two fees apply together
 * (e.g. whether they are cumulative) and add a clarifying note if needed.
 */
export const fees = [
  { amount: "₹150", rest: "per person — All Events", accent: "cyan" as Accent },
  { amount: "₹100", rest: "— E-Sports", accent: "violet" as Accent },
];

export const feeNote = "Participation is limited to three events per participant.";

export const rules = [
  { title: "Event Limit", text: "Maximum three events per participant." },
  { title: "Teams", text: "Team participation is allowed except for Debugging." },
  { title: "Team Size", text: "Maximum four members per team." },
];

export const aboutPoints = [
  "Technical knowledge",
  "Creativity",
  "Problem-solving",
  "Innovation",
];
