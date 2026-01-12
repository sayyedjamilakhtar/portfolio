import React from "react";
import HoverLink from "../ui/HoverLink";

export default function Footer() {
  return (
    <div className="pt-[10vh] lg:h-[90vh] lg:py-[10vh] bg-neutral-900 text-white overflow-hidden">
      <div className="w-[95%] pb-[15vh] m-auto grid lg:grid-cols-3 gap-[3vh]">
        {/* email part  */}
        <div>
          <h4 className="text-body-md mb-[1vh]">Let’s talk!</h4>
          <a href="mailto:sayyedjamilakhtar@gmail.com">
            <span className="relative group cursor flex flex-col items-center gap-[0.5vw] text-[1vw] inline-flex">
              <span className="text-fluid-sm font-normal group-hover:text-neutral-400">
                sayyedjamilakhtar@gmail.com
              </span>
              <span className="absolute -bottom-[0.3vh] left-0 w-[100%] h-[0.3vh] bg-neutral-900 group-hover:bg-neutral-400 origin-left underline-animate"></span>
            </span>
          </a>
        </div>

        <div></div>

        {/* end of email part  */}

        <ul className="text-body-lg flex flex-col gap-[3vh]">
          <HoverLink>Linkedin</HoverLink>
          <HoverLink>Instagram</HoverLink>
          <HoverLink>Github</HoverLink>
          <HoverLink>Facebook</HoverLink>
        </ul>
      </div>

      <div className="w-[95%] m-auto flex justify-between text-body-sm">
        <p>2025 All right reserved. Jamil Akhtar.</p>

        <p className="underline">Resume</p>
      </div>

      <div className="w-[100%] m-auto lg:-mt-[4vh]">
        <h3 className="text-[13.5vw] font-semibold text-center uppercase opacity-[.2]">
          Jamil Akhtar
        </h3>
      </div>
    </div>
  );
}
