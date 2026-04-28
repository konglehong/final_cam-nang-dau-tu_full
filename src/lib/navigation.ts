// Navigation dùng `labelKey` (i18n key) thay vì label cố định.
// Component sẽ resolve qua useT(): t(labelKey)

export type NavItem = {
  /** i18n key — tra trong DICTIONARY của src/lib/i18n.tsx */
  labelKey: string;
  to: string;
  /** Mô tả dạng key (optional) */
  descriptionKey?: string;
  children?: NavItem[];
};

export const PRIMARY_NAV: NavItem[] = [
  { labelKey: "nav.home", to: "/" },
  { labelKey: "nav.provinces", to: "/tinh-thanh" },
  { labelKey: "nav.investmentMap", to: "/ban-do-dau-tu" },
  { labelKey: "nav.projects", to: "/du-an" },
  { labelKey: "nav.compare", to: "/so-sanh" },
  {
    labelKey: "nav.news",
    to: "/tin-tuc",
    children: [
      { labelKey: "nav.news.policy", to: "/tin-tuc/chinh-sach" },
      { labelKey: "nav.news.local", to: "/tin-tuc/dia-phuong" },
      { labelKey: "nav.news.fdi", to: "/tin-tuc/fdi" },
      { labelKey: "nav.news.infra", to: "/tin-tuc/ha-tang" },
    ],
  },
  {
    labelKey: "nav.multimedia",
    to: "/multimedia",
    children: [
      { labelKey: "nav.multimedia.emagazine", to: "/multimedia/e-magazine" },
      { labelKey: "nav.multimedia.infographic", to: "/multimedia/infographic" },
      { labelKey: "nav.multimedia.video", to: "/multimedia/video" },
      { labelKey: "nav.multimedia.podcast", to: "/multimedia/podcast" },
      { labelKey: "nav.multimedia.livestream", to: "/multimedia/livestream" },
    ],
  },
  {
    labelKey: "nav.investor",
    to: "/nha-dau-tu",
    children: [
      { labelKey: "nav.investor.handbook", to: "/nha-dau-tu/cam-nang" },
      { labelKey: "nav.investor.library", to: "/nha-dau-tu/tai-lieu" },
      { labelKey: "nav.investor.register", to: "/nha-dau-tu/dang-ky-quan-tam" },
      { labelKey: "nav.investor.newsletter", to: "/nha-dau-tu/ban-tin" },
      { labelKey: "nav.investor.events", to: "/nha-dau-tu/su-kien" },
    ],
  },
  {
    labelKey: "nav.locality",
    to: "/dia-phuong",
    children: [
      { labelKey: "nav.locality.process", to: "/dia-phuong/quy-trinh-hop-tac" },
      { labelKey: "nav.locality.casestudy", to: "/dia-phuong/case-study" },
      { labelKey: "nav.locality.consult", to: "/dia-phuong/dang-ky-tu-van" },
    ],
  },
];

export const FOOTER_NAV: Record<string, { labelKey: string; to: string }[]> = {
  "footer.h.explore": [
    { labelKey: "footer.l.map", to: "/ban-do-dau-tu" },
    { labelKey: "footer.l.34provinces", to: "/tinh-thanh" },
    { labelKey: "footer.l.projectDb", to: "/du-an" },
    { labelKey: "footer.l.compare", to: "/so-sanh" },
  ],
  "footer.h.investor": [
    { labelKey: "footer.l.handbook", to: "/nha-dau-tu/cam-nang" },
    { labelKey: "footer.l.library", to: "/nha-dau-tu/tai-lieu" },
    { labelKey: "footer.l.register", to: "/nha-dau-tu/dang-ky-quan-tam" },
    { labelKey: "footer.l.events", to: "/su-kien" },
  ],
  "footer.h.locality": [
    { labelKey: "footer.l.process", to: "/dia-phuong/quy-trinh-hop-tac" },
    { labelKey: "footer.l.casestudy", to: "/dia-phuong/case-study" },
    { labelKey: "footer.l.consult", to: "/dia-phuong/dang-ky-tu-van" },
  ],
  "footer.h.about": [
    { labelKey: "footer.l.intro", to: "/gioi-thieu" },
    { labelKey: "footer.l.contact", to: "/lien-he" },
    { labelKey: "footer.l.terms", to: "/dieu-khoan" },
    { labelKey: "footer.l.privacy", to: "/bao-mat" },
  ],
};

export const LANGUAGES = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
] as const;
