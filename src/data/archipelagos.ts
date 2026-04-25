// Dữ liệu quần đảo Hoàng Sa & Trường Sa thuộc chủ quyền Việt Nam
// Tham khảo: Google Maps (view từ VN), Wikipedia tiếng Việt, Cục Đo đạc Bản đồ VN
// Tọa độ các đảo chính được lấy gần đúng theo dữ liệu công khai

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

export const HOANG_SA: Archipelago = {
  id: "hoang-sa",
  name: "Quần đảo Hoàng Sa",
  nameEn: "Paracel Islands",
  sub: "Huyện Hoàng Sa, TP. Đà Nẵng",
  center: [16.5, 112.0],
  // Bao quanh nhóm An Vĩnh (đông bắc) và nhóm Lưỡi Liềm (tây nam)
  outline: [
    [17.15, 111.0],
    [17.15, 113.05],
    [15.75, 113.05],
    [15.75, 111.0],
    [17.15, 111.0],
  ],
  islands: [
    { name: "Đảo Phú Lâm", lat: 16.834, lng: 112.336, type: "island" },
    { name: "Đảo Hoàng Sa", lat: 16.535, lng: 111.617, type: "island" },
    { name: "Đảo Lincoln (Đông)", lat: 16.665, lng: 112.738, type: "island" },
    { name: "Đảo Tri Tôn", lat: 15.783, lng: 111.2, type: "island" },
    { name: "Đảo Quang Ảnh", lat: 16.45, lng: 111.683, type: "island" },
    { name: "Đảo Duy Mộng", lat: 16.45, lng: 111.683, type: "reef" },
    { name: "Bãi Macclesfield", lat: 16.0, lng: 114.5, type: "bank" },
  ],
};

export const TRUONG_SA: Archipelago = {
  id: "truong-sa",
  name: "Quần đảo Trường Sa",
  nameEn: "Spratly Islands",
  sub: "Huyện Trường Sa, tỉnh Khánh Hòa",
  center: [9.5, 114.0],
  // Polygon bao quanh phạm vi quần đảo Trường Sa
  outline: [
    [12.0, 111.5],
    [12.0, 117.5],
    [7.3, 117.5],
    [6.5, 113.5],
    [7.5, 111.5],
    [12.0, 111.5],
  ],
  islands: [
    { name: "Đảo Trường Sa Lớn", lat: 8.645, lng: 111.917, type: "island" },
    { name: "Đảo Song Tử Tây", lat: 11.425, lng: 114.328, type: "island" },
    { name: "Đảo Sinh Tồn", lat: 9.883, lng: 114.333, type: "island" },
    { name: "Đảo Nam Yết", lat: 10.183, lng: 114.367, type: "island" },
    { name: "Đảo Sơn Ca", lat: 10.383, lng: 114.467, type: "island" },
    { name: "Đảo Phan Vinh", lat: 8.967, lng: 113.683, type: "island" },
    { name: "Đảo An Bang", lat: 7.883, lng: 112.917, type: "island" },
    { name: "Đá Thuyền Chài", lat: 8.183, lng: 113.3, type: "reef" },
    { name: "Đá Tiên Nữ", lat: 8.85, lng: 114.65, type: "reef" },
    { name: "Bãi Tư Chính", lat: 7.633, lng: 109.7, type: "bank" },
  ],
};

export const ARCHIPELAGOS = [HOANG_SA, TRUONG_SA];
