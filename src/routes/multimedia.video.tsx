import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { MediaGrid } from "@/components/news/MediaCard";
import { VIDEOS } from "@/data/content";

export const Route = createFileRoute("/multimedia/video")({
  head: () => ({
    meta: [
      { title: "Video Đầu tư — Documentary, Drone & Phóng sự" },
      { name: "description", content: "Thư viện video đầu tư: phóng sự tỉnh, drone footage hạ tầng, documentary FDI." },
      { property: "og:title", content: "Video Đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng · Video"
        title="Video Đầu tư"
        description="Phóng sự, documentary và drone footage 4K — kể câu chuyện đầu tư bằng hình ảnh động."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <MediaGrid items={VIDEOS} />
      </section>
    </>
  ),
});
