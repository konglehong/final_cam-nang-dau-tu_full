import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tinh-thanh")({
  component: () => <Outlet />,
});
