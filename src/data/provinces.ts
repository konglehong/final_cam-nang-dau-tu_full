// 34 đơn vị hành chính cấp tỉnh sau sáp nhập (hiệu lực 01/07/2025)
// Theo Nghị quyết 60-NQ/TW và Nghị quyết 202/2025/QH15
// Toạ độ là điểm trung tâm hành chính (thủ phủ) của tỉnh/thành mới.

export type Region = "bac" | "trung" | "nam";

export type Province = {
  slug: string;
  name: string;
  capital: string; // Trung tâm hành chính
  region: Region;
  lat: number;
  lng: number;
  merged?: string; // Mô tả sáp nhập (nếu có)
};

export const PROVINCES: Province[] = [
  // ===== Giữ nguyên (11) =====
  { slug: "ha-noi", name: "Hà Nội", capital: "Hà Nội", region: "bac", lat: 21.0285, lng: 105.8542 },
  { slug: "hue", name: "Huế", capital: "Huế", region: "trung", lat: 16.4637, lng: 107.5909 },
  { slug: "lai-chau", name: "Lai Châu", capital: "Lai Châu", region: "bac", lat: 22.3964, lng: 103.4587 },
  { slug: "dien-bien", name: "Điện Biên", capital: "Điện Biên Phủ", region: "bac", lat: 21.3856, lng: 103.0321 },
  { slug: "son-la", name: "Sơn La", capital: "Sơn La", region: "bac", lat: 21.3256, lng: 103.9188 },
  { slug: "lang-son", name: "Lạng Sơn", capital: "Lạng Sơn", region: "bac", lat: 21.8478, lng: 106.7578 },
  { slug: "quang-ninh", name: "Quảng Ninh", capital: "Hạ Long", region: "bac", lat: 20.9595, lng: 107.0764 },
  { slug: "thanh-hoa", name: "Thanh Hóa", capital: "Thanh Hóa", region: "trung", lat: 19.8067, lng: 105.7852 },
  { slug: "nghe-an", name: "Nghệ An", capital: "Vinh", region: "trung", lat: 18.6796, lng: 105.6813 },
  { slug: "ha-tinh", name: "Hà Tĩnh", capital: "Hà Tĩnh", region: "trung", lat: 18.3559, lng: 105.8877 },
  { slug: "cao-bang", name: "Cao Bằng", capital: "Cao Bằng", region: "bac", lat: 22.6657, lng: 106.2570 },

  // ===== Sáp nhập — Miền Bắc =====
  { slug: "tuyen-quang", name: "Tuyên Quang", capital: "Tuyên Quang", region: "bac", lat: 21.8233, lng: 105.2142, merged: "Tuyên Quang + Hà Giang" },
  { slug: "lao-cai", name: "Lào Cai", capital: "Lào Cai", region: "bac", lat: 22.4856, lng: 103.9707, merged: "Lào Cai + Yên Bái" },
  { slug: "thai-nguyen", name: "Thái Nguyên", capital: "Thái Nguyên", region: "bac", lat: 21.5928, lng: 105.8442, merged: "Thái Nguyên + Bắc Kạn" },
  { slug: "phu-tho", name: "Phú Thọ", capital: "Việt Trì", region: "bac", lat: 21.3019, lng: 105.4015, merged: "Phú Thọ + Vĩnh Phúc + Hòa Bình" },
  { slug: "bac-ninh", name: "Bắc Ninh", capital: "Bắc Ninh", region: "bac", lat: 21.1861, lng: 106.0763, merged: "Bắc Ninh + Bắc Giang" },
  { slug: "hung-yen", name: "Hưng Yên", capital: "Hưng Yên", region: "bac", lat: 20.6464, lng: 106.0511, merged: "Hưng Yên + Thái Bình" },
  { slug: "hai-phong", name: "Hải Phòng", capital: "Hải Phòng", region: "bac", lat: 20.8449, lng: 106.6881, merged: "Hải Phòng + Hải Dương" },
  { slug: "ninh-binh", name: "Ninh Bình", capital: "Ninh Bình", region: "bac", lat: 20.2506, lng: 105.9744, merged: "Ninh Bình + Hà Nam + Nam Định" },

  // ===== Sáp nhập — Miền Trung & Tây Nguyên =====
  { slug: "quang-tri", name: "Quảng Trị", capital: "Đông Hà", region: "trung", lat: 16.8163, lng: 107.1003, merged: "Quảng Trị + Quảng Bình" },
  { slug: "da-nang", name: "Đà Nẵng", capital: "Đà Nẵng", region: "trung", lat: 16.0544, lng: 108.2022, merged: "Đà Nẵng + Quảng Nam" },
  { slug: "quang-ngai", name: "Quảng Ngãi", capital: "Quảng Ngãi", region: "trung", lat: 15.1213, lng: 108.8044, merged: "Quảng Ngãi + Kon Tum" },
  { slug: "gia-lai", name: "Gia Lai", capital: "Pleiku", region: "trung", lat: 13.9833, lng: 108.0000, merged: "Gia Lai + Bình Định" },
  { slug: "khanh-hoa", name: "Khánh Hòa", capital: "Nha Trang", region: "trung", lat: 12.2388, lng: 109.1967, merged: "Khánh Hòa + Ninh Thuận" },
  { slug: "lam-dong", name: "Lâm Đồng", capital: "Đà Lạt", region: "trung", lat: 11.9404, lng: 108.4583, merged: "Lâm Đồng + Đắk Nông + Bình Thuận" },
  { slug: "dak-lak", name: "Đắk Lắk", capital: "Buôn Ma Thuột", region: "trung", lat: 12.6797, lng: 108.0376, merged: "Đắk Lắk + Phú Yên" },

  // ===== Sáp nhập — Miền Nam =====
  { slug: "ho-chi-minh", name: "TP. Hồ Chí Minh", capital: "TP. Hồ Chí Minh", region: "nam", lat: 10.8231, lng: 106.6297, merged: "TP.HCM + Bình Dương + Bà Rịa - Vũng Tàu" },
  { slug: "dong-nai", name: "Đồng Nai", capital: "Biên Hòa", region: "nam", lat: 10.9471, lng: 106.8240, merged: "Đồng Nai + Bình Phước" },
  { slug: "tay-ninh", name: "Tây Ninh", capital: "Tây Ninh", region: "nam", lat: 11.3100, lng: 106.0989, merged: "Tây Ninh + Long An" },
  { slug: "vinh-long", name: "Vĩnh Long", capital: "Vĩnh Long", region: "nam", lat: 10.2537, lng: 105.9722, merged: "Vĩnh Long + Bến Tre + Trà Vinh" },
  { slug: "dong-thap", name: "Đồng Tháp", capital: "Cao Lãnh", region: "nam", lat: 10.4938, lng: 105.6882, merged: "Đồng Tháp + Tiền Giang" },
  { slug: "ca-mau", name: "Cà Mau", capital: "Cà Mau", region: "nam", lat: 9.1769, lng: 105.1524, merged: "Cà Mau + Bạc Liêu" },
  { slug: "an-giang", name: "An Giang", capital: "Long Xuyên", region: "nam", lat: 10.3864, lng: 105.4352, merged: "An Giang + Kiên Giang" },
  { slug: "can-tho", name: "Cần Thơ", capital: "Cần Thơ", region: "nam", lat: 10.0452, lng: 105.7469, merged: "Cần Thơ + Hậu Giang + Sóc Trăng" },
];

// ===== Sân bay quốc tế đang hoạt động =====
export type Airport = {
  name: string;
  code: string; // IATA
  lat: number;
  lng: number;
  type: "international" | "domestic";
  province: string;
};

export const AIRPORTS: Airport[] = [
  { name: "Nội Bài", code: "HAN", lat: 21.2187, lng: 105.8042, type: "international", province: "Hà Nội" },
  { name: "Tân Sơn Nhất", code: "SGN", lat: 10.8188, lng: 106.6519, type: "international", province: "TP.HCM" },
  { name: "Đà Nẵng", code: "DAD", lat: 16.0439, lng: 108.1994, type: "international", province: "Đà Nẵng" },
  { name: "Cam Ranh", code: "CXR", lat: 11.9982, lng: 109.2192, type: "international", province: "Khánh Hòa" },
  { name: "Phú Quốc", code: "PQC", lat: 10.1698, lng: 103.9931, type: "international", province: "An Giang" },
  { name: "Cát Bi", code: "HPH", lat: 20.8194, lng: 106.7250, type: "international", province: "Hải Phòng" },
  { name: "Vân Đồn", code: "VDO", lat: 21.1175, lng: 107.4144, type: "international", province: "Quảng Ninh" },
  { name: "Phú Bài", code: "HUI", lat: 16.4015, lng: 107.7028, type: "international", province: "Huế" },
  { name: "Liên Khương", code: "DLI", lat: 11.7500, lng: 108.3667, type: "international", province: "Lâm Đồng" },
  { name: "Vinh", code: "VII", lat: 18.7376, lng: 105.6708, type: "international", province: "Nghệ An" },
  { name: "Cần Thơ", code: "VCA", lat: 10.0851, lng: 105.7119, type: "international", province: "Cần Thơ" },
  { name: "Long Thành (đang xây)", code: "LTN", lat: 10.8061, lng: 107.0103, type: "international", province: "Đồng Nai" },
];

// ===== Cảng biển lớn (loại đặc biệt & loại I) =====
export type Seaport = {
  name: string;
  lat: number;
  lng: number;
  class: "special" | "I";
  province: string;
};

export const SEAPORTS: Seaport[] = [
  { name: "Cảng Hải Phòng (Lạch Huyện)", lat: 20.7964, lng: 106.9000, class: "special", province: "Hải Phòng" },
  { name: "Cảng Cái Mép - Thị Vải", lat: 10.5333, lng: 107.0333, class: "special", province: "TP.HCM" },
  { name: "Cảng Sài Gòn", lat: 10.7669, lng: 106.7050, class: "special", province: "TP.HCM" },
  { name: "Cảng Cái Lân", lat: 20.9667, lng: 107.0500, class: "I", province: "Quảng Ninh" },
  { name: "Cảng Nghi Sơn", lat: 19.3167, lng: 105.7833, class: "I", province: "Thanh Hóa" },
  { name: "Cảng Cửa Lò", lat: 18.8167, lng: 105.7000, class: "I", province: "Nghệ An" },
  { name: "Cảng Vũng Áng - Sơn Dương", lat: 18.0833, lng: 106.4167, class: "I", province: "Hà Tĩnh" },
  { name: "Cảng Chân Mây", lat: 16.3333, lng: 108.0167, class: "I", province: "Huế" },
  { name: "Cảng Tiên Sa", lat: 16.1167, lng: 108.2333, class: "I", province: "Đà Nẵng" },
  { name: "Cảng Dung Quất", lat: 15.4000, lng: 108.7833, class: "I", province: "Quảng Ngãi" },
  { name: "Cảng Quy Nhơn", lat: 13.7667, lng: 109.2333, class: "I", province: "Gia Lai" },
  { name: "Cảng Vân Phong", lat: 12.5833, lng: 109.3833, class: "I", province: "Khánh Hòa" },
  { name: "Cảng Cam Ranh", lat: 11.9000, lng: 109.2167, class: "I", province: "Khánh Hòa" },
];
