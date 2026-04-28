import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LangCode = "vi" | "en" | "zh" | "ko" | "ja";

const STORAGE_KEY = "site.lang";
const DEFAULT_LANG: LangCode = "vi";

// =============================================================
// DICTIONARY — UI strings cho 5 ngôn ngữ
// Key dùng dot-notation theo nhóm: nav.*, header.*, footer.*, common.*
// Khi cần thêm chuỗi: thêm key + 5 bản dịch.
// =============================================================
type Dict = Record<string, string>;

const DICTIONARY: Record<LangCode, Dict> = {
  vi: {
    // nav (label menu chính)
    "nav.home": "Trang chủ",
    "nav.provinces": "Tỉnh thành",
    "nav.investmentMap": "Bản đồ đầu tư",
    "nav.projects": "Dự án",
    "nav.compare": "So sánh tỉnh",
    "nav.news": "Tin tức",
    "nav.news.policy": "Chính sách",
    "nav.news.local": "Địa phương",
    "nav.news.fdi": "FDI",
    "nav.news.infra": "Hạ tầng",
    "nav.multimedia": "Multimedia",
    "nav.multimedia.emagazine": "E-magazine",
    "nav.multimedia.infographic": "Infographic",
    "nav.multimedia.video": "Video",
    "nav.multimedia.podcast": "Podcast",
    "nav.multimedia.livestream": "Livestream",
    "nav.investor": "Nhà đầu tư",
    "nav.investor.handbook": "Cẩm nang đầu tư VN",
    "nav.investor.library": "Thư viện tài liệu",
    "nav.investor.register": "Đăng ký quan tâm",
    "nav.investor.newsletter": "Bản tin đầu tư",
    "nav.investor.events": "Sự kiện",
    "nav.locality": "Địa phương",
    "nav.locality.process": "Quy trình hợp tác",
    "nav.locality.casestudy": "Case study",
    "nav.locality.consult": "Đăng ký tư vấn",
    // header
    "header.tagline": "Cổng thông tin đầu tư · 34 tỉnh thành Việt Nam sau sáp nhập",
    "header.weather": "28°C · Nắng nhẹ",
    "header.latest": "Mới nhất",
    "header.searchPlaceholder": "Tìm tỉnh, dự án, tin tức...",
    "header.langAria": "Chọn ngôn ngữ",
    "header.menuAria": "Menu",
    "header.brand": "Cẩm nang Đầu tư VN",
    "header.cta": "Đăng ký quan tâm",
    "header.homeAria": "Trang chủ",
    // footer
    "footer.newsletter.title": "Đăng ký bản tin Đầu tư Việt Nam",
    "footer.newsletter.desc": "Nhận tin tức, dữ liệu và cơ hội đầu tư mới nhất từ 34 tỉnh thành — gửi đến hộp thư của bạn hàng tuần.",
    "footer.newsletter.placeholder": "email@congty.com",
    "footer.newsletter.submit": "Đăng ký miễn phí",
    "footer.brandFull": "Cẩm nang Đầu tư",
    "footer.country": "Việt Nam",
    "footer.about": "Cổng thông tin đầu tư chính thống cho nhà đầu tư, địa phương và công chúng trong bối cảnh sáp nhập đơn vị hành chính tại Việt Nam.",
    "footer.address": "15 Hồ Xuân Hương, Hai Bà Trưng, Hà Nội",
    "footer.copyright": "Bảo lưu mọi quyền.",
    "footer.tagline": "Cổng thông tin đầu tư chính thống",
    // footer headings
    "footer.h.explore": "Khám phá",
    "footer.h.investor": "Nhà đầu tư",
    "footer.h.locality": "Địa phương",
    "footer.h.about": "Về Cẩm nang",
    // footer links (nhóm khám phá)
    "footer.l.map": "Bản đồ đầu tư",
    "footer.l.34provinces": "34 tỉnh thành",
    "footer.l.projectDb": "Cơ sở dữ liệu dự án",
    "footer.l.compare": "So sánh tỉnh",
    "footer.l.handbook": "Cẩm nang đầu tư",
    "footer.l.library": "Thư viện tài liệu",
    "footer.l.register": "Đăng ký quan tâm",
    "footer.l.events": "Sự kiện xúc tiến",
    "footer.l.process": "Quy trình hợp tác",
    "footer.l.casestudy": "Case study",
    "footer.l.consult": "Đăng ký tư vấn",
    "footer.l.intro": "Giới thiệu",
    "footer.l.contact": "Liên hệ",
    "footer.l.terms": "Điều khoản",
    "footer.l.privacy": "Bảo mật",
  },
  en: {
    "nav.home": "Home",
    "nav.provinces": "Provinces",
    "nav.investmentMap": "Investment Map",
    "nav.projects": "Projects",
    "nav.compare": "Compare",
    "nav.news": "News",
    "nav.news.policy": "Policy",
    "nav.news.local": "Local",
    "nav.news.fdi": "FDI",
    "nav.news.infra": "Infrastructure",
    "nav.multimedia": "Multimedia",
    "nav.multimedia.emagazine": "E-magazine",
    "nav.multimedia.infographic": "Infographic",
    "nav.multimedia.video": "Video",
    "nav.multimedia.podcast": "Podcast",
    "nav.multimedia.livestream": "Livestream",
    "nav.investor": "Investors",
    "nav.investor.handbook": "Vietnam Investment Guide",
    "nav.investor.library": "Document Library",
    "nav.investor.register": "Register Interest",
    "nav.investor.newsletter": "Investment Newsletter",
    "nav.investor.events": "Events",
    "nav.locality": "Localities",
    "nav.locality.process": "Cooperation Process",
    "nav.locality.casestudy": "Case Study",
    "nav.locality.consult": "Request Consultation",
    "header.tagline": "Investment portal · 34 Vietnamese provinces after the merger",
    "header.weather": "28°C · Light sun",
    "header.latest": "Latest",
    "header.searchPlaceholder": "Search provinces, projects, news...",
    "header.langAria": "Select language",
    "header.menuAria": "Menu",
    "header.brand": "Vietnam Investment Guide",
    "header.cta": "Register Interest",
    "header.homeAria": "Home",
    "footer.newsletter.title": "Subscribe to the Vietnam Investment Newsletter",
    "footer.newsletter.desc": "Get the latest news, data and investment opportunities from 34 provinces — delivered to your inbox weekly.",
    "footer.newsletter.placeholder": "email@company.com",
    "footer.newsletter.submit": "Subscribe free",
    "footer.brandFull": "Investment Guide",
    "footer.country": "Vietnam",
    "footer.about": "An official investment portal for investors, localities and the public in the context of administrative unit mergers in Vietnam.",
    "footer.address": "15 Ho Xuan Huong, Hai Ba Trung, Hanoi",
    "footer.copyright": "All rights reserved.",
    "footer.tagline": "Official investment portal",
    "footer.h.explore": "Explore",
    "footer.h.investor": "Investors",
    "footer.h.locality": "Localities",
    "footer.h.about": "About",
    "footer.l.map": "Investment Map",
    "footer.l.34provinces": "34 Provinces",
    "footer.l.projectDb": "Project Database",
    "footer.l.compare": "Compare Provinces",
    "footer.l.handbook": "Investment Guide",
    "footer.l.library": "Document Library",
    "footer.l.register": "Register Interest",
    "footer.l.events": "Promotion Events",
    "footer.l.process": "Cooperation Process",
    "footer.l.casestudy": "Case Study",
    "footer.l.consult": "Request Consultation",
    "footer.l.intro": "About Us",
    "footer.l.contact": "Contact",
    "footer.l.terms": "Terms",
    "footer.l.privacy": "Privacy",
  },
  zh: {
    "nav.home": "首页",
    "nav.provinces": "省市",
    "nav.investmentMap": "投资地图",
    "nav.projects": "项目",
    "nav.compare": "省份比较",
    "nav.news": "新闻",
    "nav.news.policy": "政策",
    "nav.news.local": "地方",
    "nav.news.fdi": "外商直接投资",
    "nav.news.infra": "基础设施",
    "nav.multimedia": "多媒体",
    "nav.multimedia.emagazine": "电子杂志",
    "nav.multimedia.infographic": "信息图",
    "nav.multimedia.video": "视频",
    "nav.multimedia.podcast": "播客",
    "nav.multimedia.livestream": "直播",
    "nav.investor": "投资者",
    "nav.investor.handbook": "越南投资指南",
    "nav.investor.library": "资料库",
    "nav.investor.register": "登记关注",
    "nav.investor.newsletter": "投资简报",
    "nav.investor.events": "活动",
    "nav.locality": "地方政府",
    "nav.locality.process": "合作流程",
    "nav.locality.casestudy": "案例研究",
    "nav.locality.consult": "申请咨询",
    "header.tagline": "投资门户 · 合并后越南34个省市",
    "header.weather": "28°C · 晴",
    "header.latest": "最新",
    "header.searchPlaceholder": "搜索省份、项目、新闻...",
    "header.langAria": "选择语言",
    "header.menuAria": "菜单",
    "header.brand": "越南投资指南",
    "header.cta": "登记关注",
    "header.homeAria": "首页",
    "footer.newsletter.title": "订阅越南投资简报",
    "footer.newsletter.desc": "每周获取来自34个省份的最新新闻、数据和投资机会 — 直送您的邮箱。",
    "footer.newsletter.placeholder": "email@company.com",
    "footer.newsletter.submit": "免费订阅",
    "footer.brandFull": "投资指南",
    "footer.country": "越南",
    "footer.about": "在越南行政单位合并背景下,为投资者、地方政府和公众提供的官方投资门户。",
    "footer.address": "河内市,二征夫人郡,胡春香路15号",
    "footer.copyright": "版权所有。",
    "footer.tagline": "官方投资门户",
    "footer.h.explore": "探索",
    "footer.h.investor": "投资者",
    "footer.h.locality": "地方政府",
    "footer.h.about": "关于我们",
    "footer.l.map": "投资地图",
    "footer.l.34provinces": "34个省市",
    "footer.l.projectDb": "项目数据库",
    "footer.l.compare": "省份比较",
    "footer.l.handbook": "投资指南",
    "footer.l.library": "资料库",
    "footer.l.register": "登记关注",
    "footer.l.events": "招商活动",
    "footer.l.process": "合作流程",
    "footer.l.casestudy": "案例研究",
    "footer.l.consult": "申请咨询",
    "footer.l.intro": "简介",
    "footer.l.contact": "联系",
    "footer.l.terms": "条款",
    "footer.l.privacy": "隐私",
  },
  ko: {
    "nav.home": "홈",
    "nav.provinces": "성·시",
    "nav.investmentMap": "투자 지도",
    "nav.projects": "프로젝트",
    "nav.compare": "성 비교",
    "nav.news": "뉴스",
    "nav.news.policy": "정책",
    "nav.news.local": "지방",
    "nav.news.fdi": "외국인직접투자",
    "nav.news.infra": "인프라",
    "nav.multimedia": "멀티미디어",
    "nav.multimedia.emagazine": "E-매거진",
    "nav.multimedia.infographic": "인포그래픽",
    "nav.multimedia.video": "비디오",
    "nav.multimedia.podcast": "팟캐스트",
    "nav.multimedia.livestream": "라이브 방송",
    "nav.investor": "투자자",
    "nav.investor.handbook": "베트남 투자 가이드",
    "nav.investor.library": "자료실",
    "nav.investor.register": "관심 등록",
    "nav.investor.newsletter": "투자 뉴스레터",
    "nav.investor.events": "이벤트",
    "nav.locality": "지방 정부",
    "nav.locality.process": "협력 절차",
    "nav.locality.casestudy": "사례 연구",
    "nav.locality.consult": "상담 신청",
    "header.tagline": "투자 포털 · 통합 후 베트남 34개 성·시",
    "header.weather": "28°C · 맑음",
    "header.latest": "최신",
    "header.searchPlaceholder": "성, 프로젝트, 뉴스 검색...",
    "header.langAria": "언어 선택",
    "header.menuAria": "메뉴",
    "header.brand": "베트남 투자 가이드",
    "header.cta": "관심 등록",
    "header.homeAria": "홈",
    "footer.newsletter.title": "베트남 투자 뉴스레터 구독",
    "footer.newsletter.desc": "34개 성에서 매주 최신 뉴스, 데이터 및 투자 기회를 받아보세요.",
    "footer.newsletter.placeholder": "email@company.com",
    "footer.newsletter.submit": "무료 구독",
    "footer.brandFull": "투자 가이드",
    "footer.country": "베트남",
    "footer.about": "베트남 행정 단위 통합 상황에서 투자자, 지방 정부, 공공을 위한 공식 투자 포털.",
    "footer.address": "하노이시 하이바쯩군 호쑤언흐엉 15번지",
    "footer.copyright": "모든 권리 보유.",
    "footer.tagline": "공식 투자 포털",
    "footer.h.explore": "탐색",
    "footer.h.investor": "투자자",
    "footer.h.locality": "지방 정부",
    "footer.h.about": "소개",
    "footer.l.map": "투자 지도",
    "footer.l.34provinces": "34개 성·시",
    "footer.l.projectDb": "프로젝트 데이터베이스",
    "footer.l.compare": "성 비교",
    "footer.l.handbook": "투자 가이드",
    "footer.l.library": "자료실",
    "footer.l.register": "관심 등록",
    "footer.l.events": "투자 유치 행사",
    "footer.l.process": "협력 절차",
    "footer.l.casestudy": "사례 연구",
    "footer.l.consult": "상담 신청",
    "footer.l.intro": "소개",
    "footer.l.contact": "연락처",
    "footer.l.terms": "약관",
    "footer.l.privacy": "개인정보",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.provinces": "省・市",
    "nav.investmentMap": "投資マップ",
    "nav.projects": "プロジェクト",
    "nav.compare": "省の比較",
    "nav.news": "ニュース",
    "nav.news.policy": "政策",
    "nav.news.local": "地方",
    "nav.news.fdi": "外国直接投資",
    "nav.news.infra": "インフラ",
    "nav.multimedia": "マルチメディア",
    "nav.multimedia.emagazine": "E-マガジン",
    "nav.multimedia.infographic": "インフォグラフィック",
    "nav.multimedia.video": "ビデオ",
    "nav.multimedia.podcast": "ポッドキャスト",
    "nav.multimedia.livestream": "ライブ配信",
    "nav.investor": "投資家",
    "nav.investor.handbook": "ベトナム投資ガイド",
    "nav.investor.library": "資料ライブラリ",
    "nav.investor.register": "関心登録",
    "nav.investor.newsletter": "投資ニュースレター",
    "nav.investor.events": "イベント",
    "nav.locality": "地方自治体",
    "nav.locality.process": "協力プロセス",
    "nav.locality.casestudy": "ケーススタディ",
    "nav.locality.consult": "相談申込",
    "header.tagline": "投資ポータル · 合併後のベトナム34省・市",
    "header.weather": "28°C · 晴れ",
    "header.latest": "最新",
    "header.searchPlaceholder": "省・プロジェクト・ニュースを検索...",
    "header.langAria": "言語を選択",
    "header.menuAria": "メニュー",
    "header.brand": "ベトナム投資ガイド",
    "header.cta": "関心登録",
    "header.homeAria": "ホーム",
    "footer.newsletter.title": "ベトナム投資ニュースレターを購読",
    "footer.newsletter.desc": "34省からの最新ニュース・データ・投資機会を毎週お届けします。",
    "footer.newsletter.placeholder": "email@company.com",
    "footer.newsletter.submit": "無料購読",
    "footer.brandFull": "投資ガイド",
    "footer.country": "ベトナム",
    "footer.about": "ベトナムの行政単位合併を背景に、投資家・地方自治体・一般市民のための公式投資ポータル。",
    "footer.address": "ハノイ市ハイバーチュン区ホースアンフオン通り15番地",
    "footer.copyright": "全著作権所有。",
    "footer.tagline": "公式投資ポータル",
    "footer.h.explore": "探索",
    "footer.h.investor": "投資家",
    "footer.h.locality": "地方自治体",
    "footer.h.about": "概要",
    "footer.l.map": "投資マップ",
    "footer.l.34provinces": "34省・市",
    "footer.l.projectDb": "プロジェクトデータベース",
    "footer.l.compare": "省の比較",
    "footer.l.handbook": "投資ガイド",
    "footer.l.library": "資料ライブラリ",
    "footer.l.register": "関心登録",
    "footer.l.events": "投資誘致イベント",
    "footer.l.process": "協力プロセス",
    "footer.l.casestudy": "ケーススタディ",
    "footer.l.consult": "相談申込",
    "footer.l.intro": "紹介",
    "footer.l.contact": "お問い合わせ",
    "footer.l.terms": "利用規約",
    "footer.l.privacy": "プライバシー",
  },
};

type Ctx = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (k) => k,
});

function readInitial(): LangCode {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "vi" || v === "en" || v === "zh" || v === "ko" || v === "ja") return v;
  } catch {
    /* noop */
  }
  const nav = window.navigator?.language?.toLowerCase() ?? "";
  if (nav.startsWith("vi")) return "vi";
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("ko")) return "ko";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("en")) return "en";
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);

  useEffect(() => {
    const initial = readInitial();
    if (initial !== lang) setLangState(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      return DICTIONARY[lang]?.[key] ?? DICTIONARY.vi[key] ?? key;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Hook tiện dụng, dùng trong component: const t = useT(); t("nav.home") */
export function useT() {
  return useContext(LanguageContext).t;
}
