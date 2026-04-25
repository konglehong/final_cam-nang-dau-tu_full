import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/nha-dau-tu/tai-lieu")({
  head: () => ({
    meta: [
      { title: "Thư viện tài liệu xúc tiến đầu tư — Đa ngôn ngữ" },
      {
        name: "description",
        content:
          "Tài liệu xúc tiến đầu tư của 34 tỉnh thành Việt Nam, đa ngôn ngữ (Việt, Anh, Trung, Hàn, Nhật).",
      },
      { property: "og:title", content: "Thư viện tài liệu xúc tiến đầu tư đa ngôn ngữ" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tài liệu"
        title="Thư viện tài liệu xúc tiến"
        description="Tải về tài liệu xúc tiến đầu tư của 34 tỉnh thành — sẵn có 5 ngôn ngữ cho thị trường quốc tế."
      />
      <PlaceholderBlock
        title="Cấu trúc thư viện"
        description="Filter đa chiều, gated bằng email để thu lead chất lượng."
        blocks={[
          "Filter: Tỉnh / Ngành / Loại tài liệu / Ngôn ngữ",
          "Card tài liệu: cover, tỉnh, ngôn ngữ, kích thước, lượt tải",
          "Modal đăng ký email trước khi tải (gated)",
          "Section: Tài liệu được tải nhiều nhất",
          "Section: Tài liệu mới phát hành",
        ]}
      />
    </>
  ),
});
