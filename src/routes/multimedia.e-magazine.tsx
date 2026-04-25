import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { MediaGrid } from "@/components/news/MediaCard";
import { E_MAGAZINES } from "@/data/content";

export const Route = createFileRoute("/multimedia/e-magazine")({
  head: () => ({
    meta: [
      { title: "E-magazine Đầu tư Việt Nam — Cẩm nang Đầu tư" },
      { name: "description", content: "Tạp chí điện tử chuyên sâu về đầu tư, phát hành định kỳ với thiết kế tương tác." },
      { property: "og:title", content: "E-magazine Đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng · E-magazine"
        title="E-magazine"
        description="Tạp chí điện tử chuyên sâu phát hành định kỳ — thiết kế tương tác, longread đậm chất xuất bản."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <MediaGrid items={E_MAGAZINES} accent="gold" />
      </section>
    </>
  ),
});
