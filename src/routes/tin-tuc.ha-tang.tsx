import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tin-tuc/ha-tang")({
  head: () => ({
    meta: [
      { title: "Tin tức hạ tầng — Cao tốc, cảng biển, sân bay, KCN" },
      {
        name: "description",
        content:
          "Cập nhật dự án hạ tầng giao thông, năng lượng và khu công nghiệp tác động đến môi trường đầu tư Việt Nam.",
      },
      { property: "og:title", content: "Tin tức hạ tầng Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Chuyên mục"
        title="Hạ tầng & Logistics"
        description="Cao tốc, đường sắt, cảng biển, sân bay, năng lượng và khu công nghiệp — nền tảng cho đầu tư."
      />
      <PlaceholderBlock
        title="Bài viết Hạ tầng"
        description="Trực quan hóa tiến độ dự án trên bản đồ Việt Nam."
        blocks={[
          "Bản đồ tiến độ cao tốc Bắc-Nam",
          "Cập nhật KCN mới phê duyệt",
          "List bài viết hạ tầng & logistics",
          "Timeline dự án trọng điểm quốc gia",
        ]}
      />
    </>
  ),
});
