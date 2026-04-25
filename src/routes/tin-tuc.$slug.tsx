import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ARTICLES, CATEGORY_LABEL } from "@/data/content";
import { ArticleCard } from "@/components/news/ArticleCard";
import { fmtDate } from "@/lib/format";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";

export const Route = createFileRoute("/tin-tuc/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Bài viết không tồn tại" }] };
    return {
      meta: [
        { title: `${a.title} — Cẩm nang Đầu tư Việt Nam` },
        { name: "description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Không tìm thấy bài viết</h1>
      <Link to="/tin-tuc" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Về trang Tin tức
      </Link>
    </div>
  ),
  component: BaiVietDetail,
});

function BaiVietDetail() {
  const { article: a } = Route.useLoaderData();
  const related = ARTICLES.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/tin-tuc"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Tin tức
        </Link>

        <span className="mt-6 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          {CATEGORY_LABEL[a.category]}
        </span>

        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground lg:text-5xl">
          {a.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{a.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-4 w-4" /> {a.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {fmtDate(a.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {a.readingMinutes} phút đọc
          </span>
          {a.source && <span>Nguồn: {a.source}</span>}
        </div>

        <div className="prose prose-lg mt-8 max-w-none text-foreground">
          {(a.body ?? a.excerpt).split("\n").map((p, i) => (
            <p key={i} className="mb-4 text-base leading-relaxed">
              {p}
            </p>
          ))}
          <p className="mt-6 rounded-lg border-l-4 border-gold bg-muted/40 p-4 text-sm italic text-muted-foreground">
            Bài viết tham khảo dữ liệu công khai. Để có thông tin chính xác phục vụ quyết định đầu
            tư, vui lòng liên hệ Trung tâm Xúc tiến Đầu tư của địa phương hoặc Bộ KH&ĐT.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {a.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
          <Share2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Chia sẻ:</span>
          {["Facebook", "LinkedIn", "Zalo", "X / Twitter"].map((s) => (
            <button
              key={s}
              className="rounded-md border border-border px-3 py-1 text-xs hover:border-primary/40 hover:text-primary"
            >
              {s}
            </button>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="mb-5 font-display text-2xl font-bold">Bài viết liên quan</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.slug} a={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
