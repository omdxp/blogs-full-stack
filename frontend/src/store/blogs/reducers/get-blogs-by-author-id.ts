import { Blog } from "models";
import { BlogsState } from "../types";
import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { blogsAdapter } from "../adapters/blogs";
import { blogsApi } from "../endpoints";
import { initialState } from "../initial-state";

const getBlogsByAuthorIdMatcher =
  blogsApi.endpoints.getBlogsByAuthorId.matchFulfilled;

const getBlogsByAuthorIdReducer = (
  state: WritableDraft<BlogsState>,
  { payload }: PayloadAction<Blog[]>
) => {
  blogsAdapter.setAll(initialState.blogs, payload);
};

export const getBlogsByAuthorId = {
  matcher: getBlogsByAuthorIdMatcher,
  reducer: getBlogsByAuthorIdReducer,
};
