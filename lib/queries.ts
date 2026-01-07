// import { gql, GraphQLClient } from "graphql-request";
// import {
//   ProjectCategories,
//   Project,
//   ProjectsResponse,
//   Category,
// } from "@/lib/types";

// export const baseUrl = process.env.WORDPRESS_URL;

// const client = new GraphQLClient(`${baseUrl}/graphql`);

// export async function getProjects(): Promise<Project[]> {
//   const query = gql`
//     query getPosts {
//       projects(first: 100) {
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//         nodes {
//           id
//           title
//           featuredImage {
//             node {
//               filePath
//               altText
//             }
//           }
//           projectCategories {
//             nodes {
//               id
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;

//   const data: ProjectsResponse = await client.request(query);

//   return data.projects.nodes;
// }

// export async function getCategories(): Promise<Category[]> {
//   const query = gql`
//     query getCategories {
//       projectCategories(first: 100) {
//         nodes {
//           id
//           name
//           slug
//         }
//       }
//     }
//   `;

//   const data: { projectCategories: ProjectCategories } = await client.request(
//     query
//   );

//   return data.projectCategories.nodes;
// }
