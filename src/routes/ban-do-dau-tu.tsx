import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ban-do-dau-tu")({
  head: () => ({
    meta: [
      { title: "Bản đồ đầu tư Việt Nam — 34 tỉnh thành tương tác" },
      {
        name: "description",
        content:
          "Bản đồ tương tác hiển thị dữ liệu kinh tế, FDI, khu công nghiệp và cơ hội đầu tư của 34 tỉnh thành Việt Nam sau sáp nhập.",
      },
      { property: "og:title", content: "Bản đồ đầu tư Việt Nam tương tác" },
      {
        property: "og:description",
        content: "Khám phá 34 tỉnh thành qua bản đồ dữ liệu kinh tế trực quan.",
      },
    ],
  }),
});
