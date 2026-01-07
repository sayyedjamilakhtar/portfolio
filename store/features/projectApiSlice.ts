import {
  ProjectsResponse,
  CategoryResponse,
  Project,
  Category,
} from "@/lib/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => ({
        url: "",
        method: "POST",
        body: {
          query: `
    query getPosts {
      projects(first: 100) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
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
  `,
        },
      }),

      transformResponse: (response: ProjectsResponse) => {
        return response.data.projects.nodes;
      },
    }),

    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "",
        method: "POST",
        body: {
          query: `
    query getCategories {
      projectCategories(first: 100) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `,
        },
      }),

      transformResponse: (response: CategoryResponse): Category[] => {
        return response.data.projectCategories.nodes;
      },
    }),
  }),
});

export const { useGetProjectsQuery, useGetCategoriesQuery } = projectsApi;
