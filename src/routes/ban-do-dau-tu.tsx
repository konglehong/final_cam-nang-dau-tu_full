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

type LayerDef = {
  id: LayerId;
  label: string;
  description: string;
  count: number;
  icon: typeof Factory;
  color: string;
  group: "Hành chính" | "Khu kinh tế" | "Hạ tầng giao thông" | "Dự án trọng điểm";
  live?: boolean; // có data thật trên map
};

const LAYERS: LayerDef[] = [
  {
    id: "tinh",
    label: "34 Tỉnh thành",
    description: "Sau sáp nhập 01/07/2025",
    count: 34,
    icon: MapPin,
    color: "var(--primary)",
    group: "Hành chính",
    live: true,
  },
  {
    id: "sanbay",
    label: "Sân bay quốc tế",
    description: "Đang khai thác & xây dựng",
    count: 12,
    icon: Plane,
    color: "oklch(0.5 0.18 250)",
    group: "Hạ tầng giao thông",
    live: true,
  },
  {
    id: "cang",
    label: "Cảng biển lớn",
    description: "Loại đặc biệt & loại I",
    count: 13,
    icon: Ship,
    color: "oklch(0.4 0.12 230)",
    group: "Hạ tầng giao thông",
    live: true,
  },
  {
    id: "kcn",
    label: "Khu công nghiệp",
    description: "418 KCN (đang cập nhật)",
    count: 418,
    icon: Factory,
    color: "var(--primary)",
    group: "Khu kinh tế",
  },
  {
    id: "dulich",
    label: "Khu du lịch trọng điểm",
    description: "Cụm du lịch quốc gia",
    count: 47,
    icon: Trees,
    color: "var(--gold)",
    group: "Khu kinh tế",
  },
  {
    id: "caotoc",
    label: "Cao tốc & vành đai",
    description: "Mạng lưới cao tốc",
    count: 41,
    icon: TrainFront,
    color: "oklch(0.55 0.15 250)",
    group: "Hạ tầng giao thông",
  },
  {
    id: "duan",
    label: "Dự án trọng điểm",
    description: "Top dự án FDI tỷ USD",
    count: 156,
    icon: Building2,
    color: "oklch(0.5 0.18 145)",
    group: "Dự án trọng điểm",
  },
  {
    id: "nangluong",
    label: "Nhà máy năng lượng",
    description: "Điện gió, mặt trời, LNG",
    count: 89,
    icon: Zap,
    color: "oklch(0.65 0.15 60)",
    group: "Dự án trọng điểm",
  },
];

const REGIONS = [
  { value: "all", label: "Toàn quốc" },
  { value: "bac", label: "Miền Bắc" },
  { value: "trung", label: "Miền Trung" },
  { value: "nam", label: "Miền Nam" },
];

function BanDoPage() {
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
  const [region, setRegion] = useState<"all" | "bac" | "trung" | "nam">("all");

  // Prefetch chunk InvestmentMap ngay khi page mount (song song với render UI khác)
  // → khi React render Suspense, chunk thường đã sẵn sàng → giảm thời gian thấy bản đồ.
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
    const map: Record<string, LayerDef[]> = {};
    for (const l of LAYERS) {
      (map[l.group] ||= []).push(l);
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
        eyebrow="Bản đồ tương tác"
        title="Bản đồ đầu tư Việt Nam"
        description="Khám phá 34 tỉnh thành sau sáp nhập với dữ liệu kinh tế, hạ tầng, chính sách ưu đãi và cơ hội đầu tư cập nhật theo thời gian thực."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Region filter bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Vùng:
            </span>
            {REGIONS.map((r) => (
              <Button
                key={r.value}
                variant={region === r.value ? "default" : "outline"}
                size="sm"
                onClick={() => setRegion(r.value as typeof region)}
              >
                {r.label}
              </Button>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{activeCount}</span> lớp ·{" "}
            <span className="font-semibold text-foreground">
              {totalPoints.toLocaleString("vi-VN")}
            </span>{" "}
            điểm hiển thị
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
                      Đang tải bản đồ…
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
                Đang hiển thị
              </p>
              <ul className="space-y-1.5">
                {LAYERS.filter((l) => active[l.id]).map((l) => {
                  const Icon = l.icon;
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
                      <span className="flex-1 text-foreground">{l.label}</span>
                      <span className="font-mono text-muted-foreground">
                        {l.count}
                      </span>
                    </li>
                  );
                })}
                {activeCount === 0 && (
                  <li className="text-xs italic text-muted-foreground">
                    Bật lớp ở panel bên phải để hiển thị
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
                  Lớp dữ liệu
                </h2>
                <p className="text-xs text-muted-foreground">
                  Bật/tắt để lọc bản đồ
                </p>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs"
                  onClick={() => toggleAll(true)}
                >
                  <Eye className="mr-1 h-3 w-3" /> Tất cả
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs"
                  onClick={() => toggleAll(false)}
                >
                  <EyeOff className="mr-1 h-3 w-3" /> Ẩn
                </Button>
              </div>
            </div>

            <div className="max-h-[640px] overflow-y-auto p-2">
              {Object.entries(grouped).map(([group, items]) => (
                <div key={group} className="mb-2">
                  <p className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-gold">
                    {group}
                  </p>
                  <ul className="space-y-1">
                    {items.map((l) => {
                      const Icon = l.icon;
                      const isOn = active[l.id];
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
                                {l.label}
                                {!l.live && (
                                  <span className="rounded-sm bg-muted px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                                    Sắp có
                                  </span>
                                )}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {l.description} · {l.count}
                              </p>
                            </div>
                            <Switch
                              checked={isOn}
                              onCheckedChange={() => toggle(l.id)}
                              aria-label={`Toggle ${l.label}`}
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
