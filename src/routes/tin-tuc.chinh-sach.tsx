import { createFileRoute } from "@tanstack/react-router";
import { NewsCategoryPage } from "@/components/news/NewsCategoryPage";

export const Route = createFileRoute("/tin-tuc/chinh-sach")({
  head: () => ({
    meta: [
      { title: "Tin Chính sách đầu tư — Cập nhật mới nhất" },
      { name: "description", content: "Chính sách ưu đãi đầu tư, nghị định, luật mới và quy hoạch ngành tại Việt Nam." },
      { property: "og:title", content: "Chính sách đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <NewsCategoryPage
      category="chinh-sach"
      eyebrow="Chuyên mục"
      title="Chính sách & Pháp luật"
      description="Theo dõi các nghị định, ưu đãi thuế, khu kinh tế đặc thù và cải cách hành chính ảnh hưởng tới quyết định đầu tư."
    />
  ),
});
