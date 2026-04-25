import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, description, children, align = "left" }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary via-primary to-[oklch(0.32_0.12_20)] text-primary-foreground">
      {/* Decorative pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className={`relative mx-auto max-w-7xl px-6 py-16 lg:py-24 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </p>
        )}
        <h1
          className={`font-display text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-5 text-lg leading-relaxed text-primary-foreground/85 lg:text-xl ${
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function PlaceholderBlock({
  title,
  description,
  blocks,
}: {
  title: string;
  description: string;
  blocks: string[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <div
            key={b}
            className="group relative overflow-hidden rounded-lg border border-dashed border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
          >
            <span className="font-display text-xs font-bold uppercase tracking-widest text-gold">
              Block {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-medium text-foreground">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
