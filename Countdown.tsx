import { useEffect, useState } from "react";
import { EVENT_END_ISO, EVENT_START_ISO } from "../data/siteData";

const start = new Date(EVENT_START_ISO).getTime();
const end = new Date(EVENT_END_ISO).getTime();

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Minutes: Math.floor((s % 3600) / 60),
    Seconds: s % 60,
  };
}

/**
 * Countdown computed from the real event date.
 * Handles three states: before the event, event day, event finished.
 */
export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now > end) {
    return (
      <p className="font-display text-sm font-semibold tracking-widest text-milk/80">
        TECHSPIRE’26 HAS CONCLUDED
      </p>
    );
  }

  if (now >= start) {
    return (
      <p className="font-display text-sm font-semibold tracking-widest text-neon-cyan">
        HAPPENING TODAY
      </p>
    );
  }

  const t = parts(start - now);
  return (
    <div role="timer" aria-label="Time remaining until TECHSPIRE’26" className="flex gap-2 sm:gap-3">
      {Object.entries(t).map(([label, value]) => (
        <div
          key={label}
          className="glass w-[4.25rem] rounded-xl py-2.5 text-center sm:w-20 sm:py-3"
        >
          <div className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-milk/70">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
