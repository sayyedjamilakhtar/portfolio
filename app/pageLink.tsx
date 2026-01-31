"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { lenisInstance } from "@/components/layout/SmoothScroll"; // Import the instance ref we created earlier

interface PageLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function PageLink({ href, children, ...props }: PageLinkProps) {
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 1. Force Lenis to snap to 0 immediately before moving
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0); // Fallback if Lenis isn't ready
    }

    // 2. Perform the navigation
    router.push(href.toString());
  };

  return (
    <Link href={href} {...props} onClick={handleNavigation}>
      {children}
    </Link>
  );
}
