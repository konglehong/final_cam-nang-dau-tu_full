import { createFileRoute } from "@tanstack/react-router";
import { NewsCategoryPage } from "@/components/news/NewsCategoryPage";

export const Route = createFileRoute("/tin-tuc/ha-tang")({
  head: () => ({
    meta: [
      { title: "Tin Hạ tầng — Cao tốc, sân bay, cảng biển, metro" },
      { name: "description", content: "Tiến độ cao tốc Bắc-Nam, sân bay Long Thành, metro TP.HCM và Hà Nội, cảng biển nước sâu." },
      { property: "og:title", content: "Hạ tầng Việt Nam 2025" },
    ],
  }),
  component: () => (
    <NewsCategoryPage
      category="ha-tang"
      eyebrow="Chuyên mục"
      title="Hạ tầng & Giao thông"
      description="Cao tốc Bắc - Nam, sân bay Long Thành, metro, cảng nước sâu — những tuyến mạch máu định hình bản đồ đầu tư mới."
    />
  ),
});
