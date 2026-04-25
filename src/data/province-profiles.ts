// Bộ KPI/Profile cho 34 tỉnh thành sau sáp nhập.
// Dữ liệu KT-XH tham khảo: TCTK 2024, Bộ KH&ĐT, PCI 2024 (mức ước tính/đại diện).
// Mục đích: render trang chi tiết tỉnh, so sánh, dashboard tổng hợp.

import { PROVINCES, type Province } from "./provinces";

export type ProvinceProfile = {
  slug: string;
  area: number; // km²
  population: number; // nghìn người
  grdp: number; // tỷ USD (giá hiện hành)
  grdpGrowth: number; // %
  fdiStock: number; // tỷ USD lũy kế
  fdi2024: number; // tỷ USD năm 2024
  industrialParks: number;
  pciScore: number; // chỉ số PCI 2024
  pciRank: number; // xếp hạng PCI
  exports: number; // tỷ USD
  strengths: string[]; // 4-6 lợi thế cạnh tranh
  sectors: string[]; // ngành kêu gọi đầu tư
  tagline: string;
};

// Helper sinh dữ liệu mặc định, sau đó override các tỉnh "lớn"
const baseline = (slug: string): ProvinceProfile => ({
  slug,
  area: 8000,
  population: 1500,
  grdp: 5,
  grdpGrowth: 7.2,
  fdiStock: 2.5,
  fdi2024: 0.4,
  industrialParks: 6,
  pciScore: 65,
  pciRank: 30,
  exports: 1.5,
  strengths: ["Quỹ đất KCN dồi dào", "Lao động trẻ", "Hạ tầng giao thông kết nối", "Chính sách ưu đãi cạnh tranh"],
  sectors: ["Công nghiệp chế biến chế tạo", "Logistics", "Nông nghiệp công nghệ cao"],
  tagline: "Điểm đến đầu tư mới nổi của Việt Nam",
});

const OVERRIDES: Partial<Record<string, Partial<ProvinceProfile>>> = {
  "ha-noi": {
    area: 3359, population: 8685, grdp: 56, grdpGrowth: 6.5, fdiStock: 42.6, fdi2024: 2.2,
    industrialParks: 17, pciScore: 70.2, pciRank: 9, exports: 18.5,
    strengths: ["Trung tâm chính trị - kinh tế", "Nguồn nhân lực chất lượng cao", "Hạ tầng số phát triển", "Kết nối quốc tế qua Nội Bài"],
    sectors: ["Công nghệ cao", "Tài chính - Ngân hàng", "Dịch vụ", "R&D"],
    tagline: "Trung tâm chính trị, kinh tế, văn hóa và đầu mối hội nhập quốc tế",
  },
  "ho-chi-minh": {
    area: 6772, population: 14000, grdp: 95, grdpGrowth: 7.2, fdiStock: 86.4, fdi2024: 4.8,
    industrialParks: 38, pciScore: 67.8, pciRank: 27, exports: 51.2,
    strengths: ["Đầu tàu kinh tế cả nước", "Hệ sinh thái khởi nghiệp lớn nhất", "Cụm cảng Cái Mép - Thị Vải", "Hạ tầng metro & sân bay Long Thành"],
    sectors: ["Công nghệ cao - bán dẫn", "Logistics & cảng biển", "Tài chính - Fintech", "Bất động sản công nghiệp"],
    tagline: "Đầu tàu kinh tế cả nước với 14 triệu dân và GRDP lớn nhất Việt Nam",
  },
  "hai-phong": {
    area: 2580, population: 4100, grdp: 18, grdpGrowth: 11.0, fdiStock: 31.5, fdi2024: 4.2,
    industrialParks: 14, pciScore: 71.2, pciRank: 3, exports: 32.5,
    strengths: ["Cảng nước sâu Lạch Huyện", "Cao tốc & sân bay Cát Bi", "Tỷ lệ FDI tăng trưởng cao", "Hệ sinh thái LG, VinFast"],
    sectors: ["Điện tử - linh kiện", "Ô tô - cơ khí chính xác", "Logistics cảng biển", "Năng lượng tái tạo"],
    tagline: "Trung tâm logistics & sản xuất công nghiệp số 1 phía Bắc",
  },
  "bac-ninh": {
    area: 4719, population: 3500, grdp: 12.5, grdpGrowth: 8.4, fdiStock: 33.2, fdi2024: 4.6,
    industrialParks: 16, pciScore: 70.5, pciRank: 7, exports: 56.1,
    strengths: ["Thủ phủ điện tử của Việt Nam", "Cứ điểm Samsung & Foxconn", "Sát Hà Nội & sân bay", "Lao động kỹ thuật dồi dào"],
    sectors: ["Điện tử - bán dẫn", "Sản xuất linh kiện", "Logistics", "Đô thị thông minh"],
    tagline: "Thủ phủ điện tử Việt Nam — quê hương Samsung Vietnam",
  },
  "quang-ninh": {
    area: 6178, population: 1380, grdp: 13, grdpGrowth: 11.0, fdiStock: 14.8, fdi2024: 1.6,
    industrialParks: 12, pciScore: 73.0, pciRank: 1, exports: 6.7,
    strengths: ["Vịnh Hạ Long - di sản UNESCO", "Cao tốc Hạ Long - Móng Cái", "Cảng Cái Lân", "Cửa khẩu quốc tế Móng Cái"],
    sectors: ["Du lịch nghỉ dưỡng", "Năng lượng (than, LNG)", "Logistics biên giới", "Công nghiệp phụ trợ"],
    tagline: "PCI số 1 Việt Nam 7 năm liên tiếp - cửa ngõ ra ASEAN & Trung Quốc",
  },
  "da-nang": {
    area: 11859, population: 3000, grdp: 9.5, grdpGrowth: 7.8, fdiStock: 7.2, fdi2024: 0.8,
    industrialParks: 10, pciScore: 71.5, pciRank: 2, exports: 4.2,
    strengths: ["Sân bay & cảng quốc tế", "Trung tâm CNTT miền Trung", "Bãi biển & du lịch đẳng cấp", "Khu KT mở Chu Lai"],
    sectors: ["CNTT & phần mềm", "Du lịch - MICE", "Cơ khí ô tô (THACO)", "Logistics"],
    tagline: "Thành phố đáng sống & trung tâm CNTT miền Trung",
  },
  "thai-nguyen": {
    area: 6694, population: 1900, grdp: 7.5, grdpGrowth: 8.6, fdiStock: 11.8, fdi2024: 0.9,
    industrialParks: 8, pciScore: 67.5, pciRank: 25, exports: 32.8,
    strengths: ["Cứ điểm Samsung Display", "Đại học Thái Nguyên", "Vành đai 5 vùng Thủ đô", "Quỹ đất KCN sạch"],
    sectors: ["Điện tử", "Cơ khí - khoáng sản", "Nông nghiệp công nghệ cao"],
    tagline: "Thủ phủ điện tử thứ 2 sau Bắc Ninh",
  },
  "dong-nai": {
    area: 12515, population: 4000, grdp: 18, grdpGrowth: 7.5, fdiStock: 36.5, fdi2024: 1.5,
    industrialParks: 32, pciScore: 65.4, pciRank: 35, exports: 23.5,
    strengths: ["Sân bay quốc tế Long Thành", "33 KCN đang hoạt động", "Sát TP.HCM & cảng Cái Mép", "Cao tốc Bắc - Nam"],
    sectors: ["Sân bay & logistics", "Điện tử - cơ khí", "Bất động sản công nghiệp", "Dệt may - da giày"],
    tagline: "Đại đô thị sân bay - cửa ngõ FDI vùng Đông Nam Bộ",
  },
  "hung-yen": {
    area: 2085, population: 2700, grdp: 6, grdpGrowth: 8.2, fdiStock: 7.5, fdi2024: 1.1,
    industrialParks: 11, pciScore: 67.0, pciRank: 28, exports: 8.9,
    strengths: ["Sát Hà Nội & cao tốc HN-HP", "Quỹ đất công nghiệp lớn", "VSIP, Thăng Long II", "Lao động dồi dào sau sáp nhập với Thái Bình"],
    sectors: ["Công nghiệp phụ trợ", "Dệt may", "Logistics", "Nông nghiệp công nghệ cao"],
    tagline: "Vành đai công nghiệp phía Đông Nam Hà Nội",
  },
  "khanh-hoa": {
    area: 8553, population: 2050, grdp: 6.8, grdpGrowth: 7.0, fdiStock: 4.5, fdi2024: 0.5,
    industrialParks: 9, pciScore: 68.5, pciRank: 16, exports: 2.1,
    strengths: ["Vịnh Vân Phong & Cam Ranh", "Sân bay quốc tế Cam Ranh", "Năng lượng tái tạo Ninh Thuận", "Du lịch Nha Trang"],
    sectors: ["Du lịch nghỉ dưỡng", "Năng lượng tái tạo", "Cảng biển", "Hải sản chế biến"],
    tagline: "Trung tâm du lịch & năng lượng Nam Trung Bộ",
  },
  "lam-dong": {
    area: 24233, population: 3300, grdp: 8, grdpGrowth: 6.8, fdiStock: 3.2, fdi2024: 0.3,
    industrialParks: 7, pciScore: 65.5, pciRank: 33, exports: 1.8,
    strengths: ["Bauxit Tây Nguyên", "Du lịch Đà Lạt - Mũi Né", "Năng lượng gió ven biển", "Nông nghiệp công nghệ cao"],
    sectors: ["Khoáng sản - bauxit", "Nông nghiệp công nghệ cao", "Du lịch", "Điện gió"],
    tagline: "Tỉnh lớn nhất cả nước (sau sáp nhập 3 tỉnh)",
  },
  "can-tho": {
    area: 6360, population: 3300, grdp: 7, grdpGrowth: 6.5, fdiStock: 2.4, fdi2024: 0.2,
    industrialParks: 8, pciScore: 67.8, pciRank: 22, exports: 2.3,
    strengths: ["Trung tâm ĐBSCL", "Cảng Cái Cui", "Sân bay quốc tế Cần Thơ", "Đại học Cần Thơ"],
    sectors: ["Chế biến nông sản & thủy sản", "Logistics", "Năng lượng tái tạo", "Y tế - giáo dục"],
    tagline: "Thủ phủ Đồng bằng Sông Cửu Long",
  },
};

export const PROVINCE_PROFILES: ProvinceProfile[] = PROVINCES.map((p) => ({
  ...baseline(p.slug),
  ...(OVERRIDES[p.slug] ?? {}),
  slug: p.slug,
}));

export function getProfile(slug: string): ProvinceProfile | undefined {
  return PROVINCE_PROFILES.find((p) => p.slug === slug);
}

export function getProvinceWithProfile(slug: string): { province: Province; profile: ProvinceProfile } | undefined {
  const province = PROVINCES.find((p) => p.slug === slug);
  const profile = getProfile(slug);
  if (!province || !profile) return undefined;
  return { province, profile };
}

// Top FDI 2024 (sắp xếp giảm dần)
export const TOP_FDI_2024 = [...PROVINCE_PROFILES]
  .sort((a, b) => b.fdi2024 - a.fdi2024)
  .slice(0, 10);

// Top PCI 2024
export const TOP_PCI_2024 = [...PROVINCE_PROFILES]
  .sort((a, b) => a.pciRank - b.pciRank)
  .slice(0, 10);
