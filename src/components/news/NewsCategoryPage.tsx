import { PageHero } from "@/components/layout/PageHero";
import { ArticleCard, pickFeatured } from "@/components/news/ArticleCard";
import { type NewsCategory } from "@/data/content";
import { useT } from "@/lib/i18n";

export function NewsCategoryPage({
  category,
  eyebrow,
  title,
  description,
}: {
  category: NewsCategory;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const t = useT();
  const articles = pickFeatured(category);
  const catKey =
    category === "chinh-sach"
      ? "policy"
      : category === "ha-tang"
        ? "infra"
        : category === "dia-phuong"
          ? "local"
          : "fdi";
  const catLabel = t(`news.category.${catKey}`);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-5 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{articles.length}</span> · {catLabel}
        </p>
        {articles.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
            {t("common.notFound")}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} a={a} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
