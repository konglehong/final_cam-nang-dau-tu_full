import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_NAV } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      {/* Newsletter strip */}
      <div className="border-b border-background/10 bg-gradient-to-r from-primary to-primary-glow">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground lg:text-3xl">
              Đăng ký bản tin Đầu tư Việt Nam
            </h3>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/85">
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
              className="flex-1 rounded-md bg-background/95 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
            >
              Đăng ký miễn phí
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="font-display text-lg font-bold">CN</span>
            </div>
            <div>
              <p className="font-display text-lg font-bold">Cẩm nang Đầu tư</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-background/60">
                Việt Nam
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-background/70">
            Chuyên trang hợp tác giữa <strong className="text-background">Báo Tiền Phong</strong> và{" "}
            <strong className="text-background">Greencom</strong> — cổng thông tin chính thống cho nhà đầu tư, địa phương và công chúng trong bối cảnh sáp nhập đơn vị hành chính.
          </p>
          <div className="space-y-2 text-sm text-background/70">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              15 Hồ Xuân Hương, Hai Bà Trưng, Hà Nội
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              (024) 3943 4031
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              camnang@tienphong.vn
            </p>
          </div>
          <div className="flex gap-2 pt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <span className="text-xs font-bold">TT</span>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {Object.entries(FOOTER_NAV).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-gold">
              {heading}
            </h4>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-background/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-background/60 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Cẩm nang Đầu tư Việt Nam — Báo Tiền Phong × Greencom. Bảo lưu mọi quyền.
          </p>
          <p>Giấy phép báo chí số 175/GP-BTTTT</p>
        </div>
      </div>
    </footer>
  );
}
