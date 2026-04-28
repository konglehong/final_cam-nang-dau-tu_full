// Phân tier hiển thị cho 34 tỉnh sau sáp nhập.
// 3 gói × 3 variant = 9 layout khác nhau. KHÔNG hiển thị tên gói trên trang tỉnh.

export type Tier = "premium" | "advanced" | "basic";
export type PremiumVariant = "editorial" | "cinematic" | "showcase";
export type AdvancedVariant = "dossier" | "spotlight" | "compact-pro";
export type BasicVariant = "factsheet" | "brief" | "card";
export type Variant = PremiumVariant | AdvancedVariant | BasicVariant;

export type TierAssignment = { tier: Tier; variant: Variant };

const ASSIGNMENTS: Record<string, TierAssignment> = {
  // ===== PREMIUM (8) — top FDI/PCI/đô thị lớn =====
  "ho-chi-minh": { tier: "premium", variant: "cinematic" },
  "ha-noi":      { tier: "premium", variant: "editorial" },
  "hai-phong":   { tier: "premium", variant: "showcase" },
  "bac-ninh":    { tier: "premium", variant: "cinematic" },
  "quang-ninh":  { tier: "premium", variant: "editorial" },
  "da-nang":     { tier: "premium", variant: "showcase" },
  "dong-nai":    { tier: "premium", variant: "cinematic" },
  "khanh-hoa":   { tier: "premium", variant: "editorial" },

  // ===== NÂNG CAO (12) =====
  "hung-yen":    { tier: "advanced", variant: "dossier" },
  "thai-nguyen": { tier: "advanced", variant: "spotlight" },
  "can-tho":     { tier: "advanced", variant: "compact-pro" },
  "lam-dong":    { tier: "advanced", variant: "dossier" },
  "hue":         { tier: "advanced", variant: "spotlight" },
  "nghe-an":     { tier: "advanced", variant: "compact-pro" },
  "thanh-hoa":   { tier: "advanced", variant: "dossier" },
  "ninh-binh":   { tier: "advanced", variant: "spotlight" },
  "phu-tho":     { tier: "advanced", variant: "compact-pro" },
  "vinh-long":   { tier: "advanced", variant: "dossier" },
  "dong-thap":   { tier: "advanced", variant: "spotlight" },
  "an-giang":    { tier: "advanced", variant: "compact-pro" },

  // ===== CƠ BẢN (14) =====
  "ha-tinh":     { tier: "basic", variant: "factsheet" },
  "quang-tri":   { tier: "basic", variant: "brief" },
  "quang-ngai":  { tier: "basic", variant: "card" },
  "gia-lai":     { tier: "basic", variant: "factsheet" },
  "dak-lak":     { tier: "basic", variant: "brief" },
  "tay-ninh":    { tier: "basic", variant: "card" },
  "ca-mau":      { tier: "basic", variant: "factsheet" },
  "tuyen-quang": { tier: "basic", variant: "brief" },
  "lao-cai":     { tier: "basic", variant: "card" },
  "lai-chau":    { tier: "basic", variant: "factsheet" },
  "dien-bien":   { tier: "basic", variant: "brief" },
  "son-la":      { tier: "basic", variant: "card" },
  "lang-son":    { tier: "basic", variant: "factsheet" },
  "cao-bang":    { tier: "basic", variant: "brief" },
};

// Default fallback
const DEFAULT: TierAssignment = { tier: "basic", variant: "factsheet" };

export function getTier(slug: string): TierAssignment {
  return ASSIGNMENTS[slug] ?? DEFAULT;
}
