import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tinh-thanh")({
  head: () => ({
    meta: [
      { title: "34 tỉnh thành Việt Nam sau sáp nhập — Cẩm nang Đầu tư" },
      {
        name: "description",
        content:
          "Danh mục 34 tỉnh thành Việt Nam sau sáp nhập với dữ liệu, bản đồ, chính sách ưu đãi và dự án kêu gọi đầu tư của từng địa phương.",
      },
      { property: "og:title", content: "34 tỉnh thành — Cẩm nang Đầu tư Việt Nam" },
      {
        property: "og:description",
        content: "Khám phá thông tin đầy đủ của từng tỉnh sau sáp nhập đơn vị hành chính.",
      },
    ],
  }),
  component: TinhThanhPage,
});

function TinhThanhPage() {
  return (
    <>
      <PageHero
        eyebrow="Trung tâm 34 tỉnh thành"
        title="Khám phá Việt Nam sau sáp nhập"
        description="Mỗi địa phương là một câu chuyện đầu tư riêng. Tìm hiểu thế mạnh, quy hoạch, chính sách ưu đãi và cơ hội kết nối đầu tư của từng tỉnh."
      />
      <PlaceholderBlock
        title="Cấu trúc trang danh sách tỉnh"
        description="Lưới các tỉnh có lọc nhanh theo vùng và chỉ số kinh tế, dẫn vào trang chi tiết của từng địa phương."
        blocks={[
          "Filter chip: 6 vùng kinh tế (Bắc Bộ, Bắc Trung Bộ, Nam Trung Bộ, Tây Nguyên, Đông Nam Bộ, ĐBSCL)",
          "Toggle xem: Lưới card / Bản đồ / Bảng so sánh",
          "Card tỉnh: cover, tên, GRDP, FDI, số KCN, link vào trang tỉnh",
          "Block: Top 5 tỉnh thu hút FDI 2025",
          "Block: Tỉnh mới thành lập sau sáp nhập",
          "CTA: Mở công cụ so sánh tỉnh",
        ]}
      />
    </>
  );
}
