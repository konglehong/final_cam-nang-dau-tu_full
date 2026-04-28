import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
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
  component: TinhThanhRouteShell,
});

// Layout shell: nếu có child match (vd /tinh-thanh/$slug) → render child; nếu không → render danh sách.
function TinhThanhRouteShell() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) return <Outlet />;
  return <TinhThanhListing />;
}

const REGION_LABEL: Record<Region | "all", string> = {
  all: "Toàn quốc",
  bac: "Miền Bắc",
  trung: "Miền Trung",
  nam: "Miền Nam",
};

const REGION_FILTERS = ["all", "bac", "trung", "nam"] as const;

function TinhThanhListing() {
  const [region, setRegion] = useState<Region | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROVINCES.filter((p) => {
      const matchRegion = region === "all" || p.region === region;
      const matchQuery = !query || p.name.toLowerCase().includes(query.toLowerCase());
      return matchRegion && matchQuery;
    });
  }, [region, query]);

  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Trung tâm 34 tỉnh thành"
        title="Khám phá Việt Nam sau sáp nhập"
        description="Mỗi địa phương là một câu chuyện đầu tư riêng. Tìm hiểu thế mạnh, quy hoạch, chính sách ưu đãi và cơ hội kết nối đầu tư của từng tỉnh."
      />

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary"><TrendingUp className="mr-2 inline h-3 w-3" /> Top FDI 2024</p>
            <ul className="mt-4 divide-y divide-border/60">
              {TOP_FDI_2024.slice(0, 6).map((p, i) => (
                <li key={p.slug} className="flex items-center justify-between py-2 text-sm">
                  <Link to="/tinh-thanh/$slug" params={{ slug: p.slug }} className="flex items-center gap-3 hover:text-primary">
                    <span className="font-mono text-muted-foreground">#{i + 1}</span>
                    <span className="font-medium">{p.name}</span>
                  </Link>
                  <span className="font-mono text-primary">{p.fdi2024.toFixed(1)} <span className="text-muted-foreground">tỷ USD</span></span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary"><Building2 className="mr-2 inline h-3 w-3" /> Top PCI 2024</p>
            <ul className="mt-4 divide-y divide-border/60">
              {TOP_PCI_2024.slice(0, 6).map((p, i) => (
                <li key={p.slug} className="flex items-center justify-between py-2 text-sm">
                  <Link to="/tinh-thanh/$slug" params={{ slug: p.slug }} className="flex items-center gap-3 hover:text-primary">
                    <span className="font-mono text-muted-foreground">#{i + 1}</span>
                    <span className="font-medium">{p.name}</span>
                  </Link>
                  <span className="font-mono text-primary">{p.pci2024.toFixed(1)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {REGION_FILTERS.map((r) => (
              <Button key={r} size="sm" variant={region === r ? "default" : "outline"} onClick={() => setRegion(r)}>
                {REGION_LABEL[r]}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm tỉnh..." className="pl-9" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => {
            const profile = PROVINCE_PROFILES.find((pp) => pp.slug === p.slug);
            return (
              <Link key={p.slug} to="/tinh-thanh/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-[var(--shadow-elegant)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{REGION_LABEL[p.region]}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold group-hover:text-primary">{p.name}</h3>
                  </div>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </div>
                {profile && (
                  <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{profile.tagline}</p>
                )}
                <div className="mt-4 flex items-center justify-between text-xs">
                  {profile && <span className="font-mono text-primary">FDI {profile.fdi2024.toFixed(1)} tỷ USD</span>}
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">Không tìm thấy tỉnh phù hợp.</p>
        )}
      </section>
    </main>
  );
}
