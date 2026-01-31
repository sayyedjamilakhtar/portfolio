"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // 2. Integrate Lenis with GSAP ScrollTrigger
    // This tells ScrollTrigger to use Lenis's scroll position instead of the browser's
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 3. Handle Route Changes (Fixes your "opening at last position" issue)
    // When pathname changes, we force Lenis to the top immediately
    lenis.scrollTo(0, { immediate: true });

    // Give the DOM a moment to paint, then refresh GSAP
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // 4. Handle Anchor Links (Existing logic)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link) {
        const href = link.getAttribute("href");
        if (href?.includes("#")) {
          const [path, hash] = href.split("#");
          const isSamePage = path === "" || path === window.location.pathname;

          if (isSamePage && hash) {
            const targetElement = document.getElementById(hash);
            if (targetElement) {
              e.preventDefault();
              lenis.scrollTo(targetElement);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      document.removeEventListener("click", handleAnchorClick);
      clearTimeout(timer);
    };
  }, [pathname]); // Pathname dependency is the key fix

  return <>{children}</>;
}
