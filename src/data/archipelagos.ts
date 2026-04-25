// Dữ liệu quần đảo Hoàng Sa & Trường Sa thuộc chủ quyền Việt Nam
// Tọa độ tham khảo từ các nguồn công khai (Wikipedia VN/EN, dữ liệu hải đồ).
// Outline được vẽ ôm sát theo cụm đảo thực tế để hiển thị giống bản đồ chuẩn.

export type IslandPoint = {
  name: string;
  lat: number;
  lng: number;
  type?: "island" | "reef" | "bank";
};

export type Archipelago = {
  id: string;
  name: string;
  nameEn: string;
  sub: string;
  // Trung tâm để đặt label chính
  center: [number, number];
  // Polygon bao quanh quần đảo (vẽ đường biên hành chính)
  outline: [number, number][];
  // Các đảo/đá chính
  islands: IslandPoint[];
};

// HOÀNG SA — gồm 2 nhóm chính: An Vĩnh (đông bắc) và Lưỡi Liềm (tây nam).
// Outline ôm theo phạm vi 2 nhóm này (không bao gồm bãi Macclesfield).
export const HOANG_SA: Archipelago = {
  id: "hoang-sa",
  name: "Quần đảo Hoàng Sa",
  nameEn: "Paracel Islands",
  sub: "Huyện Hoàng Sa, TP. Đà Nẵng",
  center: [16.55, 112.0],
  outline: [
    [17.10, 111.45],
    [17.10, 112.95],
    [16.40, 112.95],
    [15.70, 112.20],
    [15.70, 111.10],
    [16.40, 111.10],
    [17.10, 111.45],
  ],
  islands: [
    // Nhóm An Vĩnh (Amphitrite)
    { name: "Đảo Phú Lâm", lat: 16.834, lng: 112.336, type: "island" },
    { name: "Đảo Cây", lat: 16.967, lng: 112.267, type: "island" },
    { name: "Đảo Bắc", lat: 16.95, lng: 112.32, type: "island" },
    { name: "Đảo Nam", lat: 16.933, lng: 112.333, type: "island" },
    { name: "Đảo Linh Côn", lat: 16.667, lng: 112.733, type: "island" },
    // Nhóm Lưỡi Liềm (Crescent)
    { name: "Đảo Hoàng Sa", lat: 16.533, lng: 111.617, type: "island" },
    { name: "Đảo Quang Ảnh", lat: 16.45, lng: 111.683, type: "island" },
    { name: "Đảo Hữu Nhật", lat: 16.508, lng: 111.617, type: "island" },
    { name: "Đảo Duy Mộng", lat: 16.467, lng: 111.683, type: "reef" },
    { name: "Đảo Quang Hòa", lat: 16.45, lng: 111.7, type: "island" },
    // Đảo riêng lẻ
    { name: "Đảo Tri Tôn", lat: 15.783, lng: 111.2, type: "island" },
  ],
};

// TRƯỜNG SA — phạm vi rộng, nhiều đảo/đá/bãi cạn.
// Outline ôm theo phạm vi địa lý quần đảo (không gồm bãi Tư Chính nằm riêng phía tây).
export const TRUONG_SA: Archipelago = {
  id: "truong-sa",
  name: "Quần đảo Trường Sa",
  nameEn: "Spratly Islands",
  sub: "Huyện Trường Sa, tỉnh Khánh Hòa",
  center: [9.5, 114.0],
  outline: [
    [11.80, 112.20],
    [11.80, 117.00],
    [10.50, 117.30],
    [8.00, 116.50],
    [7.30, 114.80],
    [7.30, 112.50],
    [8.50, 111.80],
    [11.00, 111.80],
    [11.80, 112.20],
  ],
  islands: [
    // Cụm phía bắc
    { name: "Đảo Song Tử Tây", lat: 11.425, lng: 114.328, type: "island" },
    { name: "Đảo Song Tử Đông", lat: 11.45, lng: 114.35, type: "island" },
    { name: "Đảo Đá Nam", lat: 11.40, lng: 114.37, type: "reef" },
    // Cụm Nam Yết / Sinh Tồn
    { name: "Đảo Nam Yết", lat: 10.183, lng: 114.367, type: "island" },
    { name: "Đảo Sơn Ca", lat: 10.383, lng: 114.467, type: "island" },
    { name: "Đảo Sinh Tồn", lat: 9.883, lng: 114.333, type: "island" },
    { name: "Đảo Sinh Tồn Đông", lat: 9.9, lng: 114.667, type: "island" },
    { name: "Đá Cô Lin", lat: 9.733, lng: 114.25, type: "reef" },
    { name: "Đá Len Đao", lat: 9.783, lng: 114.367, type: "reef" },
    // Cụm trung tâm / nam
    { name: "Đảo Trường Sa Lớn", lat: 8.645, lng: 111.917, type: "island" },
    { name: "Đảo Trường Sa Đông", lat: 8.917, lng: 112.367, type: "island" },
    { name: "Đảo Phan Vinh", lat: 8.967, lng: 113.683, type: "island" },
    { name: "Đảo An Bang", lat: 7.883, lng: 112.917, type: "island" },
    { name: "Đảo Tốc Tan", lat: 8.817, lng: 113.95, type: "reef" },
    { name: "Đảo Núi Le", lat: 8.75, lng: 114.183, type: "reef" },
    { name: "Đá Thuyền Chài", lat: 8.183, lng: 113.3, type: "reef" },
    { name: "Đá Tiên Nữ", lat: 8.85, lng: 114.65, type: "reef" },
    { name: "Đá Lát", lat: 8.667, lng: 111.667, type: "reef" },
    { name: "Đá Đông", lat: 8.833, lng: 112.583, type: "reef" },
    { name: "Đá Tây", lat: 8.85, lng: 112.217, type: "reef" },
    // Bãi cạn xa (không nằm trong polygon chính)
    { name: "Bãi Tư Chính", lat: 7.633, lng: 109.7, type: "bank" },
  ],
};

export const ARCHIPELAGOS = [HOANG_SA, TRUONG_SA];
