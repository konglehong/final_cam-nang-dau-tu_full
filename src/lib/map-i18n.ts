// Strings hiển thị trên bản đồ + builder URL tile theo ngôn ngữ.
// CartoDB Voyager hỗ trợ nhãn đa ngôn ngữ qua biến thể "voyager_labels_under" + lang param không có,
// nên ta dùng OSM mặc định cho VI (đã có nhãn "Quần đảo Hoàng Sa/Trường Sa" tiếng Việt do cộng đồng OSM VN đóng góp)
// và CartoDB Voyager (label tiếng Anh chuẩn quốc tế) cho các ngôn ngữ khác.
// Quan trọng: nhãn HS/TS chủ quyền VN luôn được vẽ overlay ở client → bất biến với mọi tile.

import type { LangCode } from "./i18n";

export type MapStrings = {
  // Layer / base map
  baseStandard: string;
  baseTerrain: string;
  baseSatellite: string;

  // Sovereignty
  sovereigntyNote: string;
  belongsTo: string;
  islandsCount: (n: number) => string;
  typeIsland: string;
  typeReef: string;
  typeBank: string;

  // Province popup
  capital: string;
  mergedFrom: string;
  viewDetails: string;

  // Airport / seaport popup
  airportIntl: string;
  airportDomestic: string;
  seaportSpecial: string;
  seaportClassI: string;

  // Archipelago names (giữ tên VN — đây là chủ quyền lãnh thổ, không dịch tên riêng)
  hoangSaName: string;
  hoangSaSub: string;
  truongSaName: string;
  truongSaSub: string;
};

const VI: MapStrings = {
  baseStandard: "Bản đồ (chuẩn VN)",
  baseTerrain: "Bản đồ địa hình",
  baseSatellite: "Vệ tinh (Esri)",
  sovereigntyNote: "Thuộc chủ quyền không thể tranh cãi của Việt Nam",
  belongsTo: "Thuộc",
  islandsCount: (n) => `${n} đảo/đá/bãi chính`,
  typeIsland: "Đảo",
  typeReef: "Đá/Rạn",
  typeBank: "Bãi",
  capital: "Trung tâm",
  mergedFrom: "Sáp nhập từ",
  viewDetails: "Xem chi tiết →",
  airportIntl: "Sân bay quốc tế",
  airportDomestic: "Sân bay nội địa",
  seaportSpecial: "Cảng loại đặc biệt",
  seaportClassI: "Cảng loại I",
  hoangSaName: "Quần đảo Hoàng Sa",
  hoangSaSub: "Huyện Hoàng Sa, TP. Đà Nẵng",
  truongSaName: "Quần đảo Trường Sa",
  truongSaSub: "Huyện Trường Sa, tỉnh Khánh Hòa",
};

const EN: MapStrings = {
  baseStandard: "Standard map",
  baseTerrain: "Terrain map",
  baseSatellite: "Satellite (Esri)",
  sovereigntyNote: "Inalienable sovereign territory of Vietnam",
  belongsTo: "Part of",
  islandsCount: (n) => `${n} main islands/reefs/banks`,
  typeIsland: "Island",
  typeReef: "Reef",
  typeBank: "Bank",
  capital: "Capital",
  mergedFrom: "Merged from",
  viewDetails: "View details →",
  airportIntl: "International airport",
  airportDomestic: "Domestic airport",
  seaportSpecial: "Special-class seaport",
  seaportClassI: "Class-I seaport",
  hoangSaName: "Hoang Sa Archipelago",
  hoangSaSub: "Hoang Sa District, Da Nang City",
  truongSaName: "Truong Sa Archipelago",
  truongSaSub: "Truong Sa District, Khanh Hoa Province",
};

const ZH: MapStrings = {
  baseStandard: "标准地图",
  baseTerrain: "地形图",
  baseSatellite: "卫星图 (Esri)",
  sovereigntyNote: "越南不可争辩的主权领土",
  belongsTo: "隶属",
  islandsCount: (n) => `${n} 个主要岛屿/礁/滩`,
  typeIsland: "岛",
  typeReef: "礁",
  typeBank: "滩",
  capital: "中心",
  mergedFrom: "合并自",
  viewDetails: "查看详情 →",
  airportIntl: "国际机场",
  airportDomestic: "国内机场",
  seaportSpecial: "特级港口",
  seaportClassI: "一级港口",
  hoangSaName: "黄沙群岛 (Hoàng Sa)",
  hoangSaSub: "岘港市黄沙县",
  truongSaName: "长沙群岛 (Trường Sa)",
  truongSaSub: "庆和省长沙县",
};

const KO: MapStrings = {
  baseStandard: "표준 지도",
  baseTerrain: "지형 지도",
  baseSatellite: "위성 (Esri)",
  sovereigntyNote: "베트남의 양도할 수 없는 주권 영토",
  belongsTo: "소속",
  islandsCount: (n) => `${n}개 주요 섬/암초/모래톱`,
  typeIsland: "섬",
  typeReef: "암초",
  typeBank: "모래톱",
  capital: "중심",
  mergedFrom: "통합 출처",
  viewDetails: "자세히 보기 →",
  airportIntl: "국제공항",
  airportDomestic: "국내공항",
  seaportSpecial: "특급항",
  seaportClassI: "1급항",
  hoangSaName: "호앙사 군도",
  hoangSaSub: "다낭시 호앙사현",
  truongSaName: "쯔엉사 군도",
  truongSaSub: "카인호아성 쯔엉사현",
};

const JA: MapStrings = {
  baseStandard: "標準地図",
  baseTerrain: "地形図",
  baseSatellite: "衛星 (Esri)",
  sovereigntyNote: "ベトナムの不可侵の主権領土",
  belongsTo: "所属",
  islandsCount: (n) => `${n} の主要な島/礁/瀬`,
  typeIsland: "島",
  typeReef: "礁",
  typeBank: "瀬",
  capital: "中心",
  mergedFrom: "合併元",
  viewDetails: "詳細を見る →",
  airportIntl: "国際空港",
  airportDomestic: "国内空港",
  seaportSpecial: "特級港",
  seaportClassI: "一級港",
  hoangSaName: "ホアンサ諸島",
  hoangSaSub: "ダナン市ホアンサ県",
  truongSaName: "チュオンサ諸島",
  truongSaSub: "カインホア省チュオンサ県",
};

const TABLE: Record<LangCode, MapStrings> = {
  vi: VI,
  en: EN,
  zh: ZH,
  ko: KO,
  ja: JA,
};

export function getMapStrings(lang: LangCode): MapStrings {
  return TABLE[lang] ?? VI;
}

// Tile URL theo ngôn ngữ.
// - VI: dùng OSM (đã có nhãn HS/TS tiếng Việt từ cộng đồng OSM VN).
// - Các ngôn ngữ khác: dùng CartoDB Voyager (nhãn tiếng Anh quốc tế, render đẹp,
//   có CDN nhanh, miễn phí cho non-heavy use).
// Trong mọi trường hợp, overlay HS/TS chủ quyền VN được vẽ phía client.
export type TileSpec = {
  url: string;
  attribution: string;
  subdomains?: string[];
  maxZoom?: number;
};

export function getStandardTile(lang: LangCode): TileSpec {
  if (lang === "vi") {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: ["a", "b", "c"],
      maxZoom: 19,
    };
  }
  return {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: ["a", "b", "c", "d"],
    maxZoom: 19,
  };
}

export function getTerrainTile(): TileSpec {
  return {
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)',
    subdomains: ["a", "b", "c"],
    maxZoom: 17,
  };
}

export function getSatelliteTile(): TileSpec {
  return {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics",
    maxZoom: 19,
  };
}
