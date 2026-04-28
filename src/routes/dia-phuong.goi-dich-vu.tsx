import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dia-phuong/goi-dich-vu")({
  head: () => ({
    meta: [
      { title: "Gói dịch vụ truyền thông & xúc tiến đầu tư | Cẩm nang Đầu tư" },
      {
        name: "description",
        content:
          "Các gói dịch vụ truyền thông – xúc tiến đầu tư dành cho địa phương: nội dung chuyên biệt, infographic, video, podcast, hệ thống dữ liệu và báo cáo hiệu quả.",
      },
      { property: "og:title", content: "Gói dịch vụ — Cẩm nang Đầu tư Việt Nam" },
    ],
  }),
  component: GoiDichVuPage,
});

type Pkg = {
  name: string;
  tagline: string;
  duration: string;
  highlight?: boolean;
  badge?: string;
  content: string[];
  benefits: string[];
  kpis: string[];
};

const PACKAGES: Pkg[] = [
  {
    name: "Gói 1 — Cơ bản",
    tagline: "Khởi động hiện diện thương hiệu địa phương trên báo điện tử & social.",
    duration: "12 tháng liên tục",
    content: [
      "Trang địa phương chuyên biệt (update hàng tuần) — đầy đủ dữ liệu dự án, môi trường đầu tư, chính sách ưu đãi.",
      "Logo + tagline địa phương trên bản đồ đầu tư tổng thể (cố định suốt 12 tháng).",
      "Infographic đầu tư cập nhật hàng năm (1 lần/năm, kèm file digital chia sẻ trên social).",
      "Bài viết giới thiệu hoạt động/chương trình đầu tư: 1–2 bài/tháng (12–24/năm).",
      "02 bài phỏng vấn chuyên sâu với lãnh đạo tỉnh (chia 2 đợt: Quý 1 & Quý 3).",
      "02 video clip quảng bá (phát web & social, quý 2 và quý 4).",
      "Mini Series \"Đầu tư Một Phút\" — 8–12 clip ngắn/tháng (96–144 clip/năm), mỗi clip chia sẻ 1 con số hoặc lợi thế của tỉnh.",
      "Bản tin địa phương hàng tháng (12 bản/năm) gửi email cho tối thiểu 1.000 doanh nghiệp tiềm năng.",
      "Công cụ tra cứu dự án online (phát hành quý 2, duy trì cập nhật hàng quý).",
    ],
    benefits: [
      "Nhận diện thương hiệu địa phương trên báo điện tử & social >1 triệu lượt tiếp cận/năm.",
      "Duy trì sự hiện diện liên tục với nhà đầu tư.",
      "Hệ thống thông tin tập trung, dễ tra cứu, giúp giảm rào cản thông tin.",
      "Bộ nội dung ảnh + video + infographic có thể tái sử dụng trong hoạt động PR nội bộ của tỉnh.",
    ],
    kpis: [
      "Lượt tiếp cận tổng (web + social): ≥ 1 triệu/năm.",
      "Lượt xem bài viết: 50.000–70.000/năm (2.000–3.000/bài).",
      "Lượt xem video quảng bá: ≥ 150.000/năm (75.000/video).",
      "Tương tác (like, share, comment): ≥ 30.000/năm.",
      "Marketing: tối thiểu 1.000 nhà đầu tư nhận bản tin/tháng, tỷ lệ mở email > 20%.",
      "Nhà đầu tư tiềm năng liên hệ qua form web: 30–50/năm.",
    ],
  },
  {
    name: "Gói 2 — Nâng cao",
    tagline: "Mở rộng phạm vi quốc tế, sự kiện xúc tiến, e-magazine song ngữ và báo cáo chuyên sâu.",
    duration: "12 tháng liên tục",
    highlight: true,
    badge: "Đề xuất",
    content: [
      "Bao gồm toàn bộ quyền lợi của Gói 1 — Cơ bản.",
      "Tài liệu xúc tiến đầu tư 3–4 ngôn ngữ (1 lần/năm, phát hành bản in + PDF online).",
      "Toạ đàm / Hội nghị xúc tiến online: 2 lần/năm.",
      "E-magazine chuyên đề song ngữ (Việt–Anh): 2 số/năm.",
      "Phim tài liệu / phóng sự đầu tư chuyên sâu: 1 phim 5–7 phút/năm.",
      "Hỗ trợ truyền thông sự kiện offline lớn của tỉnh: 1 sự kiện/năm.",
      "Báo cáo phân tích hiệu quả truyền thông & lead nhà đầu tư hàng quý.",
    ],
    benefits: [
      "Mở rộng tiếp cận nhà đầu tư nước ngoài qua nội dung đa ngôn ngữ.",
      "Tăng uy tín thương hiệu địa phương qua toạ đàm và phim tài liệu.",
      "Đo lường hiệu quả định kỳ với báo cáo phân tích chuyên sâu.",
      "Dữ liệu lead chất lượng cao phục vụ công tác xúc tiến trực tiếp.",
    ],
    kpis: [
      "Lượt tiếp cận tổng (web + social): ≥ 3 triệu/năm.",
      "Lượt xem e-magazine: ≥ 30.000/số.",
      "Lượt xem phim tài liệu: ≥ 100.000/năm.",
      "Số nhà đầu tư quốc tế tiếp cận: ≥ 500/năm.",
      "Lead chất lượng cao (đã liên hệ trực tiếp): 80–120/năm.",
    ],
  },
];

function GoiDichVuPage() {
  return (
    <>
      <PageHero
        eyebrow="Hợp tác địa phương"
        title="Gói dịch vụ truyền thông & xúc tiến đầu tư"
        description="Hai gói hợp tác linh hoạt giúp địa phương xây dựng hiện diện thương hiệu đầu tư bài bản, liên tục và đo lường được trên cả kênh trong nước và quốc tế."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`reveal relative flex flex-col rounded-2xl border bg-card p-8 transition ${
                pkg.highlight
                  ? "border-primary/30 shadow-[var(--shadow-elegant)]"
                  : "border-border shadow-[var(--shadow-card)]"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Sparkles className="h-3 w-3" /> {pkg.badge}
                </span>
              )}

              <header className="mb-6 border-b border-border pb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.tagline}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-gradient">Liên hệ báo giá</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Thời gian triển khai: {pkg.duration}
                </p>
              </header>

              <Section title="Nội dung & tần suất" items={pkg.content} />
              <Section title="Quyền lợi cho địa phương" items={pkg.benefits} />
              <Section title="KPI dự kiến" items={pkg.kpis} mono />

              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                <Button asChild className="btn-gradient flex-1">
                  <Link to="/dia-phuong/dang-ky-tu-van">
                    Yêu cầu báo giá <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/lien-he">
                    <Phone className="mr-1.5 h-4 w-4" /> Tư vấn trực tiếp
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-foreground">
            Cần một gói riêng cho địa phương của bạn?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Chúng tôi thiết kế gói tuỳ biến theo mục tiêu xúc tiến, ngân sách và đặc thù ngành mũi nhọn của
            từng tỉnh — từ KCN, năng lượng, du lịch đến nông nghiệp công nghệ cao.
          </p>
          <div className="mt-5">
            <Button asChild className="btn-gradient">
              <Link to="/dia-phuong/dang-ky-tu-van">Đặt lịch tư vấn miễn phí</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, items, mono = false }: { title: string; items: string[]; mono?: boolean }) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className={mono ? "font-mono text-xs" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
