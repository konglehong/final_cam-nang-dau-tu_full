import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight, MapPin } from "lucide-react";

type CaseStudy = {
  province: string;
  year: number;
  region: "Bắc" | "Trung" | "Nam";
  package: "Cơ bản" | "Nâng cao" | "Premium";
  challenge: string;
  solution: string;
  result: string;
  kpis: { label: string; value: string }[];
};

const CASES: CaseStudy[] = [
  {
    province: "TP. Hồ Chí Minh",
    year: 2024,
    region: "Nam",
    package: "Premium",
    challenge: "Định vị lại sau sáp nhập với Bình Dương và Bà Rịa - Vũng Tàu, nhấn mạnh tiềm năng cụm cảng - sân bay - đô thị thông minh.",
    solution: "Hệ chiến dịch đa kênh: 3 documentary, e-magazine song ngữ và roadshow tại Tokyo - Seoul.",
    result: "Tăng 22% lượt truy cập trang xúc tiến, ký 3 MoU với tập đoàn Nhật Bản trong 6 tháng.",
    kpis: [
      { label: "Reach đa nền tảng", value: "8,2 triệu" },
      { label: "MoU đã ký", value: "3" },
      { label: "Vốn thu hút", value: "1,4 tỷ USD" },
    ],
  },
  {
    province: "Đồng Nai",
    year: 2024,
    region: "Nam",
    package: "Nâng cao",
    challenge: "Khẳng định vai trò 'đại đô thị sân bay' khi Long Thành về đích, vượt qua nhận diện cũ chỉ là 'tỉnh KCN'.",
    solution: "Tập trung kể câu chuyện Long Thành + 33 KCN, tạo bản đồ tương tác và 12 video drone footage.",
    result: "8 tập đoàn FDI khảo sát thực địa trong Q4/2024, 2 dự án tỷ USD đang đàm phán.",
    kpis: [
      { label: "Video views", value: "5,1 triệu" },
      { label: "Khảo sát thực địa", value: "8 tập đoàn" },
      { label: "Dự án đang đàm phán", value: "2 (>1 tỷ USD)" },
    ],
  },
  {
    province: "Long An",
    year: 2023,
    region: "Nam",
    package: "Nâng cao",
    challenge: "Tận dụng vị thế cửa ngõ phía Tây TP.HCM, định vị logistics & năng lượng LNG.",
    solution: "Series 'Long An — Cửa ngõ ASEAN' với 8 longform, podcast và infographic vùng Mekong.",
    result: "PCI tăng 4 bậc; thu hút 1,1 tỷ USD FDI mới (mức cao nhất 5 năm).",
    kpis: [
      { label: "PCI 2023", value: "+4 bậc" },
      { label: "FDI mới", value: "1,1 tỷ USD" },
      { label: "Reach", value: "3,4 triệu" },
    ],
  },
  {
    province: "Tây Ninh",
    year: 2024,
    region: "Nam",
    package: "Cơ bản",
    challenge: "Thay đổi nhận diện 'tỉnh nông nghiệp', đẩy mạnh KCN sạch và năng lượng mặt trời Dầu Tiếng.",
    solution: "Bộ infographic + 2 video documentary về Dầu Tiếng và VSIP Tây Ninh.",
    result: "Lượt tìm kiếm 'đầu tư Tây Ninh' tăng 180% trong 12 tháng.",
    kpis: [
      { label: "Search volume", value: "+180%" },
      { label: "Reach", value: "1,3 triệu" },
      { label: "Lead form", value: "240 doanh nghiệp" },
    ],
  },
  {
    province: "Bình Thuận (nay thuộc Lâm Đồng)",
    year: 2023,
    region: "Trung",
    package: "Nâng cao",
    challenge: "Quảng bá điện gió ngoài khơi La Gàn và du lịch nghỉ dưỡng Mũi Né tới thị trường EU.",
    solution: "Bản đồ năng lượng tái tạo, livestream JETP, e-magazine tiếng Anh.",
    result: "5 nhà đầu tư châu Âu vào khảo sát, 2 dự án điện gió được phê duyệt chủ trương.",
    kpis: [
      { label: "Roadshow EU", value: "Frankfurt + Rotterdam" },
      { label: "Dự án phê duyệt", value: "2 dự án ~3,5 GW" },
      { label: "Reach quốc tế", value: "1,8 triệu" },
    ],
  },
  {
    province: "Đắk Lắk",
    year: 2023,
    region: "Trung",
    package: "Cơ bản",
    challenge: "Nâng cao nhận diện điện gió Ea Nam và chuỗi cà phê Robusta toàn cầu.",
    solution: "Series 'Đắk Lắk — vùng cao tăng tốc' với 12 bài longform, infographic chuỗi giá trị cà phê.",
    result: "Tăng 35% lượt mở trang xúc tiến trong mùa cao điểm.",
    kpis: [
      { label: "Page views", value: "+35%" },
      { label: "Báo quốc tế đưa tin", value: "11 tin" },
      { label: "Reach", value: "1,1 triệu" },
    ],
  },
  {
    province: "Lâm Đồng",
    year: 2024,
    region: "Trung",
    package: "Nâng cao",
    challenge: "Tích hợp câu chuyện 3 tỉnh sau sáp nhập (Lâm Đồng + Đắk Nông + Bình Thuận).",
    solution: "Đặc san e-magazine 'Lâm Đồng mới' và 5 video documentary du lịch - năng lượng - bauxit.",
    result: "Phát hành 4.500 lượt download, ký MoU với liên minh năng lượng tái tạo Hà Lan.",
    kpis: [
      { label: "E-mag downloads", value: "4.500" },
      { label: "MoU quốc tế", value: "1" },
      { label: "Reach", value: "2,2 triệu" },
    ],
  },
  {
    province: "Đồng Tháp",
    year: 2023,
    region: "Nam",
    package: "Cơ bản",
    challenge: "Quảng bá ngành thủy sản chế biến và logistics Mekong.",
    solution: "Series 'Đồng Tháp — Sức bật từ sen', infographic chuỗi giá trị tra & basa.",
    result: "Tăng 25% lượt tiếp cận quốc tế, 6 đoàn doanh nghiệp khảo sát.",
    kpis: [
      { label: "Reach quốc tế", value: "+25%" },
      { label: "Đoàn khảo sát", value: "6" },
      { label: "Lead form", value: "120" },
    ],
  },
  {
    province: "Trà Vinh (nay thuộc Vĩnh Long)",
    year: 2022,
    region: "Nam",
    package: "Cơ bản",
    challenge: "Định vị thủ phủ điện gió ven biển ĐBSCL.",
    solution: "Documentary 20' về cụm điện gió Đông Hải và infographic JETP.",
    result: "Đón 4 đoàn nhà đầu tư Hàn Quốc - Đan Mạch.",
    kpis: [
      { label: "Đoàn quốc tế", value: "4 đoàn" },
      { label: "Reach", value: "0,9 triệu" },
      { label: "Báo chí đưa tin", value: "18 tin" },
    ],
  },
  {
    province: "Hậu Giang (nay thuộc Cần Thơ)",
    year: 2022,
    region: "Nam",
    package: "Cơ bản",
    challenge: "Tận dụng cao tốc Cần Thơ - Cà Mau, định vị KCN sông Hậu.",
    solution: "Series podcast 'Hậu Giang chuyển mình' và bộ infographic logistic.",
    result: "Tăng 3 bậc PCI, lấp đầy KCN Sông Hậu lên 88%.",
    kpis: [
      { label: "PCI", value: "+3 bậc" },
      { label: "KCN Sông Hậu", value: "88% lấp đầy" },
      { label: "Reach", value: "0,7 triệu" },
    ],
  },
  {
    province: "Sơn La",
    year: 2024,
    region: "Bắc",
    package: "Cơ bản",
    challenge: "Quảng bá nông nghiệp công nghệ cao và du lịch sinh thái Mộc Châu.",
    solution: "Series 'Sơn La — Cao nguyên xanh' với drone 4K và e-magazine song ngữ Nhật.",
    result: "Đón 3 đoàn doanh nghiệp Nhật về nông nghiệp, ký 1 MoU đầu tư.",
    kpis: [
      { label: "Đoàn Nhật", value: "3" },
      { label: "MoU", value: "1" },
      { label: "Reach", value: "0,6 triệu" },
    ],
  },
];

export const Route = createFileRoute("/dia-phuong/case-study")({
  head: () => ({
    meta: [
      { title: "Case study — 11+ tỉnh đã triển khai cùng Greencom × Tiền Phong" },
      { name: "description", content: "Câu chuyện hợp tác xúc tiến đầu tư tại TP.HCM, Đồng Nai, Long An, Tây Ninh, Bình Thuận, Lâm Đồng, Đồng Tháp, Sơn La và nhiều tỉnh khác." },
      { property: "og:title", content: "Case study xúc tiến đầu tư địa phương" },
    ],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  return (
    <>
      <PageHero
        eyebrow="Năng lực thực chiến"
        title="11+ tỉnh đã đồng hành"
        description="Từ TP.HCM đến Sơn La — chúng tôi am hiểu sâu thị trường địa phương và các chính sách trọng điểm quốc gia."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((c) => (
            <article
              key={c.province + c.year}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> Miền {c.region} · {c.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-foreground">
                    {c.province}
                  </h3>
                </div>
                <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
                  Gói {c.package}
                </span>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <Row label="Bối cảnh" content={c.challenge} />
                <Row label="Giải pháp" content={c.solution} />
                <Row label="Kết quả" content={c.result} />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
                {c.kpis.map((k) => (
                  <div key={k.label} className="rounded-lg bg-muted/40 p-3 text-center">
                    <p className="font-display text-base font-bold text-primary">{k.value}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {k.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.32_0.12_20)] p-10 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-bold">Tỉnh của bạn sẽ là case study tiếp theo?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/85">
            Liên hệ Greencom × Báo Tiền Phong để khởi động chiến dịch xúc tiến đầu tư phù hợp với
            địa phương.
          </p>
          <a
            href="/dia-phuong/dang-ky-tu-van"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Đăng ký tư vấn miễn phí <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

function Row({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-foreground">{content}</p>
    </div>
  );
}
