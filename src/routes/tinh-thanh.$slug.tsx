import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getProvinceWithProfile } from "@/data/province-profiles";
import { getTier } from "@/data/province-tiers";
import { PremiumEditorial, PremiumCinematic, PremiumShowcase } from "@/components/province/PremiumLayouts";
import { AdvancedDossier, AdvancedSpotlight, AdvancedCompactPro } from "@/components/province/AdvancedLayouts";
import { BasicFactsheet, BasicBrief, BasicCard } from "@/components/province/BasicLayouts";

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
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Có lỗi xảy ra</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
      <Link to="/tinh-thanh"><Button className="mt-6">Về danh sách tỉnh</Button></Link>
    </div>
  ),
  component: TinhDetailDispatcher,
});

function TinhDetailDispatcher() {
  const data = Route.useLoaderData();
  if (!data) return <div data-testid="no-data">NO DATA</div>;
  const { province, profile } = data;
  const { variant } = getTier(province.slug);

  return (
    <div>
      <div data-testid="dispatcher-debug" style={{ padding: 20, background: "yellow", color: "black", fontWeight: "bold" }}>
        DISPATCHER OK — slug={province.slug} variant={variant}
      </div>
      {(() => {
        switch (variant) {
          case "editorial":   return <PremiumEditorial   province={province} profile={profile} />;
          case "cinematic":   return <PremiumCinematic   province={province} profile={profile} />;
          case "showcase":    return <PremiumShowcase    province={province} profile={profile} />;
          case "dossier":     return <AdvancedDossier    province={province} profile={profile} />;
          case "spotlight":   return <AdvancedSpotlight  province={province} profile={profile} />;
          case "compact-pro": return <AdvancedCompactPro province={province} profile={profile} />;
          case "factsheet":   return <BasicFactsheet     province={province} profile={profile} />;
          case "brief":       return <BasicBrief         province={province} profile={profile} />;
          case "card":        return <BasicCard          province={province} profile={profile} />;
          default:            return <BasicFactsheet     province={province} profile={profile} />;
        }
      })()}
    </div>
  );
}
