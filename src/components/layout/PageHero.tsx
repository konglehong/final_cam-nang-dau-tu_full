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
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Stripe-style soft mesh gradient */}
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-90" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
          color: "var(--color-foreground)",
        }}
        aria-hidden
      />
      <div
        className={`relative mx-auto max-w-7xl px-6 py-20 lg:py-28 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="animate-fade-up mb-5 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1
          className={`animate-fade-up font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground lg:text-5xl xl:text-6xl ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
          style={{ animationDelay: "60ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`animate-fade-up mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl ${
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
            style={{ animationDelay: "140ms" }}
          >
            {description}
          </p>
        )}
        {children && (
          <div className="animate-fade-up mt-9" style={{ animationDelay: "220ms" }}>
            {children}
          </div>
        )}
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
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <div key={b} className="reveal card-soft p-7">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Block {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-medium text-foreground">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
