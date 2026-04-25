import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/nha-dau-tu")({
  head: () => ({
    meta: [
      { title: "Khu Nhà đầu tư — Cẩm nang Đầu tư Việt Nam" },
      {
        name: "description",
        content:
          "Mọi thứ nhà đầu tư cần ở một nơi: cẩm nang quy trình, thư viện tài liệu xúc tiến đa ngôn ngữ, đăng ký quan tâm và bản tin đầu tư.",
      },
      { property: "og:title", content: "Khu Nhà đầu tư — Cẩm nang Đầu tư Việt Nam" },
    ],
  }),
  component: () => <Outlet />,
});
