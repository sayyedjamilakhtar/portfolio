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

  return (
    <div id="services" className="py-[10vh] bg-neutral-900 text-white">
      <div className="w-[95%] m-auto mb-[10vh] flex items-end justify-between">
        <div>
          <h2 className="text-fluid font-bold">My Services</h2>
          <p className="text-body-sm leading-[3vh] max-w-[50vw]">
            I build accessible, pixel-perfect, and performant web experiences.
            Blending technical expertise with a keen eye for design to create
            website that feels crafted, not just built.
          </p>
        </div>
        <div>
          <p className=" text-body-sm leading-[3vh] max-w-[50vw] text-right flex items-center gap-[.5vw] border-1 border-neutral-600 rounded-full py-[.8vh] px-[.8vw]">
            <span className="w-[10px] h-[10px] bg-green-500 rounded-full shadow-2xl shadow-green-500/80"></span>
            Available for new projects
          </p>
        </div>
      </div>

      {/* Bento Grid Section  */}
      <div className="w-[95%] m-auto">
        <div className="max-w-[70vw] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* -- Block 1: Left Vertical (Services) -- */}
          {/* Spans 1 column width, 2 rows height */}
          <div className="md:col-span-1 md:row-span-2 min-h-[50vh] bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-neutral-600/50">
            {/* Content goes here */}
            <h4 className="mb-[3.5vh] text-body-sm font-semibold ">Services</h4>

            {/* Services list  */}
            <div className="flex flex-col gap-[3vh]">
              {services.map((service) => {
                return (
                  <div key={service.heading} className="flex gap-[.5vw]">
                    {service.icon}
                    <div>
                      <h3 className="text-[.9vw] -mt-[.5vh]">
                        {service.heading}
                      </h3>
                      <p className="text-[.7vw] text-neutral-500">
                        {service.subHeading}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* -- Block 2: Top Wide (Process) -- */}
          {/* Spans 3 columns width */}
          <div className="md:col-span-3  bg-[#111111] border border-white/10 rounded-2xl p-6">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold">Process</h4>

            <div className="flex flex-row justify-between items-center">
              {/* step 1  */}
              <div className="flex flex-col items-center group transition-all">
                <div className="bg-[#000] text-body-sm border-1 border-neutral-600 rounded-full inline-block p-[.7vw] group-hover:bg-neutral-600 transition-all">
                  <FiSearch />
                </div>

                <p className="text-[.7vw] text-neutral-600 pt-[1vh]">Step 1</p>

                <p className="text-[.9vw]">Discover</p>
              </div>

              {/* divider space  */}
              <span className="w-[3vw] h-[2px] bg-neutral-600"></span>

              {/* step 1  */}
              <div className="flex flex-col items-center group transition-all">
                <div className="bg-[#000] text-body-sm border-1 border-neutral-600 rounded-full inline-block p-[.7vw] group-hover:bg-neutral-600 transition-all">
                  <IoColorPalette />
                </div>

                <p className="text-[.7vw] text-neutral-600 pt-[1vh]">Step 2</p>

                <p className="text-[.9vw]">Design</p>
              </div>

              {/* divider space  */}
              <span className="w-[3vw] h-[2px] bg-neutral-600"></span>

              {/* step 1  */}
              <div className="flex flex-col items-center group transition-all">
                <div className="bg-[#000] text-body-sm border-1 border-neutral-600 rounded-full inline-block p-[.7vw] group-hover:bg-neutral-600 transition-all">
                  <FaCode />
                </div>

                <p className="text-[.7vw] text-neutral-600 pt-[1vh]">Step 3</p>

                <p className="text-[.9vw]">Develop</p>
              </div>

              {/* divider space  */}
              <span className="w-[3vw] h-[2px] bg-neutral-600"></span>

              {/* step 1  */}
              <div className="flex flex-col items-center group transition-all">
                <div className="bg-[#000] text-body-sm border-1 border-neutral-600 rounded-full inline-block p-[.7vw] group-hover:bg-neutral-600 transition-all">
                  <MdElectricBolt />
                </div>

                <p className="text-[.7vw] text-neutral-600 pt-[1vh]">Step 4</p>

                <p className="text-[.9vw]">Optimize</p>
              </div>

              {/* divider space  */}
              <span className="w-[3vw] h-[2px] bg-neutral-600"></span>

              {/* step 1  */}
              <div className="flex flex-col items-center group transition-all">
                <div className="bg-[#000] text-body-sm border-1 border-neutral-600 rounded-full inline-block p-[.7vw] group-hover:bg-neutral-600 transition-all">
                  <HiRocketLaunch />
                </div>

                <p className="text-[.7vw] text-neutral-600 pt-[1vh]">Step 5</p>

                <p className="text-[.9vw]">Launch</p>
              </div>

              {/* End of steps  */}
            </div>
          </div>

          {/* -- Block 3: Middle Center (Tech Stack) -- */}
          {/* Spans 2 columns width */}
          <div className="md:col-span-2 min-h-[240px] bg-[#111111] border border-white/10 rounded-2xl p-6">
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

          {/* -- Block 4: Middle Right (Daily Tools) -- */}
          {/* Spans 1 column width */}
          <div className="md:col-span-1 row-span-2 min-h-[240px] bg-[#111111] border border-white/10 rounded-2xl p-6">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold ">Tech Stack</h4>
          </div>

          {/* -- Block 5: Bottom Full Width (Philosophy) -- */}
          {/* Spans 4 columns (full width) */}
          <div className="md:col-span-1 min-h-[200px] bg-[#111111] border border-white/10 rounded-2xl p-6">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold ">
              Tools Stack
            </h4>
          </div>

          {/* -- Block 6: Bottom Full Width (Philosophy) -- */}
          {/* Spans 4 columns (full width) */}
          <div className="md:col-span-2 min-h-[200px] bg-[#111111] border border-white/10 rounded-2xl p-6">
            {/* Content goes here */}
            <h4 className="mb-[2vh] text-body-sm font-semibold ">
              Animation and Effect
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
