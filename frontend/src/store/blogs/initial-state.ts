import { BlogsState } from "./types";
import { blogsAdapter } from "./adapters/blogs";

export const initialState: BlogsState = {
  blogs: blogsAdapter.getInitialState(),
};
