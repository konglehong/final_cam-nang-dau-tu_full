import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/dieu-khoan")({
  head: () => ({
    meta: [
      { title: "Điều khoản sử dụng — Cẩm nang Đầu tư Việt Nam" },
      { name: "description", content: "Điều khoản sử dụng của chuyên trang Cẩm nang Đầu tư Việt Nam." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pháp lý" title="Điều khoản sử dụng" />
      <section className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-foreground/80">
        <p>Nội dung điều khoản sử dụng sẽ được cập nhật bởi đội ngũ pháp chế của Báo Tiền Phong và Greencom.</p>
      </section>
    </>
  ),
});
