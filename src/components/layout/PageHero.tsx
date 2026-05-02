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
    <section className="relative overflow-hidden border-b border-[rgba(14,15,12,0.12)] bg-[#F7F8F2]">
      <div
        className="pointer-events-none absolute right-[-18%] top-[-45%] h-[420px] w-[420px] rounded-full bg-[#9FE870]/45 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-45%] left-[-16%] h-[360px] w-[360px] rounded-full bg-[#E2F6D5] blur-3xl"
        aria-hidden
      />
      <div
        className={`relative mx-auto max-w-7xl px-6 py-16 lg:py-22 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="animate-fade-up mb-5 inline-flex rounded-full bg-[#E2F6D5] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)]">
            {eyebrow}
          </p>
        )}
        <h1
          className={`animate-fade-up font-display text-[38px] font-black leading-[0.98] tracking-[-0.018em] text-[#0E0F0C] sm:text-[48px] lg:text-[56px] ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
          style={{ animationDelay: "60ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`animate-fade-up mt-6 text-base font-medium leading-relaxed text-[#454745] lg:text-lg ${
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
            style={{ animationDelay: "140ms" }}
          >
            {description}
          </p>
        )}
        {children && (
          <div className="animate-fade-up mt-8" style={{ animationDelay: "220ms" }}>
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
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <h2 className="font-display text-[36px] font-black leading-[1] tracking-[-0.018em] text-[#0E0F0C] lg:text-[52px]">
          {title}
        </h2>
        <p className="mt-4 text-base font-medium leading-relaxed text-[#454745]">
          {description}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <div key={b} className="reveal rounded-[30px] bg-white p-7 ring-1 ring-[rgba(14,15,12,0.12)]">
            <span className="inline-flex rounded-full bg-[#E2F6D5] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#163300]">
              Block {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-base font-bold text-[#0E0F0C]">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
