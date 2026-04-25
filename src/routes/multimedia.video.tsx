import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/multimedia/video")({
  head: () => ({
    meta: [
      { title: "Video Đầu tư — Series '60 giây đầu tư' & Documentary" },
      {
        name: "description",
        content:
          "Thư viện video về đầu tư Việt Nam: Series '60 giây đầu tư', documentary, video 360° KCN và phỏng vấn lãnh đạo địa phương.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng"
        title="Video"
        description="Hình ảnh động — cách hiệu quả nhất để kể câu chuyện đầu tư của một địa phương."
      />
      <PlaceholderBlock
        title="Trang Video"
        description="Video player + playlists theo series."
        blocks={[
          "Hero player video featured",
          "Playlist: Series '60 giây đầu tư'",
          "Playlist: Documentary tỉnh thành",
          "Playlist: Video 360° KCN/dự án",
          "Playlist: Phỏng vấn lãnh đạo địa phương",
          "Section: Video TikTok/Reels nổi bật",
        ]}
      />
    </>
  ),
});
