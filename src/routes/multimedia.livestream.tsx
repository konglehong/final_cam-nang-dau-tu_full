import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/multimedia/livestream")({
  head: () => ({
    meta: [
      { title: "Livestream Đầu tư — Lịch & Replay | Cẩm nang Đầu tư" },
      {
        name: "description",
        content: "Lịch livestream giải đáp đầu tư, tọa đàm online và replay các buổi livestream đã diễn ra.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng"
        title="Livestream"
        description="Tương tác trực tiếp với lãnh đạo địa phương, chuyên gia và doanh nghiệp đầu tư."
      />
      <PlaceholderBlock
        title="Trang Livestream"
        description="Lịch sắp tới có countdown + thư viện replay."
        blocks={[
          "Featured: Livestream sắp tới (countdown timer)",
          "Lịch sắp diễn ra (calendar view)",
          "Đăng ký nhắc lịch + add to calendar",
          "Thư viện replay đã phát",
          "Q&A từ buổi livestream trước",
        ]}
      />
    </>
  ),
});
