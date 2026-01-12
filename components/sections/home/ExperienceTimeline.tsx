"use client";
import { FaWordpress } from "react-icons/fa6";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    id: 1,
    year: "2019",
    title: "How it started",
    content: "I began my career building websites with WordPress and Divi.",
    subContent: "Learned the entire project lifecycle.",
  },
  {
    id: 2,
    year: "2021",
    title: "Growth phase",
    content: "Expanded into React, Next.js, and advanced JavaScript.",
    subContent: "Building complex, interactive applications.",
  },
  {
    id: 3,
    year: "2022",
    title: "Team collaboration",
    content: "Joined RedConic as a Front-End Developer.",
    subContent: "Collaborating with designers and stakeholders.",
  },
  {
    id: 4,
    year: "2024",
    title: "Current focus",
    content: "Sharpening skills in animations and backend.",
    subContent: "Focusing on performance and architecture.",
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");

      if (!track) return;

      // Calculate scroll amount
      // We scroll exactly enough so the last item (which has right padding) hits the center
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          // The scroll distance is based on the track width
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animation for items appearing
      cards.forEach((card) => {
        gsap.from(card, {
          y: "5vh", // Relative movement
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: "left center+=20%", // Adjust start point relative to screen width
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Section Height in vh
    <section
      ref={containerRef}
      className="relative h-[80vh] bg-neutral-900 overflow-hidden text-white"
    >
      {/* Center Line */}
      <div className="absolute top-1/2 left-0 w-full h-[0.2vh] bg-white/20 z-0" />

      {/* TRACK PADDING CALCULATION:
        To center an item: (100vw - ItemWidth) / 2
        Here, ItemWidth = 40vw.
        (100 - 40) / 2 = 30vw.
        
        So pl-[30vw] centers the first item.
        And pr-[30vw] centers the last item.
      */}
      <div
        ref={trackRef}
        className="flex h-full items-center gap-[10vw] w-max relative z-10 pl-[30vw] pr-[30vw]"
      >
        {timelineData.map((item, index) => {
          const isTop = index % 2 === 0;

          return (
            <div
              key={item.id}
              // Card Size in vw/vh
              className={`overflow-hidden timeline-card relative w-[40vw] h-[70vh] flex flex-col ${
                isTop ? "justify-start" : "justify-end"
              }`}
            >
              {/* Text Content */}
              <div
                className={`flex flex-col ${
                  !isTop && "order-3 mt-[2vh]"
                } relative`}
              >
                <span
                  className="text-[6vw] leading-none font-bold text-white/10 mb-[1vh] block"
                  style={
                    {
                      WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
                      color: "transparent",
                    } as React.CSSProperties
                  }
                >
                  {item.year}
                </span>
                <h3 className="text-body-lg uppercase font-semibold font-light mb-[1.5vh] text-white">
                  {item.title}
                </h3>
                <p className="text-white/80 text-body-sm leading-[1.6] mb-[1vh]">
                  {item.content}
                </p>
                <p className="text-white/40 text-[.9vw]">{item.subContent}</p>

                <div className="mt-[1.5vh] flex gap-[1vw]">
                  <FaWordpress className="" />
                  <FaWordpress />
                  <FaWordpress />
                </div>
              </div>

              {/* Vertical Line */}
              <div
                className={`w-[1px] bg-gradient-to-b from-white/50 to-transparent mx-auto self-start h-[20vh] ${
                  isTop ? "order-2 my-[7.7vh]" : "order-2 rotate-180 my-[5.6vh]"
                }`}
                style={{ marginLeft: ".5vw" }} // Offset line to align nicely
              ></div>

              {/* Dot */}
              <div
                className={`w-[1vw] h-[.5vw] rounded-full bg-white shadow-[0_0_1vw_rgba(255,255,255,0.5)] z-20 self-start ${
                  isTop ? "order-3" : "order-1"
                }`}
                style={{ marginLeft: "0vw" }} // Offset dot to align with line
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
