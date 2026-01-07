"use client";
import { useAppSelector } from "@/redux/hooks";
// import { useSelector } from "react-redux";
import CategoriesTabs from "@/components/common/work/CategoriesTabs";
import { Project } from "@/lib/types";
import {
  useGetProjectsQuery,
  useGetCategoriesQuery,
} from "@/redux/features/projectApiSlice";
import Image from "next/image";

export default function ProjectsGrid() {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
  const activeCategory: string = useAppSelector(
    (state) => state.activeCategory.value
  );

  //getting projects data
  const { data: projectsData, isError, isLoading } = useGetProjectsQuery();

  //getting categories data
  const { data: categories } = useGetCategoriesQuery();

  //loader for projects grid
  if (isLoading) {
    return (
      <div className="h-screen py-[10vh]">
        <h1 className="text-fluid">Loading....</h1>
      </div>
    );
  }

  //error management
  if (isError) {
    return (
      <div className="h-screen py-[10vh]">
        <h1 className="text-fluid">Something went wrong</h1>
      </div>
    );
  }

  if (projectsData) {
    //filter project list with active category
    const filterProjects = (arr: Project[], category: string): Project[] => {
      // All projects
      if (activeCategory == "All") {
        return projectsData;
      }

      // Selected Category
      return arr.filter((item: Project) => {
        return item.projectCategories?.nodes
          .map((node: { name: string }) => node.name)
          .toString()
          .includes(category);
      });
    };

    const filteredData = filterProjects(projectsData, activeCategory);

    // project item list
    const projectList = filteredData.map((project) => {
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

          <h1 className="text-body-sm">{project.title}hello there</h1>
        </div>
      );
    });
    // end of project item list

    return (
      <div>
        <div className="w-[95%] m-auto">
          <CategoriesTabs categories={categories || []} />
          <div className="grid grid-cols-4 gap-[1vw] justify-center m-auto">
            {projectList}
          </div>
        </div>
      </div>
    );
  }
}
