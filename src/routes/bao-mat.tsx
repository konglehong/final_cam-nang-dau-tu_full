import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/bao-mat")({
  head: () => ({
    meta: [
      { title: "Chính sách bảo mật — Cẩm nang Đầu tư Việt Nam" },
      { name: "description", content: "Chính sách bảo mật thông tin cá nhân của Cẩm nang Đầu tư Việt Nam." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pháp lý" title="Chính sách bảo mật" />
      <section className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-foreground/80">
        <p>Nội dung chính sách bảo mật sẽ được cập nhật bởi đội ngũ pháp chế của Báo Tiền Phong và Greencom.</p>
      </section>
    </>
  ),
});
