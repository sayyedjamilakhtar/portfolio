import React from "react";
import { GoArrowRight } from "react-icons/go";
import HoverLink from "./HoverLink";

export default function FormButon({ className = "" }) {
  return (
    // <button
    //   className={`relative group cursor flex items-center gap-5 uppercase text-[1vw] ${className}`}
    // >
    //   Let's build a great website
    //   <GoArrowRight className="text-[1.2vw] transition-all group-hover:rotate-[-45deg]" />
    //   <div className="absolute transition-all duration-300 bottom-[-5] w-[36%] h-2 bg-neutral-900 group-hover:w-[100%]"></div>
    // </button>

    <button
      className={`border-1 pt-3 w-[70%] m-auto pb-1 relative group cursor flex items-center justify-center gap-5 uppercase text-[1vw] ${className}`}
    >
      <HoverLink>Let's build a great website</HoverLink>

      {/* <GoArrowRight className="text-[1.2vw] transition-all group-hover:rotate-[-45deg]" /> */}
    </button>
  );
}
