// PREMIUM tier — 3 variants: editorial, cinematic, showcase.
// Đẳng cấp cao nhất: hero lớn, gradient mesh, animation, infographic.

import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, Building2, Factory, Globe, MapPin, Quote, Sparkles, TrendingUp, Users } from "lucide-react";
import type { Province } from "@/data/provinces";
import type { ProvinceProfile } from "@/data/province-profiles";
import { INDUSTRIAL_PARKS, KEY_PROJECTS, POWER_PLANTS, TOURISM_ZONES } from "@/data/map-layers";
import { ARTICLES } from "@/data/content";
import { Button } from "@/components/ui/button";

type Props = { province: Province; profile: ProvinceProfile };

const REGION_LABEL = { bac: "Miền Bắc", trung: "Miền Trung", nam: "Miền Nam" } as const;

/* ----------------------------- shared bits ----------------------------- */
function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function ParallaxHero({ children, intensity = 0.3 }: { children: React.ReactNode; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY * intensity;
      ref.current.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [intensity]);
  return <div ref={ref}>{children}</div>;
}

function localData(province: Province) {
  return {
    kcn: INDUSTRIAL_PARKS.filter((k) => k.province === province.name).slice(0, 6),
    projects: KEY_PROJECTS.filter((p) => p.province === province.name).slice(0, 5),
    power: POWER_PLANTS.filter((p) => p.province === province.name).slice(0, 4),
    tourism: TOURISM_ZONES.filter((t) => t.province === province.name).slice(0, 4),
    news: ARTICLES.slice(0, 4),
  };
}

/* ============================================================
   1. EDITORIAL — kiểu tạp chí cao cấp, typography lớn
   ============================================================ */
export function PremiumEditorial({ province, profile }: Props) {
  const d = localData(province);
  const fdi = useCountUp(profile.fdi2024);
  const grdp = useCountUp(profile.grdp);

  return (
    <article className="bg-background">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-mesh opacity-80" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {REGION_LABEL[province.region]} · Hồ sơ đầu tư
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-gradient">{province.name}</span>
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl leading-snug text-foreground/80 md:text-2xl">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/nha-dau-tu/dang-ky-quan-tam"><Button size="lg" className="btn-gradient">Đăng ký quan tâm <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link to="/ban-do-dau-tu"><Button size="lg" variant="outline">Xem trên bản đồ</Button></Link>
          </div>
        </div>
      </header>

      {/* PULL-QUOTE BIG NUMBERS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:gap-16">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">FDI 2024</p>
            <p className="font-display text-7xl font-bold leading-none text-gradient md:text-8xl">{fdi.toFixed(1)}</p>
            <p className="text-sm text-muted-foreground">tỷ USD vốn đăng ký</p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">GRDP</p>
            <p className="font-display text-7xl font-bold leading-none md:text-8xl">{grdp.toFixed(0)}<span className="text-3xl text-muted-foreground"> tỷ USD</span></p>
            <p className="text-sm text-muted-foreground">tăng trưởng {profile.grdpGrowth}% / năm</p>
          </div>
        </div>
      </section>

      {/* OPENING NARRATIVE */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Quote className="h-10 w-10 text-primary/40" />
        <p className="mt-4 font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
          "{province.name} đang định hình lại bản đồ đầu tư Việt Nam — nơi quy hoạch dài hạn, hạ tầng đồng bộ và chính sách
          ưu đãi cùng hội tụ để mở ra một thập kỷ tăng trưởng mới."
        </p>
        <p className="mt-6 text-sm text-muted-foreground">— Hồ sơ Cẩm nang Đầu tư Việt Nam</p>
      </section>

      {/* COLUMN — strengths + sectors */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Lợi thế cạnh tranh</p>
            <h2 className="mt-2 font-display text-4xl font-bold">Vì sao chọn {province.name}?</h2>
            <ul className="mt-8 space-y-6">
              {profile.strengths.map((s, i) => (
                <li key={s} className="flex gap-5">
                  <span className="font-display text-4xl font-bold text-primary/30">0{i + 1}</span>
                  <p className="pt-2 text-base font-medium text-foreground">{s}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Ngành mũi nhọn</p>
            <h2 className="mt-2 font-display text-4xl font-bold">Định hướng đầu tư</h2>
            <div className="mt-8 grid gap-3">
              {profile.sectors.map((s, i) => (
                <div key={s} className="card-soft p-5">
                  <p className="font-mono text-xs text-muted-foreground">#{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 font-display text-xl font-semibold">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY KCN */}
      {d.kcn.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Hệ sinh thái KCN</p>
              <h2 className="mt-2 font-display text-4xl font-bold">{profile.industrialParks} khu công nghiệp & KKT</h2>
            </div>
            <Link to="/ban-do-dau-tu" className="hidden text-sm font-semibold text-primary hover:underline md:inline">Khám phá bản đồ →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.kcn.map((k, i) => (
              <div key={k.id} className="card-soft overflow-hidden">
                <div className="h-32 bg-mesh" />
                <div className="p-5">
                  <p className="font-mono text-[10px] text-muted-foreground">KCN #{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{k.name}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{k.area.toLocaleString()} ha · {typeof k.occupancy === "number" ? `lấp đầy ${k.occupancy}%` : "đang triển khai"}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <RelatedNews news={d.news} />
      <ContactBlock province={province} />
    </article>
  );
}

/* ============================================================
   2. CINEMATIC — hero full-bleed gradient mesh, KPI counter
   ============================================================ */
export function PremiumCinematic({ province, profile }: Props) {
  const d = localData(province);
  return (
    <article className="bg-background">
      {/* CINEMATIC HERO */}
      <header className="relative h-[88vh] min-h-[640px] overflow-hidden">
        <ParallaxHero intensity={0.25}>
          <div className="absolute inset-0 bg-mesh" />
        </ParallaxHero>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary animate-fade-soft">
            {REGION_LABEL[province.region]}
          </p>
          <h1 className="mt-4 font-display text-6xl font-bold leading-[0.95] md:text-8xl lg:text-9xl animate-slide-up">
            {province.name}
          </h1>
          <p className="mt-6 max-w-3xl font-display text-2xl text-foreground/70 animate-fade-up md:text-3xl">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
            <Link to="/nha-dau-tu/dang-ky-quan-tam"><Button size="lg" className="btn-gradient">Bắt đầu hành trình đầu tư</Button></Link>
            <Link to="/so-sanh"><Button size="lg" variant="outline">So sánh với tỉnh khác</Button></Link>
          </div>
        </div>
      </header>

      {/* COUNTER STRIP */}
      <CounterStrip profile={profile} />

      {/* SECTORS — large cards */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Ngành đầu tư trọng điểm</p>
        <h2 className="mt-2 font-display text-5xl font-bold">Cơ hội mở ra ở đâu?</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {profile.sectors.map((s, i) => (
            <div key={s} className="card-soft group relative overflow-hidden p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mesh opacity-50 transition group-hover:scale-110" />
              <Sparkles className="relative h-6 w-6 text-primary" />
              <p className="relative mt-2 font-mono text-xs text-muted-foreground">Trụ cột {i + 1}</p>
              <h3 className="relative mt-2 font-display text-2xl font-semibold">{s}</h3>
              <p className="relative mt-3 text-sm text-muted-foreground">
                Ưu tiên thu hút FDI chất lượng cao, tích hợp chuỗi cung ứng toàn cầu và đào tạo nhân lực chuyên sâu.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STRENGTHS — alternating */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl space-y-16 px-6 py-24">
          {profile.strengths.map((s, i) => (
            <div key={s} className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2">
                <div className="flex h-48 items-center justify-center rounded-2xl bg-mesh">
                  <span className="font-display text-7xl font-bold text-primary/40">0{i + 1}</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Lợi thế #{i + 1}</p>
                <h3 className="mt-2 font-display text-3xl font-bold">{s}</h3>
                <p className="mt-3 text-muted-foreground">Yếu tố chiến lược tạo nên sức hút riêng biệt của {province.name} so với các địa phương khác trong vùng.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectsTimeline projects={d.projects} />
      <RelatedNews news={d.news} />
      <ContactBlock province={province} />
    </article>
  );
}

/* ============================================================
   3. SHOWCASE — gallery + timeline + infographic
   ============================================================ */
export function PremiumShowcase({ province, profile }: Props) {
  const d = localData(province);
  return (
    <article className="bg-background">
      <header className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[2fr_1fr] lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{REGION_LABEL[province.region]}</p>
            <h1 className="mt-4 font-display text-6xl font-bold md:text-7xl">{province.name}</h1>
            <p className="mt-5 max-w-2xl text-xl text-foreground/75">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/nha-dau-tu/dang-ky-quan-tam"><Button size="lg" className="btn-gradient">Đăng ký quan tâm</Button></Link>
              <Link to="/ban-do-dau-tu"><Button size="lg" variant="outline"><MapPin className="mr-2 h-4 w-4" /> Bản đồ</Button></Link>
            </div>
          </div>
          {/* INFOGRAPHIC PANEL */}
          <div className="card-soft p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Snapshot 2024</p>
            <div className="mt-4 space-y-4">
              <BarRow label="FDI 2024" value={profile.fdi2024} max={5} unit="tỷ USD" />
              <BarRow label="FDI lũy kế" value={profile.fdiStock} max={90} unit="tỷ USD" />
              <BarRow label="GRDP" value={profile.grdp} max={100} unit="tỷ USD" />
              <BarRow label="Xuất khẩu" value={profile.exports} max={60} unit="tỷ USD" />
              <BarRow label="PCI 2024" value={profile.pciScore} max={75} unit="điểm" />
            </div>
          </div>
        </div>
      </header>

      <CounterStrip profile={profile} />

      {/* SHOWCASE GRID — projects */}
      {d.projects.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Dự án nổi bật</p>
          <h2 className="mt-2 font-display text-4xl font-bold">Tâm điểm dòng vốn FDI</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {d.projects.map((p, i) => (
              <div key={p.name} className="card-soft overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${i % 3 === 0 ? "from-primary/30 to-primary-glow/30" : i % 3 === 1 ? "from-gold/30 to-primary/20" : "from-primary-glow/30 to-gold/20"}`} />
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">{p.investor}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.capital} tỷ USD · {p.sector}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <ProjectsTimeline projects={d.projects} />

      {/* TOURISM showcase */}
      {d.tourism.length > 0 && (
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Du lịch & văn hóa</p>
            <h2 className="mt-2 font-display text-4xl font-bold">Điểm đến mở ra cơ hội</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {d.tourism.map((t) => (
                <div key={t.name} className="card-soft p-5">
                  <p className="font-display text-lg font-semibold">{t.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.unesco ? "🏛️ Di sản UNESCO" : t.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedNews news={d.news} />
      <ContactBlock province={province} />
    </article>
  );
}

/* ----------------------------- shared blocks ----------------------------- */

function CounterStrip({ profile }: { profile: ProvinceProfile }) {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-6">
        <CounterCell icon={Globe} label="Diện tích" value={profile.area.toLocaleString()} unit="km²" />
        <CounterCell icon={Users} label="Dân số" value={`${(profile.population / 1000).toFixed(2)}M`} unit="người" />
        <CounterCell icon={TrendingUp} label="GRDP" value={`${profile.grdp}`} unit="tỷ USD" />
        <CounterCell icon={Award} label="FDI lũy kế" value={`${profile.fdiStock}`} unit="tỷ USD" />
        <CounterCell icon={Factory} label="KCN" value={`${profile.industrialParks}`} unit="khu" />
        <CounterCell icon={Building2} label="PCI 2024" value={`#${profile.pciRank}`} unit={`${profile.pciScore}đ`} />
      </div>
    </section>
  );
}

function CounterCell({ icon: Icon, label, value, unit }: { icon: typeof Globe; label: string; value: string; unit: string }) {
  return (
    <div className="bg-card p-6">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <p className="mt-3 font-display text-3xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{unit}</p>
    </div>
  );
}

function BarRow({ label, value, max, unit }: { label: string; value: number; max: number; unit: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className="font-display font-semibold">{value} <span className="text-muted-foreground">{unit}</span></span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundImage: "var(--gradient-primary)" }} />
      </div>
    </div>
  );
}

function ProjectsTimeline({ projects }: { projects: ReturnType<typeof localData>["projects"] }) {
  if (projects.length === 0) return null;
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Lộ trình triển khai</p>
      <h2 className="mt-2 font-display text-4xl font-bold">Timeline dự án trọng điểm</h2>
      <ol className="relative mt-10 space-y-8 border-l border-border pl-8">
        {projects.map((p, i) => (
          <li key={p.name} className="relative">
            <span className="absolute -left-[35px] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-mono text-[10px] font-bold text-primary-foreground">{i + 1}</span>
            <p className="font-mono text-xs text-muted-foreground">{p.investor}</p>
            <h3 className="font-display text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.capital} tỷ USD · {p.sector}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function RelatedNews({ news }: { news: typeof ARTICLES }) {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Theo dòng sự kiện</p>
        <h2 className="mt-2 font-display text-4xl font-bold">Tin tức liên quan</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {news.map((n) => (
            <Link key={n.slug} to="/tin-tuc/$slug" params={{ slug: n.slug }} className="card-soft block p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{n.category}</p>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug">{n.title}</h3>
              <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{n.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ province }: { province: Province }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="card-soft relative overflow-hidden p-10 md:p-14">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mesh opacity-60" />
        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Sẵn sàng đầu tư?</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold md:text-5xl">Kết nối ngay với đầu mối hỗ trợ tại {province.name}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">Đội ngũ chuyên gia sẽ tư vấn quy trình, ưu đãi và mặt bằng phù hợp dự án của bạn trong vòng 48 giờ.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/nha-dau-tu/dang-ky-quan-tam"><Button size="lg" className="btn-gradient">Đăng ký quan tâm <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link to="/lien-he"><Button size="lg" variant="outline">Liên hệ tư vấn</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
