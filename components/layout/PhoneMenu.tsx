"use client";
import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";

export default function PhoneMenu() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
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
        <div className="w-[95%] m-auto">
          <div className="flex justify-between">
            <h2 className="text-3xl uppercase tracking-tight">Jamil Akhtar</h2>
            <button onClick={() => setShowPhoneMenu(false)} className="text-xl">
              Close
            </button>
          </div>
        </div>
      </div>
      {/* End of phone menu  */}
    </div>
  );
}
