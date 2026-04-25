import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { KEY_PROJECTS } from "@/data/map-layers";
import { PROVINCES } from "@/data/provinces";
import { fmtNumber, SECTOR_LABEL, STATUS_LABEL } from "@/lib/format";
import { ArrowLeft, ArrowRight, Building2, MapPin } from "lucide-react";

export const Route = createFileRoute("/du-an/$id")({
  loader: ({ params }) => {
    const project = KEY_PROJECTS.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Dự án không tồn tại" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.investor} | Cẩm nang Đầu tư` },
        {
          name: "description",
          content: `${p.name}: ${fmtNumber(p.capital, 1)} tỷ USD, ngành ${SECTOR_LABEL[p.sector]}, tại ${p.province}.`,
        },
        { property: "og:title", content: `${p.name} — ${fmtNumber(p.capital, 1)} tỷ USD` },
        {
          property: "og:description",
          content: `Dự án của ${p.investor} tại ${p.province}. Trạng thái: ${STATUS_LABEL[p.status]}.`,
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Dự án không tồn tại</h1>
      <p className="mt-3 text-muted-foreground">
        Dự án bạn tìm không có trong cơ sở dữ liệu.
      </p>
      <Link to="/du-an" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Quay lại danh sách
      </Link>
    </div>
  ),
  component: DuAnDetail,
});

function DuAnDetail() {
  const { project: p } = Route.useLoaderData();

  const province = PROVINCES.find(
    (pr) => pr.name === p.province || pr.capital === p.province,
  );

  const related = KEY_PROJECTS.filter(
    (k) => k.id !== p.id && (k.sector === p.sector || k.province === p.province),
  ).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={SECTOR_LABEL[p.sector]} title={p.name} description={p.investor}>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-gold px-4 py-1.5 font-semibold text-gold-foreground">
            {fmtNumber(p.capital, 1)} tỷ USD
          </span>
          <span className="rounded-full border border-primary-foreground/30 px-4 py-1.5">
            {STATUS_LABEL[p.status]}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-primary-foreground/30 px-4 py-1.5">
            <MapPin className="h-3.5 w-3.5" /> {p.province}
          </span>
          <span className="rounded-full border border-primary-foreground/30 px-4 py-1.5">
            Năm cấp phép: {p.year}
          </span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link
          to="/du-an"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Quay lại danh sách dự án
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Section title="Tổng quan">
              <p className="text-base leading-relaxed text-foreground">
                <strong>{p.name}</strong> là dự án đầu tư của {p.investor} tại {p.province}, với
                tổng vốn đăng ký <strong>{fmtNumber(p.capital, 1)} tỷ USD</strong> trong lĩnh vực{" "}
                <strong>{SECTOR_LABEL[p.sector]}</strong>. Dự án được cấp phép từ năm {p.year} và
                hiện ở trạng thái <strong>{STATUS_LABEL[p.status].toLowerCase()}</strong>.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Dữ liệu dự án dùng cho mục đích tham khảo. Thông tin chính thức vui lòng tham khảo
                Cục Đầu tư nước ngoài (Bộ KH&ĐT) và Sở KH&ĐT địa phương.
              </p>
            </Section>

            <Section title="Thông số kỹ thuật">
              <dl className="grid gap-4 sm:grid-cols-2">
                <Spec k="Chủ đầu tư" v={p.investor} />
                <Spec k="Lĩnh vực" v={SECTOR_LABEL[p.sector]} />
                <Spec k="Tổng vốn" v={`${fmtNumber(p.capital, 1)} tỷ USD`} />
                <Spec k="Năm cấp phép" v={String(p.year)} />
                <Spec k="Địa phương" v={p.province} />
                <Spec k="Trạng thái" v={STATUS_LABEL[p.status]} />
              </dl>
            </Section>

            <Section title="Vị trí địa lý">
              <p className="text-sm text-muted-foreground">
                Toạ độ tham chiếu: {p.lat.toFixed(4)}°, {p.lng.toFixed(4)}°
              </p>
              <Link
                to="/ban-do-dau-tu"
                className="mt-3 inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Mở vị trí trên Bản đồ Đầu tư <ArrowRight className="h-4 w-4" />
              </Link>
            </Section>

            <Section title="Chính sách ưu đãi áp dụng">
              <ul className="space-y-2 text-sm">
                {[
                  "Thuế TNDN ưu đãi 10% trong 15 năm đầu, miễn 4 năm và giảm 50% trong 9 năm tiếp.",
                  "Miễn thuế nhập khẩu thiết bị, máy móc tạo tài sản cố định.",
                  "Miễn/giảm tiền thuê đất tùy địa bàn ưu đãi.",
                  "Hỗ trợ đào tạo lao động và xúc tiến đầu tư từ chính quyền địa phương.",
                ].map((u) => (
                  <li key={u} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-lg font-bold">Liên hệ xúc tiến</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Trung tâm Xúc tiến đầu tư tỉnh {p.province} sẵn sàng hỗ trợ thông tin chi tiết và
                kết nối nhà đầu tư.
              </p>
              <Link
                to="/nha-dau-tu/dang-ky-quan-tam"
                className="mt-4 block rounded-md bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Đăng ký quan tâm dự án
              </Link>
              <Link
                to="/lien-he"
                className="mt-2 block rounded-md border border-border py-2.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Liên hệ Ban biên tập
              </Link>
            </div>

            {province && (
              <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-bold">Về tỉnh {province.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Trung tâm hành chính: {province.capital}
                </p>
                <Link
                  to="/tinh-thanh/$slug"
                  params={{ slug: province.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Xem hồ sơ tỉnh <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </aside>
        </div>

        {related.length > 0 && (
          <Section title="Dự án tương tự">
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/du-an/$id"
                  params={{ id: r.id }}
                  className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {SECTOR_LABEL[r.sector]}
                  </p>
                  <h4 className="mt-2 font-display text-base font-semibold leading-snug group-hover:text-primary">
                    {r.name}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <Building2 className="mr-1 inline h-3 w-3" />
                    {r.province} · {fmtNumber(r.capital, 1)} tỷ USD
                  </p>
                </Link>
              ))}
            </div>
          </Section>
        )}
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 first:mt-0">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
      <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{k}</dt>
      <dd className="mt-1 text-sm font-semibold text-foreground">{v}</dd>
    </div>
  );
}
