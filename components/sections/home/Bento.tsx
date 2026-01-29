import React, { ReactNode } from "react";
import { FiSearch } from "react-icons/fi";
import { IoColorPalette } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { HiRocketLaunch } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa6";
import { CgPerformance } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import AnimationGrid from "./bentoGrids/AnimationGrid";
import ServicesGrid from "./bentoGrids/ServicesGrid";
import ProcessGrid from "./bentoGrids/ProcessGrid";

export default function Services() {
  const techStack: string[] = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "GSAP",
    "Framer Motion",
    "WordPress",
    "Divi Theme",
    "Elementor",
    "WPGraphQL",
    "Git",
    "Vercel",
  ];

  type Service = {
    heading: string;
    subHeading: string;
    icon?: ReactNode;
  };

  type Why = {
    heading: string;
    subHeading: string;
    icon?: ReactNode;
  };

  const services: Service[] = [
    {
      heading: "Web Design",
      subHeading: "UI/UX, Branding, Systems",
      icon: <MdOutlineDesignServices />,
    },
    {
      heading: "Frontend Dev",
      subHeading: "React, Next.js, Typescript",
      icon: <FaCode />,
    },
    {
      heading: "Full-Stack Apps",
      subHeading: "MERN Stack, Serverless",
      icon: <FaDatabase />,
    },
    {
      heading: "WordPress",
      subHeading: "Custom Build, No-code solutions",
      icon: <FaWordpress />,
    },
    {
      heading: "Performance",
      subHeading: "SEO, Core Web Vitals",
      icon: <CgPerformance />,
    },
  ];

  const whyChooseMe: Why[] = [
    {
      heading: "Clean & Scalable Code",
      subHeading: "Built for long-term growth",
      icon: <FaCircleCheck />,
    },
    {
      heading: "Performance Focused",
      subHeading: "Lightning fast loads",
      icon: <FaCircleCheck />,
    },
    {
      heading: "Pixel Perfect UI",
      subHeading: "Every design detail implemented exactly as intended",
      icon: <FaCircleCheck />,
    },
    {
      heading: "No-Code Experience",
      subHeading: "Wordpress website design and development",
      icon: <FaCircleCheck />,
    },
    {
      heading: "Fully Responsive",
      subHeading: "Seamless experience across all devices and modern browsers.",
      icon: <FaCircleCheck />,
    },
  ];

  const mySetup = [
    {
      name: "Figma",
      value: "/images/setupLogos/figma.svg",
    },
    {
      name: "Visual Studio Code",
      value: "/images/setupLogos/visual-studio-code.svg",
    },
    {
      name: "Photoshop",
      value: "/images/setupLogos/adobe-photoshop.svg",
    },
    {
      name: "Adobe Illustrator",
      value: "/images/setupLogos/adobe-illustrator.svg",
    },
    {
      name: "Github",
      value: "/images/setupLogos/github.svg",
    },
    {
      name: "ChatGPT",
      value: "/images/setupLogos/chatgpt.svg",
    },
  ];

  return (
    <div id="services" className="py-[10vh] bg-neutral-900 text-white">
      {/* Bento Grid Section  */}
      <div className="w-[95%] m-auto">
        <div className="max-w-[100vw] mx-auto grid grid-cols-1 md:grid-cols-10 gap-4">
          {/* -- Block 1: Left Vertical (Services) -- */}

          <div className="md:col-span-2 md:row-span-2 min-h-[40vh] bg-[#111111] border border-white/10 rounded-xl py-[3vh] px-[2vw] shadow-2xl shadow-neutral-600/50">
            <ServicesGrid />
          </div>

          {/* -- Block 2: Top Wide (Process) -- */}
          {/* Spans 3 columns width */}
          <div className="md:col-span-5  bg-[#111111] border border-white/10 rounded-xl py-[3vh] px-[2vw]">
            <ProcessGrid />
          </div>

          {/* -- Block 3: Middle Center (Tech Stack) -- */}
          {/* Spans 1 columns width */}
          <div className="md:col-span-1  bg-[#111111] border border-white/10 rounded-2xl">
            <div className="flex flex-col justify-center h-full">
              <p className="text-fluid-sm text-center">
                80
                <span className="text-body-lg text-orange-500">+</span>
              </p>
              <p className="text-[.7vw] text-center border-1 border-neutral-700 rounded-full py-[.9vh] mx-3">
                Projects
              </p>
            </div>
          </div>
          {/* -- Block 3: Middle Center (Tech Stack) -- */}
          {/* Spans 1 columns width */}
          <div className="md:col-span-1  bg-[#111111] border border-white/10 rounded-2xl">
            <div className="flex flex-col justify-center h-full">
              <p className="text-fluid-sm text-center">
                30
                <span className="text-body-lg text-orange-500">+</span>
              </p>
              <p className="text-[.7vw] text-center border-1 border-neutral-700 rounded-full py-[.9vh] mx-3">
                Clients
              </p>
            </div>
          </div>
          {/* -- Block 3: Middle Center (Tech Stack) -- */}
          {/* Spans 1 columns width */}
          <div className="md:col-span-1  bg-[#111111] border border-white/10 rounded-2xl">
            <div className="flex flex-col justify-center h-full">
              <p className="text-fluid-sm text-center">
                5<span className="text-body-lg text-orange-500">+</span>
              </p>
              <p className="text-[.7vw] text-center border-1 border-neutral-700 rounded-full py-[.9vh] mx-3">
                Years Experience
              </p>
            </div>
          </div>

          {/* -- Block 3: Middle Center (Tech Stack) -- */}
          {/* Spans 2 columns width */}
          <div className="md:col-span-4 min-h-[240px] bg-[#111111] border border-white/10 rounded-xl py-[3vh] px-[2vw]">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold ">Tech Stack</h4>

            <div>
              <ul className="flex gap-[.7vw] flex-wrap">
                {techStack.map((tech) => {
                  return (
                    <li
                      key={tech}
                      className="text-[.7vw] border-1 border-neutral-600 rounded-full py-[.5vh] px-[.8vw]"
                    >
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* -- Block 5: Middle Right (Daily Tools) -- */}
          {/* Spans 1 column width */}
          <div className="md:col-span-2 row-span-1 min-h-[240px] bg-orange-600 text-white border border-white/10 rounded-xl py-[3vh] px-[2vw]">
            <div className="h-full flex flex-col gap-[1vw] justify-center items-center">
              <p className="text-body-sm text-center">
                Have a project in mind? Book a Discovery Call.
              </p>
              <button className="text-button bg-white text-black border-1 border-white rounded-full py-[.8vh] px-[1vw] hover:bg-transparent hover:text-white">
                Let's Work Together
              </button>
            </div>
          </div>

          {/* -- Block 5: Bottom Full Width (Why Choose Me) -- */}
          {/* Spans 4 columns (full width) */}
          <div className="col-span-2 md:row-span-2 min-h-[200px] bg-[#111111] border border-white/10 rounded-xl py-[3vh] px-[2vw]">
            {/* Content goes here */}
            <h4 className="mb-[3vh] text-body-sm font-semibold ">
              Why Choose Me
            </h4>

            {/* WhyChoose list  */}
            <div className="flex flex-col gap-[3vh]">
              {whyChooseMe.map((item, key) => {
                return (
                  <div key={key} className="flex gap-[.5vw]">
                    <div className="text-green-500 text-[18px]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[.9vw] -mt-[.7vh]">{item.heading}</h3>
                      <p className="text-[.7vw] text-neutral-500">
                        {item.subHeading}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* -- Block 6: Bottom Full Width (Philosophy) -- */}
          {/* Spans 4 columns (full width) */}
          <div className="md:col-span-4 min-h-[200px] bg-[#111111] border border-white/10 rounded-xl py-[3vh] px-[2vw]">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold ">
              Animation and Effect
            </h4>
            <AnimationGrid />
          </div>

          {/* -- Block 5: Bottom Full Width (Philosophy) -- */}
          {/* Spans 4 columns (full width) */}
          <div className="md:col-span-2 min-h-[200px] bg-[#111111] border border-white/10 rounded-xl py-[3vh] px-[2vw]">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold ">
              Global Reach
            </h4>
          </div>

          {/* -- Block 5: Bottom Full Width (Philosophy) -- */}
          {/* Spans 4 columns (full width) */}
          <div className="md:col-span-2 min-h-[200px] bg-[#111111] border border-white/10 rounded-xl py-[3vh] px-[2vw]">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold ">My Setup</h4>

            <div className="flex justify-between flex-wrap gap-x-[2vw] gap-y-[1.5vw]">
              {mySetup.map((item, key) => {
                return (
                  <div key={key}>
                    <Image
                      className="w-[2.7vw]"
                      src={item.value}
                      width={100}
                      height={100}
                      alt={item.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
