import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="py-[14vh] pt-[22vh] relative">
        <div className="w-[95%] m-auto">
          <h1 className="text-fluid-lg font-bold leading-[20vh] tracking-tight">
            Creative Developer
          </h1>
          <p className="text-body-sm mt-10 text-right text-neutral-500 uppercase tracking-[1.5vw]">
            Based in India
          </p>
        </div>

        <div className="w-[32vw] h-[35vh] bg-neutral-200  absolute right-[15vw] bottom-[20vh] z-[-1]"></div>
        <Image
          className="absolute right-[10vw] bottom-[50vh] w-[20vw] z-[-1]"
          src="/images/jamilAkhtar.png"
          width={400}
          height={400}
          alt="Jamil Akhtar"
        />

        <div className="w-[95%] m-auto mt-[6vh]">
          <ul className="text-body-md leading-[7vh] font-light">
            <li>/ Coder</li>
            <li>/ web DESIGN (UX/UI)</li>
            <li>/ web DEVELOPMENT</li>
          </ul>
        </div>
      </div>
    </>
  );
}
