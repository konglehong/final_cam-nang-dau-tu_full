import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tin-tuc/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${(params as { slug: string }).slug} — Cẩm nang Đầu tư Việt Nam` },
      {
        name: "description",
        content: "Bài viết chuyên sâu về đầu tư và phát triển kinh tế Việt Nam.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: BaiVietDetail,
});

function BaiVietDetail() {
  const { slug } = Route.useParams();
  return (
    <>
      <PageHero
        eyebrow="Bài viết"
        title={slug.replace(/-/g, " ")}
        description="Trang chi tiết bài viết với cover, meta tác giả/ngày, TOC sticky, longform content và share bar."
      />
      <PlaceholderBlock
        title="Wireframe trang bài viết"
        description="Layout chuẩn longform với sidebar mục lục và share."
        blocks={[
          "Breadcrumb + cover image",
          "Meta: tác giả, ngày, đọc XX phút",
          "TOC sticky (sidebar trái)",
          "Nội dung longform + ảnh + quote box",
          "Share bar (Zalo, FB, LinkedIn, X, copy)",
          "Author box + bài viết liên quan",
        ]}
      />
    </>
  );
}
