import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Check, Mail } from "lucide-react";

export const Route = createFileRoute("/nha-dau-tu/ban-tin")({
  head: () => ({
    meta: [
      { title: "Bản tin Đầu tư Việt Nam — Đăng ký nhận miễn phí" },
      { name: "description", content: "Bản tin tuần — tin tức quan trọng nhất, dữ liệu mới và cơ hội đầu tư qua email mỗi sáng thứ Hai." },
      { property: "og:title", content: "Đăng ký bản tin Đầu tư Việt Nam" },
    ],
  }),
  component: BanTinPage,
});

const TOPICS = ["FDI & Đầu tư", "Chính sách", "Hạ tầng", "Địa phương"];
const LANGS = ["Tiếng Việt", "English", "中文", "한국어", "日本語"];

function BanTinPage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Bản tin Đầu tư Việt Nam"
        description="Mỗi tuần một bản tin — tin tức quan trọng nhất, dữ liệu mới và cơ hội đầu tư được biên tập bởi Cẩm nang Đầu tư Việt Nam."
      />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            {done ? (
              <div className="flex flex-col items-center text-center">
                <Check className="h-12 w-12 text-emerald-600" />
                <h2 className="mt-4 font-display text-2xl font-bold">Đã đăng ký!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Số đầu tiên sẽ đến hộp thư của bạn vào sáng thứ Hai tuần tới.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="space-y-5"
              >
                <Mail className="h-8 w-8 text-primary" />
                <h2 className="font-display text-2xl font-bold">Đăng ký miễn phí</h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    placeholder="Họ tên"
                    required
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                  />
                  <input
                    placeholder="Doanh nghiệp"
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                  />
                </div>
                <input
                  placeholder="Email công việc"
                  type="email"
                  required
                  className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
                />

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Chuyên mục quan tâm
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {TOPICS.map((t) => (
                      <label key={t} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" defaultChecked className="h-4 w-4 accent-primary" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Ngôn ngữ
                  </p>
                  <select className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
                    {LANGS.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Đăng ký bản tin
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold">Bạn sẽ nhận được</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "10 tin nóng nhất tuần về đầu tư & chính sách",
                  "Phân tích chuyên sâu 1 chủ đề",
                  "Top 3 dự án FDI mới được cấp phép",
                  "Lịch sự kiện xúc tiến đầu tư trong tuần",
                  "Số liệu kinh tế cập nhật từ Bộ KH&ĐT",
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <p className="font-display text-3xl font-bold text-foreground">1.000+</p>
              <p className="text-sm text-muted-foreground">
                Doanh nghiệp đã đăng ký nhận bản tin từ Cẩm nang Đầu tư Việt Nam.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
