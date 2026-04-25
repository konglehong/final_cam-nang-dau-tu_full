import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Building2, MapPin, Search, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PROVINCES, type Region } from "@/data/provinces";
import { PROVINCE_PROFILES, TOP_FDI_2024, TOP_PCI_2024 } from "@/data/province-profiles";

export const Route = createFileRoute("/tinh-thanh")({
  head: () => ({
    meta: [
      { title: "34 tỉnh thành Việt Nam sau sáp nhập — Cẩm nang Đầu tư" },
      { name: "description", content: "Danh mục 34 tỉnh thành Việt Nam sau sáp nhập với KPI kinh tế, FDI, PCI và cơ hội đầu tư của từng địa phương." },
      { property: "og:title", content: "34 tỉnh thành — Cẩm nang Đầu tư Việt Nam" },
      { property: "og:description", content: "Khám phá thông tin đầy đủ của từng tỉnh sau sáp nhập đơn vị hành chính." },
    ],
  }),
  component: TinhThanhPage,
});

const REGION_LABEL: Record<Region | "all", string> = {
  all: "Toàn quốc",
  bac: "Miền Bắc",
  trung: "Miền Trung",
  nam: "Miền Nam",
};

const REGION_FILTERS = ["all", "bac", "trung", "nam"] as const;

function TinhThanhPage() {
  const [region, setRegion] = useState<(typeof REGION_FILTERS)[number]>("all");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    return PROVINCES.filter((p) => region === "all" || p.region === region)
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .map((p) => {
        const profile = PROVINCE_PROFILES.find((x) => x.slug === p.slug)!;
        return { ...p, ...profile };
      })
      .sort((a, b) => b.fdi2024 - a.fdi2024);
  }, [region, query]);

  return (
    <>
      <PageHero
        eyebrow="Trung tâm 34 tỉnh thành"
        title="Khám phá Việt Nam sau sáp nhập"
        description="Mỗi địa phương là một câu chuyện đầu tư riêng. Tìm hiểu thế mạnh, quy hoạch, chính sách ưu đãi và cơ hội kết nối đầu tư của từng tỉnh."
      />

      {/* Top KPI strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold">
              <TrendingUp className="h-4 w-4" /> Top FDI 2024
            </h3>
            <ol className="space-y-1.5 text-sm">
              {TOP_FDI_2024.slice(0, 5).map((p, i) => {
                const prov = PROVINCES.find((x) => x.slug === p.slug)!;
                return (
                  <li key={p.slug} className="flex items-baseline justify-between gap-2 border-b border-dashed border-border/60 pb-1.5">
                    <span className="font-medium text-foreground"><span className="font-mono text-muted-foreground mr-2">#{i + 1}</span>{prov.name}</span>
                    <span className="font-mono text-sm font-semibold text-primary">{p.fdi2024.toFixed(1)} tỷ USD</span>
                  </li>
                );
              })}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold">
              <Building2 className="h-4 w-4" /> Top PCI 2024
            </h3>
            <ol className="space-y-1.5 text-sm">
              {TOP_PCI_2024.slice(0, 5).map((p) => {
                const prov = PROVINCES.find((x) => x.slug === p.slug)!;
                return (
                  <li key={p.slug} className="flex items-baseline justify-between gap-2 border-b border-dashed border-border/60 pb-1.5">
                    <span className="font-medium text-foreground"><span className="font-mono text-muted-foreground mr-2">#{p.pciRank}</span>{prov.name}</span>
                    <span className="font-mono text-sm font-semibold text-primary">{p.pciScore.toFixed(1)}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Vùng:</span>
            {REGION_FILTERS.map((r) => (
              <Button key={r} variant={region === r ? "default" : "outline"} size="sm" onClick={() => setRegion(r)}>
                {REGION_LABEL[r]}
              </Button>
            ))}
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm tỉnh..." className="pl-9" />
          </div>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">
          Hiển thị <span className="font-semibold text-foreground">{list.length}</span> / 34 tỉnh thành — sắp xếp theo FDI 2024
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              to="/tinh-thanh/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary">
                    {p.name}
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {p.capital} · {REGION_LABEL[p.region]}
                  </p>
                </div>
                <span className="rounded-sm bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gold">
                  PCI #{p.pciRank}
                </span>
              </div>
              {p.merged && (
                <p className="mb-3 rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground">
                  📌 {p.merged}
                </p>
              )}
              <div className="mb-4 grid grid-cols-3 gap-2 text-center">
                <Stat value={`${p.grdp.toFixed(1)}`} unit="tỷ USD" label="GRDP" />
                <Stat value={`${p.fdi2024.toFixed(1)}`} unit="tỷ USD" label="FDI'24" />
                <Stat value={`${p.industrialParks}`} unit="KCN" label="" />
              </div>
              <div className="mt-auto flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{p.population.toLocaleString()}k dân · {p.area.toLocaleString()} km²</span>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="rounded-md bg-muted/40 px-1 py-2">
      <p className="font-display text-base font-bold text-foreground leading-none">{value}</p>
      <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">{label || unit}</p>
      {label && <p className="text-[9px] text-muted-foreground/70">{unit}</p>}
    </div>
  );
}
