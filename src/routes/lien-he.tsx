import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Building2, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — Cẩm nang Đầu tư Việt Nam" },
      { name: "description", content: "Liên hệ với Cẩm nang Đầu tư Việt Nam — Báo Tiền Phong và Greencom." },
      { property: "og:title", content: "Liên hệ Cẩm nang Đầu tư Việt Nam" },
    ],
  }),
  component: LienHePage,
});

function LienHePage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Kết nối với chúng tôi"
        description="Phân loại yêu cầu để chúng tôi phản hồi nhanh nhất — Nhà đầu tư, Địa phương, Báo chí hay khác."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {done ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h2 className="mt-4 font-display text-2xl font-bold">Đã gửi tin nhắn!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chúng tôi sẽ phản hồi qua email trong giờ làm việc tiếp theo.
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
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Tôi liên hệ với tư cách (*)
                  </label>
                  <div className="grid gap-2 md:grid-cols-2">
                    {["Nhà đầu tư", "Đại diện địa phương", "Báo chí - truyền thông", "Khác"].map(
                      (r) => (
                        <label
                          key={r}
                          className="flex items-center gap-2 rounded-md border border-border p-3 text-sm hover:border-primary/40"
                        >
                          <input
                            type="radio"
                            name="role"
                            required
                            className="h-4 w-4 accent-primary"
                          />
                          {r}
                        </label>
                      ),
                    )}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Họ tên (*)" required />
                  <Field label="Đơn vị" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Email (*)" type="email" required />
                  <Field label="Số điện thoại" type="tel" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Nội dung (*)</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Gửi liên hệ
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <ContactCard
              title="Báo Tiền Phong"
              icon={Building2}
              lines={[
                { i: MapPin, t: "15 Hồ Xuân Hương, Hai Bà Trưng, Hà Nội" },
                { i: Phone, t: "(024) 3943 4031" },
                { i: Mail, t: "online@tienphong.vn" },
              ]}
            />
            <ContactCard
              title="Greencom"
              icon={Building2}
              lines={[
                { i: MapPin, t: "Tầng 12, Tòa nhà Hà Nội Center, Cầu Giấy, Hà Nội" },
                { i: Phone, t: "0934 567 890" },
                { i: Mail, t: "hello@greencom.vn" },
              ]}
            />
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <h3 className="font-display text-base font-bold">Câu hỏi thường gặp</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Sử dụng dữ liệu trên web có miễn phí?",
                  "Tỉnh chưa có trang chuyên biệt liên hệ thế nào?",
                  "Tôi muốn xuất bản bài viết khách (guest post)?",
                  "Cách trở thành đối tác dữ liệu?",
                ].map((q) => (
                  <li key={q} className="text-muted-foreground">
                    · {q}
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

function ContactCard({
  title,
  icon: Icon,
  lines,
}: {
  title: string;
  icon: typeof Building2;
  lines: { i: typeof Building2; t: string }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-display text-base font-bold">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {lines.map((l) => {
          const I = l.i;
          return (
            <li key={l.t} className="flex items-start gap-2 text-muted-foreground">
              <I className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{l.t}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Field({
  label,
  type = "text",
  required,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input
        type={type}
        required={required}
        className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
