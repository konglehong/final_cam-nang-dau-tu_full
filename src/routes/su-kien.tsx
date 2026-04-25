import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { EVENTS } from "@/data/content";
import { fmtDateTime } from "@/lib/format";
import { Calendar, MapPin, Video } from "lucide-react";

export const Route = createFileRoute("/su-kien")({
  head: () => ({
    meta: [
      { title: "Sự kiện xúc tiến đầu tư Việt Nam — Lịch & Đăng ký" },
      { name: "description", content: "Lịch hội nghị, tọa đàm, livestream và workshop xúc tiến đầu tư của 34 tỉnh thành Việt Nam." },
      { property: "og:title", content: "Sự kiện xúc tiến đầu tư Việt Nam" },
    ],
  }),
  component: () => {
    const sorted = [...EVENTS].sort((a, b) => +new Date(a.date) - +new Date(b.date));
    return (
      <>
        <PageHero
          eyebrow="Sự kiện"
          title="Lịch xúc tiến đầu tư"
          description="Hội nghị, tọa đàm, livestream và workshop kết nối nhà đầu tư với địa phương — cập nhật liên tục."
        />
        <section className="mx-auto max-w-5xl px-6 py-12">
          <ul className="space-y-4">
            {sorted.map((e) => (
              <li
                key={e.slug}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:flex-row md:items-center"
              >
                <div className="md:w-32 shrink-0 rounded-lg bg-primary/10 p-3 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {new Date(e.date).toLocaleDateString("vi-VN", { month: "short" })}
                  </p>
                  <p className="font-display text-3xl font-bold text-primary">
                    {new Date(e.date).getDate()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(e.date).getFullYear()}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold leading-snug">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {fmtDateTime(e.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      {e.format === "online" ? (
                        <Video className="h-3 w-3" />
                      ) : (
                        <MapPin className="h-3 w-3" />
                      )}
                      {e.location}
                    </span>
                    <span>Tổ chức: {e.organizer}</span>
                  </div>
                </div>
                {e.registrationOpen && (
                  <button className="shrink-0 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                    Đăng ký
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  },
});
