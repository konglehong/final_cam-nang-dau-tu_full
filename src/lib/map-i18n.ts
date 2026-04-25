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

  // Page UI
  pageHeroEyebrow: string;
  pageHeroTitle: string;
  pageHeroDesc: string;
  filterRegion: string;
  regionAll: string;
  regionNorth: string;
  regionCentral: string;
  regionSouth: string;
  layersCountSuffix: string; // "lớp"
  pointsShownSuffix: string; // "điểm hiển thị"
  loadingMap: string;
  legendShowing: string;
  legendEmpty: string;
  sidebarTitle: string;
  sidebarSubtitle: string;
  toggleAll: string;
  toggleNone: string;
  comingSoon: string;
  groupAdmin: string;
  groupEconomic: string;
  groupTransport: string;
  groupKeyProject: string;
  layer: Record<
    "tinh" | "kcn" | "cang" | "sanbay" | "caotoc" | "duan" | "nangluong" | "dulich",
    { label: string; description: string }
  >;
  // Locale code for number formatting
  numberLocale: string;
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
  pageHeroEyebrow: "Bản đồ tương tác",
  pageHeroTitle: "Bản đồ đầu tư Việt Nam",
  pageHeroDesc:
    "Khám phá 34 tỉnh thành sau sáp nhập với dữ liệu kinh tế, hạ tầng, chính sách ưu đãi và cơ hội đầu tư cập nhật theo thời gian thực.",
  filterRegion: "Vùng:",
  regionAll: "Toàn quốc",
  regionNorth: "Miền Bắc",
  regionCentral: "Miền Trung",
  regionSouth: "Miền Nam",
  layersCountSuffix: "lớp",
  pointsShownSuffix: "điểm hiển thị",
  loadingMap: "Đang tải bản đồ…",
  legendShowing: "Đang hiển thị",
  legendEmpty: "Bật lớp ở panel bên phải để hiển thị",
  sidebarTitle: "Lớp dữ liệu",
  sidebarSubtitle: "Bật/tắt để lọc bản đồ",
  toggleAll: "Tất cả",
  toggleNone: "Ẩn",
  comingSoon: "Sắp có",
  groupAdmin: "Hành chính",
  groupEconomic: "Khu kinh tế",
  groupTransport: "Hạ tầng giao thông",
  groupKeyProject: "Dự án trọng điểm",
  layer: {
    tinh: { label: "34 Tỉnh thành", description: "Sau sáp nhập 01/07/2025" },
    sanbay: { label: "Sân bay quốc tế", description: "Đang khai thác & xây dựng" },
    cang: { label: "Cảng biển lớn", description: "Loại đặc biệt & loại I" },
    kcn: { label: "Khu công nghiệp", description: "418 KCN (đang cập nhật)" },
    dulich: { label: "Khu du lịch trọng điểm", description: "Cụm du lịch quốc gia" },
    caotoc: { label: "Cao tốc & vành đai", description: "Mạng lưới cao tốc" },
    duan: { label: "Dự án trọng điểm", description: "Top dự án FDI tỷ USD" },
    nangluong: { label: "Nhà máy năng lượng", description: "Điện gió, mặt trời, LNG" },
  },
  numberLocale: "vi-VN",
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
  pageHeroEyebrow: "Interactive map",
  pageHeroTitle: "Vietnam Investment Map",
  pageHeroDesc:
    "Explore 34 post-merger provinces with real-time data on economy, infrastructure, incentive policies and investment opportunities.",
  filterRegion: "Region:",
  regionAll: "Nationwide",
  regionNorth: "Northern",
  regionCentral: "Central",
  regionSouth: "Southern",
  layersCountSuffix: "layers",
  pointsShownSuffix: "points shown",
  loadingMap: "Loading map…",
  legendShowing: "Currently showing",
  legendEmpty: "Toggle layers in the panel to display",
  sidebarTitle: "Data layers",
  sidebarSubtitle: "Toggle to filter the map",
  toggleAll: "All",
  toggleNone: "Hide",
  comingSoon: "Soon",
  groupAdmin: "Administration",
  groupEconomic: "Economic zones",
  groupTransport: "Transport infrastructure",
  groupKeyProject: "Key projects",
  layer: {
    tinh: { label: "34 Provinces", description: "After merger 01/07/2025" },
    sanbay: { label: "International airports", description: "In service & under construction" },
    cang: { label: "Major seaports", description: "Special & class-I" },
    kcn: { label: "Industrial parks", description: "418 IPs (updating)" },
    dulich: { label: "Key tourism zones", description: "National tourism clusters" },
    caotoc: { label: "Expressways & beltways", description: "Expressway network" },
    duan: { label: "Key projects", description: "Top billion-USD FDI projects" },
    nangluong: { label: "Energy plants", description: "Wind, solar, LNG" },
  },
  numberLocale: "en-US",
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
  pageHeroEyebrow: "互动地图",
  pageHeroTitle: "越南投资地图",
  pageHeroDesc: "探索合并后的34个省市,实时了解经济、基础设施、优惠政策和投资机会。",
  filterRegion: "区域:",
  regionAll: "全国",
  regionNorth: "北部",
  regionCentral: "中部",
  regionSouth: "南部",
  layersCountSuffix: "层",
  pointsShownSuffix: "个标记",
  loadingMap: "地图加载中…",
  legendShowing: "正在显示",
  legendEmpty: "在右侧面板开启图层以显示",
  sidebarTitle: "数据图层",
  sidebarSubtitle: "切换以筛选地图",
  toggleAll: "全部",
  toggleNone: "隐藏",
  comingSoon: "即将推出",
  groupAdmin: "行政区划",
  groupEconomic: "经济区",
  groupTransport: "交通基础设施",
  groupKeyProject: "重点项目",
  layer: {
    tinh: { label: "34个省市", description: "2025年7月1日合并后" },
    sanbay: { label: "国际机场", description: "运营中及在建" },
    cang: { label: "主要港口", description: "特级及一级" },
    kcn: { label: "工业园区", description: "418个工业园(更新中)" },
    dulich: { label: "重点旅游区", description: "国家级旅游集群" },
    caotoc: { label: "高速公路与环线", description: "高速公路网" },
    duan: { label: "重点项目", description: "十亿美元级外资项目" },
    nangluong: { label: "能源电厂", description: "风电、太阳能、LNG" },
  },
  numberLocale: "zh-CN",
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
  pageHeroEyebrow: "인터랙티브 지도",
  pageHeroTitle: "베트남 투자 지도",
  pageHeroDesc:
    "통합 후 34개 성·시의 경제, 인프라, 인센티브 정책 및 투자 기회를 실시간 데이터로 살펴보세요.",
  filterRegion: "지역:",
  regionAll: "전국",
  regionNorth: "북부",
  regionCentral: "중부",
  regionSouth: "남부",
  layersCountSuffix: "레이어",
  pointsShownSuffix: "지점 표시",
  loadingMap: "지도 로딩 중…",
  legendShowing: "표시 중",
  legendEmpty: "오른쪽 패널에서 레이어를 켜세요",
  sidebarTitle: "데이터 레이어",
  sidebarSubtitle: "지도를 필터링하려면 전환하세요",
  toggleAll: "전체",
  toggleNone: "숨김",
  comingSoon: "곧 제공",
  groupAdmin: "행정",
  groupEconomic: "경제 구역",
  groupTransport: "교통 인프라",
  groupKeyProject: "주요 프로젝트",
  layer: {
    tinh: { label: "34개 성·시", description: "2025년 7월 1일 통합 후" },
    sanbay: { label: "국제공항", description: "운영 중 및 건설 중" },
    cang: { label: "주요 항만", description: "특급 및 1급" },
    kcn: { label: "산업단지", description: "418개 IP (업데이트 중)" },
    dulich: { label: "주요 관광지", description: "국가 관광 클러스터" },
    caotoc: { label: "고속도로 및 순환도로", description: "고속도로망" },
    duan: { label: "주요 프로젝트", description: "10억 달러급 FDI 프로젝트" },
    nangluong: { label: "에너지 발전소", description: "풍력, 태양광, LNG" },
  },
  numberLocale: "ko-KR",
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
  pageHeroEyebrow: "インタラクティブ地図",
  pageHeroTitle: "ベトナム投資マップ",
  pageHeroDesc:
    "合併後の34省市の経済、インフラ、優遇政策、投資機会をリアルタイムデータで探索できます。",
  filterRegion: "地域:",
  regionAll: "全国",
  regionNorth: "北部",
  regionCentral: "中部",
  regionSouth: "南部",
  layersCountSuffix: "レイヤー",
  pointsShownSuffix: "ポイント表示",
  loadingMap: "地図を読み込み中…",
  legendShowing: "表示中",
  legendEmpty: "右パネルでレイヤーをオンにしてください",
  sidebarTitle: "データレイヤー",
  sidebarSubtitle: "切り替えて地図を絞り込み",
  toggleAll: "すべて",
  toggleNone: "非表示",
  comingSoon: "近日公開",
  groupAdmin: "行政",
  groupEconomic: "経済区",
  groupTransport: "交通インフラ",
  groupKeyProject: "重点プロジェクト",
  layer: {
    tinh: { label: "34省市", description: "2025年7月1日合併後" },
    sanbay: { label: "国際空港", description: "運用中・建設中" },
    cang: { label: "主要港湾", description: "特級・一級" },
    kcn: { label: "工業団地", description: "418団地(更新中)" },
    dulich: { label: "主要観光地", description: "国家観光クラスター" },
    caotoc: { label: "高速道路・環状線", description: "高速道路網" },
    duan: { label: "重点プロジェクト", description: "10億ドル級FDI案件" },
    nangluong: { label: "エネルギー発電所", description: "風力・太陽光・LNG" },
  },
  numberLocale: "ja-JP",
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
