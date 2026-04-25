import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dia-phuong")({
  head: () => ({
    meta: [
      { title: "Dành cho Địa phương — Gói dịch vụ truyền thông xúc tiến đầu tư" },
      {
        name: "description",
        content:
          "3 gói dịch vụ truyền thông xúc tiến đầu tư cho UBND tỉnh/thành — Cơ bản, Nâng cao và Premium.",
      },
      { property: "og:title", content: "Dành cho Địa phương — Cẩm nang Đầu tư" },
    ],
  }),
  component: () => <Outlet />,
});
