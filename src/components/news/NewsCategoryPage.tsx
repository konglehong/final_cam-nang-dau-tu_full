import { PageHero } from "@/components/layout/PageHero";
import { ArticleCard, pickFeatured } from "@/components/news/ArticleCard";
import { CATEGORY_LABEL, type NewsCategory } from "@/data/content";

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
  const articles = pickFeatured(category);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-5 text-sm text-muted-foreground">
          Có <span className="font-semibold text-foreground">{articles.length}</span> bài viết trong
          chuyên mục <span className="font-semibold text-foreground">{CATEGORY_LABEL[category]}</span>.
        </p>
        {articles.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
            Chưa có bài viết nào trong chuyên mục này.
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
