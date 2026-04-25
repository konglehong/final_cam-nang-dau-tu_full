import { createFileRoute } from "@tanstack/react-router";
import { NewsCategoryPage } from "@/components/news/NewsCategoryPage";

export const Route = createFileRoute("/tin-tuc/dia-phuong")({
  head: () => ({
    meta: [
      { title: "Tin Địa phương — 34 tỉnh thành sau sáp nhập" },
      { name: "description", content: "Tin tức xúc tiến đầu tư, PCI, dự án mới của 34 tỉnh thành Việt Nam sau sáp nhập 01/07/2025." },
      { property: "og:title", content: "Tin Địa phương Việt Nam" },
    ],
  }),
  component: () => (
    <NewsCategoryPage
      category="dia-phuong"
      eyebrow="Chuyên mục"
      title="Địa phương & Vùng kinh tế"
      description="Câu chuyện xúc tiến đầu tư, PCI, dự án trọng điểm của 34 tỉnh thành sau sáp nhập."
    />
  ),
});
