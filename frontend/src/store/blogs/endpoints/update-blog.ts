import { ApiEndpointBuilder } from "services/api/types";
import { Blog } from "models";
import { BlogApiResponse } from "models";

export const updateBlogEndpoint = (builder: ApiEndpointBuilder) => {
  return builder.mutation<Blog, Request>({
    query: (request) => ({
      url: `/blogs:${request.id}`,
      method: "PUT",
      body: request,
    }),
    transformResponse: (response: BlogApiResponse) => ({
      ...response,
      createdAt: response.created_at,
      updatedAt: response.updated_at,
    }),
    invalidatesTags: (result, error, arg) => [{ type: "Blogs", id: arg.id }],
  });
};

type Request = {
  id: number;
  title: string;
  body: string;
  author_id: number;
};
