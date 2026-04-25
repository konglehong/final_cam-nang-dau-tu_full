import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_NAV } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      {/* Newsletter strip — gradient on light */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div
            className="grid gap-6 rounded-2xl border border-border p-8 shadow-[var(--shadow-elegant)] lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-10"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                Đăng ký bản tin Đầu tư Việt Nam
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/85">
                Nhận tin tức, dữ liệu và cơ hội đầu tư mới nhất từ 34 tỉnh thành — gửi đến hộp thư của bạn hàng tuần.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="email@congty.com"
                className="flex-1 rounded-lg bg-white px-4 py-3 text-sm text-foreground shadow-[var(--shadow-soft)] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Đăng ký miễn phí
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-glow)]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <span className="font-display text-base font-bold tracking-tight">CN</span>
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                Cẩm nang Đầu tư
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Việt Nam
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cổng thông tin đầu tư chính thống cho nhà đầu tư, địa phương và công chúng trong bối cảnh sáp nhập đơn vị hành chính tại Việt Nam.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              15 Hồ Xuân Hương, Hai Bà Trưng, Hà Nội
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              (024) 3943 4031
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              camnang@tienphong.vn
            </p>
          </div>
          <div className="flex gap-2 pt-2">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[var(--shadow-soft)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[var(--shadow-soft)]"
            >
              <span className="text-xs font-bold">TT</span>
            </a>
          </div>
        </div>

        {Object.entries(FOOTER_NAV).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {heading}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Cẩm nang Đầu tư Việt Nam. Bảo lưu mọi quyền.
          </p>
          <p>Cổng thông tin đầu tư chính thống</p>
        </div>
      </div>
    </footer>
  );
}
