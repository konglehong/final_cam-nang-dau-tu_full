// Helpers định dạng dùng chung trên website (số, ngày, label).

export function fmtNumber(n: number, digits = 1) {
  return new Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(n);
}

export function fmtDate(iso: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(iso));
}

export function fmtDateTime(iso: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function relativeFromNow(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days <= 0) return "Hôm nay";
  if (days === 1) return "Hôm qua";
  if (days < 30) return `${days} ngày trước`;
  if (days < 365) return `${Math.floor(days / 30)} tháng trước`;
  return `${Math.floor(days / 365)} năm trước`;
}

export const SECTOR_LABEL: Record<string, string> = {
  tech: "Công nghệ - Điện tử",
  manufacturing: "Sản xuất - Cơ khí",
  energy: "Năng lượng",
  infra: "Hạ tầng",
  "real-estate": "Bất động sản",
};

export const STATUS_LABEL: Record<string, string> = {
  operating: "Đang vận hành",
  construction: "Đang xây dựng",
  approved: "Đã phê duyệt",
  planned: "Đang quy hoạch",
};

export const POWER_TYPE_LABEL: Record<string, string> = {
  hydro: "Thủy điện",
  thermal: "Nhiệt điện than",
  lng: "LNG",
  wind: "Điện gió",
  solar: "Điện mặt trời",
  nuclear: "Điện hạt nhân",
};
