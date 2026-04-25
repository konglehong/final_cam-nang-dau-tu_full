// Tên đa ngôn ngữ cho 34 tỉnh thành VN, các biển, và quốc gia láng giềng.
// Dùng để vẽ overlay nhãn trên map khi tile nền không có nhãn.

import type { LangCode } from "@/lib/i18n";

type LangMap = Record<LangCode, string>;

// 34 tỉnh thành — slug khớp với src/data/provinces.ts
// Ưu tiên dùng tên/phiên âm phổ biến. Tiếng Việt giữ nguyên có dấu.
export const PROVINCE_NAME_I18N: Record<string, LangMap> = {
  "ha-noi":      { vi: "Hà Nội",          en: "Hanoi",          zh: "河内",       ko: "하노이",        ja: "ハノイ" },
  "hue":         { vi: "Huế",             en: "Hue",            zh: "顺化",       ko: "후에",          ja: "フエ" },
  "lai-chau":    { vi: "Lai Châu",        en: "Lai Chau",       zh: "莱州",       ko: "라이쩌우",      ja: "ライチャウ" },
  "dien-bien":   { vi: "Điện Biên",       en: "Dien Bien",      zh: "奠边",       ko: "디엔비엔",      ja: "ディエンビエン" },
  "son-la":      { vi: "Sơn La",          en: "Son La",         zh: "山萝",       ko: "선라",          ja: "ソンラ" },
  "lang-son":    { vi: "Lạng Sơn",        en: "Lang Son",       zh: "谅山",       ko: "랑선",          ja: "ランソン" },
  "quang-ninh":  { vi: "Quảng Ninh",      en: "Quang Ninh",     zh: "广宁",       ko: "꽝닌",          ja: "クアンニン" },
  "thanh-hoa":   { vi: "Thanh Hóa",       en: "Thanh Hoa",      zh: "清化",       ko: "타인호아",      ja: "タインホア" },
  "nghe-an":     { vi: "Nghệ An",         en: "Nghe An",        zh: "乂安",       ko: "응에안",        ja: "ゲアン" },
  "ha-tinh":     { vi: "Hà Tĩnh",         en: "Ha Tinh",        zh: "河静",       ko: "하띤",          ja: "ハティン" },
  "cao-bang":    { vi: "Cao Bằng",        en: "Cao Bang",       zh: "高平",       ko: "까오방",        ja: "カオバン" },
  "tuyen-quang": { vi: "Tuyên Quang",     en: "Tuyen Quang",    zh: "宣光",       ko: "뚜옌꽝",        ja: "トゥエンクアン" },
  "lao-cai":     { vi: "Lào Cai",         en: "Lao Cai",        zh: "老街",       ko: "라오까이",      ja: "ラオカイ" },
  "thai-nguyen": { vi: "Thái Nguyên",     en: "Thai Nguyen",    zh: "太原",       ko: "타이응우옌",    ja: "タイグエン" },
  "phu-tho":     { vi: "Phú Thọ",         en: "Phu Tho",        zh: "富寿",       ko: "푸토",          ja: "フート" },
  "bac-ninh":    { vi: "Bắc Ninh",        en: "Bac Ninh",       zh: "北宁",       ko: "박닌",          ja: "バクニン" },
  "hung-yen":    { vi: "Hưng Yên",        en: "Hung Yen",       zh: "兴安",       ko: "흥옌",          ja: "フンイエン" },
  "hai-phong":   { vi: "Hải Phòng",       en: "Haiphong",       zh: "海防",       ko: "하이퐁",        ja: "ハイフォン" },
  "ninh-binh":   { vi: "Ninh Bình",       en: "Ninh Binh",      zh: "宁平",       ko: "닌빈",          ja: "ニンビン" },
  "quang-tri":   { vi: "Quảng Trị",       en: "Quang Tri",      zh: "广治",       ko: "꽝찌",          ja: "クアンチ" },
  "da-nang":     { vi: "Đà Nẵng",         en: "Da Nang",        zh: "岘港",       ko: "다낭",          ja: "ダナン" },
  "quang-ngai":  { vi: "Quảng Ngãi",      en: "Quang Ngai",     zh: "广义",       ko: "꽝응아이",      ja: "クアンガイ" },
  "gia-lai":     { vi: "Gia Lai",         en: "Gia Lai",        zh: "嘉莱",       ko: "잘라이",        ja: "ザライ" },
  "khanh-hoa":   { vi: "Khánh Hòa",       en: "Khanh Hoa",      zh: "庆和",       ko: "카인호아",      ja: "カインホア" },
  "lam-dong":    { vi: "Lâm Đồng",        en: "Lam Dong",       zh: "林同",       ko: "럼동",          ja: "ラムドン" },
  "dak-lak":     { vi: "Đắk Lắk",         en: "Dak Lak",        zh: "多乐",       ko: "닥락",          ja: "ダクラク" },
  "ho-chi-minh": { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City", zh: "胡志明市",   ko: "호찌민시",      ja: "ホーチミン市" },
  "dong-nai":    { vi: "Đồng Nai",        en: "Dong Nai",       zh: "同奈",       ko: "동나이",        ja: "ドンナイ" },
  "tay-ninh":    { vi: "Tây Ninh",        en: "Tay Ninh",       zh: "西宁",       ko: "떠이닌",        ja: "タイニン" },
  "vinh-long":   { vi: "Vĩnh Long",       en: "Vinh Long",      zh: "永隆",       ko: "빈롱",          ja: "ヴィンロン" },
  "dong-thap":   { vi: "Đồng Tháp",       en: "Dong Thap",      zh: "同塔",       ko: "동탑",          ja: "ドンタップ" },
  "ca-mau":      { vi: "Cà Mau",          en: "Ca Mau",         zh: "金瓯",       ko: "까마우",        ja: "カマウ" },
  "an-giang":    { vi: "An Giang",        en: "An Giang",       zh: "安江",       ko: "안장",          ja: "アンザン" },
  "can-tho":     { vi: "Cần Thơ",         en: "Can Tho",        zh: "芹苴",       ko: "껀터",          ja: "カントー" },
};

export function getProvinceName(slug: string, lang: LangCode, fallback: string): string {
  const m = PROVINCE_NAME_I18N[slug];
  if (!m) return fallback;
  return m[lang] || m.vi || fallback;
}

// Nhãn biển & vịnh đa ngôn ngữ — quan trọng để khẳng định "Biển Đông" theo cách gọi VN
export type SeaLabel = {
  id: string;
  lat: number;
  lng: number;
  names: LangMap;
  fontSize?: number; // px
};

export const SEA_LABELS: SeaLabel[] = [
  {
    id: "bien-dong",
    lat: 13.5,
    lng: 113.5,
    names: {
      vi: "BIỂN ĐÔNG",
      en: "EAST SEA",
      zh: "东海 (Biển Đông)",
      ko: "동해 (비엔동)",
      ja: "東海 (ビエンドン)",
    },
    fontSize: 16,
  },
  {
    id: "vinh-bac-bo",
    lat: 19.5,
    lng: 107.5,
    names: {
      vi: "VỊNH BẮC BỘ",
      en: "GULF OF TONKIN",
      zh: "北部湾",
      ko: "통킹만",
      ja: "トンキン湾",
    },
    fontSize: 12,
  },
  {
    id: "vinh-thai-lan",
    lat: 8.5,
    lng: 102.5,
    names: {
      vi: "VỊNH THÁI LAN",
      en: "GULF OF THAILAND",
      zh: "泰国湾",
      ko: "타이만",
      ja: "タイランド湾",
    },
    fontSize: 12,
  },
];

// Quốc gia láng giềng
export type CountryLabel = {
  id: string;
  lat: number;
  lng: number;
  names: LangMap;
};

export const COUNTRY_LABELS: CountryLabel[] = [
  {
    id: "china",
    lat: 23.5,
    lng: 105.5,
    names: { vi: "TRUNG QUỐC", en: "CHINA", zh: "中国", ko: "중국", ja: "中国" },
  },
  {
    id: "laos",
    lat: 19.5,
    lng: 103.5,
    names: { vi: "LÀO", en: "LAOS", zh: "老挝", ko: "라오스", ja: "ラオス" },
  },
  {
    id: "cambodia",
    lat: 12.5,
    lng: 104.5,
    names: { vi: "CAMPUCHIA", en: "CAMBODIA", zh: "柬埔寨", ko: "캄보디아", ja: "カンボジア" },
  },
  {
    id: "thailand",
    lat: 15.5,
    lng: 101.0,
    names: { vi: "THÁI LAN", en: "THAILAND", zh: "泰国", ko: "태국", ja: "タイ" },
  },
  {
    id: "philippines",
    lat: 14.5,
    lng: 121.5,
    names: { vi: "PHILIPPINES", en: "PHILIPPINES", zh: "菲律宾", ko: "필리핀", ja: "フィリピン" },
  },
  {
    id: "malaysia",
    lat: 4.0,
    lng: 102.5,
    names: { vi: "MALAYSIA", en: "MALAYSIA", zh: "马来西亚", ko: "말레이시아", ja: "マレーシア" },
  },
  {
    id: "myanmar",
    lat: 21.0,
    lng: 96.0,
    names: { vi: "MYANMAR", en: "MYANMAR", zh: "缅甸", ko: "미얀마", ja: "ミャンマー" },
  },
  {
    id: "hainan",
    lat: 19.2,
    lng: 109.5,
    names: { vi: "Đảo Hải Nam (TQ)", en: "Hainan I. (CN)", zh: "海南岛", ko: "하이난섬", ja: "海南島" },
  },
];

// Thành phố/địa danh nước ngoài — vẽ overlay khi không phải tiếng Việt
// để tile nền (light_nolabels) không bị trống tên thành phố.
export type ForeignCityLabel = {
  id: string;
  lat: number;
  lng: number;
  names: LangMap;
  // Cấp độ ưu tiên: 1 = thủ đô/megacity (luôn hiện), 2 = thành phố lớn (zoom >= 6)
  tier: 1 | 2;
};

export const FOREIGN_CITIES: ForeignCityLabel[] = [
  // Trung Quốc — vùng giáp VN
  { id: "nanning",  lat: 22.82, lng: 108.37, tier: 1, names: { vi: "Nam Ninh",   en: "Nanning",    zh: "南宁",   ko: "난닝",      ja: "南寧" } },
  { id: "kunming",  lat: 25.05, lng: 102.72, tier: 1, names: { vi: "Côn Minh",   en: "Kunming",    zh: "昆明",   ko: "쿤밍",      ja: "昆明" } },
  { id: "guangzhou",lat: 23.13, lng: 113.27, tier: 1, names: { vi: "Quảng Châu", en: "Guangzhou",  zh: "广州",   ko: "광저우",    ja: "広州" } },
  { id: "haikou",   lat: 20.04, lng: 110.32, tier: 2, names: { vi: "Hải Khẩu",   en: "Haikou",     zh: "海口",   ko: "하이커우",  ja: "海口" } },
  { id: "sanya",    lat: 18.25, lng: 109.51, tier: 2, names: { vi: "Tam Á",      en: "Sanya",      zh: "三亚",   ko: "싼야",      ja: "三亜" } },
  { id: "hongkong", lat: 22.30, lng: 114.17, tier: 2, names: { vi: "Hồng Kông",  en: "Hong Kong",  zh: "香港",   ko: "홍콩",      ja: "香港" } },

  // Lào
  { id: "vientiane",  lat: 17.97, lng: 102.60, tier: 1, names: { vi: "Viêng Chăn",   en: "Vientiane",    zh: "万象",   ko: "비엔티안",  ja: "ビエンチャン" } },
  { id: "luangprabang", lat: 19.88, lng: 102.13, tier: 2, names: { vi: "Luang Prabang", en: "Luang Prabang", zh: "琅勃拉邦", ko: "루앙프라방", ja: "ルアンパバーン" } },
  { id: "savannakhet",lat: 16.55, lng: 104.75, tier: 2, names: { vi: "Savannakhet",  en: "Savannakhet",  zh: "沙湾拿吉", ko: "사완나켓",  ja: "サワンナケート" } },

  // Campuchia
  { id: "phnompenh",  lat: 11.56, lng: 104.92, tier: 1, names: { vi: "Phnôm Pênh",   en: "Phnom Penh",   zh: "金边",   ko: "프놈펜",    ja: "プノンペン" } },
  { id: "siemreap",   lat: 13.36, lng: 103.86, tier: 2, names: { vi: "Siem Reap",    en: "Siem Reap",    zh: "暹粒",   ko: "시엠레아프",ja: "シェムリアップ" } },
  { id: "sihanoukville", lat: 10.63, lng: 103.52, tier: 2, names: { vi: "Sihanoukville", en: "Sihanoukville", zh: "西哈努克", ko: "시아누크빌", ja: "シアヌークビル" } },

  // Thái Lan
  { id: "bangkok",    lat: 13.75, lng: 100.50, tier: 1, names: { vi: "Bangkok",      en: "Bangkok",      zh: "曼谷",   ko: "방콕",      ja: "バンコク" } },
  { id: "chiangmai",  lat: 18.79, lng: 98.99,  tier: 2, names: { vi: "Chiang Mai",   en: "Chiang Mai",   zh: "清迈",   ko: "치앙마이",  ja: "チェンマイ" } },
  { id: "udonthani",  lat: 17.41, lng: 102.79, tier: 2, names: { vi: "Udon Thani",   en: "Udon Thani",   zh: "乌隆他尼", ko: "우돈타니",  ja: "ウドンタニ" } },

  // Khác
  { id: "manila",     lat: 14.60, lng: 120.98, tier: 1, names: { vi: "Manila",       en: "Manila",       zh: "马尼拉", ko: "마닐라",    ja: "マニラ" } },
  { id: "kualalumpur",lat: 3.14,  lng: 101.69, tier: 1, names: { vi: "Kuala Lumpur", en: "Kuala Lumpur", zh: "吉隆坡", ko: "쿠알라룸푸르", ja: "クアラルンプール" } },
  { id: "yangon",     lat: 16.84, lng: 96.17,  tier: 2, names: { vi: "Yangon",       en: "Yangon",       zh: "仰光",   ko: "양곤",      ja: "ヤンゴン" } },
];
