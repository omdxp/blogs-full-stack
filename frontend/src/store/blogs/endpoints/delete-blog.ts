import { ApiEndpointBuilder } from "services/api/types";
import { Blog } from "models";
import { BlogApiResponse } from "models";

export const deleteBlogEndpoint = (builder: ApiEndpointBuilder) => {
  return builder.mutation<any, string>({
    query: (blogId) => ({
      url: `/blogs/${blogId}`,
      method: "DELETE",
    }),
    invalidatesTags: (result, error, arg) => [{ type: "Blogs", id: arg }],
  });
};
