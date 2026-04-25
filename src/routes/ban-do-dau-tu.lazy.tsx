import { ClientOnly, createLazyFileRoute } from "@tanstack/react-router";
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

export const Route = createLazyFileRoute("/ban-do-dau-tu")({
  component: BanDoPage,
});

const loadMap = () => import("@/components/map/InvestmentMap");

const InvestmentMap = lazy(async () => {
  const m = await loadMap();
  return { default: m.InvestmentMap };
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
  live?: boolean;
};

const LAYERS: LayerDef[] = [
  { id: "tinh", count: 34, icon: MapPin, color: "var(--primary)", group: "admin", live: true },
  { id: "sanbay", count: 12, icon: Plane, color: "oklch(0.5 0.18 250)", group: "transport", live: true },
  { id: "cang", count: 13, icon: Ship, color: "oklch(0.4 0.12 230)", group: "transport", live: true },
  { id: "caotoc", count: 11, icon: TrainFront, color: "oklch(0.55 0.15 250)", group: "transport", live: true },
  { id: "kcn", count: 35, icon: Factory, color: "oklch(0.5 0.15 30)", group: "economic", live: true },
  { id: "dulich", count: 18, icon: Trees, color: "oklch(0.65 0.15 60)", group: "economic", live: true },
  { id: "duan", count: 15, icon: Building2, color: "oklch(0.55 0.18 145)", group: "keyProject", live: true },
  { id: "nangluong", count: 21, icon: Zap, color: "oklch(0.65 0.15 60)", group: "keyProject", live: true },
];

const REGION_VALUES = ["all", "bac", "trung", "nam"] as const;

function MapLoading({ text }: { text: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <Layers className="mx-auto mb-3 h-12 w-12 animate-pulse text-muted-foreground/40" />
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function BanDoPage() {
  const { lang } = useLanguage();
  const t = useMemo(() => getMapStrings(lang), [lang]);

  const regionOptions = useMemo(
    () => [
      { value: "all" as const, label: t.regionAll },
      { value: "bac" as const, label: t.regionNorth },
      { value: "trung" as const, label: t.regionCentral },
      { value: "nam" as const, label: t.regionSouth },
    ],
    [t],
  );

  const groupLabels: Record<GroupKey, string> = useMemo(
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

  useEffect(() => {
    const start = () => {
      void loadMap();
    };
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
    for (const layer of LAYERS) {
      map[layer.group].push(layer);
    }
    return map;
  }, []);

  const activeCount = Object.values(active).filter(Boolean).length;
  const totalPoints = LAYERS.filter((layer) => active[layer.id]).reduce(
    (sum, layer) => sum + layer.count,
    0,
  );

  const toggle = (id: LayerId) =>
    setActive((state) => ({ ...state, [id]: !state[id] }));

  const toggleAll = (value: boolean) =>
    setActive(
      LAYERS.reduce(
        (acc, layer) => ({ ...acc, [layer.id]: value }),
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t.filterRegion}
            </span>
            {regionOptions.map((item) => (
              <Button
                key={item.value}
                variant={region === item.value ? "default" : "outline"}
                size="sm"
                onClick={() => setRegion(item.value)}
              >
                {item.label}
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-muted shadow-[var(--shadow-card)] lg:aspect-auto lg:min-h-[640px]">
            <ClientOnly fallback={<MapLoading text={t.loadingMap} />}>
              <Suspense fallback={<MapLoading text={t.loadingMap} />}>
                <InvestmentMap layers={mapLayers} region={region} />
              </Suspense>
            </ClientOnly>

            <div
              className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-md border border-border/80 bg-background/95 p-3 shadow-[var(--shadow-elegant)] backdrop-blur sm:right-auto sm:max-w-xs"
              style={{ zIndex: 500 }}
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {t.legendShowing}
              </p>
              <ul className="space-y-1.5">
                {LAYERS.filter((layer) => active[layer.id]).map((layer) => {
                  const Icon = layer.icon;
                  const meta = t.layer[layer.id];
                  return (
                    <li key={layer.id} className="flex items-center gap-2 text-xs">
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-sm"
                        style={{
                          backgroundColor: `color-mix(in oklab, ${layer.color} 18%, transparent)`,
                          color: layer.color,
                        }}
                      >
                        <Icon className="h-3 w-3" />
                      </span>
                      <span className="flex-1 text-foreground">{meta.label}</span>
                      <span className="font-mono text-muted-foreground">
                        {layer.count}
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
                    {groupLabels[group]}
                  </p>
                  <ul className="space-y-1">
                    {items.map((layer) => {
                      const Icon = layer.icon;
                      const isOn = active[layer.id];
                      const meta = t.layer[layer.id];
                      return (
                        <li key={layer.id}>
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
                                backgroundColor: `color-mix(in oklab, ${layer.color} 15%, transparent)`,
                                color: layer.color,
                              }}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="flex items-center gap-1.5 truncate text-sm font-medium text-foreground">
                                {meta.label}
                                {!layer.live && (
                                  <span className="rounded-sm bg-muted px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                                    {t.comingSoon}
                                  </span>
                                )}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {meta.description} · {layer.count}
                              </p>
                            </div>
                            <Switch
                              checked={isOn}
                              onCheckedChange={() => toggle(layer.id)}
                              aria-label={`Toggle ${meta.label}`}
                              disabled={!layer.live}
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
