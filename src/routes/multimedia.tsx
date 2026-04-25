import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/multimedia")({
  head: () => ({
    meta: [
      { title: "Multimedia — E-magazine, Video, Podcast | Cẩm nang Đầu tư" },
      {
        name: "description",
        content:
          "Trung tâm đa phương tiện: E-magazine, Infographic, Video Series '60 giây đầu tư', Podcast 'Câu chuyện đầu tư' và Livestream.",
      },
      { property: "og:title", content: "Multimedia — Cẩm nang Đầu tư Việt Nam" },
    ],
  }),
  component: () => <Outlet />,
});
