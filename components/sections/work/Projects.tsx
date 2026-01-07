import ProjectsGrid from "@/components/common/work/ProjectsGrid";
import { getProjects, getCategories } from "@/lib/queries";
import CategoriesTabs from "@/components/common/work/CategoriesTabs";

export default async function Projects() {
  // const projects = await getProjects();
  // const categories = await getCategories();

  return (
    <>
      <CategoriesTabs categories={categories} />
      <ProjectsGrid projects={projects} categories={categories} />
    </>
  );
}
