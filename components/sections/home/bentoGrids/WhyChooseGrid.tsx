import React, { ReactNode } from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function WhyChooseGrid() {
  type Why = {
    heading: string;
    subHeading: string;
    icon?: ReactNode;
  };

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
  return (
    <div>
      {/* Content goes here */}
      <h4 className="mb-[3vh] text-body-sm font-semibold ">Why Choose Me</h4>

      {/* WhyChoose list  */}
      <div className="flex flex-col gap-[3vh]">
        {whyChooseMe.map((item, key) => {
          return (
            <div key={key} className="flex gap-[.5vw]">
              <div className="text-green-500 text-[18px]">{item.icon}</div>
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
  );
}
