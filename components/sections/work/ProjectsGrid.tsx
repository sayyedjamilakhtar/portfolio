"use client";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
// import { useSelector } from "react-redux";
import CategoriesTabs from "@/components/sections/work/CategoriesTabs";
import { Project } from "@/lib/types/types";
import {
  useGetProjectsQuery,
  useGetCategoriesQuery,
} from "@/store/features/projectApiSlice";
import FormButon from "@/components/ui/FormButton";
import Image from "next/image";
import Link from "next/link";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ProjectsGrid() {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;

  //Getting active category from filterable projects
  const activeCategory: string = useAppSelector(
    (state) => state.activeCategory.value
  );

  //State to manage how many items are visible
  const [visibleCount, setVisibleCount] = useState(12);

  //Getting projects data
  const { data: projectsData, isError, isLoading } = useGetProjectsQuery();

  console.log(projectsData?.slice(0, 10));

  //Getting categories data
  const { data: categories } = useGetCategoriesQuery();

  //Loader for projects grid
  if (isLoading) {
    return (
      // <div className="h-screen py-[10vh]">
      //   <h1 className="text-fluid">Loading....</h1>
      // </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-[1.5vw] justify-center m-auto w-[95%] py-[10vh]">
        {/* Render 12 dummy skeletons for the initial loading state */}
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-[50vh]">
              <SkeletonTheme baseColor="#e2e2e2" highlightColor="#868686">
                <Skeleton height="90%" />
                <Skeleton height="10%" />
              </SkeletonTheme>
            </div>
          ))}
      </div>
    );
  }

  //Error management
  if (isError) {
    return (
      <div className="h-screen py-[10vh]">
        <h1 className="text-fluid">Something Went Wrong</h1>
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

    const totalProjects = projectsData.length;
    console.log(totalProjects);

    const allFilteredData = filterProjects(projectsData, activeCategory);

    const visibleProjects = allFilteredData.slice(0, visibleCount);

    const handleLoadMore = () => setVisibleCount(visibleCount + 12);

    console.log(totalProjects < visibleCount);
    // project item list
    const projectList = visibleProjects.map((project) => {
      const imagePath: string = project.featuredImage
        ? baseUrl + project.featuredImage.node.filePath
        : "";

      return (
        <div key={project.id}>
          <Link
            href={project.uri.includes("http") ? project.uri : "/work/slug"}
            target={project.uri.includes("http") ? "_blank" : ""}
          >
            <div className="p-5 bg-white border-1 border-neutral-200 rounded-xl hover:shadow-2xl transition-all">
              <div className="w-[100%] h-[45vh] m-auto overflow-hidden relative group flex justify-center items-center">
                {imagePath && (
                  <Image
                    className="absolute w-[100%] h-auto top-0 group-hover:-translate-y-[calc(100%-45vh)] transition duration-1200"
                    src={imagePath}
                    width={800}
                    height={800}
                    alt={project.featuredImage?.node.altText || project.title}
                    loading="eager"
                  />
                )}
              </div>

              <h1 className="text-body-sm mt-[2vh] font-semibold">
                {project.title}
              </h1>
            </div>
          </Link>
        </div>
      );
    });
    // end of project item list

    return (
      <div>
        <div className="w-[95%] m-auto pb-[10vh]">
          <CategoriesTabs categories={categories || []} />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-[1.5vw] justify-center m-auto">
            {projectList}
          </div>
          <FormButon
            className={`${
              totalProjects < visibleCount ? "hidden" : ""
            } mt-[5vh] max-w-[500px]`}
            onClick={handleLoadMore}
          >
            Load more
          </FormButon>
        </div>
      </div>
    );
  }
}
