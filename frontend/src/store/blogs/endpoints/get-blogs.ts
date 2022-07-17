import { ApiEndpointBuilder } from "services/api/types";
import { Blog } from "models";
import { BlogApiResponse } from "models/blog";

export const getBlogsEndpoint = (builder: ApiEndpointBuilder) => {
  return builder.query<Blog[], null>({
    query: () => "/blogs",
    transformResponse: (response: BlogApiResponse[]) =>
      response.map((blog) => ({
        ...blog,
        createdAt: blog.created_at,
        updatedAt: blog.updated_at,
      })),
    providesTags: (result) =>
      result
        ? [
            ...result.map(({ id }) => ({ type: "Blogs" as const, id })),
            { type: "Blogs", id: "LIST" },
          ]
        : [{ type: "Blogs", id: "LIST" }],
  });
};
