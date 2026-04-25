import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/dia-phuong/dang-ky-tu-van")({
  head: () => ({
    meta: [
      { title: "Đăng ký tư vấn gói dịch vụ — Cẩm nang Đầu tư × Địa phương" },
      {
        name: "description",
        content: "Form đăng ký tư vấn cho UBND tỉnh/thành — nhận báo giá và lộ trình triển khai chi tiết.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Nhận tư vấn miễn phí"
        description="Đội ngũ Greencom & Báo Tiền Phong sẽ phản hồi trong 24h với báo giá và lộ trình triển khai chi tiết cho địa phương của bạn."
      />
      <PlaceholderBlock
        title="Form đăng ký tư vấn"
        description="Form B2B chuyên dụng cho lãnh đạo & cán bộ xúc tiến đầu tư địa phương."
        blocks={[
          "Thông tin tỉnh/thành & cơ quan",
          "Người liên hệ (chức vụ, email, sđt)",
          "Gói dịch vụ quan tâm (Cơ bản/Nâng cao/Premium)",
          "Mục tiêu & ngân sách dự kiến",
          "Thời điểm mong muốn triển khai",
          "Sidebar trust: logo Tiền Phong + Greencom + 11 tỉnh đối tác",
        ]}
      />
    </>
  ),
});
