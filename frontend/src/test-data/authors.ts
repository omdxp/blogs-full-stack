import { Author } from "models";

export const testAuthors: Author[] = [
  {
    id: 1,
    name: "John Doe",
    blogs: [1, 2],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Jane Doe",
    blogs: [3, 4],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
