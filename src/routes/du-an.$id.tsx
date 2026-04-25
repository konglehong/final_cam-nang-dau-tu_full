import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderBlock } from "@/components/layout/PageHero";

export const Route = createFileRoute("/du-an/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Dự án #${(params as { id: string }).id} — Cẩm nang Đầu tư` },
      {
        name: "description",
        content: `Chi tiết dự án kêu gọi đầu tư #${(params as { id: string }).id}: vị trí, vốn, ưu đãi và liên hệ chủ đầu tư.`,
      },
      { property: "og:title", content: `Dự án đầu tư #${(params as { id: string }).id}` },
    ],
  }),
  component: DuAnDetail,
});

function DuAnDetail() {
  const { id } = Route.useParams();
  return (
    <>
      <PageHero
        eyebrow="Chi tiết dự án"
        title={`Dự án đầu tư #${id}`}
        description="Trang chi tiết dự án với gallery, vị trí trên bản đồ, thông số, chính sách ưu đãi và form liên hệ chủ đầu tư."
      />
      <PlaceholderBlock
        title="Wireframe trang chi tiết dự án"
        description="Cấu trúc trang chuyển đổi cao, tập trung vào hành động: xem dữ liệu → tải tài liệu → liên hệ."
        blocks={[
          "Gallery hero (ảnh + 3D render)",
          "Tóm tắt: vốn, ngành, vị trí, trạng thái",
          "Mô tả chi tiết + thông số kỹ thuật",
          "Bản đồ vị trí + hạ tầng kết nối",
          "Chính sách ưu đãi áp dụng",
          "Tài liệu tải về (Hồ sơ dự án, FS, PDF song ngữ)",
          "Form liên hệ chủ đầu tư / Sở KH&ĐT",
          "Dự án tương tự (cùng ngành/tỉnh)",
        ]}
      />
    </>
  );
}
