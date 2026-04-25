import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { DOCUMENTS, type Document } from "@/data/content";
import { fmtDate } from "@/lib/format";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/nha-dau-tu/tai-lieu")({
  head: () => ({
    meta: [
      { title: "Thư viện tài liệu xúc tiến đầu tư — Đa ngôn ngữ" },
      { name: "description", content: "Tài liệu xúc tiến đầu tư của 34 tỉnh thành Việt Nam, đa ngôn ngữ (Việt, Anh, Trung, Hàn, Nhật)." },
      { property: "og:title", content: "Thư viện tài liệu xúc tiến đầu tư đa ngôn ngữ" },
    ],
  }),
  component: TaiLieuPage,
});

const TYPES: Array<Document["type"] | "all"> = ["all", "guide", "report", "factsheet", "law"];
const TYPE_LABEL: Record<Document["type"], string> = {
  guide: "Cẩm nang",
  report: "Báo cáo",
  factsheet: "Factsheet",
  law: "Văn bản pháp luật",
};

const LANGS: Array<Document["language"] | "all"> = ["all", "vi", "en", "ja", "ko", "zh"];
const LANG_LABEL: Record<Document["language"], string> = {
  vi: "Tiếng Việt",
  en: "English",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
};

function TaiLieuPage() {
  const [type, setType] = useState<(typeof TYPES)[number]>("all");
  const [lang, setLang] = useState<(typeof LANGS)[number]>("all");

  const list = useMemo(
    () =>
      DOCUMENTS.filter(
        (d) => (type === "all" || d.type === type) && (lang === "all" || d.language === lang),
      ),
    [type, lang],
  );

  return (
    <>
      <PageHero
        eyebrow="Tài liệu"
        title="Thư viện tài liệu xúc tiến"
        description="Cẩm nang, báo cáo, factsheet và văn bản pháp luật về đầu tư Việt Nam — sẵn sàng cho thị trường quốc tế."
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap gap-3">
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Loại
            </p>
            <div className="flex flex-wrap gap-1.5">
              {TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    type === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:border-primary/40"
                  }`}
                >
                  {t === "all" ? "Tất cả" : TYPE_LABEL[t]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Ngôn ngữ
            </p>
            <div className="flex flex-wrap gap-1.5">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    lang === l
                      ? "border-gold bg-gold text-gold-foreground"
                      : "border-border text-foreground hover:border-gold/40"
                  }`}
                >
                  {l === "all" ? "Tất cả" : LANG_LABEL[l]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {list.length} tài liệu phù hợp.
        </p>

        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => (
            <article
              key={d.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div className="flex flex-wrap gap-1">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {TYPE_LABEL[d.type]}
                  </span>
                  <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">
                    {LANG_LABEL[d.language]}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 font-display text-base font-bold leading-snug">{d.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{d.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{d.pages} trang · {d.fileSize}</span>
                <span>{fmtDate(d.publishedAt)}</span>
              </div>
              <button className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                <Download className="h-4 w-4" /> Tải xuống miễn phí
              </button>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
            Không có tài liệu phù hợp với bộ lọc.
          </div>
        )}
      </section>
    </>
  );
}
