import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const base =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3 font-display text-sm font-semibold tracking-wider transition duration-200 active:scale-[0.98]";

const variants = {
  primary:
    "bg-milk text-ink-900 shadow-glow hover:bg-neon-cyan",
  secondary: "glass text-white hover:border-neon-cyan/50 hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
