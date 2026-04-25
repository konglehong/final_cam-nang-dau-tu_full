import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dia-phuong")({
  head: () => ({
    meta: [
      { title: "Dành cho Địa phương — Truyền thông xúc tiến đầu tư" },
      {
        name: "description",
        content:
          "Đồng hành cùng UBND tỉnh/thành trong truyền thông xúc tiến đầu tư — quy trình, case study và tư vấn chuyên sâu.",
      },
      { property: "og:title", content: "Dành cho Địa phương — Cẩm nang Đầu tư" },
    ],
  }),
  component: () => <Outlet />,
});
