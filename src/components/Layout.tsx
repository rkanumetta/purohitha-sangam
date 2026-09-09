import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { org } from "../data/content";

function RouteScroll() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    document.title = `${org.shortName} | ${org.nameTe}, ${org.placeTe}`;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

export function Layout() {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.065,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
        wheelMultiplier: 0.86,
      }}
    >
      <RouteScroll />
      <div className="min-h-[100dvh] bg-paper text-ink dark:bg-night dark:text-[#ece7dc]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
