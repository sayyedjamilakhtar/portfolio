import React from "react";
import NavButton from "./NavButton";
import PhoneMenu from "./PhoneMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="py-[3vh] fixed top-0 left-0 w-full bg-white/95 z-999999">
        <div className="flex items-center justify-between w-[95%] m-auto">
          <Link href="/">
            <h1 className="text-[1.5vw] font-medium uppercase tracking-tight relative">
              <span className="text-[1vw] text-neutral-400 absolute top-[-2vh]">
                Sayyed
              </span>
              Jamil
              <span className="font-light"> Akhtar</span>
              <div className="w-[5.2vw] h-3 bg-neutral-300 absolute right-0 bottom-[-5]"></div>
            </h1>
          </Link>

          <ul className="gap-[5vw] text-[1vw] uppercase hidden xl:flex">
            <Link href="/#about">
              <li>About Me</li>
            </Link>
            <li>Services</li>
            <Link href="/works">
              <li>My Work</li>
            </Link>
            <li>Resume</li>
          </ul>

          <PhoneMenu />

          <NavButton className="hidden xl:flex" />
        </div>
      </div>
    </>
  );
}
