export interface Author {
  id: number;
  name: string;
  blogs: number[];
  createdAt: string;
  updatedAt: string;
}

export interface AuthorApiResponse {
  id: number;
  name: string;
  blogs: number[];
  created_at: string;
  updated_at: string;
}
