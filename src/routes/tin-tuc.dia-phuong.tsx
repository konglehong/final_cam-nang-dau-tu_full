import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tin-tuc/dia-phuong")({
  head: () => ({
    meta: [
      { title: "Tin tức xúc tiến đầu tư địa phương — 34 tỉnh thành" },
      {
        name: "description",
        content:
          "Tin tức xúc tiến đầu tư, hoạt động kinh tế và sự kiện của 34 tỉnh thành sau sáp nhập.",
      },
      { property: "og:title", content: "Tin tức địa phương — Cẩm nang Đầu tư" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Chuyên mục"
        title="Tin tức địa phương"
        description="Xúc tiến đầu tư, hoạt động kinh tế và sự kiện nổi bật của 34 tỉnh thành."
      />
      <PlaceholderBlock
        title="Bài viết Địa phương"
        description="Lọc theo vùng và tỉnh, hiển thị mật độ tin tức trên bản đồ."
        blocks={[
          "Bản đồ heatmap mật độ tin tức theo tỉnh",
          "Featured: 3 tỉnh nổi bật trong tháng",
          "List bài viết theo tỉnh",
          "Sidebar: Lịch sự kiện xúc tiến tỉnh",
        ]}
      />
    </>
  ),
});
