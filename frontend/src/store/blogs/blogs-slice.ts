import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./extra-reducers";
import { initialState } from "./initial-state";

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers,
});

export const blogsActions = blogsSlice.actions;
