import React from "react";
import { getProjects } from "@/lib/queries";
// import { Category } from "@/lib/types";

export default async function Projects() {
  const projects = await getProjects();

  console.log(projects);
  return <div>posts</div>;
}
