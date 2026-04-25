import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { LanguageProvider } from "../lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-[10rem] leading-none text-primary/15">404</p>
        <h1 className="-mt-8 font-display text-3xl text-foreground">Không tìm thấy trang</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Trang bạn đang tìm không tồn tại hoặc đã được di chuyển. Hãy quay về trang chủ để tiếp tục khám phá.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cẩm nang Đầu tư Việt Nam" },
      {
        name: "description",
        content:
          "Cổng thông tin đầu tư chính thống cho 34 tỉnh thành Việt Nam sau sáp nhập — bản đồ, dữ liệu, chính sách ưu đãi và cơ hội đầu tư.",
      },
      { name: "author", content: "Báo Tiền Phong × Greencom" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cẩm nang Đầu tư Việt Nam" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#8b1a1a" },
      { property: "og:title", content: "Cẩm nang Đầu tư Việt Nam" },
      { name: "twitter:title", content: "Cẩm nang Đầu tư Việt Nam" },
      { name: "description", content: "Investment Guide Map provides a comprehensive sitemap for an investment handbook." },
      { property: "og:description", content: "Investment Guide Map provides a comprehensive sitemap for an investment handbook." },
      { name: "twitter:description", content: "Investment Guide Map provides a comprehensive sitemap for an investment handbook." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7af78919-d9b4-4b88-b193-e50d3f23f104/id-preview-451c6e0f--7dfb15b8-60db-469e-90bf-75054fc8b4ba.lovable.app-1777095548938.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7af78919-d9b4-4b88-b193-e50d3f23f104/id-preview-451c6e0f--7dfb15b8-60db-469e-90bf-75054fc8b4ba.lovable.app-1777095548938.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap",
      },
      // Preconnect tile servers — giúp map load nhanh hơn nhiều khi user vào /ban-do-dau-tu
      { rel: "preconnect", href: "https://a.tile.openstreetmap.org", crossOrigin: "" },
      { rel: "preconnect", href: "https://b.tile.openstreetmap.org", crossOrigin: "" },
      { rel: "preconnect", href: "https://c.tile.openstreetmap.org", crossOrigin: "" },
      { rel: "preconnect", href: "https://a.basemaps.cartocdn.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://b.basemaps.cartocdn.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://server.arcgisonline.com", crossOrigin: "" },
      { rel: "dns-prefetch", href: "https://a.tile.opentopomap.org" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
