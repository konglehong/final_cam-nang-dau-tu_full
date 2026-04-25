import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/nha-dau-tu/su-kien")({
  head: () => ({
    meta: [
      { title: "Sự kiện xúc tiến đầu tư — Lịch hội nghị, tọa đàm, livestream" },
      {
        name: "description",
        content: "Lịch sự kiện xúc tiến đầu tư cho cộng đồng nhà đầu tư.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Dành cho Nhà đầu tư"
        title="Sự kiện sắp diễn ra"
        description="Hội nghị, tọa đàm, livestream và workshop — cơ hội kết nối trực tiếp với địa phương và chuyên gia."
      />
      <PlaceholderBlock
        title="Trang Sự kiện (Nhà đầu tư)"
        description="Calendar view + list view, có form đăng ký tham dự."
        blocks={[
          "Toggle: Calendar / List view",
          "Filter: Online / Offline / Tỉnh / Ngành",
          "Card sự kiện: ngày, địa điểm, hình thức, CTA đăng ký",
          "Trang chi tiết: agenda, diễn giả, form đăng ký",
        ]}
      />
    </>
  ),
});
