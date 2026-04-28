import { Link } from "@tanstack/react-router";
import { ARTICLES, type Article } from "@/data/content";
import { fmtDate, relativeFromNow } from "@/lib/format";
import { Calendar, Clock } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTranslatedItem } from "@/lib/use-translated";

export function ArticleCard({ a, variant = "default" }: { a: Article; variant?: "default" | "hero" }) {
  const t = useT();
  const tr = useTranslatedItem(a);
  const catLabel = t(`news.category.${a.category === "chinh-sach" ? "policy" : a.category === "ha-tang" ? "infra" : a.category === "dia-phuong" ? "local" : "fdi"}`);

  if (variant === "hero") {
    return (
      <Link
        to="/tin-tuc/$slug"
        params={{ slug: a.slug }}
        className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] transition-all hover:border-primary/40"
      >
        <span className="self-start rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
          {t("home.section.featured")}
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground group-hover:text-primary lg:text-4xl">
          {tr.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{tr.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            {catLabel}
          </span>
          <span>{a.author}</span>
          <span>·</span>
          <Calendar className="h-3 w-3" /> {fmtDate(a.publishedAt)}
          <span>·</span>
          <Clock className="h-3 w-3" /> {a.readingMinutes} {t("common.minutesRead")}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/tin-tuc/$slug"
      params={{ slug: a.slug }}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
    >
      <span className="self-start rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
        {catLabel}
      </span>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
        {tr.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{tr.excerpt}</p>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
        <span>{a.author}</span>
        <span>{relativeFromNow(a.publishedAt)} · {a.readingMinutes}′</span>
      </div>
    </Link>
  );
}

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleCard key={a.slug} a={a} />
      ))}
    </div>
  );
}

export function pickFeatured(category?: Article["category"]) {
  const list = category ? ARTICLES.filter((a) => a.category === category) : ARTICLES;
  return [...list].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}
