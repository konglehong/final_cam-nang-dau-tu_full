import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/dia-phuong/")({
  component: () => (
    <>
      <PageHero
        eyebrow="Dành cho Lãnh đạo Địa phương"
        title="Kể câu chuyện địa phương — Thiết kế cơ hội đầu tư"
        description="Giúp tỉnh của bạn xây dựng lại hình ảnh sau sáp nhập, quảng bá tiềm năng và thu hút nhà đầu tư hiệu quả."
      >
        <Link
          to="/dia-phuong/dang-ky-tu-van"
          className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
        >
          Nhận tư vấn miễn phí <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { to: "/dia-phuong/quy-trinh-hop-tac" as const, title: "Quy trình hợp tác", desc: "5 bước minh bạch" },
            { to: "/dia-phuong/case-study" as const, title: "Case study", desc: "11+ tỉnh đã triển khai" },
            { to: "/dia-phuong/dang-ky-tu-van" as const, title: "Đăng ký tư vấn", desc: "Báo giá theo nhu cầu" },
          ].map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
            >
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Xem ngay <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),
});
