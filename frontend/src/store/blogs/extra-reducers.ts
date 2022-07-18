import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { BlogsState } from "./types";
import { getBlogs } from "./reducers/get-blogs";
import { getBlogsByAuthorId } from "./reducers/get-blogs-by-author-id";

export const extraReducers = (builder: ActionReducerMapBuilder<BlogsState>) => {
  builder.addMatcher(getBlogs.matcher, getBlogs.reducer);
  builder.addMatcher(getBlogsByAuthorId.matcher, getBlogsByAuthorId.reducer);
};
