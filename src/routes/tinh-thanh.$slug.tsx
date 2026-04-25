import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/tinh-thanh/$slug")({
  head: ({ params }) => {
    const name = (params as { slug: string }).slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      meta: [
        { title: `${name} — Hồ sơ đầu tư | Cẩm nang Đầu tư Việt Nam` },
        {
          name: "description",
          content: `Toàn bộ thông tin đầu tư của tỉnh ${name}: bản đồ, quy hoạch, chính sách ưu đãi, dự án kêu gọi đầu tư và đầu mối liên hệ.`,
        },
        { property: "og:title", content: `Hồ sơ đầu tư tỉnh ${name}` },
        {
          property: "og:description",
          content: `Dữ liệu, bản đồ, chính sách và cơ hội đầu tư tại ${name}.`,
        },
      ],
    };
  },
  component: TinhDetailPage,
});

function TinhDetailPage() {
  const { slug } = Route.useParams();
  const name = slug
    .split("-")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <PageHero
        eyebrow="Hồ sơ đầu tư địa phương"
        title={`Tỉnh ${name}`}
        description="Trang tỉnh là trái tim của Cẩm nang — nơi tập trung mọi dữ liệu, bản đồ, chính sách và cơ hội đầu tư của địa phương."
      />
      <PlaceholderBlock
        title="Wireframe trang tỉnh (8 tab)"
        description="Mỗi trang tỉnh có cấu trúc tab thống nhất, dễ điều hướng và tối ưu cho nhà đầu tư trong/ngoài nước."
        blocks={[
          "Quick stats bar: Diện tích · Dân số · GRDP · FDI · KCN · PCI",
          "Tab 1 — Tổng quan: bản đồ tỉnh + 6 lợi thế cạnh tranh + video",
          "Tab 2 — Quy hoạch: bản đồ layer KCN/giao thông/đô thị + timeline",
          "Tab 3 — Chính sách ưu đãi: bảng thuế/đất + accordion chi tiết",
          "Tab 4 — Dự án: filter ngành/quy mô + grid card dự án",
          "Tab 5 — KT-XH: charts GRDP, cơ cấu ngành, lao động, xuất khẩu",
          "Tab 6 — Câu chuyện thành công: case study FDI + video phỏng vấn",
          "Tab 7 — Tin tức: feed bài viết về tỉnh",
          "Tab 8 — Liên hệ: Sở KH&ĐT + form gửi yêu cầu + bản đồ",
          "CTA cuối trang: Tải tài liệu xúc tiến (5 ngôn ngữ)",
          "Related: Các tỉnh trong cùng vùng",
        ]}
      />
    </>
  );
}
