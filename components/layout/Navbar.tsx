import React from "react";
import NavButton from "../ui/NavButton";
import PhoneMenu from "./PhoneMenu";
import Link from "next/link";
import { NavLink } from "@/constant/constant";
import HoverLink from "../ui/HoverLink";

export default function Navbar() {
  return (
    <>
      <div className="py-[3vh] fixed top-0 left-0 w-full bg-neutral-100/95 z-999999">
        <div className="flex items-center justify-between w-[95%] m-auto">
          <Link href="/#home">
            <h1 className="group text-body-md font-medium uppercase tracking-tight relative">
              <span className="text-body-sm text-neutral-400 absolute top-[-2vh]">
                Sayyed
              </span>
              Jamil{" "}
              <span className="font-light relative">
                Akhtar
                <div className="w-[100%] h-[0.8vh] bg-neutral-300 absolute right-0 -bottom-[0.3vh] group-hover:bottom-[4vh] transition-all duration-300"></div>
              </span>
            </h1>
          </Link>

          {/* Nav links  */}
          <ul className="gap-[5vw] text-[1vw] uppercase hidden lg:flex">
            {NavLink.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  <HoverLink>{link.label}</HoverLink>
                </Link>
              );
            })}
            <a
              href="https://resume.almagrow.com/sayyedjamilakhtar/jamil-copy"
              target="blank"
            >
              <HoverLink>Resume</HoverLink>
            </a>
          </ul>
          <NavButton className="hidden lg:flex" />
          <PhoneMenu />
        </div>
      </div>
    </>
  );
}
