import { gql, GraphQLClient } from "graphql-request";
import { Project, ProjectsResponse } from "@/lib/types";

const baseUrl = process.env.WORDPRESS_URL;

const client = new GraphQLClient(`${baseUrl}/graphql`);

export async function getProjects(): Promise<Project[]> {
  const query = gql`
    query getPosts {
      projects(first: 100) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          title
          featuredImage {
            node {
              filePath
              altText
            }
          }
          projectCategories {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  `;

  const data: ProjectsResponse = await client.request(query);

  return data.projects.nodes;
}
