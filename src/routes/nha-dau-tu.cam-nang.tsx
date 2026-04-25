import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Check, Download, FileText } from "lucide-react";

export const Route = createFileRoute("/nha-dau-tu/cam-nang")({
  head: () => ({
    meta: [
      { title: "Cẩm nang quy trình đầu tư tại Việt Nam — Hướng dẫn từng bước" },
      {
        name: "description",
        content: "Hướng dẫn 5 bước đầu tư tại Việt Nam: từ khảo sát, chọn địa điểm đến cấp phép và vận hành.",
      },
      { property: "og:title", content: "Cẩm nang quy trình đầu tư tại Việt Nam" },
    ],
  }),
  component: CamNangPage,
});

const STEPS = [
  {
    n: 1,
    title: "Khảo sát & nghiên cứu thị trường",
    duration: "2-4 tuần",
    description:
      "Phân tích nhu cầu thị trường, đối thủ cạnh tranh, chuỗi cung ứng và quy hoạch phát triển ngành tại Việt Nam.",
    items: [
      "Nghiên cứu chính sách ngành đầu tư",
      "Phân tích đối thủ cạnh tranh và thị trường mục tiêu",
      "Đánh giá nguồn nhân lực và logistics",
      "Sơ bộ tài chính: ROI, IRR, payback period",
    ],
  },
  {
    n: 2,
    title: "Lựa chọn địa điểm & lĩnh vực",
    duration: "2-3 tuần",
    description:
      "Sử dụng Bản đồ đầu tư & công cụ So sánh tỉnh để chọn địa phương có ưu đãi và hạ tầng phù hợp nhất.",
    items: [
      "So sánh 3-5 tỉnh tiềm năng (PCI, FDI, KCN, hạ tầng)",
      "Khảo sát thực địa khu công nghiệp",
      "Đánh giá ưu đãi thuế, đất đai theo địa bàn",
      "Đối thoại với Trung tâm Xúc tiến Đầu tư địa phương",
    ],
  },
  {
    n: 3,
    title: "Hồ sơ & thủ tục cấp phép",
    duration: "30-60 ngày",
    description:
      "Chuẩn bị hồ sơ Quyết định chủ trương đầu tư (IRC) và Giấy chứng nhận đăng ký đầu tư (IRC + ERC).",
    items: [
      "Hồ sơ đề xuất dự án (Project proposal)",
      "Chứng minh năng lực tài chính nhà đầu tư",
      "Hợp đồng thuê đất / thuê hạ tầng KCN",
      "Báo cáo đánh giá tác động môi trường (ĐTM)",
    ],
  },
  {
    n: 4,
    title: "Thành lập pháp nhân",
    duration: "5-15 ngày",
    description:
      "Đăng ký doanh nghiệp 100% vốn FDI, JV hoặc BCC tại Sở Kế hoạch & Đầu tư địa phương.",
    items: [
      "Cấp Giấy chứng nhận đăng ký doanh nghiệp (ERC)",
      "Khắc dấu, mở tài khoản ngân hàng",
      "Đăng ký thuế, BHXH, lao động",
      "Đăng ký mẫu chữ ký với hải quan (nếu XNK)",
    ],
  },
  {
    n: 5,
    title: "Triển khai & vận hành dự án",
    duration: "Theo kế hoạch dự án",
    description:
      "Thi công hạ tầng nội bộ, lắp đặt thiết bị, tuyển dụng nhân sự và bắt đầu hoạt động sản xuất - kinh doanh.",
    items: [
      "Giấy phép xây dựng & PCCC",
      "Tuyển dụng & đào tạo nhân sự",
      "Lắp đặt máy móc, vận hành thử",
      "Báo cáo định kỳ với Sở KH&ĐT",
    ],
  },
];

function CamNangPage() {
  return (
    <>
      <PageHero
        eyebrow="Hướng dẫn"
        title="Quy trình đầu tư tại Việt Nam — 5 bước"
        description="Từ khảo sát đến vận hành — cẩm nang đầy đủ thủ tục, hồ sơ, thời gian và lưu ý cho nhà đầu tư FDI."
      />

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10 rounded-xl border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <FileText className="mt-1 h-6 w-6 text-primary" />
            <div>
              <h2 className="font-display text-lg font-bold">Cẩm nang đầy đủ (PDF, 5 ngôn ngữ)</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tải bản PDF đầy đủ với checklist hồ sơ, mẫu đơn và sơ đồ quy trình từng bước.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Tiếng Việt", "English", "中文", "한국어", "日本語"].map((lang) => (
                  <button
                    key={lang}
                    className="inline-flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="h-3.5 w-3.5" /> {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ol className="relative space-y-8 border-l-2 border-border pl-8">
          {STEPS.map((s) => (
            <li key={s.n} className="relative">
              <span className="absolute -left-[42px] flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-xl font-bold text-primary">
                {s.n}
              </span>
              <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-foreground/80">
                    ⏱ {s.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
