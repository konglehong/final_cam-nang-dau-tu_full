import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Award, Building2, Factory, Globe, MapPin, TrendingUp, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { PROVINCES } from "@/data/provinces";
import { getProvinceWithProfile } from "@/data/province-profiles";
import { INDUSTRIAL_PARKS, KEY_PROJECTS, POWER_PLANTS, TOURISM_ZONES } from "@/data/map-layers";
import { ARTICLES } from "@/data/content";

export const Route = createFileRoute("/tinh-thanh/$slug")({
  loader: ({ params }) => {
    const data = getProvinceWithProfile(params.slug);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Không tìm thấy tỉnh" }] };
    const { province, profile } = loaderData;
    return {
      meta: [
        { title: `${province.name} — Hồ sơ đầu tư | Cẩm nang Đầu tư Việt Nam` },
        { name: "description", content: `${profile.tagline}. GRDP ${profile.grdp} tỷ USD · FDI 2024 ${profile.fdi2024} tỷ USD · ${profile.industrialParks} KCN.` },
        { property: "og:title", content: `Hồ sơ đầu tư ${province.name}` },
        { property: "og:description", content: profile.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Không tìm thấy tỉnh</h1>
      <p className="mt-3 text-muted-foreground">Có thể slug đã đổi sau sáp nhập. Quay lại danh sách 34 tỉnh.</p>
      <Link to="/tinh-thanh"><Button className="mt-6">Về danh sách tỉnh</Button></Link>
    </div>
  ),
  component: TinhDetailPage,
});

function TinhDetailPage() {
  const { province, profile } = Route.useLoaderData();

  const localKCN = INDUSTRIAL_PARKS.filter((k) => k.province === province.name).slice(0, 6);
  const localProjects = KEY_PROJECTS.filter((p) => p.province === province.name).slice(0, 4);
  const localPower = POWER_PLANTS.filter((p) => p.province === province.name).slice(0, 4);
  const localTourism = TOURISM_ZONES.filter((t) => t.province === province.name).slice(0, 4);
  const localNews = ARTICLES.slice(0, 3);
  const sameRegion = PROVINCES.filter((p) => p.region === province.region && p.slug !== province.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`Vùng ${province.region === "bac" ? "Miền Bắc" : province.region === "trung" ? "Miền Trung" : "Miền Nam"}`}
        title={province.name}
        description={profile.tagline}
      >
        <div className="flex flex-wrap gap-2">
          <Link to="/tinh-thanh">
            <Button variant="outline" size="sm" className="bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
              <ArrowLeft className="mr-1 h-3 w-3" /> 34 tỉnh
            </Button>
          </Link>
          <Link to="/ban-do-dau-tu">
            <Button variant="outline" size="sm" className="bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
              <MapPin className="mr-1 h-3 w-3" /> Xem trên bản đồ
            </Button>
          </Link>
          <Link to="/so-sanh">
            <Button variant="outline" size="sm" className="bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
              So sánh tỉnh
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Quick stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-6">
          <Kpi icon={Globe} label="Diện tích" value={profile.area.toLocaleString()} unit="km²" />
          <Kpi icon={Users} label="Dân số" value={`${(profile.population / 1000).toFixed(2)}M`} unit="người" />
          <Kpi icon={TrendingUp} label="GRDP" value={`${profile.grdp}`} unit="tỷ USD" />
          <Kpi icon={Award} label="FDI lũy kế" value={`${profile.fdiStock}`} unit="tỷ USD" />
          <Kpi icon={Factory} label="KCN/KKT" value={`${profile.industrialParks}`} unit="khu" />
          <Kpi icon={Building2} label="PCI 2024" value={`#${profile.pciRank}`} unit={`${profile.pciScore}đ`} />
        </div>
      </section>

      {/* Lợi thế cạnh tranh + Ngành kêu gọi đầu tư */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold">Lợi thế cạnh tranh</h2>
            <ul className="space-y-3">
              {profile.strengths.map((s, i) => (
                <li key={s} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold">{i + 1}</span>
                  <span className="text-sm font-medium text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold">Ngành kêu gọi đầu tư</h2>
            <div className="flex flex-wrap gap-2">
              {profile.sectors.map((s) => (
                <span key={s} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{s}</span>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-gold/30 bg-gold/5 p-5">
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">Chính sách ưu đãi nổi bật</h3>
              <ul className="space-y-1.5 text-sm text-foreground/85">
                <li>• Thuế TNDN 10% trong 15 năm cho dự án công nghệ cao</li>
                <li>• Miễn thuế nhập khẩu thiết bị 5 năm đầu</li>
                <li>• Miễn tiền thuê đất 11-15 năm trong KCN</li>
                <li>• Hỗ trợ đào tạo lao động 50% chi phí</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Khu công nghiệp */}
      {localKCN.length > 0 && (
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold">Khu công nghiệp & KKT trọng điểm</h2>
                <p className="text-sm text-muted-foreground">{localKCN.length} khu công nghiệp tiêu biểu trên địa bàn tỉnh</p>
              </div>
              <Link to="/ban-do-dau-tu" className="hidden text-sm font-semibold text-primary hover:underline md:inline">Xem trên bản đồ →</Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {localKCN.map((k) => (
                <div key={k.id} className="rounded-lg border border-border bg-background p-4">
                  <p className="font-display font-semibold">{k.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{k.area.toLocaleString()} ha {typeof k.occupancy === "number" && `· Lấp đầy ${k.occupancy}%`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dự án tiêu biểu + Năng lượng + Du lịch */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <Block title="Dự án FDI tiêu biểu" items={localProjects.map((p) => ({ title: p.name, sub: `${p.investor} · ${p.capital} tỷ USD` }))} />
          <Block title="Năng lượng" items={localPower.map((p) => ({ title: p.name, sub: `${p.capacity.toLocaleString()} MW · ${p.type}` }))} />
          <Block title="Khu du lịch" items={localTourism.map((t) => ({ title: t.name, sub: t.unesco ? "Di sản UNESCO" : t.type }))} />
        </div>
      </section>

      {/* Tin tức */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="mb-6 font-display text-2xl font-bold">Tin tức liên quan</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {localNews.map((n) => (
              <Link key={n.slug} to="/tin-tuc/$slug" params={{ slug: n.slug }} className="group rounded-lg border border-border bg-background p-5 transition hover:border-primary/40">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{n.category}</p>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight group-hover:text-primary">{n.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Liên hệ + tỉnh cùng vùng */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl font-bold">Đầu mối hỗ trợ đầu tư</h2>
            <p className="mt-2 text-sm text-muted-foreground">Sở Kế hoạch & Đầu tư {province.name} — đầu mối tiếp nhận hồ sơ và tư vấn cho nhà đầu tư.</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm">
              <Field label="Địa chỉ" value={`${province.capital}, ${province.name}`} />
              <Field label="Hotline" value="(024) 3943 4031" />
              <Field label="Email" value="dautu@example.gov.vn" />
              <Field label="Website" value={`dpi.${province.slug}.gov.vn`} />
            </div>
            <Link to="/nha-dau-tu/dang-ky-quan-tam">
              <Button className="mt-5">Đăng ký quan tâm <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>
          <div>
            <h3 className="mb-3 font-display text-lg font-bold">Tỉnh cùng vùng</h3>
            <ul className="space-y-2">
              {sameRegion.map((p) => (
                <li key={p.slug}>
                  <Link to="/tinh-thanh/$slug" params={{ slug: p.slug }} className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 text-sm hover:border-primary/40">
                    <span className="font-medium">{p.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Kpi({ icon: Icon, label, value, unit }: { icon: typeof Globe; label: string; value: string; unit: string }) {
  return (
    <div className="bg-card p-4">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <p className="mt-2 font-display text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{unit}</p>
    </div>
  );
}

function Block({ title, items }: { title: string; items: { title: string; sub: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 font-display text-lg font-bold">{title}</h3>
      {items.length === 0 && <p className="text-sm italic text-muted-foreground">Chưa có dữ liệu nổi bật trên địa bàn.</p>}
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.title} className="rounded-md border border-border bg-card p-3">
            <p className="text-sm font-semibold">{it.title}</p>
            <p className="text-xs text-muted-foreground">{it.sub}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  );
}
