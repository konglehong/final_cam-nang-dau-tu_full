// Dữ liệu các lớp bản đồ: Khu công nghiệp, Cao tốc, Dự án trọng điểm, Nhà máy điện, Khu du lịch
// Nguồn: Bộ KH&ĐT, Bộ GTVT, EVN, Tổng cục Du lịch (mẫu đại diện, không đầy đủ).
// Tọa độ tham khảo Wikipedia/OSM. Mục đích: render lên bản đồ + dùng chung cho các trang.

export type IndustrialPark = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  province: string;
  area: number; // ha
  occupancy?: number; // % lấp đầy
  tier: "national" | "regional";
};

export const INDUSTRIAL_PARKS: IndustrialPark[] = [
  // Miền Bắc — vành đai Hà Nội & Hải Phòng
  { id: "thang-long", name: "KCN Thăng Long", lat: 21.157, lng: 105.795, province: "Hà Nội", area: 274, occupancy: 100, tier: "national" },
  { id: "noi-bai", name: "KCN Nội Bài", lat: 21.207, lng: 105.832, province: "Hà Nội", area: 114, occupancy: 100, tier: "national" },
  { id: "que-vo", name: "KCN Quế Võ", lat: 21.143, lng: 106.179, province: "Bắc Ninh", area: 640, occupancy: 95, tier: "national" },
  { id: "yen-phong", name: "KCN Yên Phong (Samsung)", lat: 21.226, lng: 105.992, province: "Bắc Ninh", area: 658, occupancy: 100, tier: "national" },
  { id: "van-trung", name: "KCN Vân Trung", lat: 21.247, lng: 106.131, province: "Bắc Ninh", area: 442, occupancy: 90, tier: "national" },
  { id: "deep-c", name: "KCN DEEP C Hải Phòng", lat: 20.832, lng: 106.781, province: "Hải Phòng", area: 3400, occupancy: 75, tier: "national" },
  { id: "trang-due", name: "KCN Tràng Duệ (LG)", lat: 20.882, lng: 106.621, province: "Hải Phòng", area: 600, occupancy: 100, tier: "national" },
  { id: "vsip-hai-phong", name: "VSIP Hải Phòng", lat: 20.910, lng: 106.654, province: "Hải Phòng", area: 1600, occupancy: 80, tier: "national" },
  { id: "dinh-vu", name: "KCN Đình Vũ", lat: 20.831, lng: 106.792, province: "Hải Phòng", area: 1463, occupancy: 85, tier: "national" },
  { id: "cai-lan", name: "KCN Cái Lân", lat: 20.952, lng: 107.063, province: "Quảng Ninh", area: 305, occupancy: 90, tier: "regional" },
  { id: "song-khoai", name: "KCN Sông Khoai", lat: 21.020, lng: 106.870, province: "Quảng Ninh", area: 714, occupancy: 60, tier: "national" },
  { id: "pho-noi-a", name: "KCN Phố Nối A", lat: 20.929, lng: 106.150, province: "Hưng Yên", area: 596, occupancy: 95, tier: "regional" },
  { id: "thang-long-2", name: "KCN Thăng Long II", lat: 20.879, lng: 106.067, province: "Hưng Yên", area: 525, occupancy: 100, tier: "national" },

  // Miền Trung
  { id: "vsip-quang-ngai", name: "VSIP Quảng Ngãi", lat: 15.121, lng: 108.836, province: "Quảng Ngãi", area: 1746, occupancy: 70, tier: "national" },
  { id: "dung-quat", name: "KKT Dung Quất", lat: 15.400, lng: 108.783, province: "Quảng Ngãi", area: 45332, occupancy: 60, tier: "national" },
  { id: "chu-lai", name: "KKT mở Chu Lai", lat: 15.504, lng: 108.700, province: "Đà Nẵng", area: 27040, occupancy: 65, tier: "national" },
  { id: "hoa-khanh", name: "KCN Hòa Khánh", lat: 16.082, lng: 108.140, province: "Đà Nẵng", area: 423, occupancy: 100, tier: "regional" },
  { id: "phu-bai", name: "KCN Phú Bài", lat: 16.395, lng: 107.711, province: "Huế", area: 818, occupancy: 80, tier: "regional" },
  { id: "vung-ang", name: "KKT Vũng Áng", lat: 18.083, lng: 106.417, province: "Hà Tĩnh", area: 22781, occupancy: 70, tier: "national" },
  { id: "nghi-son", name: "KKT Nghi Sơn", lat: 19.317, lng: 105.783, province: "Thanh Hóa", area: 106000, occupancy: 55, tier: "national" },
  { id: "nhon-hoi", name: "KKT Nhơn Hội", lat: 13.778, lng: 109.250, province: "Gia Lai", area: 14308, occupancy: 50, tier: "national" },
  { id: "van-phong", name: "KKT Vân Phong", lat: 12.583, lng: 109.383, province: "Khánh Hòa", area: 150000, occupancy: 30, tier: "national" },

  // Miền Nam
  { id: "vsip-1", name: "VSIP I Bình Dương", lat: 11.027, lng: 106.752, province: "TP. Hồ Chí Minh", area: 500, occupancy: 100, tier: "national" },
  { id: "vsip-2", name: "VSIP II Bình Dương", lat: 11.253, lng: 106.718, province: "TP. Hồ Chí Minh", area: 2045, occupancy: 95, tier: "national" },
  { id: "my-phuoc", name: "KCN Mỹ Phước", lat: 11.190, lng: 106.624, province: "TP. Hồ Chí Minh", area: 4196, occupancy: 90, tier: "national" },
  { id: "song-than", name: "KCN Sóng Thần", lat: 10.900, lng: 106.733, province: "TP. Hồ Chí Minh", area: 533, occupancy: 100, tier: "regional" },
  { id: "hiep-phuoc", name: "KCN Hiệp Phước", lat: 10.658, lng: 106.748, province: "TP. Hồ Chí Minh", area: 2000, occupancy: 65, tier: "national" },
  { id: "tan-tao", name: "KCN Tân Tạo", lat: 10.730, lng: 106.605, province: "TP. Hồ Chí Minh", area: 442, occupancy: 100, tier: "regional" },
  { id: "phu-my", name: "KCN Phú Mỹ", lat: 10.604, lng: 107.030, province: "TP. Hồ Chí Minh", area: 1010, occupancy: 95, tier: "national" },
  { id: "long-thanh", name: "KCN Long Thành", lat: 10.778, lng: 106.969, province: "Đồng Nai", area: 488, occupancy: 100, tier: "national" },
  { id: "amata", name: "KCN Amata Biên Hòa", lat: 10.974, lng: 106.866, province: "Đồng Nai", area: 700, occupancy: 95, tier: "national" },
  { id: "nhon-trach", name: "KCN Nhơn Trạch", lat: 10.708, lng: 106.870, province: "Đồng Nai", area: 3500, occupancy: 88, tier: "national" },
  { id: "becamex-binh-phuoc", name: "KCN Becamex Bình Phước", lat: 11.578, lng: 106.762, province: "Đồng Nai", area: 4633, occupancy: 45, tier: "national" },
  { id: "long-an-tan-do", name: "KCN Tân Đô", lat: 10.773, lng: 106.481, province: "Tây Ninh", area: 207, occupancy: 90, tier: "regional" },
  { id: "trang-bang", name: "KCN Trảng Bàng", lat: 11.034, lng: 106.358, province: "Tây Ninh", area: 189, occupancy: 95, tier: "regional" },
];

// ===== Cao tốc & vành đai =====
// Polyline đại diện (mỗi tuyến chỉ giữ 4-8 điểm chính để render mượt).
export type Highway = {
  id: string;
  name: string;
  status: "operating" | "construction" | "planned";
  length: number; // km
  path: [number, number][]; // [lat, lng]
};

export const HIGHWAYS: Highway[] = [
  {
    id: "north-south-east",
    name: "Cao tốc Bắc - Nam phía Đông",
    status: "construction",
    length: 2063,
    path: [
      [21.0285, 105.8542], // Hà Nội
      [20.250, 105.974], // Ninh Bình
      [19.807, 105.785], // Thanh Hóa
      [18.679, 105.681], // Vinh
      [16.464, 107.591], // Huế
      [16.054, 108.202], // Đà Nẵng
      [15.121, 108.804], // Quảng Ngãi
      [13.766, 109.222], // Quy Nhơn
      [12.239, 109.197], // Nha Trang
      [10.947, 106.824], // Đồng Nai
      [10.823, 106.630], // TP.HCM
      [10.045, 105.747], // Cần Thơ
      [9.176, 105.152], // Cà Mau
    ],
  },
  {
    id: "ha-noi-hai-phong",
    name: "Cao tốc Hà Nội - Hải Phòng",
    status: "operating",
    length: 105,
    path: [
      [21.0285, 105.8542],
      [20.940, 106.180],
      [20.844, 106.688],
    ],
  },
  {
    id: "ha-noi-lao-cai",
    name: "Cao tốc Hà Nội - Lào Cai",
    status: "operating",
    length: 245,
    path: [
      [21.0285, 105.8542],
      [21.302, 105.402],
      [21.595, 104.832],
      [21.965, 104.230],
      [22.486, 103.971],
    ],
  },
  {
    id: "ha-noi-thai-nguyen",
    name: "Cao tốc Hà Nội - Thái Nguyên",
    status: "operating",
    length: 64,
    path: [
      [21.0285, 105.8542],
      [21.300, 105.866],
      [21.593, 105.844],
    ],
  },
  {
    id: "ha-long-mong-cai",
    name: "Cao tốc Hạ Long - Móng Cái",
    status: "operating",
    length: 176,
    path: [
      [20.960, 107.076],
      [21.160, 107.400],
      [21.380, 107.799],
      [21.529, 107.969],
    ],
  },
  {
    id: "tphcm-trung-luong",
    name: "Cao tốc TP.HCM - Trung Lương",
    status: "operating",
    length: 62,
    path: [
      [10.823, 106.630],
      [10.700, 106.420],
      [10.494, 105.689],
    ],
  },
  {
    id: "tphcm-long-thanh",
    name: "Cao tốc TP.HCM - Long Thành - Dầu Giây",
    status: "operating",
    length: 55,
    path: [
      [10.823, 106.630],
      [10.806, 106.910],
      [10.947, 106.824],
    ],
  },
  {
    id: "tphcm-moc-bai",
    name: "Cao tốc TP.HCM - Mộc Bài",
    status: "construction",
    length: 51,
    path: [
      [10.823, 106.630],
      [10.950, 106.380],
      [11.080, 106.180],
      [11.131, 106.099],
    ],
  },
  {
    id: "vanh-dai-3",
    name: "Vành đai 3 TP.HCM",
    status: "construction",
    length: 76,
    path: [
      [10.708, 106.870],
      [10.880, 106.760],
      [10.945, 106.620],
      [10.880, 106.480],
      [10.700, 106.520],
    ],
  },
  {
    id: "vanh-dai-4-hn",
    name: "Vành đai 4 vùng Thủ đô",
    status: "construction",
    length: 113,
    path: [
      [21.150, 105.620],
      [21.250, 105.780],
      [21.230, 105.990],
      [21.080, 106.080],
      [20.950, 105.950],
      [20.970, 105.760],
      [21.080, 105.640],
    ],
  },
  {
    id: "bien-hoa-vung-tau",
    name: "Cao tốc Biên Hòa - Vũng Tàu",
    status: "construction",
    length: 53,
    path: [
      [10.947, 106.824],
      [10.700, 107.000],
      [10.346, 107.085],
    ],
  },
];

// ===== Dự án trọng điểm (FDI tỷ USD) =====
export type KeyProject = {
  id: string;
  name: string;
  investor: string;
  capital: number; // tỷ USD
  sector: "tech" | "manufacturing" | "energy" | "infra" | "real-estate";
  province: string;
  lat: number;
  lng: number;
  status: "operating" | "construction" | "approved";
  year: number;
};

export const KEY_PROJECTS: KeyProject[] = [
  { id: "samsung-bn", name: "Tổ hợp Samsung Bắc Ninh", investor: "Samsung Electronics", capital: 9.3, sector: "tech", province: "Bắc Ninh", lat: 21.226, lng: 105.992, status: "operating", year: 2008 },
  { id: "samsung-tn", name: "Samsung Display Thái Nguyên", investor: "Samsung Display", capital: 7.5, sector: "tech", province: "Thái Nguyên", lat: 21.593, lng: 105.844, status: "operating", year: 2013 },
  { id: "lg-haiphong", name: "Tổ hợp LG Hải Phòng", investor: "LG Group", capital: 5.8, sector: "tech", province: "Hải Phòng", lat: 20.882, lng: 106.621, status: "operating", year: 2016 },
  { id: "intel-tphcm", name: "Intel Products Vietnam", investor: "Intel Corporation", capital: 1.5, sector: "tech", province: "TP. Hồ Chí Minh", lat: 10.852, lng: 106.795, status: "operating", year: 2010 },
  { id: "foxconn-bn", name: "Foxconn Bắc Ninh - Bắc Giang", investor: "Hon Hai/Foxconn", capital: 3.2, sector: "tech", province: "Bắc Ninh", lat: 21.247, lng: 106.131, status: "construction", year: 2024 },
  { id: "amkor-bn", name: "Amkor Technology", investor: "Amkor (Hàn Quốc)", capital: 1.6, sector: "tech", province: "Bắc Ninh", lat: 21.190, lng: 106.040, status: "operating", year: 2023 },
  { id: "nvidia-rd", name: "NVIDIA R&D Center Việt Nam", investor: "NVIDIA", capital: 0.2, sector: "tech", province: "TP. Hồ Chí Minh", lat: 10.793, lng: 106.700, status: "approved", year: 2024 },
  { id: "vinfast-hp", name: "Tổ hợp VinFast Hải Phòng", investor: "Vingroup", capital: 4.5, sector: "manufacturing", province: "Hải Phòng", lat: 20.823, lng: 106.795, status: "operating", year: 2019 },
  { id: "thaco-chu-lai", name: "THACO Chu Lai", investor: "THACO", capital: 2.0, sector: "manufacturing", province: "Đà Nẵng", lat: 15.504, lng: 108.700, status: "operating", year: 2003 },
  { id: "hyundai-ninh-binh", name: "Hyundai Thành Công", investor: "Hyundai - TC Motors", capital: 1.2, sector: "manufacturing", province: "Ninh Bình", lat: 20.250, lng: 105.974, status: "operating", year: 2017 },
  { id: "lego-binh-duong", name: "Nhà máy LEGO Bình Dương", investor: "LEGO Group", capital: 1.3, sector: "manufacturing", province: "TP. Hồ Chí Minh", lat: 11.190, lng: 106.624, status: "construction", year: 2024 },
  { id: "amata-long-thanh", name: "KĐT Amata Long Thành", investor: "Amata (Thái Lan)", capital: 0.6, sector: "real-estate", province: "Đồng Nai", lat: 10.778, lng: 106.969, status: "operating", year: 2015 },
  { id: "long-thanh-airport", name: "Sân bay quốc tế Long Thành", investor: "ACV - PPP", capital: 16.0, sector: "infra", province: "Đồng Nai", lat: 10.806, lng: 107.010, status: "construction", year: 2021 },
  { id: "metro-tphcm-1", name: "Metro số 1 TP.HCM (Bến Thành - Suối Tiên)", investor: "MAUR - JICA", capital: 2.5, sector: "infra", province: "TP. Hồ Chí Minh", lat: 10.853, lng: 106.778, status: "operating", year: 2024 },
];

// ===== Nhà máy điện =====
export type PowerPlant = {
  id: string;
  name: string;
  type: "thermal" | "hydro" | "wind" | "solar" | "lng" | "nuclear";
  capacity: number; // MW
  province: string;
  lat: number;
  lng: number;
  status: "operating" | "construction" | "planned";
};

export const POWER_PLANTS: PowerPlant[] = [
  // Thủy điện
  { id: "hoa-binh", name: "Thủy điện Hòa Bình", type: "hydro", capacity: 1920, province: "Phú Thọ", lat: 20.812, lng: 105.330, status: "operating" },
  { id: "son-la", name: "Thủy điện Sơn La", type: "hydro", capacity: 2400, province: "Sơn La", lat: 21.485, lng: 103.943, status: "operating" },
  { id: "lai-chau", name: "Thủy điện Lai Châu", type: "hydro", capacity: 1200, province: "Lai Châu", lat: 22.360, lng: 103.100, status: "operating" },
  { id: "yali", name: "Thủy điện Yaly", type: "hydro", capacity: 720, province: "Gia Lai", lat: 14.219, lng: 107.829, status: "operating" },
  { id: "tri-an", name: "Thủy điện Trị An", type: "hydro", capacity: 400, province: "Đồng Nai", lat: 11.083, lng: 107.040, status: "operating" },
  // Nhiệt điện than
  { id: "vung-ang-1", name: "Nhiệt điện Vũng Áng 1", type: "thermal", capacity: 1200, province: "Hà Tĩnh", lat: 18.083, lng: 106.417, status: "operating" },
  { id: "nghi-son-2", name: "Nhiệt điện Nghi Sơn 2", type: "thermal", capacity: 1200, province: "Thanh Hóa", lat: 19.317, lng: 105.783, status: "operating" },
  { id: "duyen-hai", name: "Trung tâm Điện lực Duyên Hải", type: "thermal", capacity: 4400, province: "Vĩnh Long", lat: 9.700, lng: 106.530, status: "operating" },
  { id: "vinh-tan", name: "Trung tâm Điện lực Vĩnh Tân", type: "thermal", capacity: 5600, province: "Lâm Đồng", lat: 11.300, lng: 108.798, status: "operating" },
  // LNG
  { id: "nhon-trach-3", name: "Nhiệt điện LNG Nhơn Trạch 3-4", type: "lng", capacity: 1500, province: "Đồng Nai", lat: 10.708, lng: 106.870, status: "construction" },
  { id: "long-an-lng", name: "Nhiệt điện LNG Long An I-II", type: "lng", capacity: 3000, province: "Tây Ninh", lat: 10.700, lng: 106.520, status: "construction" },
  { id: "hai-lang-lng", name: "LNG Hải Lăng", type: "lng", capacity: 1500, province: "Quảng Trị", lat: 16.700, lng: 107.250, status: "planned" },
  // Điện gió
  { id: "bac-lieu", name: "Điện gió Bạc Liêu", type: "wind", capacity: 100, province: "Cà Mau", lat: 9.220, lng: 105.770, status: "operating" },
  { id: "tra-vinh", name: "Điện gió Trà Vinh (V1-3 / Đông Hải)", type: "wind", capacity: 270, province: "Vĩnh Long", lat: 9.770, lng: 106.490, status: "operating" },
  { id: "ninh-thuan-wind", name: "Cụm điện gió Ninh Thuận", type: "wind", capacity: 600, province: "Khánh Hòa", lat: 11.580, lng: 108.940, status: "operating" },
  { id: "ea-nam", name: "Điện gió Ea Nam", type: "wind", capacity: 400, province: "Đắk Lắk", lat: 13.060, lng: 108.080, status: "operating" },
  { id: "wind-offshore-binh-thuan", name: "Điện gió ngoài khơi La Gàn", type: "wind", capacity: 3500, province: "Lâm Đồng", lat: 10.900, lng: 108.200, status: "planned" },
  // Mặt trời
  { id: "dau-tieng", name: "Điện mặt trời Dầu Tiếng", type: "solar", capacity: 600, province: "Tây Ninh", lat: 11.350, lng: 106.330, status: "operating" },
  { id: "trung-nam", name: "Trung Nam Solar Farm", type: "solar", capacity: 450, province: "Khánh Hòa", lat: 11.700, lng: 109.030, status: "operating" },
  { id: "phu-my-solar", name: "Cụm điện mặt trời Phù Mỹ", type: "solar", capacity: 330, province: "Gia Lai", lat: 14.180, lng: 109.080, status: "operating" },
];

// ===== Khu du lịch trọng điểm quốc gia =====
export type TourismZone = {
  id: string;
  name: string;
  type: "beach" | "heritage" | "ecology" | "city" | "resort";
  province: string;
  lat: number;
  lng: number;
  unesco?: boolean;
};

export const TOURISM_ZONES: TourismZone[] = [
  { id: "ha-long", name: "Vịnh Hạ Long", type: "heritage", province: "Quảng Ninh", lat: 20.910, lng: 107.180, unesco: true },
  { id: "trang-an", name: "Quần thể Tràng An", type: "heritage", province: "Ninh Bình", lat: 20.250, lng: 105.890, unesco: true },
  { id: "phong-nha", name: "Phong Nha - Kẻ Bàng", type: "heritage", province: "Quảng Trị", lat: 17.535, lng: 106.283, unesco: true },
  { id: "hoi-an", name: "Phố cổ Hội An", type: "heritage", province: "Đà Nẵng", lat: 15.880, lng: 108.338, unesco: true },
  { id: "hue-monuments", name: "Quần thể di tích Cố đô Huế", type: "heritage", province: "Huế", lat: 16.470, lng: 107.580, unesco: true },
  { id: "my-son", name: "Thánh địa Mỹ Sơn", type: "heritage", province: "Đà Nẵng", lat: 15.764, lng: 108.124, unesco: true },
  { id: "sapa", name: "Khu du lịch Sa Pa", type: "ecology", province: "Lào Cai", lat: 22.336, lng: 103.844 },
  { id: "moc-chau", name: "Khu du lịch Mộc Châu", type: "ecology", province: "Sơn La", lat: 20.838, lng: 104.638 },
  { id: "tam-dao", name: "Khu du lịch Tam Đảo", type: "ecology", province: "Phú Thọ", lat: 21.460, lng: 105.640 },
  { id: "ba-na", name: "Bà Nà Hills", type: "resort", province: "Đà Nẵng", lat: 16.025, lng: 107.991 },
  { id: "my-khe", name: "Bãi biển Mỹ Khê", type: "beach", province: "Đà Nẵng", lat: 16.058, lng: 108.247 },
  { id: "nha-trang", name: "Vịnh Nha Trang", type: "beach", province: "Khánh Hòa", lat: 12.245, lng: 109.196 },
  { id: "mui-ne", name: "Khu du lịch Mũi Né", type: "beach", province: "Lâm Đồng", lat: 10.945, lng: 108.290 },
  { id: "da-lat", name: "Thành phố Đà Lạt", type: "city", province: "Lâm Đồng", lat: 11.940, lng: 108.458 },
  { id: "vung-tau", name: "Bãi biển Vũng Tàu", type: "beach", province: "TP. Hồ Chí Minh", lat: 10.346, lng: 107.084 },
  { id: "phu-quoc", name: "Đảo Phú Quốc", type: "resort", province: "An Giang", lat: 10.222, lng: 103.967 },
  { id: "con-dao", name: "Côn Đảo", type: "ecology", province: "TP. Hồ Chí Minh", lat: 8.690, lng: 106.610 },
  { id: "cat-ba", name: "Quần đảo Cát Bà", type: "ecology", province: "Hải Phòng", lat: 20.730, lng: 107.050, unesco: true },
];

export const LAYER_COUNTS = {
  industrial: INDUSTRIAL_PARKS.length,
  highways: HIGHWAYS.length,
  projects: KEY_PROJECTS.length,
  power: POWER_PLANTS.length,
  tourism: TOURISM_ZONES.length,
};
