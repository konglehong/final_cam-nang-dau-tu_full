import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tin-tuc/fdi")({
  head: () => ({
    meta: [
      { title: "Tin tức FDI — Đầu tư trực tiếp nước ngoài tại Việt Nam" },
      {
        name: "description",
        content:
          "Cập nhật dòng vốn FDI vào Việt Nam, các thương vụ lớn, doanh nghiệp đầu tư mới và xu hướng dòng vốn quốc tế.",
      },
      { property: "og:title", content: "Tin tức FDI Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Chuyên mục"
        title="Đầu tư nước ngoài (FDI)"
        description="Dòng vốn FDI, các thương vụ M&A, doanh nghiệp đầu tư mới và xu hướng dòng vốn quốc tế."
      />
      <PlaceholderBlock
        title="Bài viết FDI"
        description="Dashboard số liệu FDI realtime kết hợp tin tức phân tích."
        blocks={[
          "Dashboard FDI: Tổng vốn lũy kế, theo quốc gia, theo ngành",
          "Top 10 dự án FDI lớn nhất 2025",
          "List bài viết phân tích",
          "Sidebar: Doanh nghiệp FDI mới đăng ký",
        ]}
      />
    </>
  ),
});
