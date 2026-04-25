import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { EVENTS } from "@/data/content";
import { fmtDateTime } from "@/lib/format";
import { Calendar, MapPin, Video } from "lucide-react";

export const Route = createFileRoute("/nha-dau-tu/su-kien")({
  head: () => ({
    meta: [
      { title: "Sự kiện xúc tiến đầu tư — Lịch hội nghị, tọa đàm, livestream" },
      { name: "description", content: "Lịch sự kiện xúc tiến đầu tư cho cộng đồng nhà đầu tư trong và ngoài nước." },
      { property: "og:title", content: "Sự kiện xúc tiến đầu tư Việt Nam 2025" },
    ],
  }),
  component: SuKienPage,
});

const FORMAT_LABEL = { "in-person": "Trực tiếp", online: "Online", hybrid: "Hybrid" } as const;
const CATEGORY_LABEL = {
  summit: "Diễn đàn",
  roadshow: "Roadshow",
  workshop: "Workshop",
  ceremony: "Lễ khởi công",
} as const;

function SuKienPage() {
  const now = Date.now();
  const upcoming = EVENTS.filter((e) => +new Date(e.date) >= now).sort(
    (a, b) => +new Date(a.date) - +new Date(b.date),
  );
  const past = EVENTS.filter((e) => +new Date(e.date) < now).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  return (
    <>
      <PageHero
        eyebrow="Dành cho Nhà đầu tư"
        title="Sự kiện xúc tiến đầu tư"
        description="Diễn đàn, roadshow, workshop và lễ khởi công — cơ hội kết nối trực tiếp với địa phương, chuyên gia và đối tác."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-5 font-display text-2xl font-bold">Sắp diễn ra ({upcoming.length})</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {upcoming.map((e) => (
            <article
              key={e.slug}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:border-primary/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {CATEGORY_LABEL[e.category]}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                      e.format === "online"
                        ? "bg-sky-500/15 text-sky-700 dark:text-sky-400"
                        : e.format === "hybrid"
                          ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                          : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                    }`}
                  >
                    {FORMAT_LABEL[e.format]}
                  </span>
                </div>
                {e.registrationOpen && (
                  <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
                    Mở đăng ký
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
              <div className="mt-4 grid gap-2 text-sm">
                <span className="inline-flex items-center gap-2 text-foreground">
                  <Calendar className="h-4 w-4 text-primary" /> {fmtDateTime(e.date)}
                </span>
                <span className="inline-flex items-center gap-2 text-foreground">
                  {e.format === "online" ? (
                    <Video className="h-4 w-4 text-primary" />
                  ) : (
                    <MapPin className="h-4 w-4 text-primary" />
                  )}{" "}
                  {e.location}
                </span>
                <span className="text-xs text-muted-foreground">Tổ chức: {e.organizer}</span>
              </div>
              <button
                disabled={!e.registrationOpen}
                className="mt-4 w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
              >
                {e.registrationOpen ? "Đăng ký tham dự" : "Sắp mở đăng ký"}
              </button>
            </article>
          ))}
        </div>

        {past.length > 0 && (
          <>
            <h2 className="mt-12 mb-5 font-display text-2xl font-bold">Đã diễn ra</h2>
            <ul className="divide-y divide-border rounded-xl border border-border bg-card">
              {past.map((e) => (
                <li key={e.slug} className="flex flex-wrap items-center justify-between gap-3 p-4">
                  <div>
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {fmtDateTime(e.date)} · {e.location}
                    </p>
                  </div>
                  <button className="text-xs font-semibold text-primary hover:underline">
                    Xem lại / Tài liệu
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
