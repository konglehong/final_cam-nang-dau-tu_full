import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { PROVINCES } from "@/data/provinces";
import { PROVINCE_PROFILES, type ProvinceProfile } from "@/data/province-profiles";
import { fmtNumber } from "@/lib/format";
import { ArrowRight, Plus, X } from "lucide-react";

export const Route = createFileRoute("/so-sanh")({
  head: () => ({
    meta: [
      { title: "So sánh tỉnh thành — Công cụ ra quyết định đầu tư" },
      {
        name: "description",
        content:
          "Công cụ so sánh đa chiều 2-4 tỉnh thành trên các tiêu chí kinh tế, hạ tầng, FDI, PCI và xuất khẩu.",
      },
      { property: "og:title", content: "Công cụ so sánh tỉnh — Cẩm nang Đầu tư" },
      {
        property: "og:description",
        content: "Chọn 2-4 tỉnh và so sánh trực quan trên 10+ tiêu chí.",
      },
    ],
  }),
  component: SoSanhPage,
});

type Metric = {
  key: keyof ProvinceProfile;
  label: string;
  unit: string;
  digits?: number;
  better: "higher" | "lower";
  group: "kinhte" | "fdi" | "hatang" | "canhtranh";
};

const METRICS: Metric[] = [
  { key: "area", label: "Diện tích", unit: "km²", digits: 0, better: "higher", group: "kinhte" },
  { key: "population", label: "Dân số", unit: "nghìn", digits: 0, better: "higher", group: "kinhte" },
  { key: "grdp", label: "GRDP", unit: "tỷ USD", digits: 1, better: "higher", group: "kinhte" },
  { key: "grdpGrowth", label: "Tăng trưởng GRDP", unit: "%", digits: 1, better: "higher", group: "kinhte" },
  { key: "exports", label: "Xuất khẩu", unit: "tỷ USD", digits: 1, better: "higher", group: "kinhte" },
  { key: "fdiStock", label: "FDI lũy kế", unit: "tỷ USD", digits: 1, better: "higher", group: "fdi" },
  { key: "fdi2024", label: "FDI 2024", unit: "tỷ USD", digits: 2, better: "higher", group: "fdi" },
  { key: "industrialParks", label: "Số KCN", unit: "khu", digits: 0, better: "higher", group: "hatang" },
  { key: "pciScore", label: "Điểm PCI 2024", unit: "điểm", digits: 1, better: "higher", group: "canhtranh" },
  { key: "pciRank", label: "Xếp hạng PCI", unit: "/63", digits: 0, better: "lower", group: "canhtranh" },
];

const GROUP_LABEL = {
  kinhte: "Kinh tế",
  fdi: "Đầu tư FDI",
  hatang: "Hạ tầng",
  canhtranh: "Năng lực cạnh tranh",
};

function SoSanhPage() {
  const [selected, setSelected] = useState<string[]>(["ha-noi", "ho-chi-minh", "bac-ninh"]);

  const profiles = useMemo(
    () =>
      selected
        .map((s) => ({
          province: PROVINCES.find((p) => p.slug === s)!,
          profile: PROVINCE_PROFILES.find((p) => p.slug === s)!,
        }))
        .filter((x) => x.province && x.profile),
    [selected],
  );

  const groups = ["kinhte", "fdi", "hatang", "canhtranh"] as const;

  function add(slug: string) {
    if (selected.length >= 4 || selected.includes(slug)) return;
    setSelected([...selected, slug]);
  }
  function remove(slug: string) {
    setSelected(selected.filter((s) => s !== slug));
  }

  const available = PROVINCES.filter((p) => !selected.includes(p.slug));

  return (
    <>
      <PageHero
        eyebrow="Công cụ so sánh"
        title="So sánh 2–4 tỉnh thành"
        description="Chọn các tỉnh bạn quan tâm và xem so sánh trực quan trên 10+ tiêu chí kinh tế, hạ tầng, FDI và năng lực cạnh tranh."
      />

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-foreground">Đang so sánh:</p>
            {profiles.map(({ province }) => (
              <span
                key={province.slug}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm"
              >
                {province.name}
                <button
                  onClick={() => remove(province.slug)}
                  className="rounded-full p-0.5 hover:bg-primary-foreground/20"
                  aria-label={`Bỏ ${province.name}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {selected.length < 4 && (
              <div className="relative">
                <select
                  onChange={(e) => {
                    if (e.target.value) {
                      add(e.target.value);
                      e.target.value = "";
                    }
                  }}
                  defaultValue=""
                  className="h-9 rounded-full border border-dashed border-primary bg-background pl-8 pr-3 text-sm font-medium text-primary focus:outline-none"
                >
                  <option value="" disabled>
                    Thêm tỉnh để so sánh…
                  </option>
                  {available.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <Plus className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              </div>
            )}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Chọn 2 đến 4 tỉnh. Số liệu PCI 2024 (VCCI), GRDP/FDI tham khảo TCTK & Bộ KH&ĐT.
          </p>
        </div>
      </section>

      {profiles.length < 2 ? (
        <div className="mx-auto max-w-3xl px-6 py-20 text-center text-muted-foreground">
          Vui lòng chọn ít nhất 2 tỉnh để bắt đầu so sánh.
        </div>
      ) : (
        <section className="mx-auto max-w-7xl px-6 py-12">
          {groups.map((g) => (
            <div key={g} className="mt-10 first:mt-0">
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                {GROUP_LABEL[g]}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40 text-left">
                      <th className="px-4 py-3 font-semibold text-muted-foreground">Tiêu chí</th>
                      {profiles.map((pp) => (
                        <th
                          key={pp.province.slug}
                          className="px-4 py-3 font-display font-bold text-foreground"
                        >
                          {pp.province.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {METRICS.filter((m) => m.group === g).map((m) => {
                      const values = profiles.map((pp) => pp.profile[m.key] as number);
                      const best =
                        m.better === "higher" ? Math.max(...values) : Math.min(...values);
                      return (
                        <tr key={m.key} className="border-b border-border last:border-0">
                          <td className="px-4 py-3 text-foreground">
                            {m.label}
                            <span className="ml-1 text-xs text-muted-foreground">({m.unit})</span>
                          </td>
                          {profiles.map((pp, i) => {
                            const v = values[i];
                            const isBest = v === best;
                            return (
                              <td
                                key={pp.province.slug}
                                className={`px-4 py-3 font-mono ${
                                  isBest ? "bg-gold/10 font-bold text-foreground" : "text-foreground"
                                }`}
                              >
                                {fmtNumber(v, m.digits ?? 1)}
                                {isBest && (
                                  <span className="ml-2 rounded bg-gold px-1.5 py-0.5 text-[9px] font-bold uppercase text-gold-foreground">
                                    Tốt nhất
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {profiles.map((pp) => (
              <Link
                key={pp.province.slug}
                to="/tinh-thanh/$slug"
                params={{ slug: pp.province.slug }}
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Hồ sơ tỉnh
                </p>
                <h4 className="mt-2 font-display text-lg font-bold group-hover:text-primary">
                  {pp.province.name}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">{pp.profile.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Xem chi tiết <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
