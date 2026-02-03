"use client";
import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { NavLink } from "@/constant/constant";
import Link from "next/link";

export default function PhoneMenu() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

  const handleClick = () => {
    // e.preventDefault();
    if (showPhoneMenu == true) {
      setShowPhoneMenu(false);
    }
  };

  return (
    <div className=" lg:hidden">
      <button
        onClick={() => {
          setShowPhoneMenu(true);
        }}
      >
        <GrMenu className="text-3xl flex xl:hidden" />
      </button>

      {/* Start of Phone menu  */}
      <div
        className={`${
          showPhoneMenu ? "left-0 bottom-0" : "left-0 bottom-[-100%]"
        } h-screen w-full fixed bg-neutral-200 overflow-hidden z-99999 transition-all duration-300 py-10`}
      >
        <div className="flex flex-col justify-center items-center content-center">
          <div className="w-[95%] mx-auto">
            <div className="flex justify-between">
              <h2 className="text-3xl uppercase tracking-tight">
                Jamil Akhtar
              </h2>
              <button
                onClick={() => setShowPhoneMenu(false)}
                className="text-xl"
              >
                Close
              </button>
            </div>
          </div>

          <div className="w-[95%] flex-grow mx-auto pt-20">
            {/* Nav links  */}
            <ul className="gap-7 flex flex-col text-body-lg font-bold uppercase mb-10">
              {NavLink.map((link) => {
                return (
                  <Link key={link.id} href={link.url} onClick={handleClick}>
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://resume.almagrow.com/sayyedjamilakhtar/jamil-copy"
                target="blank"
              >
                Resume
              </a>
              <Link href="/#contact">
                <button
                  className="text-body-lg font-bold uppercase"
                  onClick={handleClick}
                >
                  Get in touch
                </button>
              </Link>
            </ul>
          </div>

          <div className="w-[95%] mx-auto pt-20 absolute bottom-10">
            <p className="text-xl text-center font-bold mb-10">
              sayyedjamilakhtar@gmail.com
            </p>
            <ul className="flex gap-10 justify-center text-body-md">
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>

      {/* End of phone menu  */}
    </div>
  );
}
