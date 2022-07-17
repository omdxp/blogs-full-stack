import { Blog } from "models";
import { BlogsState } from "../types";
import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { blogsAdapter } from "../adapters/blogs";
import { blogsApi } from "../endpoints";
import { initialState } from "../initial-state";

const getBlogsMatcher = blogsApi.endpoints.getBlogs.matchFulfilled;

const getBlogsReducer = (
  state: WritableDraft<BlogsState>,
  { payload }: PayloadAction<Blog[]>
) => {
  blogsAdapter.setAll(initialState.blogs, payload);
};

export const getBlogs = {
  matcher: getBlogsMatcher,
  reducer: getBlogsReducer,
};
