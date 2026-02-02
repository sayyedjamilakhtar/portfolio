"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { lenisInstance } from "@/components/helper/SmoothScroll"; // Import the instance ref we created earlier

interface PageLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function PageLink({ href, children, ...props }: PageLinkProps) {
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hrefStr = href.toString();

    // 1. Check if the link is an anchor on the current page (e.g., "#services")
    const isAnchor = hrefStr.startsWith("#");
    const isSamePageAnchor =
      hrefStr.includes("#") &&
      hrefStr.split("#")[0] === window.location.pathname;

    if (isAnchor || isSamePageAnchor) {
      e.preventDefault();
      const id = hrefStr.split("#")[1];
      const targetElement = document.getElementById(id);

      if (targetElement && lenisInstance) {
        // Use Lenis for a smooth transition to the section
        lenisInstance.scrollTo(targetElement, {
          offset: -80, // Adjust for your sticky header height
          duration: 1.2,
        });
      }
      return;
    }

    // 2. Handle standard page navigation (Existing logic)
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
    router.push(hrefStr);
  };

  return (
    <Link href={href} {...props} onClick={handleNavigation}>
      {children}
    </Link>
  );
}
