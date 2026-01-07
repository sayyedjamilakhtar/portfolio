import { baseUrl } from "@/lib/queries";
import Image from "next/image";

export default function ProjectsGrid({ projects, categories }) {
  console.log(projects);
  // console.log(
  //   projects.map((project) => {
  //     return project.projectCategories.nodes.map((item) => item.name);
  //   })
  // );

  const categoriesList = projects.map((project) => {
    return project.projectCategories.nodes.map((item) => item.name);
  });

  // console.log(categoriesList);

  const projectsItem = projects.map((project) => {
    const imagePath: string = project.featuredImage
      ? baseUrl + project.featuredImage.node.filePath
      : "";

    return (
      <div key={project.id} className="">
        <div className="w-[20vw] h-[45vh] m-auto overflow-hidden relative group flex justify-center items-center">
          {imagePath && (
            <Image
              className="absolute w-auto h-auto top-0 group-hover:-translate-y-[calc(100%-45vh)] transition duration-1200"
              src={imagePath}
              width={500}
              height={500}
              alt={project.featuredImage?.node.altText || project.title}
              loading="eager"
            />
          )}
        </div>

        <h1 className="text-body-sm">{project.title}</h1>
      </div>
    );
  });

  // console.log(projectsItem);

  return <>{projectsItem}</>;
}
