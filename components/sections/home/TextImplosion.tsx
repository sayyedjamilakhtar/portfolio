"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RiArrowDownLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const TextImplosion: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  // The text content
  // const content =
  //   "In the beginning, the letters floated in the void, bound only by gravity and orbit. As the observer moves forward, chaos aligns into order, and the scattered fragments of thought coalesce into a single, coherent reality. This is the power of the text implosion.";

  const content: string = `Hi, I’m Jamil Akhtar, a Frontend Developer and Designer working with startups, agencies, and growing businesses worldwide. Over  the years, I’ve partnered with the global brands, B2B SaaS companies, founders and teams to turnideas into fast, scalable, and user-focused web experien-ces, I partner with businesses to shape unique brands,    craft digital products, and create standout experiences     that drive impact.`;

  useLayoutEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;

    if (!container || !textElement) return;

    const ctx = gsap.context(() => {
      // 1. Select all the individual character spans
      const chars = textElement.querySelectorAll<HTMLSpanElement>(".char");

      // 2. Define our "Solar System" Rings (Radii in pixels)
      const rings: number[] = [150, 350, 550, 750];

      // 3. Create the Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top", // Animation starts when top of container hits top of viewport
          end: "+=2000", // The scroll distance over which the animation plays
          scrub: 1.5, // Smooth scrubbing effect (1.5s lag)
          pin: true, // Pin the container while animating
        },
      });

      // 4. Animate from "Chaos" to "Order"
      tl.fromTo(
        chars,
        {
          // LOGIC: Randomly assign each char to a ring and calculate position
          x: (i: number) => {
            const ringRadius = rings[i % rings.length]; // Distribute evenly across rings
            const angle = Math.random() * Math.PI * 2; // Random angle (0 to 360)
            return Math.cos(angle) * ringRadius; // Polar to Cartesian X
          },
          y: (i: number) => {
            const ringRadius = rings[i % rings.length];
            const angle = Math.random() * Math.PI * 2;
            return Math.sin(angle) * ringRadius; // Polar to Cartesian Y
          },
          opacity: 0,
          rotation: () => Math.random() * 720 - 360, // Random wild rotation
          rotationX: () => Math.random() * 360, // 3D tumble feel
          rotationY: () => Math.random() * 360,
          z: () => Math.random() * 500 - 250, // Random depth
        },
        {
          x: 0, // Return to natural HTML flow
          y: 0,
          z: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          duration: 1,
          stagger: {
            amount: 0.5, // Randomize the landing slightly so they don't all hit at once
            from: "random",
          },
          ease: "power3.out",
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  // Helper to split text into spans while preserving spaces
  const splitText = content.split("").map((char, index) => (
    <span
      key={index}
      className="char"
      style={{
        display: "inline-block",
        minWidth: char === " " ? "0.3em" : "auto", // Preserve space width
        willChange: "transform, opacity",
      }}
    >
      {char}
    </span>
  ));

  return (
    <div
      id="about"
      className="pt-[6vh] relative w-full bg-neutral-900 text-white overflow-hidden"
    >
      {/* The Animation Container */}
      <div className="w-[95%] m-auto">
        <div className="absolute pt-[6vh] right-10 flex flex-col items-center">
          <p
            className="text-body-sm uppercase"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Scroll Down
          </p>
          <span className="w-[2px] h-[70px] bg-white mt-[20px] mb-[-10px]"></span>
          <RiArrowDownLine className="text-body-sm text-white" />
        </div>
        <h1 className="text-fluid font-bold">About Me</h1>
      </div>
      <div
        ref={containerRef}
        className="h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="max-w-[79vw] perspective-1400">
          <p
            ref={textRef}
            className="text-[2.91vw] font-light leading-tight text-left"
            style={{ perspective: "1400px" }} // Adds 3D depth context
          >
            {splitText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextImplosion;
