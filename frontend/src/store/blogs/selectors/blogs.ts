import { RootState } from "store";
import { blogsAdapter } from "../adapters/blogs";

export const {
  selectAll: selectAllBlogs,
  selectById: selectBlogById,
  selectIds: selectBlogIds,
  selectTotal: selectTotalBlogs,
} = blogsAdapter.getSelectors((state: RootState) => state.blogs.blogs);
