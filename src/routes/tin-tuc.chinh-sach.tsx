import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tin-tuc/chinh-sach")({
  head: () => ({
    meta: [
      { title: "Chính sách đầu tư mới nhất — Cẩm nang Đầu tư Việt Nam" },
      {
        name: "description",
        content:
          "Cập nhật chính sách đầu tư, ưu đãi thuế, đất đai và cải cách thể chế cho nhà đầu tư trong và ngoài nước.",
      },
      { property: "og:title", content: "Tin chính sách đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Chuyên mục"
        title="Chính sách đầu tư"
        description="Phân tích văn bản pháp luật, ưu đãi mới và cải cách thể chế tác động đến môi trường đầu tư."
      />
      <PlaceholderBlock
        title="Bài viết Chính sách"
        description="Filter theo cấp ban hành, lĩnh vực và thời gian hiệu lực."
        blocks={[
          "Featured: Luật mới nhất (cover + tóm tắt)",
          "List bài viết phân tích chuyên sâu",
          "Sidebar: Văn bản pháp luật quan trọng",
          "Sidebar: Hỏi đáp chính sách",
        ]}
      />
    </>
  ),
});
