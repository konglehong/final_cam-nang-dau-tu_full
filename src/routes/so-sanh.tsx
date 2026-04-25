import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/so-sanh")({
  head: () => ({
    meta: [
      { title: "So sánh tỉnh thành — Công cụ ra quyết định đầu tư" },
      {
        name: "description",
        content:
          "Công cụ so sánh đa chiều 2-4 tỉnh thành trên 20+ tiêu chí kinh tế, hạ tầng, lao động và ưu đãi.",
      },
      { property: "og:title", content: "Công cụ so sánh tỉnh — Cẩm nang Đầu tư" },
    ],
  }),
  component: SoSanhPage,
});

function SoSanhPage() {
  return (
    <>
      <PageHero
        eyebrow="Công cụ so sánh"
        title="So sánh tỉnh thành để đầu tư"
        description="Chọn 2-4 tỉnh và so sánh trên 20+ tiêu chí: kinh tế, hạ tầng, lao động, ưu đãi và năng lực cạnh tranh."
      />
      <PlaceholderBlock
        title="Cấu trúc công cụ so sánh"
        description="Giao diện phân tích trực quan với bảng, charts và xuất báo cáo PDF."
        blocks={[
          "Selector chọn 2-4 tỉnh (autocomplete)",
          "Bảng 20+ tiêu chí với highlight tỉnh tốt nhất",
          "Radar chart năng lực cạnh tranh tổng thể",
          "Bar charts từng nhóm: Kinh tế, Hạ tầng, Lao động, Ưu đãi",
          "Export PDF / Share kết quả",
          "Gợi ý 'Tỉnh tương tự bạn có thể quan tâm'",
        ]}
      />
    </>
  );
}
