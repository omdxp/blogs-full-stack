import { Blog } from "models";
import { EntityState } from "@reduxjs/toolkit";

export interface BlogsState {
  blogs: EntityState<Blog>;
}
