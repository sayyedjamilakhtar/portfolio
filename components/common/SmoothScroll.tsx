"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // --- ADDED: Handle Anchor Links ---
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a"); // Ensure we catch clicks on inner elements like spans/icons

      if (link) {
        const href = link.getAttribute("href");

        // Check if the link is an anchor link (e.g., "#contact" or "/#contact")
        if (href?.includes("#")) {
          const [path, hash] = href.split("#");

          // Only intercept if:
          // 1. It's a pure hash link (starts with #)
          // 2. OR it matches the current path (e.g. clicking /#contact while on /)
          const isSamePage = path === "" || path === window.location.pathname;

          if (isSamePage && hash) {
            const targetElement = document.getElementById(hash);

            if (targetElement) {
              e.preventDefault(); // STOP the default browser jump
              lenis.scrollTo(targetElement, {
                offset: 0, // Adjust this if you have a fixed header (e.g., -80)
              });
            }
          }
        }
      }
    };

    // Listen to all clicks on the document
    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick); // Clean up listener
    };
  }, []);

  return <>{children}</>;
}
