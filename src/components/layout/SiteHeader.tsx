import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react";
import { PRIMARY_NAV, LANGUAGES } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { useLanguage, type LangCode } from "@/lib/i18n";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-[1200] border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top utility bar */}
      <div className="hidden border-b border-border/40 bg-primary/95 text-primary-foreground lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs">
          <p className="font-medium tracking-wide">
            CỔNG THÔNG TIN ĐẦU TƯ CHÍNH THỐNG · 34 TỈNH THÀNH SAU SÁP NHẬP
          </p>
          <div className="flex items-center gap-5">
            <Link to="/su-kien" className="hover:text-gold">
              Lịch sự kiện
            </Link>
            <Link to="/lien-he" className="hover:text-gold">
              Liên hệ
            </Link>
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 hover:text-gold"
                aria-label="Chọn ngôn ngữ"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full z-[1300] mt-1 w-44 rounded-md border border-border bg-popover py-1 text-popover-foreground shadow-lg">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as LangCode);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center gap-2 px-3 py-2 text-left text-xs hover:bg-accent",
                        lang === l.code && "bg-accent/60 font-semibold",
                      )}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-elegant)]">
            <span className="font-display text-lg font-bold">CN</span>
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-bold text-foreground">
              Cẩm nang Đầu tư
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Việt Nam · Tiền Phong × Greencom
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {PRIMARY_NAV.slice(0, 7).map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.to)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.to}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                activeProps={{ className: "text-primary bg-accent/60" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && openDropdown === item.to && (
                <div className="absolute left-0 top-full z-[1300] w-56 rounded-md border border-border bg-popover py-2 shadow-lg">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-primary"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Tìm kiếm"
            className="hidden h-9 w-9 items-center justify-center rounded-md text-foreground/70 hover:bg-accent hover:text-primary lg:flex"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/nha-dau-tu/dang-ky-quan-tam"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-primary/90 hover:shadow-lg lg:inline-flex"
          >
            Đăng ký quan tâm
          </Link>
          <button
            aria-label="Mở menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="relative z-[1300] border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {PRIMARY_NAV.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium",
                    "hover:bg-accent hover:text-primary",
                  )}
                  activeProps={{ className: "text-primary bg-accent" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-border pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/nha-dau-tu/dang-ky-quan-tam"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-md bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Đăng ký quan tâm đầu tư
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
