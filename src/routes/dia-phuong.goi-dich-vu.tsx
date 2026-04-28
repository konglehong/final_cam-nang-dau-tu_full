import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight, Phone, Crown } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dia-phuong/goi-dich-vu")({
  head: () => ({
    meta: [
      { title: "Gói dịch vụ truyền thông & xúc tiến đầu tư | Cẩm nang Đầu tư" },
      {
        name: "description",
        content:
          "Ba gói dịch vụ truyền thông – xúc tiến đầu tư dành cho địa phương: Cơ bản, Nâng cao và Premium. Liên hệ báo giá theo nhu cầu.",
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
  badgeIcon?: "sparkles" | "crown";
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
      "Trang địa phương chuyên biệt (update hàng tuần) — chứa đầy đủ dữ liệu, thông tin dự án, môi trường đầu tư, chính sách ưu đãi.",
      "Logo + tagline địa phương trên bản đồ đầu tư tổng thể (hiển thị cố định suốt 12 tháng).",
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
    tagline: "Mở rộng đa ngôn ngữ, longform chuyên sâu, podcast và livestream kết nối nhà đầu tư.",
    duration: "12 tháng — Bao gồm toàn bộ quyền lợi Gói 1 + nâng cấp",
    highlight: true,
    badge: "Đề xuất",
    badgeIcon: "sparkles",
    content: [
      "Tài liệu xúc tiến đầu tư 3–4 ngôn ngữ (1 lần/năm, phát hành bản in + PDF online).",
      "Toạ đàm / Hội nghị xúc tiến online: 2 lần/năm.",
      "Livestream giải đáp trực tiếp (1 lần/tháng trên Facebook & YouTube).",
      "08 bài longform chuyên sâu (2 bài/quý).",
      "10 video quảng bá (1 clip/tháng, phát trên web & social).",
      "Podcast \"Câu chuyện đầu tư\" (1 tập/tháng, phỏng vấn doanh nghiệp thành công tại tỉnh).",
      "Video 360° tham quan khu công nghiệp / dự án trọng điểm (2 video/năm).",
    ],
    benefits: [
      "Đa ngôn ngữ giúp tiếp cận trực tiếp nhà đầu tư nước ngoài.",
      "Tăng uy tín khi có nhiều nội dung chuyên sâu và phân tích số liệu.",
      "Kết nối trực tiếp nhà đầu tư qua livestream, giảm thời gian tiếp cận.",
      "Sở hữu kho nội dung đa dạng (bài, video, podcast) có thể dùng trong các hội nghị quốc tế.",
    ],
    kpis: [
      "Lượt tiếp cận tổng (web + social): 2,5–3 triệu/năm.",
      "Lượt xem bài viết longform: ≥ 120.000/năm (15.000/bài).",
      "Lượt xem video quảng bá: ≥ 500.000/năm.",
      "Lượt nghe podcast: ≥ 50.000/năm.",
      "Lượt tham dự Livestream / Online Talk: 500–1.000 người/buổi.",
      "Lượt tải tài liệu xúc tiến đa ngôn ngữ: ≥ 2.000 lượt/năm.",
    ],
  },
  {
    name: "Gói 3 — Premium",
    tagline: "Chiến dịch truyền thông đa nền tảng, documentary, Digital PR Global và xúc tiến quốc tế.",
    duration: "Xây dựng theo nhu cầu — Bao gồm toàn bộ quyền lợi Gói 2 + nâng cấp",
    badge: "Premium",
    badgeIcon: "crown",
    content: [
      "Chiến dịch truyền thông đa nền tảng riêng biệt (web, social, báo chí, YouTube, TikTok) — 3 chiến dịch lớn/năm (mỗi chiến dịch 1–1,5 tháng).",
      "Video documentary hoặc 3D animation giới thiệu quy hoạch & tiềm năng — 1 video dài 20 phút + 3 teaser ngắn (sản xuất trong quý 2).",
      "Toạ đàm hoặc hội nghị xúc tiến trực tiếp (1–2 lần/năm, mời 50–150 nhà đầu tư).",
      "Đưa tin song ngữ Việt–Anh trên báo quốc tế đối tác (3–5 bài/năm).",
      "Chiến dịch Influencer B2B — mời 3–5 doanh nhân/influencer chuyên ngành chia sẻ trên mạng xã hội (quý 3).",
      "Digital PR Global — PR song ngữ trên LinkedIn, Google Ads và báo quốc tế chuyên ngành (triển khai trong 12 tháng).",
    ],
    benefits: [
      "Truyền thông đột phá, khác biệt hoàn toàn so với hình thức xúc tiến truyền thống.",
      "Tiếp cận cả thị trường đầu tư nội địa và quốc tế.",
      "Tăng khả năng \"thuyết phục từ xa\" với nhà đầu tư thông qua video 3D, documentary.",
      "Đảm bảo độ phủ đa nền tảng, tối đa hoá nhận diện và khả năng chuyển đổi thành dự án thực tế.",
    ],
    kpis: [
      "Lượt tiếp cận đa nền tảng (web + social + báo quốc tế): 5–7 triệu/năm.",
      "Lượt xem Documentary / 3D Animation: ≥ 500.000/lượt phát hành.",
      "Lượt tham dự hội nghị xúc tiến trực tiếp: 150–300 nhà đầu tư/sự kiện.",
      "Số bài báo quốc tế được đăng: 3–5 bài/năm, reach trung bình 100.000–300.000/bài.",
    ],
  },
];

function GoiDichVuPage() {
  return (
    <>
      <PageHero
        eyebrow="Hợp tác địa phương"
        title="Gói dịch vụ truyền thông & xúc tiến đầu tư"
        description="Ba gói hợp tác linh hoạt giúp địa phương xây dựng hiện diện thương hiệu đầu tư bài bản, liên tục và đo lường được — từ nền tảng cơ bản đến chiến dịch quốc tế Premium."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`reveal relative flex flex-col rounded-2xl border bg-card p-7 transition ${
                pkg.highlight
                  ? "border-primary/30 shadow-[var(--shadow-elegant)] lg:scale-[1.02]"
                  : "border-border shadow-[var(--shadow-card)]"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                  {pkg.badgeIcon === "crown" ? (
                    <Crown className="h-3 w-3" />
                  ) : (
                    <Sparkles className="h-3 w-3" />
                  )}
                  {pkg.badge}
                </span>
              )}

              <header className="mb-5 border-b border-border pb-5">
                <h2 className="font-display text-xl font-bold text-foreground">{pkg.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.tagline}</p>
                <div className="mt-4">
                  <span className="font-display text-2xl font-bold text-gradient">Liên hệ báo giá</span>
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {pkg.duration}
                </p>
              </header>

              <Section title="Nội dung & tần suất" items={pkg.content} />
              <Section title="Quyền lợi cho địa phương" items={pkg.benefits} />
              <Section title="KPI dự kiến" items={pkg.kpis} mono />

              <div className="mt-auto flex flex-col gap-2 pt-5">
                <Button asChild className="btn-gradient w-full">
                  <Link to="/dia-phuong/dang-ky-tu-van">
                    Yêu cầu báo giá <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
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
    <div className="mb-5">
      <h3 className="mb-2.5 text-[11px] font-bold uppercase tracking-widest text-primary">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className={mono ? "font-mono text-xs" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
