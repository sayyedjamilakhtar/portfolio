import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function Hero() {
  return (
    <>
      <div id="home" className="pb-[8vh] pt-[22vh] relative bg-neutral-100">
        <div className="w-[95%] m-auto">
          <h1 className="text-fluid-lg font-bold leading-[20vh] tracking-tight relative z-3">
            Creative Developer
          </h1>
          <p className="text-body-sm mt-[2vh] text-right text-neutral-500 uppercase tracking-[1.5vw] relative z-4">
            Based in India
          </p>
        </div>

        <div className="w-[32vw] h-[35vh] bg-neutral-200  absolute right-[15vw] bottom-[12.5vh] z-1"></div>
        <Image
          className="absolute right-[10vw] bottom-[43vh] w-[20vw] z-2"
          src="/images/jamilAkhtar.png"
          width={400}
          height={400}
          alt="Jamil Akhtar"
        />

        <div className="w-[95%] m-auto mt-[6vh]">
          <ul className="text-body-lg leading-[7vh] font-light ">
            <li>/ Coder</li>
            <li>/ Web Design (UX/UI)</li>
            <li>/ Web Development</li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-100 pb-[10vh]">
        <div className="w-[95%] m-auto">
          <a href="mailto:sayyedjamilakhtar@gmail.com">
            <div className="flex group flex-col items-end">
              <div className="relative  cursor flex items-center gap-[0.5vw] text-[1vw] inline-flex">
                <span className="uppercase">AVAILABLE FOR collaboration</span>
                <GoArrowRight className="text-[1.2vw] transition-all rotate-45 group-hover:-rotate-0" />
              </div>

              <span className="relative group cursor flex flex-col items-center gap-[0.5vw] text-[1vw] inline-flex">
                <span className="text-body-md font-semibold group-hover:text-neutral-400">
                  sayyedjamilakhtar@gmail.com
                </span>
                <span className="absolute -bottom-[0.3vh] left-0 w-[100%] h-[0.3vh] bg-neutral-900 group-hover:bg-neutral-400 origin-left underline-animate"></span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
