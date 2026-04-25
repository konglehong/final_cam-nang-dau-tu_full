import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/multimedia/e-magazine")({
  head: () => ({
    meta: [
      { title: "E-magazine Đầu tư Việt Nam — Cẩm nang Đầu tư" },
      {
        name: "description",
        content: "Tạp chí điện tử chuyên sâu về đầu tư, phát hành định kỳ với thiết kế tương tác.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng"
        title="E-magazine"
        description="Tạp chí điện tử chuyên sâu, phát hành định kỳ với layout tương tác và đa phương tiện."
      />
      <PlaceholderBlock
        title="Trang E-magazine"
        description="Trình chiếu kiểu sách lật trang, có search và lưu yêu thích."
        blocks={[
          "Hero: số mới nhất (cover lớn)",
          "Grid các số đã phát hành",
          "Reader fullscreen lật trang",
          "Filter theo chủ đề/tỉnh",
        ]}
      />
    </>
  ),
});
