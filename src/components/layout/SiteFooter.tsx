import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Target,
  Users,
  Youtube,
} from "lucide-react";
import { FOOTER_NAV } from "@/lib/navigation";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  const location = useLocation();
  const showInvestorCta = location.pathname !== "/";

  return (
    <footer className="border-t border-[rgba(14,15,12,0.12)] bg-[#F7F8F2] text-[#0E0F0C]">
      {showInvestorCta && (
        <div className="border-b border-[rgba(14,15,12,0.12)] bg-white px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#163300]">
              Dành cho nhà đầu tư
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[34px] bg-[#F7F8F2] p-8 ring-1 ring-[rgba(14,15,12,0.12)] lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E2F6D5] text-[#163300]">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mt-8 font-display text-[34px] font-extrabold leading-[1.12] tracking-normal text-[#0E0F0C] sm:text-[40px]">
                  Bạn là Nhà đầu tư?
                </h3>
                <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-[#454745] lg:text-lg">
                  Đăng ký để nhận thông tin dự án, chính sách mới nhất và tư vấn đầu tư phù hợp với nhu cầu của bạn.
                </p>
                <Link
                  to="/nha-dau-tu/dang-ky-quan-tam"
                  className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#163300] px-7 text-base font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Đăng ký quan tâm
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </article>

              <article className="relative overflow-hidden rounded-[34px] p-8 text-white ring-1 ring-[rgba(14,15,12,0.12)] lg:p-10">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#163300_0%,#1c5205_55%,#245b14_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(159,232,112,0.18),transparent_32%)]" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(159,232,112,0.14)] text-[#9FE870] ring-1 ring-[rgba(255,255,255,0.08)]">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="mt-8 font-display text-[34px] font-extrabold leading-[1.12] tracking-normal text-white sm:text-[40px]">
                    Khám phá dự án nổi bật
                  </h3>
                  <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-white/85 lg:text-lg">
                    Tìm kiếm và lọc các dự án kêu gọi vốn theo lĩnh vực, địa phương và quy mô đầu tư.
                  </p>
                  <Link
                    to="/du-an"
                    className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-bold text-[#163300] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Xem dự án
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      )}

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#9FE870] text-[#163300] ring-1 ring-[rgba(14,15,12,0.12)]">
              <span className="font-display text-base font-extrabold tracking-normal">CN</span>
            </div>
            <div>
              <p className="font-display text-lg font-extrabold tracking-normal text-[#0E0F0C]">
                {t("footer.brandFull")}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#454745]">
                {t("footer.country")}
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed text-[#454745]">
            {t("footer.about")}
          </p>
          <div className="space-y-2 text-sm font-medium text-[#454745]">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#163300]" />
              {t("footer.address")}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[#163300]" />
              (024) 3943 4031
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[#163300]" />
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#454745] ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:scale-105 hover:text-[#163300]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#454745] ring-1 ring-[rgba(14,15,12,0.12)] transition-transform hover:scale-105 hover:text-[#163300]"
            >
              <span className="text-xs font-bold">TT</span>
            </a>
          </div>
        </div>

        {Object.entries(FOOTER_NAV).map(([headingKey, links]) => (
          <div key={headingKey}>
            <h4 className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.16em] text-[#0E0F0C]">
              {t(headingKey)}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-medium text-[#454745] transition-colors hover:text-[#163300]"
                  >
                    {t(l.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[rgba(14,15,12,0.12)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs font-medium text-[#454745] sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t("footer.brandFull")} {t("footer.country")}. {t("footer.copyright")}
          </p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
