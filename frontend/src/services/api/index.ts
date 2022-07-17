import { apiBaseQuery } from "./base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: apiBaseQuery,
  tagTypes: ["Blogs"],
  endpoints: () => ({}),
});
