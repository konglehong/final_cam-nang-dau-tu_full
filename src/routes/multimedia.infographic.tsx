import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/multimedia/infographic")({
  head: () => ({
    meta: [
      { title: "Infographic Đầu tư — Dữ liệu trực quan | Cẩm nang Đầu tư" },
      {
        name: "description",
        content: "Bộ sưu tập infographic về đầu tư, FDI, kinh tế và 34 tỉnh thành Việt Nam.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng"
        title="Infographic"
        description="Dữ liệu khô khan trở thành hình ảnh dễ chia sẻ, sẵn sàng cho mạng xã hội của bạn."
      />
      <PlaceholderBlock
        title="Trang Infographic"
        description="Gallery masonry với lightbox và download."
        blocks={[
          "Filter theo chủ đề: Tỉnh, FDI, Hạ tầng, Chính sách",
          "Masonry grid hình ảnh",
          "Lightbox xem full + download/share",
          "Section: Infographic được chia sẻ nhiều nhất",
        ]}
      />
    </>
  ),
});
