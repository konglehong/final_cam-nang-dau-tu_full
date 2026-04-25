import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/du-an")({
  head: () => ({
    meta: [
      { title: "Cơ sở dữ liệu dự án đầu tư — 34 tỉnh thành" },
      {
        name: "description",
        content:
          "Tra cứu dự án kêu gọi đầu tư trên toàn quốc theo tỉnh, ngành, quy mô vốn và chính sách ưu đãi.",
      },
      { property: "og:title", content: "Cơ sở dữ liệu dự án đầu tư Việt Nam" },
      {
        property: "og:description",
        content: "Tìm cơ hội đầu tư phù hợp tại 34 tỉnh thành.",
      },
    ],
  }),
  component: DuAnPage,
});

function DuAnPage() {
  return (
    <>
      <PageHero
        eyebrow="Cơ sở dữ liệu dự án"
        title="Tìm cơ hội đầu tư phù hợp"
        description="Tra cứu hàng ngàn dự án kêu gọi đầu tư từ 34 tỉnh thành theo ngành, quy mô vốn, hình thức đầu tư và ưu đãi."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Cơ sở dữ liệu dự án"
        description="Tìm kiếm và lọc dự án đa chiều với 3 chế độ xem: Lưới · Danh sách · Bản đồ."
        blocks={[
          "Search bar lớn + filter sidebar (Tỉnh, Ngành, Vốn, Hình thức, Trạng thái, Ưu đãi)",
          "Toggle Grid / List / Map view",
          "Card dự án: ảnh, tên, tỉnh, vốn, ngành, ưu đãi, CTA chi tiết",
          "Pagination + sort (mới nhất, vốn lớn nhất, ưu đãi cao nhất)",
          "Block: Dự án nổi bật trong tuần",
          "Block: Dự án ưu đãi đặc biệt cho FDI",
        ]}
      />
    </>
  );
}
