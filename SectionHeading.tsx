interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle, id }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-milk/80 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
