import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/dia-phuong/quy-trinh-hop-tac")({
  head: () => ({
    meta: [
      { title: "Quy trình hợp tác 5 bước — Cẩm nang Đầu tư × Địa phương" },
      {
        name: "description",
        content: "Quy trình hợp tác minh bạch 5 bước giữa Greencom × Tiền Phong và UBND tỉnh.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Quy trình"
        title="5 bước hợp tác minh bạch"
        description="Từ tư vấn ban đầu đến vận hành liên tục — quy trình rõ ràng, deliverables cụ thể, báo cáo định kỳ."
      />
      <PlaceholderBlock
        title="Wireframe Quy trình"
        description="Timeline ngang/dọc với mốc thời gian, deliverables và phân vai 2 bên."
        blocks={[
          "Bước 1: Tư vấn & khảo sát nhu cầu (1-2 tuần)",
          "Bước 2: Ký kết hợp đồng & chọn gói (1 tuần)",
          "Bước 3: Khảo sát thực địa & thu thập dữ liệu (4 tuần)",
          "Bước 4: Sản xuất nội dung & launch trang tỉnh (8 tuần)",
          "Bước 5: Vận hành liên tục & báo cáo định kỳ (12 tháng)",
          "Block: Phân vai Tiền Phong / Greencom / Địa phương",
        ]}
      />
    </>
  ),
});
