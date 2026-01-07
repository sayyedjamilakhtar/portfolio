"use client";

import React, { useRef } from "react";
import gsap from "gsap";
// import Link from "next/link";

interface HoverLinkProps {
  children: string;
}

const HoverLink: React.FC<HoverLinkProps> = ({ children }) => {
  // 1. Type the ref as an HTMLAnchorElement
  const container = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!container.current) return;

    const originals = container.current.querySelectorAll(".original-char");
    const clones = container.current.querySelectorAll(".clone-char");

    gsap.killTweensOf(originals);
    gsap.killTweensOf(clones);

    gsap.to(originals, {
      x: "100%",
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.inOut",
    });

    gsap.to(clones, {
      x: "0%",
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    if (!container.current) return;

    const originals = container.current.querySelectorAll(".original-char");
    const clones = container.current.querySelectorAll(".clone-char");

    gsap.killTweensOf(originals);
    gsap.killTweensOf(clones);

    gsap.to(originals, {
      x: "0%",
      duration: 0.1,
      stagger: 0.03,
      // ease: "power2.inOut",
    });

    gsap.to(clones, {
      x: "-100%",
      duration: 0.1,
      stagger: 0.03,
      // ease: "power2.inOut",
    });
  };

  return (
    <span
      ref={container}
      className="relative inline-block overflow-hidden cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children.split("").map((char, index) => (
        <span key={index} className="relative inline-block overflow-hidden">
          {/* Original Character */}
          <span className="original-char inline-block translate-x-0">
            {char === " " ? "\u00A0" : char}
          </span>

          {/* Clone Character */}
          <span className="clone-char absolute top-0 left-0 inline-block -translate-x-full text-neutral-400">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
};

export default HoverLink;
