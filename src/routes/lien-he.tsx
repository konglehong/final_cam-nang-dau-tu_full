import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — Cẩm nang Đầu tư Việt Nam" },
      {
        name: "description",
        content: "Liên hệ với Cẩm nang Đầu tư Việt Nam — Báo Tiền Phong và Greencom.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Kết nối với chúng tôi"
        description="Phân loại yêu cầu để chúng tôi phản hồi nhanh nhất — Nhà đầu tư, Địa phương, Báo chí hay khác."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Liên hệ"
        description="Form thông minh + thông tin trụ sở + bản đồ + FAQ."
        blocks={[
          "Form: phân loại (Nhà đầu tư / Địa phương / Báo chí / Khác)",
          "Thông tin trụ sở Báo Tiền Phong",
          "Thông tin trụ sở Greencom",
          "Bản đồ Google Maps embed",
          "FAQ rút gọn (5 câu phổ biến)",
        ]}
      />
    </>
  ),
});
