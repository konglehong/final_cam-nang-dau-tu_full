import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [
      { title: "Tin tức đầu tư Việt Nam — Cập nhật mới nhất" },
      {
        name: "description",
        content:
          "Tin tức đầu tư, chính sách, FDI, hạ tầng và xúc tiến địa phương cập nhật liên tục từ Báo Tiền Phong và Greencom.",
      },
      { property: "og:title", content: "Tin tức Đầu tư Việt Nam" },
      {
        property: "og:description",
        content: "Cập nhật chính sách, FDI, hạ tầng và xúc tiến đầu tư địa phương.",
      },
    ],
  }),
  component: () => <Outlet />,
});
