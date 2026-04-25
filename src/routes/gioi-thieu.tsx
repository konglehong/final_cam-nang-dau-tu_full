import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — Cẩm nang Đầu tư Việt Nam | Tiền Phong × Greencom" },
      {
        name: "description",
        content:
          "Câu chuyện hợp tác giữa Báo Tiền Phong và Greencom — kiến tạo cổng thông tin đầu tư chính thống cho 34 tỉnh thành Việt Nam.",
      },
      { property: "og:title", content: "Về Cẩm nang Đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Về chúng tôi"
        title="Cổng thông tin đầu tư chính thống"
        description="Cẩm nang Đầu tư Việt Nam là sản phẩm hợp tác giữa Báo Tiền Phong và Greencom — kết hợp uy tín báo chí với năng lực truyền thông xúc tiến đầu tư."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Giới thiệu"
        description="Câu chuyện thương hiệu + sứ mệnh + đội ngũ + đối tác."
        blocks={[
          "Câu chuyện hợp tác Tiền Phong × Greencom",
          "Sứ mệnh & tầm nhìn",
          "Đội ngũ & cố vấn chuyên gia",
          "Đối tác chiến lược",
          "Số liệu năng lực (11 tỉnh, 5 năm, 100+ chiến dịch)",
          "Liên hệ báo chí & truyền thông",
        ]}
      />
    </>
  ),
});
