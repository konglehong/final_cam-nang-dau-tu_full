import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { KEY_PROJECTS } from "@/data/map-layers";
import { PROVINCES } from "@/data/provinces";
import { fmtNumber, SECTOR_LABEL, STATUS_LABEL } from "@/lib/format";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Download,
  Factory,
  FileText,
  Landmark,
  MapPin,
  Ship,
} from "lucide-react";

export const Route = createFileRoute("/du-an/$id")({
  loader: ({ params }) => {
    const project = KEY_PROJECTS.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Dự án không tồn tại" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.investor} | Cẩm nang Đầu tư` },
        {
          name: "description",
          content: `${p.name}: ${fmtNumber(p.capital, 1)} tỷ USD, ngành ${SECTOR_LABEL[p.sector]}, tại ${p.province}.`,
        },
        { property: "og:title", content: `${p.name} — ${fmtNumber(p.capital, 1)} tỷ USD` },
        {
          property: "og:description",
          content: `Dự án của ${p.investor} tại ${p.province}. Trạng thái: ${STATUS_LABEL[p.status]}.`,
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-extrabold">Dự án không tồn tại</h1>
      <p className="mt-3 text-[#454745]">Dự án bạn tìm không có trong cơ sở dữ liệu.</p>
      <Link to="/du-an" className="mt-6 inline-flex items-center gap-2 text-[#163300]">
        <ArrowLeft className="h-4 w-4" /> Quay lại danh sách
      </Link>
    </div>
  ),
  component: DuAnDetail,
});

const TOC = [
  { id: "overview", label: "Tổng quan" },
  { id: "infrastructure", label: "Hạ tầng kết nối" },
  { id: "incentives", label: "Chính sách ưu đãi" },
  { id: "costs", label: "Chi phí đầu tư" },
  { id: "documents", label: "Tài liệu" },
];

function DuAnDetail() {
  const { project: p } = Route.useLoaderData();
  const province = PROVINCES.find((pr) => pr.name === p.province || pr.capital === p.province);
  const related = KEY_PROJECTS.filter(
    (k) => k.id !== p.id && (k.sector === p.sector || k.province === p.province),
  ).slice(0, 3);

  const stats = [
    { label: "Tổng vốn", value: `${fmtNumber(p.capital, 1)} tỷ USD` },
    { label: "Lĩnh vực", value: SECTOR_LABEL[p.sector] },
    { label: "Trạng thái", value: STATUS_LABEL[p.status] },
    { label: "Năm cấp phép", value: String(p.year) },
  ];

  return (
    <main className="bg-[#F7F8F2] text-[#0E0F0C]">
      <section className="relative overflow-hidden bg-[#0E0F0C] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,15,12,0.96),rgba(14,15,12,0.72),rgba(14,15,12,0.34))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(159,232,112,0.22),transparent_36%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-18 lg:py-28">
          <Link to="/du-an" className="inline-flex items-center gap-2 text-sm font-bold text-[#9FE870]">
            <ArrowLeft className="h-4 w-4" /> Danh sách dự án
          </Link>
          <p className="mt-8 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#9FE870] ring-1 ring-white/15">
            {SECTOR_LABEL[p.sector]}
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[42px] font-extrabold leading-[1.08] tracking-normal sm:text-[60px] lg:text-[76px]">
            {p.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-white/80">
            {p.investor} · {p.province}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">{stat.label}</p>
                <p className="mt-2 font-display text-2xl font-extrabold leading-tight text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:py-16">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-[28px] bg-white p-5 ring-1 ring-[rgba(14,15,12,0.12)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#163300]">Nội dung</p>
            <nav className="mt-4 grid gap-1">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-[#454745] transition-colors hover:bg-[#E2F6D5] hover:text-[#163300]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#163300] px-4 py-3 text-sm font-bold text-white">
              <Download className="h-4 w-4" /> Tải hồ sơ PDF
            </button>
          </div>
        </aside>

        <article className="grid gap-8">
          <ReportSection id="overview" eyebrow="Tổng quan" title="Thông tin dự án">
            <p className="max-w-3xl text-lg font-medium leading-relaxed text-[#454745]">
              <strong className="text-[#0E0F0C]">{p.name}</strong> là dự án đầu tư của {p.investor} tại {p.province}, với tổng vốn đăng ký <strong className="text-[#0E0F0C]">{fmtNumber(p.capital, 1)} tỷ USD</strong> trong lĩnh vực <strong className="text-[#0E0F0C]">{SECTOR_LABEL[p.sector]}</strong>. Dự án được cấp phép từ năm {p.year} và hiện ở trạng thái <strong className="text-[#0E0F0C]">{STATUS_LABEL[p.status].toLowerCase()}</strong>.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] bg-[#F7F8F2] p-5 ring-1 ring-[rgba(14,15,12,0.08)]">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A8D86]">{stat.label}</p>
                  <p className="mt-2 font-display text-xl font-extrabold leading-tight text-[#163300]">{stat.value}</p>
                </div>
              ))}
            </div>
          </ReportSection>

          <ReportSection id="infrastructure" eyebrow="Infrastructure" title="Hạ tầng kết nối">
            <div className="grid gap-4 md:grid-cols-3">
              <InfrastructureCard icon={Ship} title="Cảng biển" value="Kết nối vùng" />
              <InfrastructureCard icon={MapPin} title="Cao tốc" value="Trục liên vùng" />
              <InfrastructureCard icon={Factory} title="KCN lân cận" value="Cụm công nghiệp" />
            </div>
            <ElegantTable
              className="mt-8"
              rows={[
                ["Cảng biển gần nhất", "Kết nối qua mạng lưới logistics vùng", "Cập nhật"],
                ["Sân bay gần nhất", "Phục vụ chuyên gia, hàng hóa giá trị cao", "Cập nhật"],
                ["Cao tốc kết nối", "Trục liên vùng và cửa khẩu", "Trực tiếp"],
                ["Trung tâm đô thị", p.province, "Nội tỉnh"],
              ]}
            />
          </ReportSection>

          <ReportSection id="incentives" eyebrow="Tax policies" title="Chính sách ưu đãi">
            <div className="rounded-[28px] bg-[#E2F6D5] p-6 text-[#163300]">
              <p className="font-display text-2xl font-extrabold leading-snug">Ưu đãi có thể áp dụng theo ngành, quy mô và địa bàn đầu tư.</p>
              <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed">Nhà đầu tư cần đối chiếu hồ sơ pháp lý, ngành nghề đầu tư và quyết định chấp thuận chủ trương để xác định ưu đãi chính thức.</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Ưu đãi thuế thu nhập doanh nghiệp theo lĩnh vực ưu tiên",
                "Hỗ trợ thủ tục đầu tư và kết nối địa phương",
                "Khả năng tiếp cận quỹ đất công nghiệp đã quy hoạch",
                "Liên kết chuỗi cung ứng FDI và nhà cung ứng địa phương",
              ].map((item) => (
                <p key={item} className="flex gap-3 rounded-[22px] bg-white p-4 text-sm font-semibold text-[#454745] ring-1 ring-[rgba(14,15,12,0.10)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#163300]" /> {item}
                </p>
              ))}
            </div>
          </ReportSection>

          <ReportSection id="costs" eyebrow="Costs" title="Chi phí tham khảo">
            <ElegantTable
              rows={[
                ["Chi phí thuê đất", "Theo vị trí và thời hạn thuê", "Liên hệ"],
                ["Chi phí hạ tầng", "Phụ thuộc tiêu chuẩn kỹ thuật", "Cập nhật"],
                ["Điện công nghiệp", "Theo biểu giá hiện hành", "Cập nhật"],
                ["Nước công nghiệp", "Theo nhà cung cấp hạ tầng", "Cập nhật"],
              ]}
            />
          </ReportSection>

          <ReportSection id="documents" eyebrow="Documents" title="Tài liệu liên quan">
            <div className="grid gap-4 md:grid-cols-2">
              {["Hồ sơ dự án PDF", "Bản đồ vị trí", "Chính sách ưu đãi", "Đầu mối liên hệ"].map((doc) => (
                <button key={doc} className="flex items-center justify-between rounded-[24px] bg-white p-5 text-left ring-1 ring-[rgba(14,15,12,0.10)] transition-transform hover:-translate-y-1">
                  <span className="flex items-center gap-3 font-bold text-[#0E0F0C]"><FileText className="h-5 w-5 text-[#163300]" />{doc}</span>
                  <ArrowRight className="h-5 w-5 text-[#163300]" />
                </button>
              ))}
            </div>
          </ReportSection>

          {related.length > 0 && (
            <ReportSection id="related" eyebrow="Related" title="Dự án tương tự">
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.id} to="/du-an/$id" params={{ id: r.id }} className="group rounded-[22px] bg-[#F7F8F2] p-5 ring-1 ring-[rgba(14,15,12,0.10)] transition-transform hover:-translate-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#163300]">{SECTOR_LABEL[r.sector]}</p>
                    <h4 className="mt-2 font-display text-base font-extrabold leading-snug group-hover:text-[#163300]">{r.name}</h4>
                    <p className="mt-2 text-xs text-[#454745]"><Building2 className="mr-1 inline h-3 w-3" />{r.province} · {fmtNumber(r.capital, 1)} tỷ USD</p>
                  </Link>
                ))}
              </div>
            </ReportSection>
          )}
        </article>
      </section>
    </main>
  );
}

function ReportSection({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-[32px] bg-white p-6 ring-1 ring-[rgba(14,15,12,0.12)] lg:p-8">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#163300]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[30px] font-extrabold leading-[1.12] tracking-normal text-[#0E0F0C] lg:text-[42px]">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function InfrastructureCard({ icon: Icon, title, value }: { icon: typeof Landmark; title: string; value: string }) {
  return (
    <div className="rounded-[24px] bg-[#F7F8F2] p-5 ring-1 ring-[rgba(14,15,12,0.08)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E2F6D5] text-[#163300]"><Icon className="h-6 w-6" /></div>
      <p className="mt-5 text-sm font-bold text-[#454745]">{title}</p>
      <p className="mt-1 font-display text-2xl font-extrabold text-[#0E0F0C]">{value}</p>
    </div>
  );
}

function ElegantTable({ rows, className = "" }: { rows: string[][]; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[24px] bg-[#F7F8F2] ring-1 ring-[rgba(14,15,12,0.08)] ${className}`}>
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-[rgba(14,15,12,0.10)]">
          {rows.map((row) => (
            <tr key={row.join("-")} className="align-top">
              <th className="w-1/3 px-5 py-4 font-extrabold text-[#0E0F0C]">{row[0]}</th>
              <td className="px-5 py-4 font-medium text-[#454745]">{row[1]}</td>
              <td className="px-5 py-4 text-right font-extrabold text-[#163300]">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
