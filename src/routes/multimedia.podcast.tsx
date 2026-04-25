import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/multimedia/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast 'Câu chuyện đầu tư' — Cẩm nang Đầu tư Việt Nam" },
      {
        name: "description",
        content:
          "Podcast 'Câu chuyện đầu tư' — phỏng vấn doanh nghiệp thành công, lãnh đạo địa phương và chuyên gia.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng"
        title="Podcast 'Câu chuyện đầu tư'"
        description="Mỗi tháng một tập — câu chuyện thật của doanh nghiệp đã đầu tư thành công tại các tỉnh thành Việt Nam."
      />
      <PlaceholderBlock
        title="Trang Podcast"
        description="Player embed Spotify/Apple + danh sách tập theo mùa."
        blocks={[
          "Hero: tập mới nhất + player",
          "Subscribe buttons (Spotify, Apple, Google, RSS)",
          "Danh sách tập theo mùa",
          "Trang chi tiết tập: shownotes, transcript, related",
        ]}
      />
    </>
  ),
});
