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
];
