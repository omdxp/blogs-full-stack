import { addNewBlogEndpoint } from "./add-new-blog";
import { apiSlice } from "services/api";
import { deleteBlogEndpoint } from "./delete-blog";
import { getBlogsByAuthorIdEndpoint } from "./get-blogs-by-author-id";
import { getBlogsEndpoint } from "./get-blogs";
import { updateBlogEndpoint } from "./update-blog";

export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: getBlogsEndpoint(builder),
    getBlogsByAuthorId: getBlogsByAuthorIdEndpoint(builder),
    addNewBlog: addNewBlogEndpoint(builder),
    updateBlog: updateBlogEndpoint(builder),
    deleteBlog: deleteBlogEndpoint(builder),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogsByAuthorIdQuery,
  useAddNewBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
