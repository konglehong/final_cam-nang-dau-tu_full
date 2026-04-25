import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/su-kien")({
  head: () => ({
    meta: [
      { title: "Sự kiện xúc tiến đầu tư Việt Nam — Lịch & Đăng ký" },
      {
        name: "description",
        content:
          "Lịch hội nghị, tọa đàm, livestream và workshop xúc tiến đầu tư của 34 tỉnh thành Việt Nam.",
      },
      { property: "og:title", content: "Sự kiện xúc tiến đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Sự kiện"
        title="Lịch xúc tiến đầu tư"
        description="Hội nghị, tọa đàm, livestream và workshop kết nối nhà đầu tư với địa phương — cập nhật liên tục."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Sự kiện"
        description="3 tab trạng thái + filter đa chiều, có chi tiết và đăng ký."
        blocks={[
          "Tab: Sắp diễn ra / Đang diễn ra / Đã qua",
          "Filter: Online/Offline · Tỉnh · Ngành · Tháng",
          "Card sự kiện: ảnh, ngày, địa điểm, hình thức, CTA",
          "Calendar view (toggle)",
          "Trang chi tiết sự kiện: agenda, diễn giả, đăng ký",
          "Embed livestream khi sự kiện đang diễn ra",
        ]}
      />
    </>
  ),
});
