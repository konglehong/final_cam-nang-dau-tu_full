import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "Gói 1 — Cơ bản",
    price: "1 tỷ VNĐ/năm",
    highlight: false,
    features: [
      "Trang địa phương chuyên biệt (update hàng tuần)",
      "Logo + tagline trên bản đồ đầu tư tổng thể",
      "Infographic đầu tư cập nhật hàng năm",
      "1-2 bài viết/tháng (12-24/năm)",
      "02 phỏng vấn chuyên sâu lãnh đạo tỉnh",
      "02 video clip quảng bá",
      "Mini Series 'Đầu tư Một Phút' — 96-144 clip/năm",
      "Bản tin email cho 1.000+ doanh nghiệp",
      "Công cụ tra cứu dự án online",
    ],
    kpi: "≥ 1 triệu lượt tiếp cận/năm",
  },
  {
    name: "Gói 2 — Nâng cao",
    price: "3 tỷ VNĐ/năm",
    highlight: true,
    features: [
      "Bao gồm toàn bộ Gói 1",
      "Tài liệu xúc tiến 3-4 ngôn ngữ",
      "Tọa đàm xúc tiến online: 2 lần/năm",
      "Livestream giải đáp: 1 lần/tháng",
      "08 bài longform chuyên sâu",
      "10 video quảng bá (1/tháng)",
      "Podcast 'Câu chuyện đầu tư'",
      "Video 360° KCN/dự án trọng điểm",
    ],
    kpi: "2,5-3 triệu lượt tiếp cận/năm",
  },
  {
    name: "Gói 3 — Premium",
    price: "Theo nhu cầu",
    highlight: false,
    features: [
      "Bao gồm toàn bộ Gói 2",
      "3 chiến dịch truyền thông đa nền tảng/năm",
      "Documentary / 3D Animation 20 phút",
      "Hội nghị xúc tiến trực tiếp 1-2 lần/năm",
      "Đưa tin song ngữ trên báo quốc tế",
      "Chiến dịch Influencer B2B",
      "Digital PR Global (LinkedIn, Google Ads)",
    ],
    kpi: "5-7 triệu lượt tiếp cận đa nền tảng/năm",
  },
];

export const Route = createFileRoute("/dia-phuong/goi-dich-vu")({
  head: () => ({
    meta: [
      { title: "3 Gói dịch vụ truyền thông xúc tiến đầu tư cho địa phương" },
      {
        name: "description",
        content:
          "So sánh 3 gói dịch vụ Cẩm nang Đầu tư: Cơ bản (1 tỷ), Nâng cao (3 tỷ) và Premium (theo nhu cầu) cho UBND tỉnh/thành.",
      },
      {
        property: "og:title",
        content: "Gói dịch vụ truyền thông xúc tiến đầu tư địa phương",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="3 Gói dịch vụ"
        title="Đầu tư truyền thông — Hái quả thu hút FDI"
        description="Báo Tiền Phong cung cấp tên miền & quảng bá. Greencom đầu tư 100% chi phí xây dựng nội dung. Tỉnh chỉ cần chọn gói phù hợp."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border bg-card p-8 shadow-[var(--shadow-card)] transition-all ${
                p.highlight
                  ? "border-primary shadow-[var(--shadow-elegant)] lg:-translate-y-4"
                  : "border-border"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold-foreground">
                  Khuyến nghị
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 font-display text-3xl font-bold text-primary">{p.price}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                12 tháng triển khai
              </p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-md bg-secondary p-3 text-center">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">KPI cam kết</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{p.kpi}</p>
              </div>

              <Link
                to="/dia-phuong/dang-ky-tu-van"
                className={`mt-6 block rounded-md py-3 text-center text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Đăng ký tư vấn
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  ),
});
