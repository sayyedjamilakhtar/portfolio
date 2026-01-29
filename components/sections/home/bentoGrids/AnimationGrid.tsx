"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ------------------------------------------------------------------
// TYPES
// ------------------------------------------------------------------

interface Position {
  x: number;
  y: number;
}

// ------------------------------------------------------------------
// 1. MAGNETIC BUTTON COMPONENT
// ------------------------------------------------------------------

const MagneticButton: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="relative flex h-full w-full items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer group"
    >
      <div className="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/20 transition-colors duration-300" />
      <motion.button
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="px-[1.5vw] py-[0.5vw] rounded-full border border-orange-500/50 text-orange-400 font-medium bg-orange-500/10 backdrop-blur-sm text-[clamp(10px,0.8vw,12px)]"
      >
        Magnetic
      </motion.button>
      <span className="absolute bottom-[0.75vh] text-[clamp(10px,0.8vw,12px)] text-zinc-500">
        Magnetic UI
      </span>
    </motion.div>
  );
};

// ------------------------------------------------------------------
// 2. CLICK GLOW COMPONENT

const ClickGlow: React.FC = () => {
  return (
    <motion.button
      // 1. HOVER STATE: Soft glow + Orange Border
      whileHover={{
        scale: 1.02,
        borderColor: "#f97316", // orange-500
        boxShadow: "0px 0px 15px rgba(249, 115, 22, 0.4)",
      }}
      // 2. CLICK/TAP STATE: Intense Flash + Scale Down
      whileTap={{
        scale: 0.95,
        borderColor: "#fff7ed", // orange-50 (white-ish center)
        boxShadow: "0px 0px 30px rgba(249, 115, 22, 0.9)",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative flex h-full w-full flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer outline-none group"
    >
      <div className="relative z-10 flex flex-col items-center gap-[0.5vh]">
        {/* Icon changes color on group hover */}
        <div className="text-zinc-500 group-hover:text-orange-500 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[clamp(20px,2vw,24px)] h-[clamp(20px,2vw,24px)]"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
        <span className="font-medium text-zinc-300 group-hover:text-white transition-colors text-[clamp(12px,1vw,14px)]">
          Click Me
        </span>
      </div>

      {/* Subtle background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:to-orange-500/10 transition-all duration-300" />

      <span className="absolute bottom-[0.75vh] text-[clamp(10px,0.8vw,12px)] text-zinc-500 group-hover:text-zinc-400">
        Interaction
      </span>
    </motion.button>
  );
};

// ------------------------------------------------------------------
// 3. 3D TILT COMPONENT

const TiltCard: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)" }} className="text-center">
        <div className="w-[clamp(40px,3.5vw,48px)] h-[clamp(40px,3.5vw,48px)] bg-zinc-950 rounded-lg mx-auto mb-2 border border-zinc-800 shadow-xl flex items-center justify-center">
          <div className="w-[50%] h-[50%] bg-orange-500 rounded-full" />
        </div>
      </div>
      <span
        style={{ transform: "translateZ(30px)" }}
        className="absolute bottom-[0.75vh] text-[clamp(10px,0.8vw,12px)] text-zinc-400"
      >
        3D Perspective
      </span>
    </motion.div>
  );
};

// ------------------------------------------------------------------
// 4. INFINITE MARQUEE COMPONENT

const Marquee: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900 pointer-events-none" />

      <div
        className="flex overflow-hidden whitespace-nowrap w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <motion.div
          className="flex gap-[1vw] items-center"
          animate={{ x: "-50%" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicated text for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-[clamp(18px,1.5vw,24px)] font-black text-zinc-800 uppercase tracking-tighter">
                GSAP
              </span>
              <span
                className="text-[clamp(18px,1.5vw,24px)] font-black text-transparent stroke-text uppercase tracking-tighter"
                style={{ WebkitTextStroke: "1px #52525b" }}
              >
                Framer
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      <span className="absolute bottom-[0.75vh] text-[clamp(10px,0.8vw,12px)] text-zinc-500">
        Infinite Loop
      </span>
    </div>
  );
};

// ------------------------------------------------------------------
// MAIN CONTAINER

export default function AnimationGrid() {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1vw] h-[14vh] min-h-[120px]">
        <MagneticButton />
        <ClickGlow />
        <TiltCard />
        <Marquee />
      </div>
    </div>
  );
}
