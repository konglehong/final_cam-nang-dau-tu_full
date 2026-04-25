import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { MediaCard } from "@/components/news/MediaCard";
import { E_MAGAZINES, INFOGRAPHICS, LIVESTREAMS, PODCASTS, VIDEOS } from "@/data/content";
import { ArrowRight, BookOpen, Image as ImageIcon, Mic, Radio, Video } from "lucide-react";

export const Route = createFileRoute("/multimedia/")({
  component: MultimediaIndex,
});

const FORMATS = [
  { to: "/multimedia/e-magazine" as const, icon: BookOpen, title: "E-magazine", count: E_MAGAZINES.length, desc: "Tạp chí điện tử lật trang" },
  { to: "/multimedia/video" as const, icon: Video, title: "Video", count: VIDEOS.length, desc: "Phóng sự, drone, documentary" },
  { to: "/multimedia/podcast" as const, icon: Mic, title: "Podcast", count: PODCASTS.length, desc: "Câu chuyện đầu tư audio" },
  { to: "/multimedia/infographic" as const, icon: ImageIcon, title: "Infographic", count: INFOGRAPHICS.length, desc: "Dữ liệu trực quan dễ chia sẻ" },
  { to: "/multimedia/livestream" as const, icon: Radio, title: "Livestream", count: LIVESTREAMS.length, desc: "Tương tác trực tiếp" },
];

function MultimediaIndex() {
  const featured = [...VIDEOS, ...E_MAGAZINES, ...PODCASTS]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Trung tâm đa phương tiện"
        title="Cẩm nang qua hình ảnh, video & âm thanh"
        description="Khám phá đầu tư Việt Nam qua nhiều định dạng — E-magazine, Infographic, Video, Podcast và Livestream."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FORMATS.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.to}
                to={f.to}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display text-base font-bold">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-gold">
                  {f.count} mục
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Khám phá <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <h2 className="mt-12 mb-5 font-display text-2xl font-bold">Mới nhất</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((it) => (
            <MediaCard key={it.slug} item={it} />
          ))}
        </div>
      </section>
    </>
  );
}
