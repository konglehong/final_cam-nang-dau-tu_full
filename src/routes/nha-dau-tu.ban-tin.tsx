import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/nha-dau-tu/ban-tin")({
  head: () => ({
    meta: [
      { title: "Bản tin Đầu tư Việt Nam — Đăng ký nhận miễn phí" },
      {
        name: "description",
        content: "Bản tin đầu tư hàng tuần — tin tức, dữ liệu và cơ hội mới nhất gửi qua email.",
      },
      { property: "og:title", content: "Đăng ký bản tin Đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Bản tin Đầu tư Việt Nam"
        description="Mỗi tuần một bản tin — tin tức quan trọng nhất, dữ liệu mới và cơ hội đầu tư được chọn lọc kỹ."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Newsletter"
        description="Form đăng ký + chọn chuyên mục + ngôn ngữ + xem trước số cũ."
        blocks={[
          "Form đăng ký (email + tên + công ty)",
          "Chọn chuyên mục: Chính sách / FDI / Địa phương / Hạ tầng",
          "Chọn ngôn ngữ (5 ngôn ngữ)",
          "Preview các số trước (carousel)",
          "Testimonials người đăng ký",
          "Thống kê: 1.000+ doanh nghiệp đang nhận",
        ]}
      />
    </>
  ),
});
