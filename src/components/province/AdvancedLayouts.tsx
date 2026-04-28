// ADVANCED tier — 3 variants: dossier, spotlight, compact-pro.
// Trang trọng vừa phải, nhiều dữ liệu, gradient tinh tế, không cinematic.

import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, MapPin, Target, TrendingUp } from "lucide-react";
import type { Province } from "@/data/provinces";
import type { ProvinceProfile } from "@/data/province-profiles";
import { INDUSTRIAL_PARKS, KEY_PROJECTS, POWER_PLANTS, TOURISM_ZONES } from "@/data/map-layers";
import { ARTICLES } from "@/data/content";
import { Button } from "@/components/ui/button";

type Props = { province: Province; profile: ProvinceProfile };
const REGION_LABEL = { bac: "Miền Bắc", trung: "Miền Trung", nam: "Miền Nam" } as const;

function ld(province: Province) {
  return {
    kcn: INDUSTRIAL_PARKS.filter((k) => k.province === province.name).slice(0, 5),
    projects: KEY_PROJECTS.filter((p) => p.province === province.name).slice(0, 4),
    power: POWER_PLANTS.filter((p) => p.province === province.name).slice(0, 3),
    tourism: TOURISM_ZONES.filter((t) => t.province === province.name).slice(0, 3),
    news: ARTICLES.slice(0, 3),
  };
}

/* ============================================================
   1. DOSSIER — sidebar dính kiểu báo cáo
   ============================================================ */
export function AdvancedDossier({ province, profile }: Props) {
  const d = ld(province);
  return (
    <article className="bg-background">
      <header className="border-b border-border bg-gradient-to-br from-primary/5 via-card to-gold/5">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{REGION_LABEL[province.region]} · Dossier</p>
          <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">{province.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{profile.tagline}</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* sticky sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-soft p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Mục lục</p>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  ["overview", "Tổng quan KT-XH"],
                  ["strengths", "Lợi thế cạnh tranh"],
                  ["sectors", "Ngành kêu gọi"],
                  ["kcn", "Khu công nghiệp"],
                  ["projects", "Dự án FDI"],
                  ["news", "Tin tức"],
                ].map(([id, label]) => (
                  <li key={id}><a href={`#${id}`} className="text-foreground/80 hover:text-primary">{label}</a></li>
                ))}
              </ul>
            </div>
            <div className="card-soft mt-4 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">PCI 2024</p>
              <p className="mt-2 font-display text-3xl font-bold">#{profile.pciRank}</p>
              <p className="text-xs text-muted-foreground">{profile.pciScore} điểm</p>
            </div>
          </aside>

          {/* content */}
          <div className="space-y-14">
            <section id="overview">
              <SectionHead num="01" title="Tổng quan kinh tế - xã hội" />
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
                <Mini label="Diện tích" value={`${profile.area.toLocaleString()} km²`} />
                <Mini label="Dân số" value={`${(profile.population / 1000).toFixed(2)}M`} />
                <Mini label="GRDP" value={`${profile.grdp} tỷ USD`} />
                <Mini label="Tăng trưởng" value={`${profile.grdpGrowth}%`} />
                <Mini label="FDI 2024" value={`${profile.fdi2024} tỷ USD`} />
                <Mini label="Xuất khẩu" value={`${profile.exports} tỷ USD`} />
              </div>
            </section>

            <section id="strengths">
              <SectionHead num="02" title="Lợi thế cạnh tranh" />
              <ol className="mt-5 space-y-3">
                {profile.strengths.map((s, i) => (
                  <li key={s} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                    <span className="font-mono text-xs font-bold text-primary">0{i + 1}</span>
                    <p className="text-sm font-medium">{s}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="sectors">
              <SectionHead num="03" title="Ngành kêu gọi đầu tư" />
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.sectors.map((s) => (
                  <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{s}</span>
                ))}
              </div>
            </section>

            {d.kcn.length > 0 && (
              <section id="kcn">
                <SectionHead num="04" title="Khu công nghiệp tiêu biểu" />
                <div className="mt-5 divide-y divide-border rounded-lg border border-border bg-card">
                  {d.kcn.map((k) => (
                    <div key={k.id} className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-display font-semibold">{k.name}</p>
                        <p className="text-xs text-muted-foreground">{k.area.toLocaleString()} ha</p>
                      </div>
                      {typeof k.occupancy === "number" && <span className="font-mono text-sm text-primary">{k.occupancy}%</span>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {d.projects.length > 0 && (
              <section id="projects">
                <SectionHead num="05" title="Dự án FDI tiêu biểu" />
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {d.projects.map((p) => (
                    <div key={p.name} className="card-soft p-4">
                      <p className="font-mono text-[10px] text-muted-foreground">{p.investor}</p>
                      <p className="mt-1 font-display font-semibold">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.capital} tỷ USD · {p.sector}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <NewsRow news={d.news} />
            <ContactCompact province={province} />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   2. SPOTLIGHT — nhấn 1 ngành mũi nhọn, card gradient
   ============================================================ */
export function AdvancedSpotlight({ province, profile }: Props) {
  const d = ld(province);
  const heroSector = profile.sectors[0];
  return (
    <article className="bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-gold/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{REGION_LABEL[province.region]}</p>
          <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">{province.name}</h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Spotlight: {heroSector}</span>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-foreground/80">{profile.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/nha-dau-tu/dang-ky-quan-tam"><Button className="btn-gradient">Đăng ký quan tâm</Button></Link>
            <Link to="/ban-do-dau-tu"><Button variant="outline">Bản đồ đầu tư</Button></Link>
          </div>
        </div>
      </header>

      {/* SPOTLIGHT cards */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {profile.sectors.slice(0, 3).map((s, i) => (
            <div key={s} className="relative overflow-hidden rounded-2xl border border-border p-7 shadow-[var(--shadow-card)]"
              style={{ backgroundImage: i === 0 ? "var(--gradient-primary)" : i === 1 ? "var(--gradient-gold)" : "linear-gradient(135deg, oklch(0.55 0.18 255), oklch(0.62 0.2 280))" }}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">Ngành {i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">{s}</h3>
              <p className="mt-3 text-sm text-white/80">Định hướng ưu tiên thu hút đầu tư giai đoạn 2025-2030.</p>
            </div>
          ))}
        </div>
      </section>

      <KpiStrip profile={profile} />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Lợi thế cạnh tranh</h2>
            <ul className="mt-5 space-y-3">
              {profile.strengths.map((s, i) => (
                <li key={s} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-bold text-primary">{i + 1}</span>
                  <p className="text-sm font-medium">{s}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-3xl font-bold">Hạ tầng & dự án</h2>
              <div className="mt-5 grid gap-3">
                {d.projects.slice(0, 3).map((p) => (
                  <div key={p.name} className="card-soft p-4">
                    <p className="font-mono text-[10px] text-muted-foreground">{p.investor}</p>
                    <p className="mt-1 font-display font-semibold">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.capital} tỷ USD</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsRow news={d.news} />
      <ContactCompact province={province} />
    </article>
  );
}

/* ============================================================
   3. COMPACT-PRO — dashboard 2 cột với chart mini
   ============================================================ */
export function AdvancedCompactPro({ province, profile }: Props) {
  const d = ld(province);
  return (
    <article className="bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">{REGION_LABEL[province.region]} · Dashboard</p>
            <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">{province.name}</h1>
            <p className="mt-2 max-w-xl text-muted-foreground">{profile.tagline}</p>
          </div>
          <Link to="/nha-dau-tu/dang-ky-quan-tam"><Button className="btn-gradient">Đăng ký quan tâm</Button></Link>
        </div>
      </header>

      <KpiStrip profile={profile} />

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        {/* charts row */}
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-soft p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">FDI vs GRDP vs Xuất khẩu</p>
            <h3 className="mt-1 font-display text-lg font-semibold">Cơ cấu kinh tế (tỷ USD)</h3>
            <div className="mt-6 space-y-3">
              <ChartBar label="GRDP" value={profile.grdp} max={100} color="primary" />
              <ChartBar label="FDI lũy kế" value={profile.fdiStock} max={90} color="gold" />
              <ChartBar label="Xuất khẩu" value={profile.exports} max={60} color="primary" />
              <ChartBar label="FDI 2024" value={profile.fdi2024} max={5} color="gold" />
            </div>
          </div>
          <div className="card-soft p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Xếp hạng PCI</p>
            <h3 className="mt-1 font-display text-lg font-semibold">Năng lực cạnh tranh cấp tỉnh</h3>
            <div className="mt-6">
              <p className="font-display text-7xl font-bold text-gradient">#{profile.pciRank}</p>
              <p className="mt-2 text-sm text-muted-foreground">{profile.pciScore} điểm / 100 — top {Math.ceil((profile.pciRank / 34) * 100)}%</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full" style={{ width: `${profile.pciScore}%`, backgroundImage: "var(--gradient-primary)" }} />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4">
              <div><p className="font-mono text-[10px] uppercase text-muted-foreground">Tăng trưởng</p><p className="font-display text-xl font-bold">{profile.grdpGrowth}%</p></div>
              <div><p className="font-mono text-[10px] uppercase text-muted-foreground">KCN</p><p className="font-display text-xl font-bold">{profile.industrialParks}</p></div>
            </div>
          </div>
        </div>

        {/* lower grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="card-soft p-5">
            <h3 className="font-display font-semibold">Lợi thế</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {profile.strengths.map((s) => <li key={s} className="flex gap-2"><span className="text-primary">•</span>{s}</li>)}
            </ul>
          </div>
          <div className="card-soft p-5">
            <h3 className="font-display font-semibold">Ngành ưu tiên</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {profile.sectors.map((s) => <li key={s} className="flex gap-2"><span className="text-gold">▸</span>{s}</li>)}
            </ul>
          </div>
          <div className="card-soft p-5">
            <h3 className="font-display font-semibold">Dự án FDI</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {d.projects.slice(0, 3).map((p) => (
                <li key={p.name}>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.investor} · {p.capital} tỷ USD</p>
                </li>
              ))}
              {d.projects.length === 0 && <li className="text-xs italic text-muted-foreground">Chưa có dữ liệu</li>}
            </ul>
          </div>
        </div>
      </div>

      <NewsRow news={d.news} />
      <ContactCompact province={province} />
    </article>
  );
}

/* ----------------------------- shared ----------------------------- */

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-border pb-3">
      <span className="font-mono text-xs text-primary">{num}</span>
      <h2 className="font-display text-2xl font-bold">{title}</h2>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-3">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-base font-semibold">{value}</p>
    </div>
  );
}

function KpiStrip({ profile }: { profile: ProvinceProfile }) {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-6">
        {[
          ["Diện tích", `${profile.area.toLocaleString()} km²`],
          ["Dân số", `${(profile.population / 1000).toFixed(2)}M`],
          ["GRDP", `${profile.grdp} tỷ USD`],
          ["FDI'24", `${profile.fdi2024} tỷ USD`],
          ["KCN", `${profile.industrialParks}`],
          ["PCI", `#${profile.pciRank}`],
        ].map(([l, v]) => (
          <div key={l} className="bg-card p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</p>
            <p className="mt-1 font-display text-lg font-bold">{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChartBar({ label, value, max, color }: { label: string; value: number; max: number; color: "primary" | "gold" }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono font-semibold">{value}</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundImage: color === "primary" ? "var(--gradient-primary)" : "var(--gradient-gold)" }} />
      </div>
    </div>
  );
}

function NewsRow({ news }: { news: typeof ARTICLES }) {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-display text-2xl font-bold">Tin tức liên quan</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <Link key={n.slug} to="/tin-tuc/$slug" params={{ slug: n.slug }} className="card-soft block p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{n.category}</p>
              <h3 className="mt-2 font-display font-semibold leading-snug">{n.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCompact({ province }: { province: Province }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="card-soft flex flex-col gap-4 p-7 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold">Liên hệ đầu mối {province.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">Sở KH&ĐT {province.name} — đầu mối tiếp nhận hồ sơ và tư vấn.</p>
        </div>
        <Link to="/nha-dau-tu/dang-ky-quan-tam"><Button className="btn-gradient">Đăng ký quan tâm <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
      </div>
    </section>
  );
}
