import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { BlogsState } from "./types";
import { getBlogs } from "./reducers/get-blogs";

export const extraReducers = (builder: ActionReducerMapBuilder<BlogsState>) => {
  builder.addMatcher(getBlogs.matcher, getBlogs.reducer);
};
