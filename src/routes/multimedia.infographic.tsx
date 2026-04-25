import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { MediaGrid } from "@/components/news/MediaCard";
import { INFOGRAPHICS } from "@/data/content";

export const Route = createFileRoute("/multimedia/infographic")({
  head: () => ({
    meta: [
      { title: "Infographic Đầu tư — Dữ liệu trực quan" },
      { name: "description", content: "Bộ sưu tập infographic về FDI, kinh tế và 34 tỉnh thành Việt Nam." },
      { property: "og:title", content: "Infographic Đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng · Infographic"
        title="Infographic"
        description="Dữ liệu khô khan biến thành hình ảnh dễ hiểu, sẵn sàng chia sẻ trên mạng xã hội."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <MediaGrid items={INFOGRAPHICS} accent="gold" />
      </section>
    </>
  ),
});
