## 🎯 Mục tiêu trang
Chuyên trang hợp tác **Báo Tiền Phong × Greencom**, đóng vai trò:
- Cổng thông tin đầu tư chính thống cho 34 tỉnh/thành sau sáp nhập.
- Lead-gen cho 3 gói dịch vụ truyền thông địa phương (Cơ bản / Nâng cao / Premium).
- Trục nội dung trung tâm cho hệ sinh thái social (TikTok, YouTube, Facebook).

3 nhóm người dùng chính: **Nhà đầu tư (trong & ngoài nước) · Lãnh đạo địa phương · Công chúng**.

---

## 🌐 Cấu trúc URL & đa ngôn ngữ
- Tiền tố ngôn ngữ: `/vi/...`, `/en/...`, `/zh/...`, `/ko/...`, `/ja/...` (mặc định `/vi`).
- Mỗi trang có `hreflang` đầy đủ + meta OG riêng cho từng ngôn ngữ.
- Tài liệu PDF xúc tiến đa ngôn ngữ tải về theo từng tỉnh.

---

## 🗺️ SITEMAP TỔNG THỂ (cấp 1–3)

### 1. `/` Trang chủ
### 2. `/ban-do-dau-tu` Bản đồ đầu tư tương tác
### 3. `/tinh-thanh` Trung tâm 34 tỉnh thành
   - 3.1 `/tinh-thanh` — danh sách & lọc nhanh
   - 3.2 `/tinh-thanh/[slug]` — Trang tỉnh (34 trang)
       - `/tong-quan` — Tổng quan & bản đồ tỉnh
       - `/quy-hoach` — Quy hoạch & hạ tầng
       - `/chinh-sach-uu-dai` — Chính sách thu hút đầu tư
       - `/du-an` — Danh mục dự án kêu gọi đầu tư
       - `/kinh-te-xa-hoi` — Dữ liệu KT-XH, dân số, lao động
       - `/cau-chuyen-thanh-cong` — Case study & doanh nghiệp FDI
       - `/tin-tuc` — Tin tức của tỉnh
       - `/lien-he` — Đầu mối xúc tiến đầu tư của tỉnh
### 4. `/du-an` Cơ sở dữ liệu dự án (toàn quốc)
   - 4.1 Tra cứu/lọc dự án
   - 4.2 `/du-an/[id]` Trang chi tiết dự án
### 5. `/so-sanh` Công cụ so sánh tỉnh
### 6. `/tin-tuc` Tin tức & bài viết đầu tư
   - 6.1 `/tin-tuc/chinh-sach`
   - 6.2 `/tin-tuc/dia-phuong`
   - 6.3 `/tin-tuc/fdi`
   - 6.4 `/tin-tuc/ha-tang`
   - 6.5 `/tin-tuc/[slug]` — bài viết chi tiết
### 7. `/multimedia` Trung tâm đa phương tiện
   - 7.1 `/e-magazine`
   - 7.2 `/infographic`
   - 7.3 `/video` (gồm Series "60 giây đầu tư", Documentary, 360°)
   - 7.4 `/podcast` "Câu chuyện đầu tư"
   - 7.5 `/livestream` lịch + replay
### 8. `/nha-dau-tu` Khu vực dành cho Nhà đầu tư
   - 8.1 `/nha-dau-tu/cam-nang` Cẩm nang & quy trình đầu tư VN
   - 8.2 `/nha-dau-tu/tai-lieu` Thư viện tài liệu xúc tiến (PDF, đa ngôn ngữ)
   - 8.3 `/nha-dau-tu/dang-ky-quan-tam` Form đăng ký quan tâm dự án/tỉnh
   - 8.4 `/nha-dau-tu/ban-tin` Đăng ký nhận bản tin đầu tư
   - 8.5 `/nha-dau-tu/su-kien` Lịch hội nghị, tọa đàm, livestream
### 9. `/dia-phuong` Khu vực dành cho Địa phương (B2B)
   - 9.1 `/dia-phuong/goi-dich-vu` 3 gói (Cơ bản / Nâng cao / Premium)
   - 9.2 `/dia-phuong/quy-trinh-hop-tac`
   - 9.3 `/dia-phuong/case-study` Tỉnh đã triển khai
   - 9.4 `/dia-phuong/dang-ky-tu-van` Form yêu cầu báo giá
### 10. `/su-kien` Sự kiện xúc tiến đầu tư
### 11. `/gioi-thieu` Về Cẩm nang (Tiền Phong × Greencom)
### 12. `/lien-he` Liên hệ chung
### 13. Trang phụ trợ: `/tim-kiem`, `/sitemap`, `/dieu-khoan`, `/bao-mat`, `/404`

---

## 🧱 WIREFRAME BLOCKS — chi tiết từng trang

### 🏠 1. Trang chủ `/`
- **Header sticky**: Logo Tiền Phong × Greencom · Menu chính · Search · Switch ngôn ngữ (5 cờ) · CTA "Nhà đầu tư đăng ký"
- **Hero**: Headline + sub-headline + 2 CTA ("Khám phá bản đồ", "Tài liệu xúc tiến") · KPI 34 tỉnh / X dự án / Y tỷ USD FDI
- **Bản đồ đầu tư mini**: thumbnail map VN, hover/click tỉnh → popup nhanh
- **Tin nổi bật**: 1 bài hero + 4 bài card (E-magazine, Longform)
- **Khám phá theo vùng**: 6 vùng kinh tế (Bắc Bộ, Bắc Trung Bộ, Nam Trung Bộ, Tây Nguyên, Đông Nam Bộ, ĐBSCL)
- **Series "60 giây đầu tư"**: carousel video ngắn dạng TikTok
- **Số liệu nổi bật**: 4 stat cards (FDI, GRDP, KCN, lao động) — animate counter
- **Cơ hội đầu tư mới nhất**: 6 dự án highlight (card với ngành/quy mô/tỉnh)
- **Tiếng nói nhà đầu tư**: testimonial slider
- **Newsletter CTA**: form đăng ký bản tin (song ngữ)
- **Đối tác & nhà tài trợ**: logo grid
- **Footer**: 5 cột (Giới thiệu / Khám phá / Nhà đầu tư / Địa phương / Liên hệ) · social · ngôn ngữ

### 🗺️ 2. Bản đồ đầu tư `/ban-do-dau-tu`
- **Hero gọn** + filter bar: Vùng · Ngành · Loại ưu đãi · Quy mô FDI
- **Map VN tương tác (full-width)**: SVG/Mapbox 34 tỉnh, color-coded theo chỉ số (FDI, GRDP, KCN…)
- **Sidebar phải**: khi chọn tỉnh → card tóm tắt (logo, tagline, 6 chỉ số chính, 3 dự án hot, nút "Xem trang tỉnh")
- **Layer toggle**: Khu công nghiệp · Cảng biển/sân bay · Cao tốc · Dự án trọng điểm
- **Bảng xếp hạng nhanh**: Top 10 thu hút FDI / Top 10 PCI
- **CTA**: "So sánh các tỉnh" → `/so-sanh`

### 📍 3.2 Trang tỉnh `/tinh-thanh/[slug]` — TRÁI TIM CỦA CẨM NANG
- **Hero tỉnh**: Cover image · tên tỉnh · tagline · logo địa phương · sticky tab nav (8 mục)
- **Quick stats bar**: Diện tích · Dân số · GRDP · FDI lũy kế · Số KCN · Xếp hạng PCI
- **Tab Tổng quan**: bản đồ tỉnh + giới thiệu + lợi thế cạnh tranh (icon grid 6 mục) + video giới thiệu
- **Tab Quy hoạch**: bản đồ quy hoạch (layer KCN/giao thông/đô thị) · timeline phát triển · download bản đồ PDF
- **Tab Chính sách ưu đãi**: bảng so sánh thuế/đất đai/nhân lực · accordion chi tiết từng ngành ưu tiên
- **Tab Dự án**: filter (ngành/quy mô/trạng thái) · grid card dự án · link sang `/du-an/[id]`
- **Tab KT-XH**: charts (GRDP 5 năm, cơ cấu ngành, lao động, xuất khẩu) · so sánh với trung bình quốc gia
- **Tab Câu chuyện thành công**: case studies doanh nghiệp đã đầu tư + video phỏng vấn
- **Tab Tin tức**: feed bài viết về tỉnh
- **Tab Liên hệ**: thông tin Sở KH&ĐT/Trung tâm xúc tiến · form gửi yêu cầu · bản đồ trụ sở
- **Block CTA cuối trang**: "Tải bộ tài liệu xúc tiến (5 ngôn ngữ)" · "Đăng ký quan tâm đầu tư"
- **Related**: "Các tỉnh trong vùng" — 3 card

### 🔍 4. Cơ sở dữ liệu dự án `/du-an`
- **Search bar lớn** + filter sidebar: Tỉnh · Ngành · Quy mô vốn · Hình thức đầu tư · Trạng thái · Ưu đãi
- **Toggle xem**: Grid / List / Map view
- **Card dự án**: ảnh · tên · tỉnh · vốn · ngành · ưu đãi · CTA "Xem chi tiết"
- **Pagination + sort** (mới nhất, vốn lớn nhất, ưu đãi cao nhất)
- **Trang chi tiết `/du-an/[id]`**: gallery · mô tả · vị trí trên bản đồ · thông số · ưu đãi · tài liệu tải về · form liên hệ chủ đầu tư · dự án tương tự

### ⚖️ 5. Công cụ so sánh `/so-sanh`
- **Selector**: chọn 2–4 tỉnh
- **Bảng so sánh**: 20+ tiêu chí (kinh tế, hạ tầng, lao động, ưu đãi, PCI…) với highlight tỉnh tốt nhất từng dòng
- **Charts so sánh**: radar chart năng lực cạnh tranh + bar charts từng nhóm chỉ số
- **Export PDF/Share** kết quả so sánh
- **Gợi ý**: "Tỉnh tương tự bạn có thể quan tâm"

### 📰 6. Tin tức `/tin-tuc`
- **Hero**: bài nổi bật trong tuần
- **Tab/Filter chuyên mục** + thanh tags
- **Grid 3 cột** card bài viết · pagination/infinite scroll
- **Sidebar**: Most read · Newsletter signup · Lịch sự kiện sắp tới
- **Trang bài viết**: breadcrumb · cover · meta (tác giả, ngày, đọc XX phút) · TOC sticky · nội dung longform · author box · share buttons · related · comment (tùy chọn)

### 🎬 7. Multimedia `/multimedia`
- **Hub** với 5 thẻ lớn dẫn vào: E-magazine · Infographic · Video · Podcast · Livestream
- **E-magazine**: trình chiếu cuốn sách lật trang
- **Infographic**: gallery dạng masonry, lightbox xem full
- **Video**: hero player + danh sách playlist (60 giây / Documentary / 360° / Phỏng vấn)
- **Podcast**: player Spotify/Apple embed + danh sách tập
- **Livestream**: lịch sắp tới (countdown) + thư viện replay

### 💼 8. Khu Nhà đầu tư `/nha-dau-tu`
- **Landing**: hero "Mọi thứ nhà đầu tư cần ở một nơi" + 5 card vào sub-pages
- **8.1 Cẩm nang**: hướng dẫn quy trình đầu tư VN từng bước (accordion) + tải hướng dẫn PDF
- **8.2 Thư viện tài liệu**: filter theo Tỉnh / Ngành / Ngôn ngữ · download counter · gated bằng email (thu lead)
- **8.3 Form đăng ký quan tâm**: multi-step (Thông tin doanh nghiệp → Lĩnh vực → Tỉnh quan tâm → Ngân sách → Liên hệ) · CRM webhook
- **8.4 Bản tin**: form đăng ký + chọn chuyên mục + ngôn ngữ · preview các số trước
- **8.5 Sự kiện**: list/calendar view · chi tiết sự kiện + form đăng ký tham dự

### 🏛️ 9. Khu Địa phương `/dia-phuong` (B2B sales)
- **Hero**: "Kể câu chuyện địa phương — Thiết kế cơ hội đầu tư" + CTA "Nhận tư vấn"
- **9.1 Gói dịch vụ**: 3 cột pricing (Cơ bản 1 tỷ · Nâng cao 3 tỷ · Premium tùy chỉnh) — feature comparison + KPI cam kết + CTA mỗi gói
- **9.2 Quy trình hợp tác**: timeline 5 bước (Tư vấn → Ký kết → Khảo sát → Sản xuất → Vận hành & báo cáo)
- **9.3 Case study**: lưới các tỉnh Greencom đã triển khai (TP.HCM, Long An, Đồng Nai, Tây Ninh, Bình Thuận, Đắk Lắk, Lâm Đồng, Đồng Tháp, Trà Vinh, Hậu Giang, Sơn La…)
- **9.4 Form đăng ký tư vấn**: thông tin liên hệ địa phương + gói quan tâm
- **Block niềm tin**: logo Tiền Phong + Greencom, số liệu năng lực, đội ngũ chuyên gia

### 📅 10. Sự kiện `/su-kien`
- Tab: Sắp diễn ra / Đang diễn ra / Đã qua
- Card sự kiện: ảnh · ngày · địa điểm · hình thức (online/offline) · CTA đăng ký
- Trang chi tiết sự kiện: agenda · diễn giả · form đăng ký · livestream embed (khi diễn ra)

### ℹ️ 11. Giới thiệu `/gioi-thieu`
- Câu chuyện hợp tác Tiền Phong × Greencom
- Sứ mệnh & tầm nhìn của Cẩm nang
- Đội ngũ & cố vấn
- Đối tác chiến lược
- Liên hệ báo chí

### 📞 12. Liên hệ `/lien-he`
- Form liên hệ chung (phân loại: Nhà đầu tư / Địa phương / Báo chí / Khác)
- Thông tin trụ sở 2 bên
- Bản đồ Google
- FAQ rút gọn

---

## 🧩 Thành phần dùng chung (Global)
- **Header sticky** với mega-menu cho "Tỉnh thành" (xổ ra grid 34 tỉnh theo vùng)
- **Footer** 5 cột + tracking, link mạng xã hội (TikTok/YouTube/Facebook), đăng ký bản tin nhanh
- **Floating CTA** (góc phải): "Đăng ký quan tâm đầu tư" / "Hỗ trợ địa phương"
- **Cookie & ngôn ngữ** banner lần đầu truy cập
- **Search overlay** toàn site (Cmd+K)
- **Share bar** (Zalo, Facebook, LinkedIn, X, Copy link) trên mọi trang nội dung

---

## 🔎 SEO & chia sẻ
- Mỗi route có `head()` riêng: title, description, og:title, og:description, og:image lấy từ ảnh hero/cover của trang đó.
- Trang tỉnh & dự án dùng dữ liệu loader để sinh OG động.
- Sitemap.xml & robots.txt động cho cả 5 ngôn ngữ.
- Schema.org: `Article` cho tin tức, `Place`/`AdministrativeArea` cho tỉnh, `Event` cho sự kiện, `Organization` cho 9.x.

---

## ✅ Đề xuất ưu tiên triển khai (nếu xây dựng theo giai đoạn)
1. **MVP (8 tuần đầu)**: Trang chủ · Bản đồ tương tác · 10 trang tỉnh · Tin tức · Khu Nhà đầu tư (form + bản tin) · Khu Địa phương (gói dịch vụ) · Đa ngôn ngữ Vi/En.
2. **Phase 2**: Đủ 34 tỉnh · Cơ sở dữ liệu dự án · Công cụ so sánh · Multimedia hub.
3. **Phase 3**: Podcast · Livestream · 360° · Bổ sung Trung/Hàn/Nhật · Tích hợp CRM nâng cao.

Bấm **Implement plan** để bắt đầu khởi tạo cấu trúc route và các trang theo sitemap này.