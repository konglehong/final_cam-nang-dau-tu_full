import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Building2, CheckCircle2, Phone } from "lucide-react";

export const Route = createFileRoute("/dia-phuong/dang-ky-tu-van")({
  head: () => ({
    meta: [
      { title: "Đăng ký tư vấn — Cẩm nang Đầu tư × Địa phương" },
      { name: "description", content: "Form đăng ký tư vấn cho UBND tỉnh/thành — nhận báo giá và lộ trình triển khai trong 24h." },
      { property: "og:title", content: "Đăng ký tư vấn xúc tiến đầu tư địa phương" },
    ],
  }),
  component: DangKyTuVan,
});

const PARTNERS = [
  "TP.HCM",
  "Đồng Nai",
  "Long An",
  "Tây Ninh",
  "Bình Thuận",
  "Lâm Đồng",
  "Đồng Tháp",
  "Trà Vinh",
  "Hậu Giang",
  "Sơn La",
  "Đắk Lắk",
];

function DangKyTuVan() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Nhận tư vấn miễn phí cho địa phương"
        description="Đội ngũ của chúng tôi sẽ phản hồi trong 24h với báo giá và lộ trình triển khai chi tiết cho tỉnh/thành của bạn."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {done ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h2 className="mt-4 font-display text-2xl font-bold">Đã gửi yêu cầu!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chuyên viên sẽ liên hệ trong 24h để đặt lịch khảo sát.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <h2 className="font-display text-xl font-bold">Thông tin địa phương</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Tỉnh / Thành phố (*)" required />
                  <Field label="Cơ quan / Đơn vị (*)" required placeholder="Sở KH&ĐT, Trung tâm Xúc tiến…" />
                </div>

                <h2 className="font-display text-xl font-bold pt-2">Người liên hệ</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Họ tên (*)" required />
                  <Field label="Chức vụ (*)" required />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Email công vụ (*)" type="email" required />
                  <Field label="Số điện thoại (*)" type="tel" required />
                </div>

                <h2 className="font-display text-xl font-bold pt-2">Nhu cầu hợp tác</h2>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Phạm vi quan tâm
                  </label>
                  <div className="grid gap-2 md:grid-cols-3">
                    {["Tư vấn ban đầu", "Triển khai trọng điểm", "Đồng hành dài hạn"].map((p) => (
                      <label
                        key={p}
                        className="flex items-center gap-2 rounded-md border border-border p-3 text-sm hover:border-primary/40"
                      >
                        <input type="radio" name="package" className="h-4 w-4 accent-primary" />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Mục tiêu xúc tiến (chọn nhiều)
                  </label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      "Tăng nhận diện sau sáp nhập",
                      "Thu hút FDI vào KCN",
                      "Quảng bá du lịch & dịch vụ",
                      "Đẩy mạnh năng lượng tái tạo",
                      "Hỗ trợ roadshow quốc tế",
                      "Xây dựng dashboard dữ liệu",
                    ].map((g) => (
                      <label key={g} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="h-4 w-4 accent-primary" />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Thời điểm mong muốn triển khai
                  </label>
                  <select className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
                    <option>Trong quý này</option>
                    <option>Quý sau</option>
                    <option>Trong 6 tháng</option>
                    <option>Đang nghiên cứu</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Ghi chú thêm</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-gold py-3 font-display text-sm font-bold uppercase tracking-widest text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.01]"
                >
                  Gửi yêu cầu tư vấn
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-base font-bold">Hotline lãnh đạo địa phương</h3>
              <p className="mt-2 text-2xl font-bold text-primary">0934 567 890</p>
              <p className="text-xs text-muted-foreground">8:30 - 17:30 thứ 2 - thứ 6</p>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <Building2 className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-display text-base font-bold">Đối tác đã đồng hành</h3>
              <ul className="mt-3 grid grid-cols-2 gap-1.5 text-xs">
                {PARTNERS.map((p) => (
                  <li key={p} className="rounded bg-background/60 px-2 py-1">
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-bold">Cam kết</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {["Phản hồi trong 24h", "Báo giá minh bạch", "KPI cụ thể bằng văn bản"].map((c) => (
                  <li key={c} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
