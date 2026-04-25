import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    n: 1,
    title: "Tư vấn & khảo sát nhu cầu",
    duration: "1-2 tuần",
    deliverables: [
      "Báo cáo phân tích định vị địa phương",
      "Đề xuất chiến lược nội dung sơ bộ",
      "Báo giá theo nhu cầu phù hợp",
    ],
    parties: { partner: "Khảo sát & báo giá", local: "Cung cấp dữ liệu, định hướng" },
  },
  {
    n: 2,
    title: "Ký kết hợp đồng & chốt phạm vi",
    duration: "1 tuần",
    deliverables: [
      "Hợp đồng dịch vụ truyền thông",
      "Phụ lục KPI cam kết",
      "Lịch triển khai 12 tháng",
    ],
    parties: { partner: "Ký hợp đồng & chuẩn bị nguồn lực", local: "Phê duyệt phạm vi & cử đầu mối" },
  },
  {
    n: 3,
    title: "Khảo sát thực địa & thu thập dữ liệu",
    duration: "4 tuần",
    deliverables: [
      "Bộ ảnh/video thô của tỉnh",
      "Bản đồ KCN, dự án trọng điểm cập nhật",
      "Phỏng vấn lãnh đạo tỉnh",
    ],
    parties: { partner: "Đội sản xuất 3-5 người", local: "Cung cấp xe, thông dịch và quyền tiếp cận" },
  },
  {
    n: 4,
    title: "Sản xuất nội dung & launch trang tỉnh",
    duration: "8 tuần",
    deliverables: [
      "Trang địa phương chuyên biệt go-live",
      "Bộ tài liệu xúc tiến đa ngôn ngữ",
      "5-8 bài viết và 2-5 video lên kênh chính thức",
    ],
    parties: { partner: "Sản xuất, thiết kế, dịch thuật & xuất bản", local: "Phê duyệt nội dung trong 5 ngày" },
  },
  {
    n: 5,
    title: "Vận hành liên tục & báo cáo định kỳ",
    duration: "12 tháng",
    deliverables: [
      "Báo cáo KPI hàng tháng",
      "1-2 bài viết/tháng + video/podcast theo phạm vi",
      "Dashboard reach / engagement / lead realtime",
    ],
    parties: { partner: "Quản lý vận hành & tối ưu", local: "Cung cấp tin mới, phản hồi nhanh" },
  },
];

export const Route = createFileRoute("/dia-phuong/quy-trinh-hop-tac")({
  head: () => ({
    meta: [
      { title: "Quy trình hợp tác 5 bước — Cẩm nang Đầu tư × Địa phương" },
      { name: "description", content: "Quy trình minh bạch 5 bước giữa đối tác truyền thông và UBND tỉnh." },
      { property: "og:title", content: "Quy trình hợp tác xúc tiến đầu tư địa phương" },
    ],
  }),
  component: QuyTrinhPage,
});

function QuyTrinhPage() {
  return (
    <>
      <PageHero
        eyebrow="Quy trình"
        title="5 bước hợp tác minh bạch"
        description="Từ tư vấn ban đầu đến vận hành 12 tháng — quy trình rõ ràng, deliverables cụ thể, phân vai 3 bên minh bạch."
      />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <ol className="relative space-y-8 border-l-2 border-border pl-8">
          {STEPS.map((s) => (
            <li key={s.n} className="relative">
              <span className="absolute -left-[42px] flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-xl font-bold text-primary">
                {s.n}
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold">
                    ⏱ {s.duration}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Deliverables
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
                  <Party name="Đơn vị triển khai" role={s.parties.partner} accent="primary" />
                  <Party name="UBND Tỉnh" role={s.parties.local} accent="muted" />
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link
            to="/dia-phuong/dang-ky-tu-van"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90"
          >
            Bắt đầu Bước 1 — Tư vấn miễn phí <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Party({ name, role, accent }: { name: string; role: string; accent: "primary" | "gold" | "muted" }) {
  const cls =
    accent === "primary"
      ? "border-primary/30 bg-primary/5"
      : accent === "gold"
        ? "border-gold/30 bg-gold/5"
        : "border-border bg-muted/40";
  return (
    <div className={`rounded-lg border p-3 ${cls}`}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{name}</p>
      <p className="mt-1 text-xs font-medium text-foreground">{role}</p>
    </div>
  );
}
