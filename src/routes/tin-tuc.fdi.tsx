import { createFileRoute } from "@tanstack/react-router";
import { NewsCategoryPage } from "@/components/news/NewsCategoryPage";

export const Route = createFileRoute("/tin-tuc/fdi")({
  head: () => ({
    meta: [
      { title: "Tin FDI — Đầu tư trực tiếp nước ngoài tại Việt Nam" },
      { name: "description", content: "Cập nhật dòng vốn FDI, dự án mới và xu hướng đầu tư nước ngoài tại Việt Nam." },
      { property: "og:title", content: "Tin FDI Việt Nam" },
    ],
  }),
  component: () => (
    <NewsCategoryPage
      category="fdi"
      eyebrow="Chuyên mục"
      title="FDI & Đầu tư nước ngoài"
      description="Tin tức và phân tích về dòng vốn FDI, dự án mới của Samsung, LG, Intel, NVIDIA, LEGO và nhiều tập đoàn quốc tế."
    />
  ),
});
