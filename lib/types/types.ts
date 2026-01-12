export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type FeaturedImageNode = {
  filePath: string;
  altText: string;
};

export type FeaturedImage = {
  node: FeaturedImageNode;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type ProjectCategories = {
  nodes: Category[];
};

export type Project = {
  id: string;
  title: string;
  uri: string;
  featuredImage?: FeaturedImage | null;
  projectCategories?: ProjectCategories;
};

export type ProjectsResponse = {
  data: {
    projects: {
      pageInfo: PageInfo;
      nodes: Project[];
    };
  };
};

export type CategoryResponse = {
  data: {
    projectCategories: {
      nodes: Category[];
    };
  };
};
