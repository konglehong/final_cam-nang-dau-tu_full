import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Anchor,
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  FileText,
  Globe2,
  Landmark,
  Layers3,
  Map,
  MapPin,
  Newspaper,
  Plane,
  Play,
  PlayCircle,
  Search,
  Share2,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
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
  { value: "34", label: "Tỉnh thành", sub: "Hồ sơ dữ liệu đầy đủ", icon: Users },
  { value: "1.200+", label: "Dự án kêu gọi vốn", sub: "Đang cập nhật", icon: Briefcase },
  { value: "200+", label: "Khu công nghiệp", sub: "Trên toàn quốc", icon: Factory },
  { value: "5", label: "Ngôn ngữ", sub: "Tài liệu đa ngôn ngữ", icon: Globe2 },
];

const PROJECTS = [
  {
    tag: "KCN",
    title: "KCN VSIP Bắc Ninh II",
    province: "Bắc Ninh",
    sector: "Công nghiệp, sản xuất",
    scale: "273 ha",
    capital: "1,3 tỷ USD",
    accent: "#9FE870",
  },
  {
    tag: "Hạ tầng",
    title: "Đường Vành đai 4 – Vùng Thủ đô",
    province: "Hà Nội, Hưng Yên, Bắc Ninh",
    sector: "Hạ tầng giao thông",
    scale: "112,8 km",
    capital: "85.800 tỷ VND",
    accent: "#2F80ED",
  },
  {
    tag: "Năng lượng",
    title: "Điện gió ngoài khơi La Gàn",
    province: "Bình Thuận",
    sector: "Năng lượng tái tạo",
    scale: "3.500 MW",
    capital: "10 tỷ USD",
    accent: "#7C3AED",
  },
];

const PROVINCES = [
  { name: "TP. Hồ Chí Minh", fdi: "7,12 tỷ USD", kcn: "19", strength: "Tài chính, dịch vụ, công nghệ" },
  { name: "Bắc Ninh", fdi: "6,42 tỷ USD", kcn: "16", strength: "Điện tử, cơ khí, hỗ trợ CN" },
  { name: "Hải Phòng", fdi: "4,91 tỷ USD", kcn: "15", strength: "Cảng biển, logistics, CN nặng" },
  { name: "Đà Nẵng", fdi: "1,35 tỷ USD", kcn: "6", strength: "Du lịch, CNTT, công nghệ cao" },
  { name: "Đồng Nai", fdi: "3,87 tỷ USD", kcn: "11", strength: "Công nghiệp, hạ tầng, CN phụ trợ" },
  { name: "Quảng Ninh", fdi: "2,68 tỷ USD", kcn: "10", strength: "Du lịch, cảng biển, công nghiệp" },
];

const NEWS = [
  {
    tag: "Chính sách",
    date: "08/05/2025",
    title: "Chính sách ưu đãi đầu tư mới có hiệu lực từ 01/05/2025",
    desc: "Những điểm mới về ưu đãi thuế, đất đai và hỗ trợ đầu tư cho doanh nghiệp.",
  },
  {
    tag: "Tin tức",
    date: "07/05/2025",
    title: "Việt Nam thu hút 8,88 tỷ USD vốn FDI trong 4 tháng đầu năm",
    desc: "Dòng vốn tập trung vào công nghiệp chế biến, chế tạo và công nghệ cao.",
  },
  {
    tag: "Phân tích",
    date: "06/05/2025",
    title: "Xu hướng dịch chuyển chuỗi cung ứng: Cơ hội cho Việt Nam",
    desc: "Phân tích các vùng có lợi thế mới trong làn sóng đầu tư khu vực.",
  },
  {
    tag: "Sự kiện",
    date: "05/05/2025",
    title: "Diễn đàn Đầu tư Việt Nam 2025 – Kết nối, Hợp tác, Phát triển",
    desc: "Sự kiện thường niên quy tụ cơ quan quản lý, địa phương và cộng đồng nhà đầu tư.",
  },
];

const MULTIMEDIA = [
  { title: "FDI Bình Dương", tone: "green", icon: BarChart3 },
  { title: "Cao tốc Trung Lương", tone: "teal", icon: TrendingUp },
  { title: "KCN Vân Phong", tone: "blue", icon: Factory },
  { title: "Thuế ưu đãi Bắc Ninh", tone: "lime", icon: Landmark },
  { title: "Logistics Hải Phòng", tone: "cyan", icon: Anchor },
  { title: "PCI 2025", tone: "purple", icon: BarChart3 },
];

const BENEFITS = [
  { title: "Dữ liệu đáng tin cậy", desc: "Cập nhật từ nguồn chính thống", icon: BarChart3 },
  { title: "Góc nhìn địa phương", desc: "Phân tích ngắn gọn, dễ hiểu", icon: MapPin },
  { title: "Nội dung đáng tin", desc: "Biên tập chuyên nghiệp", icon: ShieldCheck },
];

const sectionTitle = "font-display text-[32px] font-extrabold leading-[1.12] tracking-normal text-[#0E0F0C] sm:text-[42px] lg:text-[52px]";
const eyebrow = "text-xs font-extrabold uppercase tracking-[0.16em] text-[#163300]";

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[rgba(14,15,12,0.12)] bg-[#F7F8F2] px-6 py-12 lg:py-20">
        <div className="pointer-events-none absolute right-[-12%] top-[-20%] h-[460px] w-[460px] rounded-full bg-[#9FE870]/30 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-[#E2F6D5] px-4 py-2 text-sm font-extrabold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)]">
              Cổng dữ liệu đầu tư Việt Nam
            </p>
            <h1 className="mt-7 max-w-2xl font-display text-[44px] font-extrabold leading-[1.08] tracking-normal text-[#0E0F0C] sm:text-[60px] lg:text-[72px]">
              Khám phá cơ hội đầu tư tại Việt Nam
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#454745] sm:text-lg">
              Nền tảng dữ liệu đầu tư toàn diện về 34 tỉnh thành, dự án kêu gọi vốn, chính sách ưu đãi và tài liệu đa ngôn ngữ dành cho nhà đầu tư.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/ban-do-dau-tu" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#163300] px-6 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95">
                Khám phá bản đồ <Map className="h-5 w-5" />
              </Link>
              <Link to="/du-an" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.14)] transition-transform hover:scale-105 active:scale-95">
                Xem dự án <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#8A8D86]">
              <span>Tin cậy bởi</span>
              <span>MPI</span>
              <span>VCCI</span>
              <span>Vietnam+</span>
            </div>
          </div>
          <InvestmentMapVisual />
        </div>
      </section>

      <section className="bg-white px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((item) => (
            <article key={item.label} className="rounded-[28px] bg-[#F7F8F2] p-5 ring-1 ring-[rgba(14,15,12,0.10)]">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#E2F6D5] text-[#163300]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold leading-none text-[#0E0F0C]">{item.value}</p>
                  <p className="mt-1 text-sm font-extrabold text-[#0E0F0C]">{item.label}</p>
                  <p className="text-xs font-medium text-[#454745]">{item.sub}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F7F8F2] px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="rounded-[34px] bg-white p-8 ring-1 ring-[rgba(14,15,12,0.12)] lg:p-10">
            <p className={eyebrow}>Bản đồ đầu tư thông minh</p>
            <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.1] text-[#163300] lg:text-[44px]">
              Dữ liệu trực quan. Quyết định chính xác.
            </h2>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-[#0E0F0C]">
              {[
                "Dữ liệu cập nhật theo thời gian thực",
                "Phân tích tiềm năng theo từng khu vực",
                "So sánh lợi thế giữa các tỉnh thành",
                "Xuất báo cáo và chia sẻ dễ dàng",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1E7A3B]" />
                  {item}
                </p>
              ))}
            </div>
            <Link to="/ban-do-dau-tu" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#163300] px-6 text-sm font-bold text-white">
              Khám phá bản đồ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <AnalyticsPanel />
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrowText="Dự án nổi bật" title="Cơ hội đang kêu gọi đầu tư" to="/du-an" linkLabel="Xem tất cả dự án" />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {PROJECTS.map((item, index) => <ProjectCard key={item.title} project={item} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F2] px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrowText="Tỉnh thành" title="Khám phá theo địa phương" to="/tinh-thanh" linkLabel="Xem tất cả tỉnh thành" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {PROVINCES.map((province, index) => <ProvinceCard key={province.name} province={province} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrowText="Tin tức & chính sách" title="Cập nhật cần biết" to="/tin-tuc" linkLabel="Xem tất cả" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {NEWS.map((item) => <NewsCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <MultimediaSection />

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className={eyebrow}>Dành cho nhà đầu tư</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <ActionCard
              icon={Users}
              title="Bạn là Nhà đầu tư?"
              desc="Đăng ký để nhận thông tin dự án, chính sách mới nhất và tư vấn đầu tư phù hợp với nhu cầu của bạn."
              cta="Đăng ký quan tâm"
              to="/nha-dau-tu/dang-ky-quan-tam"
              variant="light"
            />
            <ActionCard
              icon={Target}
              title="Khám phá dự án nổi bật"
              desc="Tìm kiếm và lọc các dự án kêu gọi vốn theo lĩnh vực, địa phương và quy mô đầu tư."
              cta="Xem dự án"
              to="/du-an"
              variant="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InvestmentMapVisual() {
  return (
    <div className="rounded-[36px] bg-white p-4 ring-1 ring-[rgba(14,15,12,0.12)]">
      <div className="overflow-hidden rounded-[28px] bg-[#F7F8F2] p-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-[#8A8D86] ring-1 ring-[rgba(14,15,12,0.10)]">
            <Search className="h-4 w-4" />
            Tìm tỉnh, khu công nghiệp, dự án...
          </div>
          <div className="flex gap-2">
            <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0E0F0C] ring-1 ring-[rgba(14,15,12,0.10)]"><Layers3 className="mr-1 inline h-3.5 w-3.5" />Lớp bản đồ</button>
            <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0E0F0C] ring-1 ring-[rgba(14,15,12,0.10)]"><Share2 className="mr-1 inline h-3.5 w-3.5" />Chia sẻ</button>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-[180px_1fr_170px]">
          <div className="hidden rounded-[22px] bg-white p-4 ring-1 ring-[rgba(14,15,12,0.10)] lg:block">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#454745]">Lọc nhanh</p>
            {["Tỉnh / Thành phố", "Lĩnh vực", "Quy mô vốn", "Trạng thái dự án"].map((item) => (
              <div key={item} className="mt-4 rounded-2xl bg-[#F7F8F2] p-3 text-xs font-semibold text-[#454745]">
                {item}<br /><span className="text-[#0E0F0C]">Tất cả</span>
              </div>
            ))}
          </div>
          <VietnamMapMock />
          <div className="rounded-[22px] bg-white p-4 ring-1 ring-[rgba(14,15,12,0.10)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#454745]">Tổng quan dữ liệu</p>
            {[
              ["Dự án kêu gọi vốn", "1.200+", Briefcase],
              ["Tổng vốn đăng ký", "430 tỷ USD", CircleDollarSign],
              ["Khu công nghiệp", "200+", Factory],
              ["Chính sách ưu đãi", "Cập nhật", FileText],
            ].map(([label, value, Icon]) => (
              <div key={String(label)} className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E2F6D5] text-[#163300]">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#454745]">{label}</p>
                  <p className="text-sm font-extrabold text-[#0E0F0C]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VietnamMapMock() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#EDF5EA_0%,#DDF4FF_100%)] ring-1 ring-[rgba(14,15,12,0.08)]">
      <div className="absolute left-[44%] top-8 h-[250px] w-[110px] rotate-[-15deg] rounded-[48%] bg-[#79B88E] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.55)]" />
      <div className="absolute left-[50%] top-[55px] h-[230px] w-14 rotate-[-24deg] rounded-full border-r-[10px] border-[#2E7C67] opacity-55" />
      {[
        ["left-[50%] top-[70px]", Building2],
        ["left-[58%] top-[120px]", Anchor],
        ["left-[49%] top-[165px]", Factory],
        ["left-[56%] top-[210px]", Plane],
        ["left-[61%] top-[260px]", Briefcase],
      ].map(([pos, Icon], i) => (
        <div key={i} className={`absolute ${pos} flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#163300] shadow-lg ring-1 ring-[rgba(14,15,12,0.10)]`}>
          <Icon className="h-4 w-4" />
        </div>
      ))}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {['Dự án', 'KCN', 'Cảng biển', 'Sân bay'].map((item) => (
          <span key={item} className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.10)]">{item}</span>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="rounded-[34px] bg-white p-5 ring-1 ring-[rgba(14,15,12,0.12)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-extrabold text-[#0E0F0C]">Tổng quan phân tích</p>
        <div className="flex gap-2 text-xs font-bold text-[#454745]">
          {['Bắc Ninh', 'Hải Phòng', 'Đồng Nai'].map((item) => <span key={item} className="rounded-full bg-[#F7F8F2] px-3 py-1.5 ring-1 ring-[rgba(14,15,12,0.08)]">{item}</span>)}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.7fr]">
        <div className="rounded-[24px] bg-[#F7F8F2] p-5 ring-1 ring-[rgba(14,15,12,0.08)]">
          <div className="mx-auto flex aspect-square max-h-[270px] items-center justify-center rounded-full border border-[#DCE5D7] bg-white">
            <div className="h-[68%] w-[68%] rotate-45 rounded-[28px] border-4 border-[#9FE870] bg-[#E2F6D5]/70" />
          </div>
        </div>
        <div className="grid gap-3">
          {[['Bắc Ninh', '6,42 tỷ USD'], ['Hải Phòng', '4,91 tỷ USD'], ['Đồng Nai', '3,87 tỷ USD']].map(([name, val]) => (
            <div key={name} className="rounded-2xl bg-[#F7F8F2] p-4 ring-1 ring-[rgba(14,15,12,0.08)]">
              <p className="text-xs font-semibold text-[#454745]">Tổng vốn FDI 2024</p>
              <p className="mt-1 text-sm font-extrabold text-[#0E0F0C]">{name}</p>
              <p className="text-xl font-extrabold text-[#163300]">{val}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {['16 KCN', '78% lấp đầy', '2.450+ DN FDI', '+8,7% GRDP'].map((item) => <div key={item} className="rounded-2xl bg-[#F7F8F2] p-4 text-center text-sm font-extrabold text-[#163300] ring-1 ring-[rgba(14,15,12,0.08)]">{item}</div>)}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrowText, title, to, linkLabel }: { eyebrowText: string; title: string; to: string; linkLabel: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className={eyebrow}>{eyebrowText}</p>
        <h2 className={sectionTitle}>{title}</h2>
      </div>
      <Link to={to} className="inline-flex items-center gap-2 rounded-full bg-[#E2F6D5] px-4 py-2 text-sm font-bold text-[#163300]">
        {linkLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <article className="overflow-hidden rounded-[28px] bg-white ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:-translate-y-1">
      <div className="relative h-44 bg-[linear-gradient(135deg,#DCEED8,#BEE4F0)]">
        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: `radial-gradient(circle at ${20 + index * 24}% 30%, ${project.accent}55, transparent 30%)` }} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-[#163300] ring-1 ring-[rgba(14,15,12,0.10)]">{project.tag}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-extrabold leading-snug text-[#0E0F0C]">{project.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#454745]"><MapPin className="h-4 w-4" />{project.province}</p>
        <p className="mt-1 text-sm font-medium text-[#454745]">Lĩnh vực: {project.sector}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[rgba(14,15,12,0.10)] pt-4 text-sm">
          <p><span className="block text-xs font-semibold text-[#8A8D86]">Quy mô</span><strong>{project.scale}</strong></p>
          <p><span className="block text-xs font-semibold text-[#8A8D86]">Tổng vốn</span><strong>{project.capital}</strong></p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="rounded-full bg-[#E2F6D5] px-3 py-1 text-xs font-extrabold text-[#163300]">Đang kêu gọi</span>
          <Link to="/du-an" className="rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)]">Xem chi tiết</Link>
        </div>
      </div>
    </article>
  );
}

function ProvinceCard({ province, index }: { province: typeof PROVINCES[number]; index: number }) {
  return (
    <article className="overflow-hidden rounded-[24px] bg-white ring-1 ring-[rgba(14,15,12,0.12)]">
      <div className="h-24 bg-[linear-gradient(135deg,#BFE3F5,#DDF2D1)]" style={{ backgroundPosition: `${index * 18}% 50%` }} />
      <div className="p-4">
        <h3 className="font-display text-xl font-extrabold text-[#0E0F0C]">{province.name}</h3>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#454745]">
          <p><span className="block font-semibold">FDI 2024</span><strong className="text-[#163300]">{province.fdi}</strong></p>
          <p><span className="block font-semibold">KCN</span><strong className="text-[#163300]">{province.kcn}</strong></p>
        </div>
        <p className="mt-3 text-xs font-medium leading-relaxed text-[#454745]">Thế mạnh: {province.strength}</p>
      </div>
    </article>
  );
}

function NewsCard({ item }: { item: typeof NEWS[number] }) {
  return (
    <article className="rounded-[24px] bg-[#F7F8F2] p-5 ring-1 ring-[rgba(14,15,12,0.10)]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold text-[#8A8D86]">{item.date}</span>
        <span className="rounded-full bg-[#E2F6D5] px-3 py-1 text-xs font-extrabold text-[#163300]">{item.tag}</span>
      </div>
      <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#0E0F0C]">{item.title}</h3>
      <p className="mt-3 text-sm font-medium leading-relaxed text-[#454745]">{item.desc}</p>
      <ArrowRight className="mt-5 h-5 w-5 text-[#163300]" />
    </article>
  );
}

function MultimediaSection() {
  return (
    <section className="border-y border-[rgba(14,15,12,0.12)] bg-[#F7F8F2] px-6 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className={eyebrow}>Series multimedia</p>
          <h2 className="mt-4 font-display text-[38px] font-extrabold leading-[1.12] text-[#163300] sm:text-[52px]">
            “60 giây đầu tư” — Mỗi clip một con số
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#454745] lg:text-lg">
            Mini series video ngắn — mỗi tập chia sẻ một con số, một lợi thế hoặc một câu chuyện đầu tư của địa phương. Dễ hiểu, dễ chia sẻ, dành cho nhà đầu tư bận rộn.
          </p>
          <Link to="/multimedia/video" className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#163300] px-7 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95">
            <PlayCircle className="h-5 w-5" /> Xem playlist
          </Link>
          <div className="mt-10 grid gap-3 rounded-[26px] bg-white/75 p-4 ring-1 ring-[rgba(14,15,12,0.08)] sm:grid-cols-3">
            {BENEFITS.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E2F6D5] text-[#163300]"><item.icon className="h-5 w-5" /></div>
                <div><p className="text-xs font-extrabold text-[#0E0F0C]">{item.title}</p><p className="text-[11px] font-medium text-[#454745]">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MULTIMEDIA.map((item, index) => <MultimediaCard key={item.title} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function MultimediaCard({ item, index }: { item: typeof MULTIMEDIA[number]; index: number }) {
  const accents = ["#79C943", "#0F8A7A", "#1398B8", "#9FE870", "#11A4B5", "#7C3AED"];
  const accent = accents[index % accents.length];
  return (
    <article className="group overflow-hidden rounded-[28px] bg-white ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:-translate-y-1">
      <div className="relative h-56 bg-[#EFF6EC]" style={{ borderTop: `6px solid ${accent}` }}>
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em]" style={{ color: accent }}>Clip ngắn</div>
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#163300] shadow-sm"><Play className="h-4 w-4 fill-current" /></div>
        <div className="absolute inset-x-0 bottom-0 h-28 rounded-t-[28px] bg-white p-5">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#6F776D]"><item.icon className="h-4 w-4" style={{ color: accent }} />Series 60 giây đầu tư</div>
          <h3 className="font-display text-xl font-extrabold leading-tight text-[#0E0F0C]">{item.title}</h3>
          <div className="mt-4 flex items-center justify-between text-sm font-bold">
            <span className="inline-flex items-center gap-2" style={{ color: accent }}><PlayCircle className="h-4 w-4" />Xem video</span>
            <span className="text-[#6F776D]">60S</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function ActionCard({ icon: Icon, title, desc, cta, to, variant }: { icon: typeof Users; title: string; desc: string; cta: string; to: string; variant: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <article className={`rounded-[32px] p-8 ring-1 ring-[rgba(14,15,12,0.12)] ${dark ? "bg-[linear-gradient(135deg,#163300,#245B14)] text-white" : "bg-[#F7F8F2] text-[#0E0F0C]"}`}>
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${dark ? "bg-white/12 text-[#9FE870]" : "bg-[#E2F6D5] text-[#163300]"}`}><Icon className="h-8 w-8" /></div>
      <h3 className="mt-6 font-display text-3xl font-extrabold leading-snug tracking-normal">{title}</h3>
      <p className={`mt-3 max-w-xl text-base font-medium leading-relaxed ${dark ? "text-white/80" : "text-[#454745]"}`}>{desc}</p>
      <Link to={to} className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold ${dark ? "bg-white text-[#163300]" : "bg-[#163300] text-white"}`}>{cta}<ArrowRight className="h-4 w-4" /></Link>
    </article>
  );
}
