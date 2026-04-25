import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { MediaGrid } from "@/components/news/MediaCard";
import { LIVESTREAMS } from "@/data/content";

export const Route = createFileRoute("/multimedia/livestream")({
  head: () => ({
    meta: [
      { title: "Livestream Đầu tư — Lịch & Replay" },
      { name: "description", content: "Lịch livestream giải đáp đầu tư, tọa đàm online và replay các buổi đã diễn ra." },
      { property: "og:title", content: "Livestream Đầu tư Việt Nam" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Định dạng · Livestream"
        title="Livestream"
        description="Tương tác trực tiếp với lãnh đạo địa phương, chuyên gia và doanh nghiệp đầu tư."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <MediaGrid items={LIVESTREAMS} />
      </section>
    </>
  ),
});
