export type NavItem = {
  label: string;
  to: string;
  description?: string;
  children?: NavItem[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Trang chủ", to: "/" },
  {
    label: "Tỉnh thành",
    to: "/tinh-thanh",
    description: "Khám phá 34 tỉnh thành sau sáp nhập",
  },
  {
    label: "Bản đồ đầu tư",
    to: "/ban-do-dau-tu",
    description: "Bản đồ tương tác với dữ liệu KT-XH",
  },
  {
    label: "Dự án",
    to: "/du-an",
    description: "Cơ sở dữ liệu dự án kêu gọi đầu tư",
  },
  {
    label: "So sánh tỉnh",
    to: "/so-sanh",
  },
  {
    label: "Tin tức",
    to: "/tin-tuc",
    children: [
      { label: "Chính sách", to: "/tin-tuc/chinh-sach" },
      { label: "Địa phương", to: "/tin-tuc/dia-phuong" },
      { label: "FDI", to: "/tin-tuc/fdi" },
      { label: "Hạ tầng", to: "/tin-tuc/ha-tang" },
    ],
  },
  {
    label: "Multimedia",
    to: "/multimedia",
    children: [
      { label: "E-magazine", to: "/multimedia/e-magazine" },
      { label: "Infographic", to: "/multimedia/infographic" },
      { label: "Video", to: "/multimedia/video" },
      { label: "Podcast", to: "/multimedia/podcast" },
      { label: "Livestream", to: "/multimedia/livestream" },
    ],
  },
  {
    label: "Nhà đầu tư",
    to: "/nha-dau-tu",
    children: [
      { label: "Cẩm nang đầu tư VN", to: "/nha-dau-tu/cam-nang" },
      { label: "Thư viện tài liệu", to: "/nha-dau-tu/tai-lieu" },
      { label: "Đăng ký quan tâm", to: "/nha-dau-tu/dang-ky-quan-tam" },
      { label: "Bản tin đầu tư", to: "/nha-dau-tu/ban-tin" },
      { label: "Sự kiện", to: "/nha-dau-tu/su-kien" },
    ],
  },
  {
    label: "Địa phương",
    to: "/dia-phuong",
    children: [
      { label: "Quy trình hợp tác", to: "/dia-phuong/quy-trinh-hop-tac" },
      { label: "Case study", to: "/dia-phuong/case-study" },
      { label: "Đăng ký tư vấn", to: "/dia-phuong/dang-ky-tu-van" },
    ],
  },
];

export const FOOTER_NAV = {
  "Khám phá": [
    { label: "Bản đồ đầu tư", to: "/ban-do-dau-tu" },
    { label: "34 tỉnh thành", to: "/tinh-thanh" },
    { label: "Cơ sở dữ liệu dự án", to: "/du-an" },
    { label: "So sánh tỉnh", to: "/so-sanh" },
  ],
  "Nhà đầu tư": [
    { label: "Cẩm nang đầu tư", to: "/nha-dau-tu/cam-nang" },
    { label: "Thư viện tài liệu", to: "/nha-dau-tu/tai-lieu" },
    { label: "Đăng ký quan tâm", to: "/nha-dau-tu/dang-ky-quan-tam" },
    { label: "Sự kiện xúc tiến", to: "/su-kien" },
  ],
  "Địa phương": [
    { label: "Quy trình hợp tác", to: "/dia-phuong/quy-trinh-hop-tac" },
    { label: "Case study", to: "/dia-phuong/case-study" },
    { label: "Đăng ký tư vấn", to: "/dia-phuong/dang-ky-tu-van" },
  ],
  "Về Cẩm nang": [
    { label: "Giới thiệu", to: "/gioi-thieu" },
    { label: "Liên hệ", to: "/lien-he" },
    { label: "Điều khoản", to: "/dieu-khoan" },
    { label: "Bảo mật", to: "/bao-mat" },
  ],
} as const;

export const LANGUAGES = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
] as const;
