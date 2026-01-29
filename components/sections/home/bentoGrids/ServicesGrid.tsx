import { ReactNode } from "react";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa6";
import { CgPerformance } from "react-icons/cg";

export default function ServicesGrid() {
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
    <div>
      {/* Content goes here */}
      <h4 className="mb-[3.5vh] text-body-sm font-semibold ">Services</h4>

      {/* Services list  */}
      <div className="flex flex-col gap-[3vh]">
        {services.map((service) => {
          return (
            <div key={service.heading} className="flex gap-[.5vw]">
              {service.icon}
              <div>
                <h3 className="text-[.9vw] -mt-[.5vh]">{service.heading}</h3>
                <p className="text-[.7vw] text-neutral-500">
                  {service.subHeading}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
