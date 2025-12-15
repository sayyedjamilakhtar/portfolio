"use client";
import React from "react";
import { GoArrowRight } from "react-icons/go";

interface NavButtonProps {
  className?: string;
}

export default function NavButton({ className = "" }: NavButtonProps) {
  return (
    <button
      className={`group flex items-center gap-5 text-xl border-1 p-3 ${className}`}
    >
      Contact Me
      <GoArrowRight className="transition-all group-hover:rotate-[-45deg]" />
    </button>
  );
}
