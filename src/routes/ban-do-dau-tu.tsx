import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

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
  color: string; // oklch reference via css var name
  group: "Khu kinh tế" | "Hạ tầng giao thông" | "Dự án trọng điểm";
};

const LAYERS: LayerDef[] = [
  {
    id: "kcn",
    label: "Khu công nghiệp",
    description: "418 KCN đang hoạt động",
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
    id: "cang",
    label: "Cảng biển & ICD",
    description: "Cảng nước sâu, cảng cạn",
    count: 34,
    icon: Ship,
    color: "var(--navy)",
    group: "Hạ tầng giao thông",
  },
  {
    id: "sanbay",
    label: "Sân bay",
    description: "Quốc tế & nội địa",
    count: 22,
    icon: Plane,
    color: "var(--accent)",
    group: "Hạ tầng giao thông",
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
    kcn: true,
    cang: true,
    sanbay: true,
    caotoc: false,
    duan: true,
    nangluong: false,
    dulich: false,
  });
  const [region, setRegion] = useState("all");

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
                onClick={() => setRegion(r.value)}
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-gradient-to-br from-muted/40 to-muted shadow-[var(--shadow-card)] lg:aspect-auto lg:min-h-[640px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Layers className="mx-auto mb-3 h-12 w-12 text-muted-foreground/40" />
                <p className="font-display text-lg font-semibold text-muted-foreground">
                  Bản đồ Việt Nam
                </p>
                <p className="mt-1 text-sm text-muted-foreground/70">
                  SVG/Mapbox — 34 tỉnh thành color-coded
                </p>
              </div>
            </div>

            {/* In-map legend */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-md border border-border/80 bg-background/95 p-3 shadow-[var(--shadow-elegant)] backdrop-blur">
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
                              <p className="truncate text-sm font-medium text-foreground">
                                {l.label}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {l.description} · {l.count}
                              </p>
                            </div>
                            <Switch
                              checked={isOn}
                              onCheckedChange={() => toggle(l.id)}
                              aria-label={`Toggle ${l.label}`}
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
