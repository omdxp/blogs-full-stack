import { Blog } from "models";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const blogsAdapter = createEntityAdapter<Blog>({
  sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt),
});
