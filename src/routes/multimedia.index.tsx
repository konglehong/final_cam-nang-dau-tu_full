import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/multimedia/")({
  component: () => (
    <>
      <PageHero
        eyebrow="Trung tâm đa phương tiện"
        title="Cẩm nang qua hình ảnh, video & âm thanh"
        description="Khám phá đầu tư Việt Nam qua nhiều định dạng hấp dẫn — từ E-magazine, infographic đến video, podcast và livestream."
      />
      <PlaceholderBlock
        title="Hub Multimedia"
        description="5 thẻ lớn dẫn vào từng định dạng nội dung."
        blocks={[
          "E-magazine: trình chiếu lật trang",
          "Infographic: gallery masonry + lightbox",
          "Video: hero player + playlists",
          "Podcast: player embed + danh sách tập",
          "Livestream: lịch + thư viện replay",
        ]}
      />
    </>
  ),
});
