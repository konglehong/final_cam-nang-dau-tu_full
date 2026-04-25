// Tin tức, sự kiện, tài liệu, multimedia — dataset mẫu để render UI hoàn chỉnh.
// Khi có CMS thật, chỉ cần thay nguồn dữ liệu, giữ nguyên type signature.

export type NewsCategory = "fdi" | "chinh-sach" | "ha-tang" | "dia-phuong";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  author: string;
  source?: string;
  publishedAt: string; // ISO
  readingMinutes: number;
  image?: string; // Unsplash query/url placeholder
  tags: string[];
  body?: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "fdi-thang-3-2025-dat-10-ty-usd",
    title: "FDI vào Việt Nam quý I/2025 cán mốc 10,98 tỷ USD",
    excerpt: "Tổng vốn đăng ký 3 tháng đầu năm tăng 34,7% so với cùng kỳ, dẫn đầu là công nghiệp chế biến - chế tạo và bất động sản.",
    category: "fdi",
    author: "Mai Lan",
    source: "Bộ KH&ĐT",
    publishedAt: "2025-04-02T08:00:00Z",
    readingMinutes: 5,
    tags: ["FDI", "Quý I", "Đầu tư nước ngoài"],
    body: "Theo Cục Đầu tư nước ngoài, tổng vốn FDI đăng ký vào Việt Nam trong quý I/2025 đạt 10,98 tỷ USD, tăng 34,7% so với cùng kỳ 2024. Vốn giải ngân ước đạt 4,96 tỷ USD, tăng 7,2%.",
  },
  {
    slug: "samsung-mo-rong-bac-ninh-them-1-8-ty-usd",
    title: "Samsung tăng vốn thêm 1,8 tỷ USD vào Bắc Ninh",
    excerpt: "Samsung Electro-Mechanics rót thêm vốn mở rộng nhà máy linh kiện tại Yên Phong, đưa tổng vốn vượt 9,3 tỷ USD.",
    category: "fdi",
    author: "Hoàng Anh",
    publishedAt: "2025-03-18T03:30:00Z",
    readingMinutes: 4,
    tags: ["Samsung", "Bắc Ninh", "Điện tử"],
  },
  {
    slug: "nghi-quyet-uu-dai-cong-nghe-cao-2025",
    title: "Chính phủ ban hành Nghị định ưu đãi mới cho công nghệ cao",
    excerpt: "Mức ưu đãi thuế TNDN 5% trong 37 năm đầu, miễn thuế 6 năm cho dự án bán dẫn từ 12.000 tỷ đồng.",
    category: "chinh-sach",
    author: "Trần Minh",
    source: "Cổng Chính phủ",
    publishedAt: "2025-03-12T01:00:00Z",
    readingMinutes: 7,
    tags: ["Chính sách", "Ưu đãi", "Bán dẫn"],
  },
  {
    slug: "khoi-cong-cao-toc-bien-hoa-vung-tau",
    title: "Cao tốc Biên Hòa - Vũng Tàu sẽ thông xe toàn tuyến tháng 9/2025",
    excerpt: "Tuyến cao tốc 53 km kết nối sân bay Long Thành với cụm cảng Cái Mép - Thị Vải bước vào giai đoạn nước rút.",
    category: "ha-tang",
    author: "Nguyễn Hà",
    publishedAt: "2025-04-08T10:00:00Z",
    readingMinutes: 6,
    tags: ["Cao tốc", "Hạ tầng", "Đông Nam Bộ"],
  },
  {
    slug: "metro-tphcm-so-1-mot-thang-vuot-3-trieu-luot",
    title: "Metro số 1 TP.HCM phục vụ hơn 3 triệu lượt khách trong tháng đầu",
    excerpt: "Tuyến Bến Thành - Suối Tiên ghi nhận trung bình 100.000 lượt/ngày, vượt kỳ vọng giai đoạn vận hành thử.",
    category: "ha-tang",
    author: "Bình An",
    publishedAt: "2025-02-22T07:00:00Z",
    readingMinutes: 4,
    tags: ["Metro", "TP.HCM", "Vận tải công cộng"],
  },
  {
    slug: "hai-phong-pci-top-3-2024",
    title: "Hải Phòng vào Top 3 PCI 2024 nhờ cải cách thủ tục đầu tư",
    excerpt: "Thành phố cảng vươn lên vị trí thứ 3 với 71,2 điểm, đứng sau Quảng Ninh và Đà Nẵng.",
    category: "dia-phuong",
    author: "Phương Linh",
    publishedAt: "2025-03-25T05:00:00Z",
    readingMinutes: 5,
    tags: ["PCI", "Hải Phòng", "Cải cách"],
  },
  {
    slug: "lego-binh-duong-khanh-thanh-q4-2025",
    title: "Nhà máy LEGO 1,3 tỷ USD tại Bình Dương sẽ khánh thành Q4/2025",
    excerpt: "Nhà máy carbon-neutral đầu tiên của LEGO ở Đông Nam Á cam kết tạo 4.000 việc làm.",
    category: "fdi",
    author: "Đỗ Quyên",
    publishedAt: "2025-03-30T02:00:00Z",
    readingMinutes: 5,
    tags: ["LEGO", "Bình Dương", "Sản xuất xanh"],
  },
  {
    slug: "ha-noi-cap-phep-trung-tam-tai-chinh-quoc-te",
    title: "Hà Nội thông qua đề án Trung tâm Tài chính Quốc tế",
    excerpt: "Trung tâm Tài chính Quốc tế tại Tây Hồ Tây dự kiến vận hành 2027 với cơ chế đặc thù về thuế và ngoại hối.",
    category: "chinh-sach",
    author: "Anh Khoa",
    publishedAt: "2025-04-05T09:00:00Z",
    readingMinutes: 6,
    tags: ["Hà Nội", "Tài chính", "Trung tâm Quốc tế"],
  },
  {
    slug: "khanh-hoa-thu-hut-3-du-an-dien-gio-ngoai-khoi",
    title: "Khánh Hòa cấp chủ trương 3 dự án điện gió ngoài khơi",
    excerpt: "Tổng công suất 4.500 MW với tổng vốn ước 8,4 tỷ USD, dự kiến vận hành từ 2030.",
    category: "dia-phuong",
    author: "Lê Tuấn",
    publishedAt: "2025-03-08T04:00:00Z",
    readingMinutes: 5,
    tags: ["Điện gió", "Khánh Hòa", "Năng lượng"],
  },
  {
    slug: "long-thanh-airport-dat-tien-do-90",
    title: "Sân bay Long Thành đạt 90% tiến độ giai đoạn 1",
    excerpt: "Đường băng đã hoàn thành 92%, nhà ga hành khách dự kiến cất nóc tháng 6/2025.",
    category: "ha-tang",
    author: "Hoàng Yến",
    publishedAt: "2025-04-15T06:00:00Z",
    readingMinutes: 6,
    tags: ["Sân bay", "Long Thành", "Hạ tầng"],
  },
  {
    slug: "nvidia-mo-rd-tphcm",
    title: "NVIDIA mở Trung tâm R&D & AI Lab tại TP.HCM",
    excerpt: "Hợp tác cùng NIC, NVIDIA xây dựng AI Center quy mô 200 triệu USD, tuyển 800 kỹ sư AI Việt Nam.",
    category: "fdi",
    author: "Minh Châu",
    publishedAt: "2025-02-10T03:00:00Z",
    readingMinutes: 7,
    tags: ["NVIDIA", "AI", "TP.HCM"],
  },
  {
    slug: "khu-thuong-mai-tu-do-da-nang",
    title: "Đà Nẵng được phê duyệt thí điểm Khu Thương mại Tự do",
    excerpt: "Khu thương mại tự do quy mô 1.700 ha tại Liên Chiểu - Hòa Vang, ưu đãi tương đương Singapore.",
    category: "chinh-sach",
    author: "Vũ Hà",
    publishedAt: "2025-01-30T08:00:00Z",
    readingMinutes: 6,
    tags: ["Đà Nẵng", "FTZ", "Logistics"],
  },
];

export function getArticlesByCategory(cat: NewsCategory) {
  return ARTICLES.filter((a) => a.category === cat).sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
  fdi: "FDI & Đầu tư",
  "chinh-sach": "Chính sách",
  "ha-tang": "Hạ tầng",
  "dia-phuong": "Địa phương",
};

// ===== Sự kiện xúc tiến đầu tư =====
export type Event = {
  slug: string;
  title: string;
  date: string; // ISO
  location: string;
  format: "in-person" | "online" | "hybrid";
  category: "summit" | "roadshow" | "workshop" | "ceremony";
  description: string;
  organizer: string;
  registrationOpen: boolean;
};

export const EVENTS: Event[] = [
  {
    slug: "vietnam-investment-summit-2025",
    title: "Vietnam Investment Summit 2025",
    date: "2025-06-12T08:00:00Z",
    location: "Hà Nội (JW Marriott)",
    format: "hybrid",
    category: "summit",
    description: "Diễn đàn đầu tư thường niên với sự tham gia của Thủ tướng, lãnh đạo địa phương và 800+ nhà đầu tư quốc tế.",
    organizer: "Bộ Kế hoạch & Đầu tư",
    registrationOpen: true,
  },
  {
    slug: "roadshow-tokyo-2025",
    title: "Roadshow xúc tiến đầu tư Việt Nam tại Tokyo",
    date: "2025-05-20T10:00:00Z",
    location: "Tokyo, Nhật Bản",
    format: "in-person",
    category: "roadshow",
    description: "8 tỉnh trọng điểm phía Bắc giới thiệu cơ hội đầu tư tới doanh nghiệp Nhật Bản.",
    organizer: "Bộ KH&ĐT × JETRO",
    registrationOpen: true,
  },
  {
    slug: "workshop-ban-dan-da-nang",
    title: "Workshop ngành bán dẫn — Đà Nẵng 2025",
    date: "2025-05-08T08:30:00Z",
    location: "Đà Nẵng (Furama Resort)",
    format: "in-person",
    category: "workshop",
    description: "Trao đổi chính sách & cơ hội đầu tư trong chuỗi giá trị bán dẫn tại miền Trung.",
    organizer: "UBND TP. Đà Nẵng × NIC",
    registrationOpen: true,
  },
  {
    slug: "khoi-cong-vsip-can-tho",
    title: "Lễ khởi công VSIP Cần Thơ",
    date: "2025-07-15T07:00:00Z",
    location: "Cần Thơ",
    format: "in-person",
    category: "ceremony",
    description: "VSIP Group khởi công khu công nghiệp đầu tiên tại ĐBSCL với tổng vốn 200 triệu USD.",
    organizer: "VSIP × UBND TP. Cần Thơ",
    registrationOpen: false,
  },
  {
    slug: "korea-investment-day-bac-ninh",
    title: "Korea Investment Day — Bắc Ninh",
    date: "2025-04-28T09:00:00Z",
    location: "Bắc Ninh",
    format: "in-person",
    category: "roadshow",
    description: "30 doanh nghiệp Hàn Quốc tham quan KCN Yên Phong và làm việc với UBND tỉnh.",
    organizer: "KOTRA × UBND Bắc Ninh",
    registrationOpen: true,
  },
  {
    slug: "vietnam-energy-forum-2025",
    title: "Vietnam Energy Forum 2025",
    date: "2025-09-25T08:00:00Z",
    location: "TP.HCM (Online + Lotte)",
    format: "hybrid",
    category: "summit",
    description: "Diễn đàn năng lượng tái tạo & chuyển dịch năng lượng công bằng (JETP).",
    organizer: "Bộ Công Thương × IFC",
    registrationOpen: true,
  },
];

// ===== Tài liệu xúc tiến =====
export type Document = {
  slug: string;
  title: string;
  type: "guide" | "report" | "factsheet" | "law";
  language: "vi" | "en" | "ja" | "ko" | "zh";
  pages: number;
  fileSize: string;
  publishedAt: string;
  description: string;
};

export const DOCUMENTS: Document[] = [
  { slug: "vn-investment-guide-2025-en", title: "Vietnam Investment Guide 2025", type: "guide", language: "en", pages: 124, fileSize: "12.4 MB", publishedAt: "2025-03-01T00:00:00Z", description: "Tổng quan môi trường đầu tư, ưu đãi và quy trình thành lập doanh nghiệp tại Việt Nam." },
  { slug: "cam-nang-dau-tu-2025-vi", title: "Cẩm nang Đầu tư Việt Nam 2025 (Tiếng Việt)", type: "guide", language: "vi", pages: 156, fileSize: "14.2 MB", publishedAt: "2025-03-01T00:00:00Z", description: "Phiên bản tiếng Việt — chi tiết từng bước cho doanh nghiệp & nhà đầu tư trong nước." },
  { slug: "fdi-report-q1-2025", title: "Báo cáo FDI Quý I/2025", type: "report", language: "vi", pages: 48, fileSize: "4.6 MB", publishedAt: "2025-04-02T00:00:00Z", description: "Phân tích dòng vốn FDI quý I theo ngành, đối tác và địa phương." },
  { slug: "factsheet-bac-ninh-en", title: "Bac Ninh Province — Investment Factsheet", type: "factsheet", language: "en", pages: 12, fileSize: "1.8 MB", publishedAt: "2025-02-15T00:00:00Z", description: "KPI kinh tế, hạ tầng và ưu đãi cho dự án FDI tại Bắc Ninh." },
  { slug: "factsheet-hai-phong-jp", title: "ハイフォン投資ハンドブック", type: "factsheet", language: "ja", pages: 18, fileSize: "2.1 MB", publishedAt: "2025-02-20T00:00:00Z", description: "Hồ sơ đầu tư Hải Phòng dành cho doanh nghiệp Nhật Bản." },
  { slug: "luat-dau-tu-2020-en", title: "Investment Law 2020 (English unofficial)", type: "law", language: "en", pages: 96, fileSize: "3.2 MB", publishedAt: "2024-12-01T00:00:00Z", description: "Bản dịch không chính thức Luật Đầu tư 2020 và các nghị định hướng dẫn." },
  { slug: "energy-master-plan-viii", title: "Quy hoạch điện VIII (PDP8)", type: "law", language: "vi", pages: 312, fileSize: "22.4 MB", publishedAt: "2024-05-15T00:00:00Z", description: "Quy hoạch phát triển điện lực quốc gia 2021-2030, tầm nhìn đến 2050." },
  { slug: "logistics-vn-2024", title: "Vietnam Logistics Outlook 2024", type: "report", language: "en", pages: 64, fileSize: "5.8 MB", publishedAt: "2024-11-30T00:00:00Z", description: "Báo cáo hệ thống logistics, cảng biển và vận tải đa phương thức." },
];

// ===== Multimedia (E-magazine, Podcast, Video, Infographic, Livestream) =====
export type MediaItem = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  duration?: string; // for video/podcast
  pages?: number; // for e-magazine
  thumbnail?: string;
  tags: string[];
};

export const VIDEOS: MediaItem[] = [
  { slug: "video-bac-ninh-thu-phu-dien-tu", title: "Bắc Ninh — Thủ phủ điện tử Việt Nam", description: "Phóng sự 12 phút về hành trình 20 năm trở thành cứ điểm sản xuất chip & smartphone toàn cầu.", publishedAt: "2025-04-10T00:00:00Z", duration: "12:48", tags: ["Bắc Ninh", "Điện tử"] },
  { slug: "video-cao-toc-bac-nam", title: "Toàn cảnh Cao tốc Bắc - Nam phía Đông 2025", description: "Drone footage 4K toàn tuyến từ Hà Nội đến Cà Mau.", publishedAt: "2025-03-22T00:00:00Z", duration: "18:30", tags: ["Cao tốc", "Hạ tầng"] },
  { slug: "video-long-thanh-airport", title: "Sân bay Long Thành — Cửa ngõ ASEAN mới", description: "Tiến độ thi công và quy hoạch tổng thể giai đoạn 2025-2050.", publishedAt: "2025-02-28T00:00:00Z", duration: "9:12", tags: ["Long Thành", "Sân bay"] },
  { slug: "video-pci-2024", title: "PCI 2024 — Top 10 tỉnh tốt nhất cho doanh nghiệp", description: "Phân tích chi tiết 10 chỉ số thành phần PCI 2024.", publishedAt: "2025-03-25T00:00:00Z", duration: "15:00", tags: ["PCI", "Cải cách"] },
];

export const PODCASTS: MediaItem[] = [
  { slug: "podcast-fdi-q1-2025", title: "FDI Quý I/2025: Đâu là nguồn vốn dẫn dắt?", description: "Trao đổi với chuyên gia World Bank về 4 dòng vốn lớn nhất quý đầu năm.", publishedAt: "2025-04-12T00:00:00Z", duration: "32:15", tags: ["FDI", "Podcast"] },
  { slug: "podcast-ban-dan-vn", title: "Việt Nam có thể trở thành mắt xích bán dẫn?", description: "Đối thoại với CEO Synopsys Việt Nam về cơ hội & thách thức.", publishedAt: "2025-03-28T00:00:00Z", duration: "45:00", tags: ["Bán dẫn", "Công nghệ"] },
  { slug: "podcast-pci-bi-quyet", title: "Bí quyết Quảng Ninh giữ vững Top 1 PCI", description: "Lãnh đạo tỉnh chia sẻ về cải cách hành chính trong 7 năm.", publishedAt: "2025-03-15T00:00:00Z", duration: "28:50", tags: ["PCI", "Quảng Ninh"] },
];

export const E_MAGAZINES: MediaItem[] = [
  { slug: "emag-34-tinh-thanh", title: "Đặc san: 34 tỉnh thành sau sáp nhập", description: "120 trang phân tích bản đồ kinh tế Việt Nam mới.", publishedAt: "2025-03-01T00:00:00Z", pages: 120, tags: ["Sáp nhập", "Đặc san"] },
  { slug: "emag-vung-dong-nam-bo", title: "Đặc san Vùng Đông Nam Bộ 2025", description: "Hành trình tăng trưởng & đầu tư tại 4 tỉnh Đông Nam Bộ.", publishedAt: "2025-02-15T00:00:00Z", pages: 88, tags: ["Đông Nam Bộ", "Vùng kinh tế"] },
  { slug: "emag-fdi-han-quoc", title: "FDI Hàn Quốc: 30 năm tại Việt Nam", description: "Câu chuyện đầu tư Hàn Quốc với hơn 86 tỷ USD vốn lũy kế.", publishedAt: "2025-01-20T00:00:00Z", pages: 64, tags: ["Hàn Quốc", "FDI"] },
];

export const INFOGRAPHICS: MediaItem[] = [
  { slug: "infog-fdi-q1-2025", title: "FDI Q1/2025 trong 1 hình", description: "Tóm tắt 10,98 tỷ USD theo ngành, đối tác, địa phương.", publishedAt: "2025-04-02T00:00:00Z", tags: ["FDI", "Infographic"] },
  { slug: "infog-pci-top-10", title: "Top 10 PCI 2024", description: "Bảng xếp hạng 10 tỉnh tốt nhất.", publishedAt: "2025-03-25T00:00:00Z", tags: ["PCI"] },
  { slug: "infog-cao-toc-2025", title: "Bản đồ cao tốc Bắc - Nam 2025", description: "Toàn bộ 11 tuyến đang khai thác và xây dựng.", publishedAt: "2025-03-15T00:00:00Z", tags: ["Hạ tầng", "Cao tốc"] },
  { slug: "infog-energy-mix", title: "Cơ cấu nguồn điện Việt Nam 2030", description: "Quy hoạch điện VIII trong 1 chart.", publishedAt: "2025-02-20T00:00:00Z", tags: ["Năng lượng"] },
];

export const LIVESTREAMS: MediaItem[] = [
  { slug: "live-vietnam-investment-summit", title: "Live: Vietnam Investment Summit 2025", description: "Phát trực tiếp từ JW Marriott Hà Nội.", publishedAt: "2025-06-12T01:00:00Z", duration: "Sắp diễn ra", tags: ["Sự kiện", "Live"] },
  { slug: "live-bac-ninh-pci", title: "Tọa đàm PCI 2024 — Bí quyết của Top 10", description: "Trực tuyến cùng 5 lãnh đạo tỉnh.", publishedAt: "2025-04-26T07:00:00Z", duration: "120 phút", tags: ["PCI", "Tọa đàm"] },
];
