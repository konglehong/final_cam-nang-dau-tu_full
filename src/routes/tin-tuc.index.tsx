import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleCard, pickFeatured } from "@/components/news/ArticleCard";
import { type NewsCategory } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/tin-tuc/")({
  component: TinTucIndex,
});

const CATS: NewsCategory[] = ["fdi", "chinh-sach", "ha-tang", "dia-phuong"];
const CAT_PATH: Record<NewsCategory, "/tin-tuc/fdi" | "/tin-tuc/chinh-sach" | "/tin-tuc/ha-tang" | "/tin-tuc/dia-phuong"> = {
  fdi: "/tin-tuc/fdi",
  "chinh-sach": "/tin-tuc/chinh-sach",
  "ha-tang": "/tin-tuc/ha-tang",
  "dia-phuong": "/tin-tuc/dia-phuong",
};
const CAT_KEY: Record<NewsCategory, string> = {
  fdi: "news.category.fdi",
  "chinh-sach": "news.category.policy",
  "ha-tang": "news.category.infra",
  "dia-phuong": "news.category.local",
};

function TinTucIndex() {
  const t = useT();
  const all = pickFeatured();
  const featured = all[0];
  const rest = all.slice(1, 7);
  const more = all.slice(7);

  return (
    <>
      <PageHero
        eyebrow={t("nav.news")}
        title={t("news.title")}
        description={t("news.subtitle")}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {featured && <ArticleCard a={featured} variant="hero" />}
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold">{t("nav.news")}</h3>
            <ul className="mt-4 space-y-2">
              {CATS.map((c) => (
                <li key={c}>
                  <Link
                    to={CAT_PATH[c]}
                    className="group flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <span>{t(CAT_KEY[c])}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg bg-primary/5 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{t("investor.newsletter.title")}</p>
              <p className="mt-1 text-sm">{t("investor.newsletter.subtitle")}</p>
              <Link
                to="/nha-dau-tu/ban-tin"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                {t("footer.newsletter.submit")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>

        <h2 className="mt-12 mb-5 font-display text-2xl font-bold">{t("header.latest")}</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </div>

        {more.length > 0 && (
          <>
            <h2 className="mt-12 mb-5 font-display text-2xl font-bold">{t("common.viewMore")}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {more.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
