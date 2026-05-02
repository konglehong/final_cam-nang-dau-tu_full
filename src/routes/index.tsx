import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Globe2,
  Map,
  PlayCircle,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/hero-vietnam.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cẩm nang Đầu tư Việt Nam — Bản đồ cơ hội đầu tư" },
      {
        name: "description",
        content:
          "Cổng dữ liệu đầu tư cho Việt Nam: bản đồ cơ hội đầu tư, hồ sơ 34 tỉnh thành, dự án kêu gọi vốn, chính sách ưu đãi và tài liệu xúc tiến đa ngôn ngữ.",
      },
      {
        property: "og:title",
        content: "Cẩm nang Đầu tư Việt Nam — Cổng dữ liệu đầu tư",
      },
      {
        property: "og:description",
        content:
          "Khám phá cơ hội đầu tư tại Việt Nam qua bản đồ dữ liệu, hồ sơ tỉnh thành và tài liệu xúc tiến đa ngôn ngữ.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "34", label: "tỉnh thành", icon: Map },
  { value: "1.200+", label: "dự án kêu gọi đầu tư", icon: Briefcase },
  { value: "$36B", label: "FDI lũy kế 2024", icon: TrendingUp },
  { value: "5", label: "ngôn ngữ hỗ trợ", icon: Globe2 },
];

const OPPORTUNITIES = [
  {
    tag: "Logistics",
    title: "Trung tâm logistics cảng biển",
    province: "Bà Rịa - Vũng Tàu",
    scale: "Kết nối cảng · cao tốc · KCN",
    status: "Đang kêu gọi đầu tư",
  },
  {
    tag: "Công nghiệp",
    title: "Cụm công nghiệp phụ trợ điện tử",
    province: "Bắc Ninh",
    scale: "Chuỗi cung ứng FDI",
    status: "Hồ sơ đang mở",
  },
  {
    tag: "Năng lượng",
    title: "Dự án năng lượng tái tạo ven biển",
    province: "Nam Trung Bộ",
    scale: "Điện gió · hạ tầng truyền tải",
    status: "Ưu tiên xúc tiến",
  },
];

const JOURNEY = [
  "Mở bản đồ đầu tư và bật các lớp dữ liệu quan trọng",
  "So sánh tỉnh thành theo hạ tầng, ngành, ưu đãi và dòng vốn",
  "Xem hồ sơ dự án, vị trí, ngành nghề và trạng thái kêu gọi vốn",
  "Tải tài liệu xúc tiến hoặc đăng ký quan tâm dự án",
  "Kết nối đầu mối phù hợp để tiếp tục thẩm định cơ hội",
];

const FEATURED_NEWS = [
  {
    tag: "Chính sách",
    title: "Ưu đãi đầu tư mới cho các ngành công nghiệp chiến lược",
    excerpt: "Cập nhật chính sách thuế, đất đai và thủ tục đầu tư cho các lĩnh vực ưu tiên.",
    date: "12/04/2026",
  },
  {
    tag: "Hạ tầng",
    title: "Mạng lưới cao tốc mở thêm không gian đầu tư mới",
    excerpt: "Các tuyến kết nối cảng biển, sân bay và khu công nghiệp tạo lợi thế logistics liên vùng.",
    date: "08/04/2026",
  },
  {
    tag: "FDI",
    title: "Dòng vốn công nghệ cao tiếp tục dịch chuyển vào Việt Nam",
    excerpt: "Nhà đầu tư quan tâm mạnh hơn đến bán dẫn, điện tử, năng lượng và logistics.",
    date: "05/04/2026",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[rgba(14,15,12,0.12)] bg-[#F7F8F2] px-6 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute right-[-12%] top-[-18%] h-[460px] w-[460px] rounded-full bg-[#9FE870]/55 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[-22%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#E2F6D5] blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <span className="inline-flex rounded-full bg-[#E2F6D5] px-4 py-2 text-sm font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)]">
              Cẩm nang Đầu tư Việt Nam
            </span>
            <h1 className="mt-8 max-w-5xl font-display text-[58px] font-black leading-[0.86] tracking-[-0.055em] text-[#0E0F0C] sm:text-[84px] lg:text-[118px]">
              Đầu tư vào Việt Nam.
              <br />
              Rõ hơn. Nhanh hơn.
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-medium leading-[1.45] text-[#454745] sm:text-2xl">
              Khám phá bản đồ cơ hội đầu tư, hồ sơ 34 tỉnh thành, chính sách ưu đãi và tài liệu xúc tiến đa ngôn ngữ trong một cổng dữ liệu duy nhất.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/ban-do-dau-tu"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#9FE870] px-7 text-base font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:scale-105 active:scale-95"
              >
                <Map className="h-5 w-5" />
                Khám phá bản đồ
              </Link>
              <Link
                to="/du-an"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[rgba(22,51,0,0.08)] px-7 text-base font-bold text-[#0E0F0C] transition-transform hover:scale-105 active:scale-95"
              >
                Xem cơ hội đầu tư
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] bg-white p-5 ring-1 ring-[rgba(14,15,12,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E2F6D5] text-[#163300]">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-display text-4xl font-black leading-none tracking-[-0.04em] text-[#0E0F0C]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#454745]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F2] px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#163300]">
              Bản đồ cơ hội đầu tư
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[#0E0F0C] lg:text-7xl">
              Một bản đồ. Nhiều lớp dữ liệu.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#454745]">
              Bật/tắt lớp tỉnh thành, khu công nghiệp, cảng biển, sân bay, cao tốc, năng lượng, du lịch và dự án trọng điểm để nhìn nhanh lợi thế từng vùng.
            </p>
            <Link
              to="/ban-do-dau-tu"
              className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#9FE870] px-6 py-3 text-base font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:scale-105 active:scale-95"
            >
              Mở bản đồ đầu tư
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="rounded-[36px] bg-white p-4 ring-1 ring-[rgba(14,15,12,0.12)]">
            <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-[#E2F6D5] p-5 sm:aspect-[16/11]">
              <div className="flex flex-wrap gap-2">
                {["34 tỉnh", "KCN", "Cảng biển", "Sân bay", "Cao tốc", "Dự án"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex h-[72%] items-center justify-center rounded-[30px] bg-[#F7F8F2] ring-1 ring-[rgba(14,15,12,0.12)]">
                <div className="text-center">
                  <Map className="mx-auto h-20 w-20 text-[#163300]" />
                  <p className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#0E0F0C]">
                    Preview bản đồ đầu tư
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#454745]">
                    Dùng bản đồ thật tại trang Bản đồ đầu tư
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(14,15,12,0.12)] bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#163300]">
                Cơ hội nổi bật
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[#0E0F0C] lg:text-7xl">
                Dự án đang mở.
              </h2>
            </div>
            <Link
              to="/du-an"
              className="inline-flex items-center gap-2 rounded-full bg-[rgba(22,51,0,0.08)] px-5 py-3 text-sm font-bold text-[#0E0F0C] transition-transform hover:scale-105 active:scale-95"
            >
              Xem tất cả dự án <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {OPPORTUNITIES.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#F7F8F2] p-6 ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex rounded-full bg-[#E2F6D5] px-3 py-1 text-xs font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)]">
                  {item.status}
                </span>
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.12em] text-[#454745]">
                  {item.tag}
                </p>
                <h3 className="mt-3 font-display text-4xl font-black leading-[0.92] tracking-[-0.05em] text-[#0E0F0C]">
                  {item.title}
                </h3>
                <div className="mt-8 grid gap-2 text-sm font-bold text-[#0E0F0C]">
                  <div className="rounded-2xl bg-white p-4 ring-1 ring-[rgba(14,15,12,0.10)]">
                    {item.province}
                  </div>
                  <div className="rounded-2xl bg-white p-4 ring-1 ring-[rgba(14,15,12,0.10)]">
                    {item.scale}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F2] px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#163300]">
              Hành trình nhà đầu tư
            </p>
            <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[#0E0F0C] lg:text-7xl">
              Từ dữ liệu đến quyết định.
            </h2>
          </div>
          <div className="rounded-[36px] bg-white p-4 ring-1 ring-[rgba(14,15,12,0.12)]">
            {JOURNEY.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 border-b border-[rgba(14,15,12,0.12)] px-2 py-5 last:border-b-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E2F6D5] text-lg font-black text-[#163300]">
                  {index + 1}
                </span>
                <p className="pt-2 text-lg font-bold leading-snug text-[#0E0F0C]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#163300]">
                Tin tức & chính sách
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[#0E0F0C] lg:text-7xl">
                Cập nhật cần biết.
              </h2>
            </div>
            <Link
              to="/tin-tuc"
              className="inline-flex items-center gap-2 rounded-full bg-[rgba(22,51,0,0.08)] px-5 py-3 text-sm font-bold text-[#0E0F0C] transition-transform hover:scale-105 active:scale-95"
            >
              Tất cả tin tức <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {FEATURED_NEWS.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#F7F8F2] p-6 ring-1 ring-[rgba(14,15,12,0.12)]"
              >
                <span className="rounded-full bg-[#E2F6D5] px-3 py-1 text-xs font-bold text-[#163300]">
                  {item.tag}
                </span>
                <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.035em] text-[#0E0F0C]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-[#454745]">
                  {item.excerpt}
                </p>
                <p className="mt-6 text-sm font-bold text-[#868685]">{item.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(14,15,12,0.12)] bg-[#F7F8F2] px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#163300]">
              Multimedia
            </p>
            <h2 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[#0E0F0C] lg:text-7xl">
              Xem nhanh. Hiểu nhanh.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#454745]">
              Video, infographic, podcast và e-magazine giúp nhà đầu tư nắm nhanh xu hướng, lợi thế địa phương và thông tin chính sách.
            </p>
            <Link
              to="/multimedia/video"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9FE870] px-6 py-3 text-base font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:scale-105 active:scale-95"
            >
              <PlayCircle className="h-5 w-5" />
              Xem video
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["FDI", "KCN", "Logistics", "Chính sách", "Cao tốc", "PCI"].map((item) => (
              <div
                key={item}
                className="flex aspect-[9/12] items-end rounded-[28px] bg-white p-4 ring-1 ring-[rgba(14,15,12,0.12)]"
              >
                <p className="text-2xl font-black leading-none tracking-[-0.04em] text-[#0E0F0C]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0E0F0C] px-6 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#9FE870] p-8 text-[#163300] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-5xl font-black leading-[0.88] tracking-[-0.055em] lg:text-7xl">
                Bắt đầu từ dữ liệu đúng.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed">
                Khám phá bản đồ cơ hội đầu tư, so sánh tỉnh thành và đăng ký quan tâm các dự án đang kêu gọi vốn.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/ban-do-dau-tu"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#163300] px-7 text-base font-bold text-[#9FE870] transition-transform hover:scale-105 active:scale-95"
              >
                Khám phá bản đồ
              </Link>
              <Link
                to="/nha-dau-tu/dang-ky-quan-tam"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white/70 px-7 text-base font-bold text-[#163300] transition-transform hover:scale-105 active:scale-95"
              >
                <FileText className="h-5 w-5" />
                Đăng ký quan tâm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
