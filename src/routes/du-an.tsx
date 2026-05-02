import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { KEY_PROJECTS, type KeyProject } from "@/data/map-layers";
import { fmtNumber, SECTOR_LABEL, STATUS_LABEL } from "@/lib/format";
import {
  Anchor,
  ArrowRight,
  Briefcase,
  Building2,
  Factory,
  Filter,
  MapPin,
  Plane,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export const Route = createFileRoute("/du-an")({
  head: () => ({
    meta: [
      { title: "Dự án FDI tỷ USD tại Việt Nam — 34 tỉnh thành" },
      {
        name: "description",
        content:
          "Tra cứu các dự án FDI và hạ tầng trọng điểm tại Việt Nam: vốn, ngành, vị trí, trạng thái và chủ đầu tư.",
      },
      { property: "og:title", content: "Dự án FDI & Hạ tầng trọng điểm Việt Nam" },
      {
        property: "og:description",
        content: "Cơ sở dữ liệu dự án đầu tư: vốn, ngành, vị trí, trạng thái và chủ đầu tư.",
      },
    ],
  }),
  component: DuAnPage,
});

const SECTORS: Array<KeyProject["sector"] | "all"> = [
  "all",
  "tech",
  "manufacturing",
  "energy",
  "infra",
  "real-estate",
];

const STATUSES: Array<KeyProject["status"] | "all"> = [
  "all",
  "operating",
  "construction",
  "approved",
];

function DuAnPage() {
  const [sector, setSector] = useState<(typeof SECTORS)[number]>("all");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return KEY_PROJECTS.filter((p) => {
      if (sector !== "all" && p.sector !== sector) return false;
      if (status !== "all" && p.status !== status) return false;
      if (q && !`${p.name} ${p.investor} ${p.province}`.toLowerCase().includes(q.toLowerCase())) {
        return false;
      }
      return true;
    }).sort((a, b) => b.capital - a.capital);
  }, [sector, status, q]);

  const totalCapital = list.reduce((s, p) => s + p.capital, 0);

  return (
    <main className="min-h-screen bg-[#F7F8F2] text-[#0E0F0C]">
      <section className="border-b border-[rgba(14,15,12,0.12)] bg-white">
        <div className="mx-auto max-w-[1800px] px-5 py-7 lg:px-8 lg:py-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#163300]">
                Cơ sở dữ liệu dự án
              </p>
              <h1 className="mt-3 font-display text-[34px] font-extrabold leading-[1.12] tracking-normal text-[#0E0F0C] sm:text-[44px] lg:text-[54px]">
                Dự án đang kêu gọi đầu tư
              </h1>
              <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-[#454745]">
                Tìm kiếm cơ hội theo địa phương, ngành, quy mô vốn và tình trạng triển khai — dạng dữ liệu nhưng vẫn dễ đọc, dễ so sánh.
              </p>
            </div>

            <div className="grid gap-2 rounded-[24px] bg-[#F7F8F2] p-4 ring-1 ring-[rgba(14,15,12,0.10)] sm:grid-cols-3">
              <MiniStat label="Dự án" value={fmtNumber(list.length, 0)} />
              <MiniStat label="Tổng vốn" value={`${fmtNumber(totalCapital, 1)} tỷ USD`} />
              <MiniStat label="Đang vận hành" value={fmtNumber(KEY_PROJECTS.filter((p) => p.status === "operating").length, 0)} />
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full xl:max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A8D86]" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Tìm theo tên dự án, nhà đầu tư hoặc tỉnh..."
                className="h-12 w-full rounded-full bg-[#F7F8F2] pl-11 pr-4 text-sm font-medium text-[#0E0F0C] ring-1 ring-[rgba(14,15,12,0.12)] placeholder:text-[#8A8D86] focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              <button className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#163300] px-4 py-2.5 text-sm font-bold text-white">
                <SlidersHorizontal className="h-4 w-4" />
                Bộ lọc
              </button>
              {SECTORS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSector(s)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold ring-1 ring-[rgba(14,15,12,0.12)] transition-colors ${
                    sector === s
                      ? "bg-[#9FE870] text-[#163300]"
                      : "bg-[#F7F8F2] text-[#0E0F0C] hover:bg-[#E2F6D5]"
                  }`}
                >
                  {s === "all" ? "Tất cả ngành" : SECTOR_LABEL[s]}
                </button>
              ))}
              {STATUSES.map((st) => (
                <button
                  key={st}
                  onClick={() => setStatus(st)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold ring-1 ring-[rgba(14,15,12,0.12)] transition-colors ${
                    status === st
                      ? "bg-[#163300] text-white"
                      : "bg-white text-[#454745] hover:bg-[#E2F6D5] hover:text-[#163300]"
                  }`}
                >
                  {st === "all" ? "Mọi trạng thái" : STATUS_LABEL[st]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1800px] lg:grid-cols-[minmax(0,1.5fr)_minmax(420px,0.9fr)]">
        <div className="px-5 py-6 lg:px-8 lg:py-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm font-bold text-[#454745]">
              Hiển thị <span className="text-[#0E0F0C]">{list.length}</span> dự án phù hợp
            </p>
            <button className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)] sm:inline-flex">
              Sắp xếp: Vốn lớn nhất
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((project) => (
              <ProjectListingCard key={project.id} project={project} />
            ))}
          </div>

          {list.length === 0 && (
            <div className="mt-10 rounded-[28px] border border-dashed border-[rgba(14,15,12,0.18)] bg-white p-10 text-center text-sm font-medium text-[#454745]">
              Không tìm thấy dự án phù hợp với bộ lọc hiện tại.
            </div>
          )}
        </div>

        <aside className="hidden border-l border-[rgba(14,15,12,0.12)] bg-[#EAF2E5] lg:block">
          <div className="sticky top-0 h-screen p-4">
            <InvestmentMapPanel projects={list} />
          </div>
        </aside>
      </section>
    </main>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[128px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A8D86]">{label}</p>
      <p className="mt-1 font-display text-xl font-extrabold leading-tight text-[#163300]">{value}</p>
    </div>
  );
}

function ProjectListingCard({ project }: { project: KeyProject }) {
  return (
    <Link
      to="/du-an/$id"
      params={{ id: project.id }}
      className="group overflow-hidden rounded-[28px] bg-white ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:-translate-y-1"
    >
      <div className="relative h-44 bg-[linear-gradient(135deg,#DCEED8,#BEE4F0)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(159,232,112,0.45),transparent_34%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-[#163300] ring-1 ring-[rgba(14,15,12,0.10)]">
          {SECTOR_LABEL[project.sector]}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-[#9FE870] px-3 py-1 text-xs font-extrabold text-[#163300]">
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <div className="p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#454745]">
          <MapPin className="h-4 w-4 text-[#163300]" />
          {project.province}
        </p>

        <h2 className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-normal text-[#0E0F0C] group-hover:text-[#163300]">
          {project.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-[#454745]">
          {project.investor}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[rgba(14,15,12,0.10)] pt-4 text-sm">
          <p>
            <span className="block text-xs font-semibold text-[#8A8D86]">Tổng vốn</span>
            <strong>{fmtNumber(project.capital, 1)} tỷ USD</strong>
          </p>
          <p>
            <span className="block text-xs font-semibold text-[#8A8D86]">Năm</span>
            <strong>{project.year}</strong>
          </p>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#163300]">
          Xem chi tiết
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function InvestmentMapPanel({ projects }: { projects: KeyProject[] }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#F7F8F2,#DDF4FF)] ring-1 ring-[rgba(14,15,12,0.12)]">
      <div className="absolute left-6 top-6 z-10 rounded-[24px] bg-white/95 p-4 ring-1 ring-[rgba(14,15,12,0.10)]">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#454745]">
          Lớp dữ liệu
        </p>
        <div className="mt-3 grid gap-2">
          {[
            ["Dự án", Briefcase],
            ["KCN", Factory],
            ["Cảng biển", Anchor],
            ["Sân bay", Plane],
          ].map(([layer, Icon]) => (
            <button
              key={String(layer)}
              className="flex items-center gap-2 rounded-full bg-[#F7F8F2] px-3 py-2 text-left text-xs font-bold text-[#163300]"
            >
              <Icon className="h-3.5 w-3.5" />
              {layer}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute left-[44%] top-[12%] h-[68%] w-[22%] rotate-[-15deg] rounded-[50%] bg-[#7AB98D] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.55)]" />
      <div className="absolute left-[50%] top-[18%] h-[58%] w-14 rotate-[-24deg] rounded-full border-r-[10px] border-[#2E7C67] opacity-60" />

      {[18, 29, 42, 55, 67, 76].map((top, i) => (
        <div
          key={top}
          className="absolute left-[53%] flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#163300] shadow-lg ring-1 ring-[rgba(14,15,12,0.12)]"
          style={{ top: `${top}%`, transform: `translateX(${i % 2 === 0 ? -18 : 18}px)` }}
        >
          <Briefcase className="h-4 w-4" />
        </div>
      ))}

      <div className="absolute bottom-6 left-6 right-6 rounded-[24px] bg-white/95 p-5 ring-1 ring-[rgba(14,15,12,0.10)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold text-[#0E0F0C]">Tổng quan kết quả</p>
            <p className="mt-1 text-xs font-medium text-[#454745]">Theo bộ lọc đang chọn</p>
          </div>
          <span className="rounded-full bg-[#E2F6D5] px-3 py-1 text-xs font-extrabold text-[#163300]">
            {projects.length} dự án
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
          <p>
            <span className="block text-[#8A8D86]">FDI</span>
            <strong>{fmtNumber(projects.reduce((s, p) => s + p.capital, 0), 1)} tỷ USD</strong>
          </p>
          <p>
            <span className="block text-[#8A8D86]">Ngành</span>
            <strong>{new Set(projects.map((p) => p.sector)).size}</strong>
          </p>
          <p>
            <span className="block text-[#8A8D86]">Tỉnh</span>
            <strong>{new Set(projects.map((p) => p.province)).size}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
