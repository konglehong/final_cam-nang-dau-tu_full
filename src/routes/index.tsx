import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Users,
  Globe2,
  PlayCircle,
  Map,
  FileText,
  Briefcase,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-vietnam.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cẩm nang Đầu tư Việt Nam — 34 tỉnh thành sau sáp nhập" },
      {
        name: "description",
        content:
          "Cổng thông tin đầu tư chính thống cho 34 tỉnh thành Việt Nam: bản đồ tương tác, dữ liệu kinh tế, chính sách ưu đãi và cơ hội đầu tư. Hợp tác giữa Báo Tiền Phong và Greencom.",
      },
      {
        property: "og:title",
        content: "Cẩm nang Đầu tư Việt Nam — Cổng thông tin đầu tư chính thống",
      },
      {
        property: "og:description",
        content:
          "Khám phá 34 tỉnh thành sau sáp nhập qua bản đồ tương tác, dữ liệu kinh tế và chính sách ưu đãi.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "34", label: "Tỉnh thành sau sáp nhập", icon: Map },
  { value: "1.200+", label: "Dự án kêu gọi đầu tư", icon: Briefcase },
  { value: "$36B", label: "FDI lũy kế 2024", icon: TrendingUp },
  { value: "5", label: "Ngôn ngữ hỗ trợ", icon: Globe2 },
];

const REGIONS = [
  { name: "Đồng bằng Bắc Bộ", count: 7, color: "from-primary to-[oklch(0.55_0.18_30)]" },
  { name: "Bắc Trung Bộ", count: 5, color: "from-[oklch(0.55_0.16_60)] to-gold" },
  { name: "Nam Trung Bộ", count: 6, color: "from-gold to-[oklch(0.62_0.15_90)]" },
  { name: "Tây Nguyên", count: 3, color: "from-[oklch(0.55_0.12_160)] to-[oklch(0.45_0.1_170)]" },
  { name: "Đông Nam Bộ", count: 5, color: "from-navy to-[oklch(0.4_0.1_245)]" },
  { name: "Đồng bằng SCL", count: 8, color: "from-[oklch(0.5_0.13_240)] to-[oklch(0.55_0.15_220)]" },
];

const FEATURED_NEWS = [
  {
    tag: "Chính sách",
    title: "10 chính sách đột phá cho FDI sau sáp nhập tỉnh",
    excerpt: "Nghị định mới mở rộng ưu đãi thuế, đất đai và lao động cho dự án FDI tại các tỉnh sau sáp nhập.",
    date: "12/04/2026",
  },
  {
    tag: "Hạ tầng",
    title: "Cao tốc Bắc-Nam giai đoạn 2 thông tuyến cuối 2026",
    excerpt: "Hơn 1.800km cao tốc kết nối toàn bộ 34 tỉnh thành mở ra dòng vốn đầu tư mới.",
    date: "08/04/2026",
  },
  {
    tag: "FDI",
    title: "Hàn Quốc rót thêm $4.2 tỷ vào ngành bán dẫn Việt Nam",
    excerpt: "Samsung, LG và SK Hynix mở rộng nhà máy tại Bắc Ninh, Thái Nguyên và Hải Phòng.",
    date: "05/04/2026",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Toàn cảnh thành phố Việt Nam hiện đại lúc hoàng hôn"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center px-6 py-20 lg:py-28">
          <div className="max-w-3xl text-background">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Báo Tiền Phong × Greencom
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Cẩm nang Đầu tư <br />
              <span className="bg-gradient-to-r from-gold to-[oklch(0.85_0.14_75)] bg-clip-text text-transparent">
                Việt Nam
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/85 sm:text-xl">
              Cổng thông tin đầu tư chính thống cho <strong className="text-background">34 tỉnh thành</strong> Việt Nam sau sáp nhập đơn vị hành chính. Bản đồ, dữ liệu, chính sách ưu đãi và cơ hội đầu tư — tất cả ở một nơi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/ban-do-dau-tu"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-[1.02] hover:bg-primary-glow"
              >
                <Map className="h-4 w-4" />
                Khám phá bản đồ đầu tư
              </Link>
              <Link
                to="/nha-dau-tu/tai-lieu"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-background/30 bg-background/10 px-7 py-3.5 text-sm font-semibold text-background backdrop-blur transition-all hover:bg-background/20"
              >
                <FileText className="h-4 w-4" />
                Tải tài liệu xúc tiến
              </Link>
            </div>
          </div>
        </div>

        {/* Stats overlay */}
        <div className="relative">
          <div className="mx-auto -mt-12 max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-px rounded-xl border border-border bg-border shadow-[var(--shadow-elegant)] lg:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 bg-card p-6 first:rounded-l-xl last:rounded-r-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-gold">
              Bản đồ tương tác
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              34 tỉnh thành — <br />một bản đồ, vô số cơ hội
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Click vào bất kỳ tỉnh nào để xem dữ liệu kinh tế, chính sách ưu đãi và dự án kêu gọi đầu tư. Lọc theo ngành, quy mô vốn hoặc loại ưu đãi để tìm địa phương phù hợp với chiến lược của bạn.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Color-coded theo FDI, GRDP, PCI và năng lực cạnh tranh",
                "Layer toggle: Khu công nghiệp, Cảng biển, Sân bay, Cao tốc",
                "So sánh nhanh 2-4 tỉnh trên 20+ tiêu chí",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/ban-do-dau-tu"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              Mở bản đồ đầu tư <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Decorative map preview */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-card to-accent shadow-[var(--shadow-elegant)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 200 320"
                className="h-full w-auto opacity-90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Vietnam silhouette */}
                <path
                  d="M85 15 Q95 10 105 18 Q115 30 110 50 Q108 70 95 85 Q88 100 85 120 Q80 145 90 165 Q105 185 100 205 Q95 225 85 240 Q70 260 60 280 Q55 295 70 305 Q90 310 105 300 Q120 285 130 265 Q140 240 130 215 Q120 195 130 175 Q145 155 140 130 Q135 110 145 90 Q150 70 140 50 Q130 30 115 20 Q100 12 85 15 Z"
                  fill="oklch(0.46 0.18 25)"
                  fillOpacity="0.85"
                />
                {/* Dot markers */}
                {[
                  [95, 30], [110, 55], [105, 85], [95, 120], [110, 150],
                  [115, 180], [105, 210], [85, 240], [75, 270], [95, 290],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="4" fill="oklch(0.78 0.14 80)" />
                    <circle cx={cx} cy={cy} r="8" fill="oklch(0.78 0.14 80)" fillOpacity="0.3" />
                  </g>
                ))}
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-border bg-background/95 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Đang xem</p>
                  <p className="font-display text-base font-bold text-foreground">TP. Hồ Chí Minh</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">FDI 2024</p>
                  <p className="font-display text-base font-bold text-primary">$5.4B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-gold">
                6 vùng kinh tế
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground lg:text-4xl">
                Khám phá theo vùng
              </h2>
            </div>
            <Link
              to="/tinh-thanh"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow"
            >
              Xem tất cả 34 tỉnh thành <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <Link
                key={r.name}
                to="/tinh-thanh"
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${r.color} p-7 text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]`}
              >
                <div className="relative z-10">
                  <p className="font-display text-2xl font-bold">{r.name}</p>
                  <p className="mt-1 text-sm opacity-90">{r.count} tỉnh / thành phố</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                    Khám phá vùng <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <div
                  className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-background/10 transition-transform group-hover:scale-125"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED NEWS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-gold">
              Tin tức đầu tư
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Cập nhật mới nhất
            </h2>
          </div>
          <Link
            to="/tin-tuc"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow"
          >
            Tất cả tin tức <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURED_NEWS.map((n) => (
            <article
              key={n.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary via-[oklch(0.4_0.15_25)] to-navy">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 30% 70%, oklch(0.78 0.14 80) 0%, transparent 50%)"
                }} />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
                  {n.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {n.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{n.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MULTIMEDIA STRIP */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-gold">
                Series multimedia
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
                "60 giây đầu tư" <br />
                <span className="text-gold">— Mỗi clip một con số</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-background/75">
                Mini series video ngắn — mỗi tập chia sẻ một con số, một lợi thế hoặc một câu chuyện đầu tư của địa phương. Dễ hiểu, dễ chia sẻ, đăng đa nền tảng TikTok · YouTube · Facebook.
              </p>
              <Link
                to="/multimedia/video"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                <PlayCircle className="h-4 w-4" />
                Xem playlist
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "FDI Bình Dương",
                "Cao tốc Trung Lương",
                "KCN Vân Phong",
                "Thuế ưu đãi Bắc Ninh",
                "Logistics Hải Phòng",
                "PCI 2025",
              ].map((title, i) => (
                <div
                  key={title}
                  className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-gradient-to-br from-primary via-[oklch(0.35_0.13_25)] to-navy transition-transform hover:-translate-y-1"
                  style={{ transform: `translateY(${i % 2 ? 12 : 0}px)` }}
                >
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/90 via-transparent to-transparent p-3">
                    <p className="font-display text-xs font-bold leading-tight text-background">
                      {title}
                    </p>
                  </div>
                  <PlayCircle className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-background/80 transition-all group-hover:scale-110 group-hover:text-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DUAL CTA — Investor / Locality */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-secondary p-10 shadow-[var(--shadow-card)]">
            <Users className="h-10 w-10 text-primary" />
            <h3 className="mt-5 font-display text-2xl font-bold text-foreground lg:text-3xl">
              Bạn là <span className="text-primary">Nhà đầu tư</span>?
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Truy cập thư viện tài liệu xúc tiến đa ngôn ngữ, đăng ký quan tâm dự án và kết nối trực tiếp với cơ quan xúc tiến đầu tư của 34 tỉnh thành.
            </p>
            <Link
              to="/nha-dau-tu"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              Khu Nhà đầu tư <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-foreground via-[oklch(0.22_0.04_25)] to-foreground p-10 text-background shadow-[var(--shadow-elegant)]">
            <Building2 className="h-10 w-10 text-gold" />
            <h3 className="mt-5 font-display text-2xl font-bold lg:text-3xl">
              Bạn là <span className="text-gold">Lãnh đạo địa phương</span>?
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/75">
              Khám phá 3 gói dịch vụ truyền thông xúc tiến đầu tư — từ Cơ bản (1 tỷ/năm) đến Premium (theo nhu cầu). Greencom đầu tư 100% chi phí xây dựng nội dung.
            </p>
            <Link
              to="/dia-phuong"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
            >
              Khu Địa phương <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
