import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/ban-do-dau-tu")({
  head: () => ({
    meta: [
      { title: "Bản đồ đầu tư Việt Nam — 34 tỉnh thành tương tác" },
      {
        name: "description",
        content:
          "Bản đồ tương tác hiển thị dữ liệu kinh tế, FDI, khu công nghiệp và cơ hội đầu tư của 34 tỉnh thành Việt Nam sau sáp nhập.",
      },
      { property: "og:title", content: "Bản đồ đầu tư Việt Nam tương tác" },
      {
        property: "og:description",
        content: "Khám phá 34 tỉnh thành qua bản đồ dữ liệu kinh tế trực quan.",
      },
    ],
  }),
  component: BanDoPage,
});

function BanDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Bản đồ tương tác"
        title="Bản đồ đầu tư Việt Nam"
        description="Khám phá 34 tỉnh thành sau sáp nhập với dữ liệu kinh tế, hạ tầng, chính sách ưu đãi và cơ hội đầu tư cập nhật theo thời gian thực."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Bản đồ"
        description="Trang sẽ tích hợp Mapbox/SVG bản đồ Việt Nam, sidebar lọc đa chiều, layer chuyển đổi và bảng xếp hạng nhanh."
        blocks={[
          "Filter bar: Vùng · Ngành · Loại ưu đãi · Quy mô FDI",
          "Map full-width: 34 tỉnh color-coded theo chỉ số",
          "Sidebar phải: card tỉnh khi chọn (logo, tagline, 6 chỉ số)",
          "Layer toggle: KCN · Cảng/sân bay · Cao tốc · Dự án trọng điểm",
          "Bảng xếp hạng Top 10 thu hút FDI / PCI",
          "CTA: So sánh nhiều tỉnh & Tải báo cáo",
        ]}
      />
    </>
  );
}
