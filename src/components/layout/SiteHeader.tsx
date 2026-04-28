import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Search,
  MapPin,
  CloudSun,
  ChevronDown,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { PRIMARY_NAV, LANGUAGES } from "@/lib/navigation";
import { ARTICLES } from "@/data/content";
import { cn } from "@/lib/utils";
import { useLanguage, useT, type LangCode } from "@/lib/i18n";

function formatVNDate(d: Date) {
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  return `${days[d.getDay()]}, ${d.getDate().toString().padStart(2, "0")}/${(
    d.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${d.getFullYear()}`;
}

export function SiteHeader() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [date, setDate] = useState("");
  const { lang, setLang } = useLanguage();
  const t = useT();

  useEffect(() => setDate(formatVNDate(new Date())), []);

  // Skip the "Trang chủ" item — it's represented by the home icon
  const navItems = PRIMARY_NAV.filter((i) => i.to !== "/");
  const ticker = ARTICLES.slice(0, 6);

  return (
    <header className="sticky top-0 z-[1200] border-b border-border bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/80">
      {/* Layer 1 — Info bar */}
      <div className="hidden border-b border-border/70 bg-background/60 md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-xs text-muted-foreground lg:px-6">
          <p className="font-medium">
            {t("header.tagline")}
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Hà Nội
            </span>
            <span className="hidden items-center gap-1 lg:inline-flex">
              <CloudSun className="h-3 w-3" /> {t("header.weather")}
            </span>
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Layer 2 — Utility bar (ticker + lang + search) */}
      <div className="border-b border-border/70">
        <div className="mx-auto flex h-10 max-w-7xl items-center gap-4 px-4 lg:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
            <span
              className="shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {t("header.latest")}
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm text-foreground/85">
                {[...ticker, ...ticker].map((n, i) => (
                  <Link
                    key={`${n.slug}-${i}`}
                    to="/tin-tuc/$slug"
                    params={{ slug: n.slug }}
                    className="transition-colors hover:text-primary"
                  >
                    <span className="text-gradient">●</span> {n.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex h-7 items-center gap-1 rounded-md border border-border bg-background px-2 text-xs font-medium text-foreground/80 transition-colors hover:text-primary"
                aria-label={t("header.langAria")}
              >
                <Globe className="h-3 w-3" />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full z-[1300] mt-1 w-44 overflow-hidden rounded-xl border border-border bg-popover py-1 text-popover-foreground shadow-[var(--shadow-elegant)]">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as LangCode);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors hover:bg-accent",
                        lang === l.code && "bg-accent/60 font-semibold text-primary",
                      )}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder={t("header.searchPlaceholder")}
                className="h-7 w-56 rounded-md border border-border bg-background pl-7 pr-2 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
          </div>
          <button
            className="shrink-0 rounded-md border border-border p-1.5 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t("header.menuAria")}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Layer 3 — Main navigation */}
      <div className="hidden md:block">
        <div className="mx-auto flex h-12 max-w-7xl items-center gap-1 px-4 lg:px-6">
          <Link
            to="/"
            className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            style={{ backgroundImage: "var(--gradient-primary)" }}
            aria-label={t("header.homeAria")}
          >
            <Home className="h-4 w-4" />
          </Link>
          <Link
            to="/"
            className="mr-3 hidden text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary lg:inline"
          >
            {t("header.brand")}
          </Link>
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <div key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    data-active={active}
                    className="nav-underline inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/85 transition-colors duration-150 hover:text-primary"
                  >
                    {t(item.labelKey)}
                    {item.children && (
                      <ChevronDown className="h-3 w-3 opacity-60" />
                    )}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-[1300] min-w-[220px] translate-y-0 rounded-none border-x border-b border-border border-t-[3px] border-t-primary bg-popover py-1 opacity-0 shadow-[var(--shadow-elegant)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-4 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-primary"
                        >
                          {t(c.labelKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <Link
            to="/nha-dau-tu/dang-ky-quan-tam"
            className="btn-gradient ml-auto inline-flex items-center rounded-lg px-3.5 py-1.5 text-sm font-medium"
          >
            {t("header.cta")}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-border py-2.5 text-sm font-semibold"
            >
              {t("nav.home")}
            </Link>
            {navItems.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-border py-2.5 text-sm font-semibold"
                >
                  {t(item.labelKey)}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-border pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-xs text-muted-foreground hover:text-primary"
                      >
                        {t(c.labelKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/nha-dau-tu/dang-ky-quan-tam"
              onClick={() => setMobileOpen(false)}
              className="btn-gradient mt-3 rounded-lg px-3 py-2.5 text-center text-sm font-medium"
            >
              {t("header.cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
