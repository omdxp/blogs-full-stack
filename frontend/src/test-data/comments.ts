import { Comment } from "models";

export const testComments: Comment[] = [
  {
    id: 1,
    body: "Comment 1",
    author: 1,
    blog: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    body: "Comment 2",
    author: 1,
    blog: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
