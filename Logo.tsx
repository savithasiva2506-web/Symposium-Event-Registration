import { Cpu } from "lucide-react";
import { site } from "../data/siteData";

/**
 * College identity block.
 * If site.logoSrc is set (see src/data/siteData.ts) the real logo is shown;
 * otherwise a clean text-based placeholder is rendered.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {site.logoSrc ? (
        <img
          src={site.logoSrc}
          alt={`${site.college} logo`}
          width={44}
          height={44}
          className="h-11 w-11 object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          title="College logo placeholder"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dashed border-white/25 bg-white/5 text-neon-cyan"
        >
          <Cpu className="h-5 w-5" />
        </span>
      )}
      {!compact && (
        <div className="text-left leading-tight">
          <p className="text-sm font-semibold text-white">{site.college}</p>
          <p className="mt-0.5 text-[11px] tracking-wide text-milk/70">
            {site.collegeStatus.join(" | ")}
          </p>
        </div>
      )}
    </div>
  );
}
