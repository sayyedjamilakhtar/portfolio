import React from "react";
import NavButton from "./NavButton";
import PhoneMenu from "./PhoneMenu";
import Link from "next/link";
import { NavLink } from "@/constant/constant";

export default function Navbar() {
  return (
    <>
      <div className="py-[3vh] fixed top-0 left-0 w-full bg-neutral-100/95 z-999999">
        <div className="flex items-center justify-between w-[95%] m-auto">
          <Link href="/">
            <h1 className="text-[1.5vw] font-medium uppercase tracking-tight relative">
              <span className="text-[1vw] text-neutral-400 absolute top-[-2vh]">
                Sayyed
              </span>
              Jamil
              <span className="font-light"> Akhtar</span>
              <div className="w-[5.2vw] h-[0.8vh] bg-neutral-300 absolute right-0 bottom-[-0.3vh]"></div>
            </h1>
          </Link>

          {/* Nav links  */}
          <ul className="gap-[5vw] text-[1vw] uppercase hidden xl:flex">
            {NavLink.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  <li>{link.label}</li>
                </Link>
              );
            })}
            <a
              href="https://resume.almagrow.com/sayyedjamilakhtar/jamil-copy"
              target="blank"
            >
              <li>Resume</li>
            </a>
          </ul>

          <PhoneMenu />

          <NavButton className="hidden xl:flex" />
        </div>
      </div>
    </>
  );
}
