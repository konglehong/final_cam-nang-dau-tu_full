// Trang Bản đồ đầu tư — i18n đầy đủ
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import {
  Factory,
  Ship,
  Plane,
  TrainFront,
  Building2,
  Zap,
  Trees,
  Eye,
  EyeOff,
  Layers,
  MapPin,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/lib/i18n";
import { getMapStrings } from "@/lib/map-i18n";

// Hàm import chia sẻ — tái sử dụng khi prefetch để bundler chỉ tạo 1 chunk
const loadMap = () => import("@/components/map/InvestmentMap");

const InvestmentMap = lazy(async () => {
  if (typeof window === "undefined") {
    const Stub = (() => <></>) as unknown as typeof import("@/components/map/InvestmentMap").InvestmentMap;
    return { default: Stub };
  }
  const m = await loadMap();
  return { default: m.InvestmentMap };
});

export const Route = createFileRoute("/ban-do-dau-tu")({
  head: () => ({
    meta: [
      { title: "Bản đồ đầu tư Việt Nam — 34 tỉnh thành tương tác" },
      {
        name: "description",
        content:
          "Bản đồ tương tác hiển thị dữ liệu kinh tế, FDI, khu công nghiệp và cơ hội đầu tư của 34 tỉnh thành Việt Nam sau sáp nhập.",
      },
      { property: "og:title", content: "Bản đồ đầu tư Việt Nam tương tác" },
      {
        property: "og:description",
        content: "Khám phá 34 tỉnh thành qua bản đồ dữ liệu kinh tế trực quan.",
      },
    ],
  }),
  component: BanDoPage,
});

type LayerId =
  | "tinh"
  | "kcn"
  | "cang"
  | "sanbay"
  | "caotoc"
  | "duan"
  | "nangluong"
  | "dulich";

type GroupKey = "admin" | "economic" | "transport" | "keyProject";

type LayerDef = {
  id: LayerId;
  count: number;
  icon: typeof Factory;
  color: string;
  group: GroupKey;
  live?: boolean; // có data thật trên map
};

const LAYERS: LayerDef[] = [
  {
    id: "tinh",
    count: 34,
    icon: MapPin,
    color: "var(--primary)",
    group: "admin",
    live: true,
  },
  {
    id: "sanbay",
    count: 12,
    icon: Plane,
    color: "oklch(0.5 0.18 250)",
    group: "transport",
    live: true,
  },
  {
    id: "cang",
    count: 13,
    icon: Ship,
    color: "oklch(0.4 0.12 230)",
    group: "transport",
    live: true,
  },
  {
    id: "kcn",
    count: 418,
    icon: Factory,
    color: "var(--primary)",
    group: "economic",
  },
  {
    id: "dulich",
    count: 47,
    icon: Trees,
    color: "var(--gold)",
    group: "economic",
  },
  {
    id: "caotoc",
    count: 41,
    icon: TrainFront,
    color: "oklch(0.55 0.15 250)",
    group: "transport",
  },
  {
    id: "duan",
    count: 156,
    icon: Building2,
    color: "oklch(0.5 0.18 145)",
    group: "keyProject",
  },
  {
    id: "nangluong",
    count: 89,
    icon: Zap,
    color: "oklch(0.65 0.15 60)",
    group: "keyProject",
  },
];

const REGION_VALUES = ["all", "bac", "trung", "nam"] as const;

function BanDoPage() {
  const { lang } = useLanguage();
  const t = useMemo(() => getMapStrings(lang), [lang]);

  const regions = useMemo(
    () => [
      { value: "all" as const, label: t.regionAll },
      { value: "bac" as const, label: t.regionNorth },
      { value: "trung" as const, label: t.regionCentral },
      { value: "nam" as const, label: t.regionSouth },
    ],
    [t],
  );

  const GROUP_LABEL: Record<GroupKey, string> = useMemo(
    () => ({
      admin: t.groupAdmin,
      economic: t.groupEconomic,
      transport: t.groupTransport,
      keyProject: t.groupKeyProject,
    }),
    [t],
  );

  const [active, setActive] = useState<Record<LayerId, boolean>>({
    tinh: true,
    sanbay: true,
    cang: true,
    kcn: false,
    caotoc: false,
    duan: false,
    nangluong: false,
    dulich: false,
  });
  const [region, setRegion] = useState<(typeof REGION_VALUES)[number]>("all");

  // Prefetch chunk InvestmentMap ngay khi page mount
  useEffect(() => {
    const start = () => {
      void loadMap();
    };
    if (typeof window === "undefined") return;
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(start);
    } else {
      setTimeout(start, 0);
    }
  }, []);

  const grouped = useMemo(() => {
    const map: Record<GroupKey, LayerDef[]> = {
      admin: [],
      economic: [],
      transport: [],
      keyProject: [],
    };
    for (const l of LAYERS) {
      map[l.group].push(l);
    }
    return map;
  }, []);

  const activeCount = Object.values(active).filter(Boolean).length;
  const totalPoints = LAYERS.filter((l) => active[l.id]).reduce(
    (sum, l) => sum + l.count,
    0,
  );

  const toggle = (id: LayerId) =>
    setActive((s) => ({ ...s, [id]: !s[id] }));

  const toggleAll = (value: boolean) =>
    setActive(
      LAYERS.reduce(
        (acc, l) => ({ ...acc, [l.id]: value }),
        {} as Record<LayerId, boolean>,
      ),
    );

  const mapLayers = {
    provinces: active.tinh,
    airports: active.sanbay,
    seaports: active.cang,
  };

  return (
    <>
      <PageHero
        eyebrow={t.pageHeroEyebrow}
        title={t.pageHeroTitle}
        description={t.pageHeroDesc}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Region filter bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t.filterRegion}
            </span>
            {regions.map((r) => (
              <Button
                key={r.value}
                variant={region === r.value ? "default" : "outline"}
                size="sm"
                onClick={() => setRegion(r.value)}
              >
                {r.label}
              </Button>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{activeCount}</span> {t.layersCountSuffix} ·{" "}
            <span className="font-semibold text-foreground">
              {totalPoints.toLocaleString(t.numberLocale)}
            </span>{" "}
            {t.pointsShownSuffix}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Map area */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-muted shadow-[var(--shadow-card)] lg:aspect-auto lg:min-h-[640px]">
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Layers className="mx-auto mb-3 h-12 w-12 animate-pulse text-muted-foreground/40" />
                    <p className="text-sm text-muted-foreground">
                      {t.loadingMap}
                    </p>
                  </div>
                </div>
              }
            >
              <InvestmentMap layers={mapLayers} region={region} />
            </Suspense>

            {/* In-map legend (overlay above Leaflet) */}
            <div
              className="pointer-events-none absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-md border border-border/80 bg-background/95 p-3 shadow-[var(--shadow-elegant)] backdrop-blur"
              style={{ zIndex: 500 }}
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {t.legendShowing}
              </p>
              <ul className="space-y-1.5">
                {LAYERS.filter((l) => active[l.id]).map((l) => {
                  const Icon = l.icon;
                  const meta = t.layer[l.id];
                  return (
                    <li key={l.id} className="flex items-center gap-2 text-xs">
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-sm"
                        style={{
                          backgroundColor: `color-mix(in oklab, ${l.color} 18%, transparent)`,
                          color: l.color,
                        }}
                      >
                        <Icon className="h-3 w-3" />
                      </span>
                      <span className="flex-1 text-foreground">{meta.label}</span>
                      <span className="font-mono text-muted-foreground">
                        {l.count}
                      </span>
                    </li>
                  );
                })}
                {activeCount === 0 && (
                  <li className="text-xs italic text-muted-foreground">
                    {t.legendEmpty}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Layer filter sidebar */}
          <aside className="rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <h2 className="font-display text-base font-bold text-foreground">
                  {t.sidebarTitle}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {t.sidebarSubtitle}
                </p>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs"
                  onClick={() => toggleAll(true)}
                >
                  <Eye className="mr-1 h-3 w-3" /> {t.toggleAll}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs"
                  onClick={() => toggleAll(false)}
                >
                  <EyeOff className="mr-1 h-3 w-3" /> {t.toggleNone}
                </Button>
              </div>
            </div>

            <div className="max-h-[640px] overflow-y-auto p-2">
              {(Object.entries(grouped) as [GroupKey, LayerDef[]][]).map(([group, items]) => (
                <div key={group} className="mb-2">
                  <p className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-gold">
                    {GROUP_LABEL[group]}
                  </p>
                  <ul className="space-y-1">
                    {items.map((l) => {
                      const Icon = l.icon;
                      const isOn = active[l.id];
                      const meta = t.layer[l.id];
                      return (
                        <li key={l.id}>
                          <label
                            className={`flex cursor-pointer items-center gap-3 rounded-md border p-3 transition-all ${
                              isOn
                                ? "border-primary/30 bg-primary/5"
                                : "border-transparent hover:bg-muted/50"
                            }`}
                          >
                            <span
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                              style={{
                                backgroundColor: `color-mix(in oklab, ${l.color} 15%, transparent)`,
                                color: l.color,
                              }}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="flex items-center gap-1.5 truncate text-sm font-medium text-foreground">
                                {meta.label}
                                {!l.live && (
                                  <span className="rounded-sm bg-muted px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                                    {t.comingSoon}
                                  </span>
                                )}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {meta.description} · {l.count}
                              </p>
                            </div>
                            <Switch
                              checked={isOn}
                              onCheckedChange={() => toggle(l.id)}
                              aria-label={`Toggle ${meta.label}`}
                              disabled={!l.live}
                            />
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
