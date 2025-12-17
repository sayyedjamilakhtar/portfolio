import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function FormButon({ className = "" }) {
  return (
    <button
      className={`relative group cursor flex items-center gap-5 uppercase text-[1vw] ${className}`}
    >
      Let's build a great website
      <GoArrowRight className="text-[1.2vw] transition-all group-hover:rotate-[-45deg]" />
      <div className="absolute transition-all duration-300 bottom-[-5] w-[36%] h-2 bg-neutral-900 group-hover:w-[100%]"></div>
    </button>
  );
}
