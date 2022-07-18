import { ApiEndpointBuilder } from "services/api/types";
import { Blog } from "models";
import { BlogApiResponse } from "models";

export const addNewBlogEndpoint = (builder: ApiEndpointBuilder) => {
  return builder.mutation<Blog, Request>({
    query: (request) => ({
      url: "/blogs",
      method: "POST",
      body: request,
    }),
    transformResponse: (response: BlogApiResponse) => ({
      ...response,
      createdAt: response.created_at,
      updatedAt: response.updated_at,
    }),
    invalidatesTags: [{ type: "Blogs", id: "LIST" }],
  });
};

type Request = {
  title: string;
  body: string;
  author_id: number;
};
