"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const comp = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsComplete(true),
      });

      // 1. Animate Counter 0 -> 100
      tl.to(counterRef.current, {
        innerText: 100,
        duration: 3,
        snap: { innerText: 1 }, // Snap to whole numbers
        ease: "power2.out",
        onUpdate: function () {
          if (counterRef.current) {
            counterRef.current.innerHTML =
              Math.round(this.targets()[0].innerText) + "%";
          }
        },
      });

      // 2. Fade out the counter
      tl.to(counterRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      });

      // 3. Slide the curtain up (The Reveal)
      tl.to(curtainRef.current, {
        height: 0,
        duration: 1.5,
        ease: "power4.inOut",
        // Optional: Stagger if you add multiple curtain layers for a parallax effect
      });

      // 4. Reveal the actual page content behind it
      // (This happens naturally as the curtain height goes to 0)
    }, comp);

    return () => ctx.revert();
  }, []);

  // If animation is done, we return null to remove it from the DOM entirely
  if (isComplete) return null;

  return (
    <div
      ref={comp}
      className="fixed inset-0 z-[9999] flex items-end justify-center overflow-hidden pointer-events-none"
    >
      {/* The Curtain Background */}
      <div
        ref={curtainRef}
        className="absolute inset-0 w-full h-full bg-black z-10 pointer-events-auto"
      >
        {/* Container for Counter */}
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-white font-bold text-6xl md:text-9xl overflow-hidden leading-none z-20">
          <span ref={counterRef}>0%</span>
        </div>
      </div>
    </div>
  );
}
