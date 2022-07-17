import { apiSlice } from "services/api";
import { getBlogsEndpoint } from "./get-blogs";

export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: getBlogsEndpoint(builder),
  }),
});

export const { useGetBlogsQuery } = blogsApi;
