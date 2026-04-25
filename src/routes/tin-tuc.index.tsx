import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tin-tuc/")({
  component: TinTucIndex,
});

function TinTucIndex() {
  return (
    <>
      <PageHero
        eyebrow="Trung tâm tin tức"
        title="Tin tức đầu tư Việt Nam"
        description="Bài viết chuyên sâu, longform, e-magazine và infographic cập nhật liên tục về đầu tư và phát triển kinh tế."
      />
      <PlaceholderBlock
        title="Cấu trúc trang Tin tức"
        description="Hub tin tức với hero bài nổi bật, lọc chuyên mục và sidebar gợi ý."
        blocks={[
          "Hero: bài nổi bật trong tuần (cover lớn + summary)",
          "Tab/Filter chuyên mục + thanh tags",
          "Grid 3 cột card bài viết · infinite scroll",
          "Sidebar: Most read · Newsletter signup · Lịch sự kiện",
          "Block: Series 'Đầu tư Một Phút' (video ngắn)",
          "Block: E-magazine số mới nhất",
        ]}
      />
    </>
  );
}
