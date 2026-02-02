"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

// --- STEP 1: EXPORT THE INSTANCE ---
// This is what your other file is trying to import
export let lenisInstance: Lenis | null = null;

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();

  useEffect(() => {
    // --- STEP 2: ASSIGN THE INSTANCE ---
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null; // Clean up to avoid memory leaks
    };
  }, []);

  // Force scroll to top on every route change
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
