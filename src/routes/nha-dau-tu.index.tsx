import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { BookOpen, Download, FileSignature, Mail, Calendar, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    to: "/nha-dau-tu/cam-nang" as const,
    icon: BookOpen,
    title: "Cẩm nang đầu tư VN",
    desc: "Hướng dẫn quy trình đầu tư từng bước cho nhà đầu tư trong & ngoài nước.",
  },
  {
    to: "/nha-dau-tu/tai-lieu" as const,
    icon: Download,
    title: "Thư viện tài liệu",
    desc: "PDF xúc tiến đầu tư đa ngôn ngữ (Việt, Anh, Trung, Hàn, Nhật) theo từng tỉnh.",
  },
  {
    to: "/nha-dau-tu/dang-ky-quan-tam" as const,
    icon: FileSignature,
    title: "Đăng ký quan tâm",
    desc: "Form 4 bước — kết nối trực tiếp với cơ quan xúc tiến đầu tư địa phương.",
  },
  {
    to: "/nha-dau-tu/ban-tin" as const,
    icon: Mail,
    title: "Bản tin đầu tư",
    desc: "Nhận tin tức, dữ liệu và cơ hội mới nhất hàng tuần qua email.",
  },
  {
    to: "/nha-dau-tu/su-kien" as const,
    icon: Calendar,
    title: "Sự kiện xúc tiến",
    desc: "Lịch hội nghị, tọa đàm và livestream cho cộng đồng nhà đầu tư.",
  },
];

export const Route = createFileRoute("/nha-dau-tu/")({
  component: () => (
    <>
      <PageHero
        eyebrow="Dành cho Nhà đầu tư"
        title="Mọi thứ bạn cần ở một nơi"
        description="Tiết kiệm thời gian và nguồn lực — chúng tôi tập hợp dữ liệu, chính sách, dự án và đầu mối liên hệ của 34 tỉnh thành để bạn ra quyết định nhanh chóng."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Khám phá
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),
});
