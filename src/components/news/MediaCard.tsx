import type { MediaItem } from "@/data/content";
import { fmtDate } from "@/lib/format";
import { Calendar, Clock, FileText } from "lucide-react";

export function MediaCard({ item, accent = "primary" }: { item: MediaItem; accent?: "primary" | "gold" }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-${accent}/40 hover:shadow-[var(--shadow-elegant)]`}
    >
      <div
        className={`flex aspect-video items-center justify-center text-${accent === "gold" ? "gold" : "primary"}`}
        style={{
          background:
            "linear-gradient(135deg, oklch(0.96 0.02 70 / 0.6), oklch(0.94 0.03 30 / 0.6))",
        }}
      >
        <FileText className="h-10 w-10 opacity-50" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold leading-snug text-foreground">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {fmtDate(item.publishedAt)}
          </span>
          {item.duration && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {item.duration}
            </span>
          )}
          {item.pages && (
            <span className="inline-flex items-center gap-1">
              <FileText className="h-3 w-3" /> {item.pages} trang
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function MediaGrid({ items, accent }: { items: MediaItem[]; accent?: "primary" | "gold" }) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
        Chưa có nội dung trong định dạng này.
      </div>
    );
  }
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <MediaCard key={it.slug} item={it} accent={accent} />
      ))}
    </div>
  );
}
