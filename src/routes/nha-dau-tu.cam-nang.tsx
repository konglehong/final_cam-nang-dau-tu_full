import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/nha-dau-tu/cam-nang")({
  head: () => ({
    meta: [
      { title: "Cẩm nang quy trình đầu tư tại Việt Nam — Hướng dẫn từng bước" },
      {
        name: "description",
        content:
          "Hướng dẫn chi tiết quy trình đầu tư tại Việt Nam: từ thành lập doanh nghiệp, xin giấy phép đến triển khai dự án.",
      },
      { property: "og:title", content: "Cẩm nang quy trình đầu tư tại Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Hướng dẫn"
        title="Quy trình đầu tư tại Việt Nam"
        description="Từng bước cụ thể — thủ tục, hồ sơ, thời gian và chi phí dự kiến cho nhà đầu tư trong & ngoài nước."
      />
      <PlaceholderBlock
        title="Cấu trúc Cẩm nang"
        description="Accordion theo bước, có ngôn ngữ chuyển đổi và download PDF."
        blocks={[
          "Toggle: Nhà đầu tư trong nước / FDI",
          "Bước 1: Khảo sát & nghiên cứu thị trường",
          "Bước 2: Lựa chọn địa điểm & lĩnh vực",
          "Bước 3: Hồ sơ & thủ tục cấp phép",
          "Bước 4: Thành lập pháp nhân",
          "Bước 5: Triển khai & vận hành dự án",
          "Download Cẩm nang PDF (5 ngôn ngữ)",
        ]}
      />
    </>
  ),
});
