import React from "react";
import Projects from "@/components/sections/work/Projects";

export default async function page() {
  return (
    <div className="pt-50 bg-neutral-100">
      <div className="w-[95%] m-auto">
        <h1 className="text-fluid-md font-bold mb-[6vh]">
          Turn your ideas into impactful solutions like them!
        </h1>
      </div>

      <div className="flex flex-wrap gap-10 justify-center m-auto">
        <Projects />
      </div>
    </div>
  );
}
