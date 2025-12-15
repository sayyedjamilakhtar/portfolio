import React from "react";
import NavButton from "./NavButton";
import PhoneMenu from "./PhoneMenu";

export default function Navbar() {
  return (
    <>
      <div className="py-10">
        <div className="flex items-center justify-between w-[95%] m-auto">
          <h1 className="text-3xl uppercase tracking-tight">Jamil Akhtar</h1>

          <ul className="gap-20 text-xl hidden xl:flex">
            <li>About Me</li>
            <li>Works</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>

          <PhoneMenu />

          <NavButton className="hidden xl:flex" />
        </div>
      </div>
    </>
  );
}
