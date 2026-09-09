import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { org } from "../data/content";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${org.shortName} | ${org.nameTe}, ${org.placeTe}`;
  }, [pathname]);

  return (
    <div className="min-h-[100dvh] bg-paper text-ink dark:bg-night dark:text-[#ece7dc]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
