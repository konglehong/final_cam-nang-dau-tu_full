// BASIC tier — 3 variants: factsheet, brief, card.
// Sạch, gọn, ít section, 1 cột chính, không animation nặng.

import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import type { Province } from "@/data/provinces";
import type { ProvinceProfile } from "@/data/province-profiles";
import { ARTICLES } from "@/data/content";
import { INDUSTRIAL_PARKS } from "@/data/map-layers";
import { Button } from "@/components/ui/button";

type Props = { province: Province; profile: ProvinceProfile };
const REGION_LABEL = { bac: "Miền Bắc", trung: "Miền Trung", nam: "Miền Nam" } as const;

/* ============================================================
   1. FACTSHEET — 1 trang, KPI strip + bullet list
   ============================================================ */
export function BasicFactsheet({ province, profile }: Props) {
  const news = ARTICLES.slice(0, 2);
  return (
    <article className="bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{REGION_LABEL[province.region]}</p>
          <h1 className="mt-2 font-display text-4xl font-bold">{province.name}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{profile.tagline}</p>
        </div>
      </header>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["Diện tích", `${profile.area.toLocaleString()} km²`],
            ["Dân số", `${(profile.population / 1000).toFixed(2)}M`],
            ["GRDP", `${profile.grdp} tỷ USD`],
            ["FDI'24", `${profile.fdi2024} tỷ USD`],
          ].map(([l, v]) => (
            <div key={l} className="bg-card p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</p>
              <p className="mt-1 font-display text-lg font-bold">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-10 px-6 py-12">
        <section>
          <h2 className="font-display text-xl font-bold">Lợi thế cạnh tranh</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {profile.strengths.map((s) => <li key={s} className="flex gap-2"><span className="text-primary">•</span>{s}</li>)}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold">Ngành kêu gọi đầu tư</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.sectors.map((s) => (
              <span key={s} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium">{s}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold">Tin tức liên quan</h2>
          <ul className="mt-3 space-y-2">
            {news.map((n) => (
              <li key={n.slug}>
                <Link to="/tin-tuc/$slug" params={{ slug: n.slug }} className="text-sm text-foreground hover:text-primary">
                  → {n.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <BasicCTA province={province} />
      </div>
    </article>
  );
}

/* ============================================================
   2. BRIEF — tóm lược ngắn + CTA lớn
   ============================================================ */
export function BasicBrief({ province, profile }: Props) {
  return (
    <article className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{REGION_LABEL[province.region]}</p>
        <h1 className="mt-3 font-display text-5xl font-bold">{province.name}</h1>
        <p className="mt-4 text-xl text-muted-foreground">{profile.tagline}</p>

        <div className="mt-10 grid grid-cols-3 gap-3">
          <BriefStat label="GRDP" value={`${profile.grdp}`} unit="tỷ USD" />
          <BriefStat label="FDI 2024" value={`${profile.fdi2024}`} unit="tỷ USD" />
          <BriefStat label="PCI" value={`#${profile.pciRank}`} unit={`${profile.pciScore} đ`} />
        </div>

        <p className="mt-10 leading-relaxed text-foreground/85">
          {province.name} thuộc {REGION_LABEL[province.region]}, trung tâm hành chính tại {province.capital}.
          {province.merged ? ` Sau sáp nhập (${province.merged}), tỉnh có quy mô dân số ${(profile.population / 1000).toFixed(2)} triệu người và diện tích ${profile.area.toLocaleString()} km².` : ` Tỉnh có dân số ${(profile.population / 1000).toFixed(2)} triệu người.`}
          Các ngành ưu tiên thu hút đầu tư gồm: <strong>{profile.sectors.join(", ")}</strong>.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold">Điểm nhấn</h2>
        <ul className="mt-3 space-y-1.5 text-sm">
          {profile.strengths.slice(0, 4).map((s) => <li key={s}>— {s}</li>)}
        </ul>

        <BasicCTA province={province} />
      </div>
    </article>
  );
}

/* ============================================================
   3. CARD — banner + 4 khối card đơn giản
   ============================================================ */
export function BasicCard({ province, profile }: Props) {
  const kcn = INDUSTRIAL_PARKS.filter((k) => k.province === province.name).slice(0, 3);
  return (
    <article className="bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-card to-gold/5" />
        <div className="relative mx-auto max-w-6xl px-6 py-12">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{REGION_LABEL[province.region]}</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">{province.name}</h1>
          <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-3 w-3" /> {province.capital}</p>
          <p className="mt-3 max-w-2xl text-foreground/80">{profile.tagline}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-5 px-6 py-10 md:grid-cols-2">
        <CardBlock title="Tổng quan" rows={[
          ["Diện tích", `${profile.area.toLocaleString()} km²`],
          ["Dân số", `${(profile.population / 1000).toFixed(2)}M người`],
          ["GRDP", `${profile.grdp} tỷ USD`],
          ["Tăng trưởng", `${profile.grdpGrowth}%`],
        ]} />
        <CardBlock title="Đầu tư" rows={[
          ["FDI 2024", `${profile.fdi2024} tỷ USD`],
          ["FDI lũy kế", `${profile.fdiStock} tỷ USD`],
          ["KCN/KKT", `${profile.industrialParks} khu`],
          ["PCI", `#${profile.pciRank} (${profile.pciScore} đ)`],
        ]} />
        <CardBlockList title="Ngành kêu gọi đầu tư" items={profile.sectors} accent="primary" />
        <CardBlockList title="Lợi thế cạnh tranh" items={profile.strengths} accent="gold" />
        {kcn.length > 0 && (
          <div className="md:col-span-2">
            <CardBlockList title="Khu công nghiệp tiêu biểu" items={kcn.map((k) => `${k.name} — ${k.area.toLocaleString()} ha`)} accent="primary" />
          </div>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-12">
        <BasicCTA province={province} />
      </div>
    </article>
  );
}

/* ----------------------------- shared ----------------------------- */

function BriefStat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-3 text-center">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-xl font-bold">{value}</p>
      <p className="text-[10px] text-muted-foreground">{unit}</p>
    </div>
  );
}

function CardBlock({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="card-soft p-5">
      <h3 className="font-display font-semibold">{title}</h3>
      <dl className="mt-3 space-y-2 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between border-b border-dashed border-border/60 pb-1.5">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="font-mono font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CardBlockList({ title, items, accent }: { title: string; items: string[]; accent: "primary" | "gold" }) {
  return (
    <div className="card-soft p-5">
      <h3 className="font-display font-semibold">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-sm">
        {items.map((s) => (
          <li key={s} className="flex gap-2">
            <span className={accent === "primary" ? "text-primary" : "text-gold"}>•</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BasicCTA({ province }: { province: Province }) {
  return (
    <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6">
      <h2 className="font-display text-lg font-bold">Quan tâm đầu tư tại {province.name}?</h2>
      <p className="mt-1 text-sm text-muted-foreground">Để lại thông tin, chúng tôi sẽ kết nối với đầu mối hỗ trợ địa phương.</p>
      <Link to="/nha-dau-tu/dang-ky-quan-tam">
        <Button className="mt-4 btn-gradient">Đăng ký quan tâm <ArrowRight className="ml-2 h-4 w-4" /></Button>
      </Link>
    </div>
  );
}
