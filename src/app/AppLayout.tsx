import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return <Outlet />;
}
