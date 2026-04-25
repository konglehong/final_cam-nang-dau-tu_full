import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/nha-dau-tu/dang-ky-quan-tam")({
  head: () => ({
    meta: [
      { title: "Đăng ký quan tâm đầu tư — Kết nối với 34 tỉnh thành" },
      {
        name: "description",
        content:
          "Form đăng ký quan tâm đầu tư — chúng tôi kết nối bạn với cơ quan xúc tiến đầu tư của tỉnh phù hợp.",
      },
      { property: "og:title", content: "Đăng ký quan tâm đầu tư tại Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Kết nối đầu tư"
        title="Đăng ký quan tâm đầu tư"
        description="Điền form 4 bước — đội ngũ Cẩm nang sẽ kết nối bạn trực tiếp với Trung tâm xúc tiến đầu tư của tỉnh phù hợp trong 48h."
      />
      <PlaceholderBlock
        title="Cấu trúc form đăng ký"
        description="Multi-step form, tích hợp CRM webhook, có progress bar và xác thực thông minh."
        blocks={[
          "Step 1: Thông tin doanh nghiệp & quốc gia",
          "Step 2: Lĩnh vực & quy mô đầu tư",
          "Step 3: Tỉnh thành quan tâm (multi-select có map)",
          "Step 4: Ngân sách & thời gian dự kiến",
          "Confirmation + tải về Cẩm nang đầu tư PDF",
          "Sidebar: 'Vì sao chọn chúng tôi' (3 trust signals)",
        ]}
      />
    </>
  ),
});
