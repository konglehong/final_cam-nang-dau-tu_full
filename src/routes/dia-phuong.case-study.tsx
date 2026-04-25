import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/dia-phuong/case-study")({
  head: () => ({
    meta: [
      { title: "Case study — 11+ tỉnh đã triển khai cùng Greencom" },
      {
        name: "description",
        content:
          "Greencom đã triển khai chương trình truyền thông xúc tiến đầu tư cho TP.HCM, Long An, Đồng Nai, Tây Ninh, Bình Thuận, Đắk Lắk, Lâm Đồng, Đồng Tháp, Trà Vinh, Hậu Giang, Sơn La và nhiều tỉnh khác.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Năng lực"
        title="11+ tỉnh đã đồng hành cùng Greencom"
        description="Từ TP.HCM đến Sơn La — chúng tôi am hiểu sâu sắc thị trường địa phương và các chính sách trọng điểm quốc gia."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Case study"
        description="Lưới các dự án đã triển khai với kết quả cụ thể."
        blocks={[
          "Filter: Vùng / Năm / Quy mô gói",
          "Card case study: tỉnh, năm, hình ảnh, KPI đạt được",
          "Trang chi tiết case: bối cảnh → giải pháp → kết quả",
          "Section: Lời chứng thực từ lãnh đạo địa phương",
        ]}
      />
    </>
  ),
});
