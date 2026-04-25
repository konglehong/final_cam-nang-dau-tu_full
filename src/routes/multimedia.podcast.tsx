import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { MediaGrid } from "@/components/news/MediaCard";
import { PODCASTS } from "@/data/content";

export const Route = createFileRoute("/multimedia/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast 'Câu chuyện đầu tư' — Cẩm nang Đầu tư Việt Nam" },
      { name: "description", content: "Phỏng vấn doanh nghiệp thành công, lãnh đạo địa phương và chuyên gia về đầu tư." },
      { property: "og:title", content: "Podcast Câu chuyện đầu tư" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng · Podcast"
        title="Podcast Câu chuyện đầu tư"
        description="Mỗi tập, một góc nhìn — chuyên gia, lãnh đạo địa phương và doanh nghiệp chia sẻ câu chuyện thật."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex flex-wrap gap-2">
          {["Spotify", "Apple Podcasts", "Google Podcasts", "RSS"].map((p) => (
            <button
              key={p}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold hover:border-primary/40 hover:text-primary"
            >
              Nghe trên {p}
            </button>
          ))}
        </div>
        <MediaGrid items={PODCASTS} />
      </section>
    </>
  ),
});
