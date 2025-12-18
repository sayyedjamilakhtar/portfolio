"use client";
import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface NavButtonProps {
  className?: string;
}

export default function NavButton({ className = "" }: NavButtonProps) {
  return (
    <Link href="/#contact">
      <button
        className={`relative group cursor flex items-center gap-[1vw] uppercase text-[1vw] ${className}`}
      >
        Get in touch
        <GoArrowRight className="text-[1.2vw] transition-all group-hover:rotate-[-45deg]" />
        <div className="absolute transition-all duration-300 bottom-[-0.5vh] w-[36%] h-[0.5vh] bg-neutral-900 group-hover:w-[100%]"></div>
      </button>
    </Link>
  );
}
