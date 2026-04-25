import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { CheckCircle2, Shield, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/nha-dau-tu/dang-ky-quan-tam")({
  head: () => ({
    meta: [
      { title: "Đăng ký quan tâm đầu tư — Kết nối với 34 tỉnh thành" },
      { name: "description", content: "Đội ngũ Cẩm nang sẽ kết nối bạn với Trung tâm xúc tiến đầu tư tỉnh phù hợp trong vòng 48h." },
      { property: "og:title", content: "Đăng ký quan tâm đầu tư tại Việt Nam" },
    ],
  }),
  component: DangKyPage,
});

const TRUST = [
  { icon: Users, title: "5 năm kinh nghiệm", desc: "100+ chiến dịch xúc tiến cùng 11+ tỉnh thành" },
  { icon: Shield, title: "Bảo mật thông tin", desc: "Tuân thủ Luật An ninh mạng & GDPR cho khách quốc tế" },
  { icon: Zap, title: "Phản hồi 48h", desc: "Cam kết kết nối tỉnh phù hợp trong 2 ngày làm việc" },
];

function DangKyPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Kết nối đầu tư"
        title="Đăng ký quan tâm đầu tư"
        description="Điền thông tin — đội ngũ Cẩm nang sẽ kết nối bạn trực tiếp với Trung tâm Xúc tiến Đầu tư của tỉnh phù hợp trong 48h."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h2 className="mt-4 font-display text-2xl font-bold">
                  Cảm ơn bạn đã đăng ký!
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chúng tôi sẽ liên hệ trong vòng 48h. Bạn cũng có thể tải Cẩm nang Đầu tư PDF
                  ngay bây giờ.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex rounded-md bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Gửi đăng ký khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <Field label="Họ tên (*)" name="name" required />
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Email (*)" name="email" type="email" required />
                  <Field label="Số điện thoại" name="phone" type="tel" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Doanh nghiệp" name="company" />
                  <Field label="Quốc gia" name="country" />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Lĩnh vực quan tâm
                  </label>
                  <select className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
                    <option>Công nghiệp chế biến — chế tạo</option>
                    <option>Điện tử & bán dẫn</option>
                    <option>Năng lượng tái tạo</option>
                    <option>Logistics & cảng biển</option>
                    <option>Bất động sản công nghiệp</option>
                    <option>Du lịch & dịch vụ</option>
                    <option>Nông nghiệp công nghệ cao</option>
                    <option>Khác</option>
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">
                      Quy mô vốn dự kiến
                    </label>
                    <select className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
                      <option>Dưới 1 triệu USD</option>
                      <option>1 - 10 triệu USD</option>
                      <option>10 - 100 triệu USD</option>
                      <option>Trên 100 triệu USD</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">
                      Thời gian dự kiến triển khai
                    </label>
                    <select className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
                      <option>0 - 6 tháng</option>
                      <option>6 - 12 tháng</option>
                      <option>1 - 2 năm</option>
                      <option>Trên 2 năm</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Tỉnh thành quan tâm (chọn nhiều)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="VD: Bắc Ninh, Hải Phòng, Đồng Nai…"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Thông tin bổ sung
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả ngắn về dự án và yêu cầu hỗ trợ…"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-gold py-3 font-display text-sm font-bold uppercase tracking-widest text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
                >
                  Gửi đăng ký
                </button>
                <p className="text-xs text-muted-foreground">
                  Bằng việc gửi, bạn đồng ý với{" "}
                  <a className="underline" href="/dieu-khoan">
                    Điều khoản
                  </a>{" "}
                  và{" "}
                  <a className="underline" href="/bao-mat">
                    Chính sách bảo mật
                  </a>
                  .
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            {TRUST.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-xl border border-border bg-card p-5">
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-3 font-display text-base font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
