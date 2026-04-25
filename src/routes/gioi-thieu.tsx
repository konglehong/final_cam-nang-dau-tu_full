import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight, Award, Globe2, Newspaper, Users } from "lucide-react";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — Cẩm nang Đầu tư Việt Nam | Tiền Phong × Greencom" },
      { name: "description", content: "Câu chuyện hợp tác giữa Báo Tiền Phong và Greencom — kiến tạo cổng thông tin đầu tư chính thống cho 34 tỉnh thành Việt Nam." },
      { property: "og:title", content: "Về Cẩm nang Đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Về chúng tôi"
        title="Cổng thông tin đầu tư chính thống"
        description="Cẩm nang Đầu tư Việt Nam là sản phẩm hợp tác giữa Báo Tiền Phong và Greencom — kết hợp uy tín báo chí với năng lực truyền thông xúc tiến đầu tư."
      />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
            <Newspaper className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-display text-xl font-bold">Báo Tiền Phong</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Cơ quan ngôn luận của Trung ương Đoàn TNCS Hồ Chí Minh, hơn 70 năm uy tín báo chí cách
              mạng. Cung cấp tên miền, kênh xuất bản và bảo lãnh thương hiệu cho cổng thông tin.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-7">
            <Award className="h-8 w-8 text-gold" />
            <h3 className="mt-3 font-display text-xl font-bold">Greencom</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Đơn vị truyền thông xúc tiến đầu tư với 5 năm kinh nghiệm, 11+ tỉnh đối tác. Đầu tư
              100% chi phí xây dựng nội dung, sản xuất, vận hành cổng thông tin.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl font-bold">Sứ mệnh</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Trở thành cổng thông tin đầu tư <strong className="text-foreground">chính thống, đáng
            tin cậy và đa ngôn ngữ</strong> cho 34 tỉnh thành Việt Nam — giúp nhà đầu tư trong và
            ngoài nước ra quyết định nhanh hơn, đúng hơn và chia sẻ câu chuyện thành công của địa
            phương.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold">Tầm nhìn 2030</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Đến năm 2030, Cẩm nang Đầu tư Việt Nam là{" "}
            <strong className="text-foreground">điểm đến thông tin đầu tiên</strong> của mọi nhà đầu
            tư khi nghĩ về Việt Nam — với hệ sinh thái dữ liệu, nội dung và sự kiện toàn diện.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Stat icon={Users} v="11+" l="Tỉnh đã đồng hành" />
          <Stat icon={Globe2} v="5" l="Ngôn ngữ xuất bản" />
          <Stat icon={Award} v="100+" l="Chiến dịch xúc tiến" />
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.32_0.12_20)] p-10 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-bold">Sẵn sàng cùng chúng tôi?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Bạn là nhà đầu tư hay đại diện địa phương — có một con đường phù hợp cho bạn.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/nha-dau-tu"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground"
            >
              Tôi là nhà đầu tư <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/dia-phuong"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-bold"
            >
              Tôi đại diện địa phương <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  ),
});

function Stat({ icon: Icon, v, l }: { icon: typeof Users; v: string; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 text-center">
      <Icon className="mx-auto h-6 w-6 text-primary" />
      <p className="mt-2 font-display text-3xl font-bold text-foreground">{v}</p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
    </div>
  );
}
