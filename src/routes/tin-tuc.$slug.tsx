import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ARTICLES, type NewsCategory } from "@/data/content";
import { ArticleCard } from "@/components/news/ArticleCard";
import { fmtDate } from "@/lib/format";
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Quote, Share2, User } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTranslatedItem } from "@/lib/use-translated";

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
      <h1 className="font-display text-3xl font-extrabold">Không tìm thấy bài viết</h1>
      <Link to="/tin-tuc" className="mt-6 inline-flex items-center gap-2 text-[#163300]">
        <ArrowLeft className="h-4 w-4" /> Về trang Tin tức
      </Link>
    </div>
  ),
  component: BaiVietDetail,
});

function BaiVietDetail() {
  const t = useT();
  const { article: a } = Route.useLoaderData();
  const tr = useTranslatedItem(a as { slug: string; title?: string; excerpt?: string; body?: string; tags?: string[] });
  const related = ARTICLES.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);
  const cat = a.category as NewsCategory;
  const catKey = cat === "chinh-sach" ? "policy" : cat === "ha-tang" ? "infra" : cat === "dia-phuong" ? "local" : "fdi";
  const body = ((tr.body ?? tr.excerpt ?? "") as string).split("\n").filter(Boolean);

  return (
    <main className="bg-[#F7F8F2] text-[#0E0F0C]">
      <article>
        <header className="border-b border-[rgba(14,15,12,0.12)] bg-white">
          <div className="mx-auto max-w-5xl px-6 py-10 lg:py-16">
            <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#163300]">
              <ArrowLeft className="h-4 w-4" /> {t("nav.news")}
            </Link>

            <div className="mt-8 max-w-4xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#163300]">
                {t(`news.category.${catKey}`)}
              </p>
              <h1 className="mt-4 font-display text-[42px] font-extrabold leading-[1.08] tracking-normal text-[#0E0F0C] sm:text-[58px] lg:text-[72px]">
                {tr.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-[#454745]">
                {tr.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#454745]">
                <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {a.author}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {fmtDate(a.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {a.readingMinutes} {t("common.minutesRead")}</span>
                {a.source && <span>{t("common.source")}: {a.source}</span>}
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[1fr_220px] lg:py-16">
          <div className="mx-auto w-full max-w-3xl">
            <div className="aspect-[16/9] rounded-[32px] bg-[linear-gradient(135deg,#DCEED8,#BEE4F0)] ring-1 ring-[rgba(14,15,12,0.12)]" />
            <ArticleBody paragraphs={body.length ? body : [String(tr.excerpt ?? "")]} disclaimer={t("news.disclaimer")} tags={(tr.tags ?? a.tags) as string[]} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[24px] bg-white p-4 ring-1 ring-[rgba(14,15,12,0.12)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8A8D86]">Chia sẻ</p>
              <div className="mt-4 grid gap-2">
                {[
                  { label: "LinkedIn", icon: Linkedin },
                  { label: "Facebook", icon: Facebook },
                  { label: "Sao chép link", icon: Share2 },
                ].map(({ label, icon: Icon }) => (
                  <button key={label} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-[#454745] transition-colors hover:bg-[#E2F6D5] hover:text-[#163300]">
                    <Icon className="h-4 w-4" /> {label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-[rgba(14,15,12,0.12)] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="mb-5 font-display text-3xl font-extrabold tracking-normal text-[#0E0F0C]">{t("news.related")}</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r) => <ArticleCard key={r.slug} a={r} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function ArticleBody({ paragraphs, disclaimer, tags }: { paragraphs: string[]; disclaimer: string; tags: string[] }) {
  return (
    <div className="mt-10">
      <p className="rounded-[28px] bg-[#E2F6D5] p-6 text-xl font-semibold leading-relaxed text-[#163300] ring-1 ring-[rgba(14,15,12,0.08)]">
        {paragraphs[0]}
      </p>

      <div className="mt-10 max-w-none text-[#454745]">
        {paragraphs.map((p, i) => (
          <p key={`${p}-${i}`} className={`mb-6 text-lg font-medium leading-relaxed ${i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-extrabold first-letter:leading-[0.9] first-letter:text-[#163300]" : ""}`}>
            {p}
          </p>
        ))}

        <blockquote className="my-10 border-l-4 border-[#9FE870] bg-white px-6 py-5 text-xl font-semibold leading-relaxed text-[#163300] ring-1 ring-[rgba(14,15,12,0.08)]">
          <Quote className="mb-4 h-6 w-6 text-[#163300]" />
          Địa phương có lợi thế không chỉ là nơi có chi phí thấp, mà là nơi có khả năng kết nối nhanh với thị trường, lao động và chuỗi cung ứng.
        </blockquote>

        <DataCallout />

        <p className="mt-8 rounded-[24px] border-l-4 border-[#9FE870] bg-white p-5 text-sm italic font-medium text-[#454745] ring-1 ring-[rgba(14,15,12,0.08)]">
          {disclaimer}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#454745] ring-1 ring-[rgba(14,15,12,0.12)]">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function DataCallout() {
  return (
    <div className="my-10 rounded-[32px] bg-white p-6 ring-1 ring-[rgba(14,15,12,0.12)]">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#163300]">Dữ liệu đáng chú ý</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {[
          ["8,88 tỷ USD", "FDI 4 tháng đầu năm"],
          ["+7,3%", "So với cùng kỳ"],
          ["200+", "Khu công nghiệp hoạt động"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-[24px] bg-[#F7F8F2] p-5">
            <p className="font-display text-3xl font-extrabold text-[#163300]">{value}</p>
            <p className="mt-1 text-sm font-semibold text-[#454745]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
