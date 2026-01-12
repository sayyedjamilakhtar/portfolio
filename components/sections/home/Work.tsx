import Image from "next/image";
export default function Work() {
  const projectImages = [
    "/images/homeProjects/eacrosse.co.uk.png",
    "/images/homeProjects/eacrosse.co.uk.png",
    "/images/homeProjects/eacrosse.co.uk.png",
  ];

  return (
    <div className="bg-neutral-900 text-white">
      <div className="w-[95%] m-auto">
        <h2 className="text-fluid font-bold">My Work</h2>
      </div>

      <div className="flex overflow-hidden">
        {projectImages.map((item, index) => {
          return (
            <div key={index} className="grow-3">
              <Image
                className="w-[40vw]"
                src={item}
                width={1000}
                height={1000}
                alt="project"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// public\images\homeProjects\eacrosse.co.uk.png
