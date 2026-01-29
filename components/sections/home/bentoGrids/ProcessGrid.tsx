import { FiSearch } from "react-icons/fi";
import { IoColorPalette } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { HiRocketLaunch } from "react-icons/hi2";

export default function ProcessGrid() {
  return (
    <div>
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
  );
}
