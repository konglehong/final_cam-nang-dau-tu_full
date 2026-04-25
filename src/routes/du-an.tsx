import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { KEY_PROJECTS, type KeyProject } from "@/data/map-layers";
import { fmtNumber, SECTOR_LABEL, STATUS_LABEL } from "@/lib/format";
import { ArrowRight, Building2, Search } from "lucide-react";

export const Route = createFileRoute("/du-an")({
  head: () => ({
    meta: [
      { title: "Dự án FDI tỷ USD tại Việt Nam — 34 tỉnh thành" },
      {
        name: "description",
        content:
          "Tra cứu các dự án FDI và hạ tầng trọng điểm tại Việt Nam: Samsung, LG, Intel, NVIDIA, LEGO, sân bay Long Thành, metro TP.HCM…",
      },
      { property: "og:title", content: "Dự án FDI & Hạ tầng trọng điểm Việt Nam" },
      {
        property: "og:description",
        content: "15+ siêu dự án — vốn, ngành, vị trí, trạng thái và chủ đầu tư.",
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
      if (q && !`${p.name} ${p.investor} ${p.province}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      return true;
    }).sort((a, b) => b.capital - a.capital);
  }, [sector, status, q]);

  const totalCapital = list.reduce((s, p) => s + p.capital, 0);

  return (
    <>
      <PageHero
        eyebrow="Cơ sở dữ liệu dự án"
        title="Dự án FDI & Hạ tầng trọng điểm"
        description="Tra cứu siêu dự án FDI tỷ USD và công trình hạ tầng quốc gia tại 34 tỉnh thành — vốn, ngành, vị trí và trạng thái triển khai."
      />

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          <Stat label="Dự án trong danh mục" value={fmtNumber(KEY_PROJECTS.length, 0)} />
          <Stat
            label="Tổng vốn (đã chọn)"
            value={`${fmtNumber(totalCapital, 1)} tỷ USD`}
          />
          <Stat
            label="Đang vận hành"
            value={fmtNumber(KEY_PROJECTS.filter((p) => p.status === "operating").length, 0)}
          />
          <Stat
            label="Đang xây / phê duyệt"
            value={fmtNumber(
              KEY_PROJECTS.filter((p) => p.status !== "operating").length,
              0,
            )}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {SECTORS.map((s) => (
              <button
                key={s}
                onClick={() => setSector(s)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  sector === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary/40"
                }`}
              >
                {s === "all" ? "Tất cả ngành" : SECTOR_LABEL[s]}
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm theo tên dự án, nhà đầu tư hoặc tỉnh…"
              className="h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {STATUSES.map((st) => (
            <button
              key={st}
              onClick={() => setStatus(st)}
              className={`rounded-md border px-3 py-1 text-xs transition-colors ${
                status === st
                  ? "border-gold bg-gold/10 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {st === "all" ? "Mọi trạng thái" : STATUS_LABEL[st]}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Hiển thị <span className="font-semibold text-foreground">{list.length}</span> dự án
        </p>

        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.id}
              to="/du-an/$id"
              params={{ id: p.id }}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {SECTOR_LABEL[p.sector]}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    p.status === "operating"
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                      : p.status === "construction"
                        ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                        : "bg-sky-500/15 text-sky-700 dark:text-sky-400"
                  }`}
                >
                  {STATUS_LABEL[p.status]}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.investor}</p>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Vốn</p>
                  <p className="font-display text-xl font-bold text-gold">
                    {fmtNumber(p.capital, 1)} <span className="text-xs">tỷ USD</span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Năm</p>
                  <p className="font-display text-xl font-bold text-foreground">{p.year}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs">
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5" /> {p.province}
                </span>
                <span className="inline-flex items-center gap-1 text-primary">
                  Chi tiết <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
            Không tìm thấy dự án phù hợp với bộ lọc hiện tại.
          </div>
        )}
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}
