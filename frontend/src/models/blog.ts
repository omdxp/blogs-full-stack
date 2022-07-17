export interface Blog {
  id: number;
  title: string;
  body: string;
  author: number;
  comments: number[];
  createdAt: string;
  updatedAt: string;
}

export interface BlogApiResponse {
  id: number;
  title: string;
  body: string;
  author: number;
  comments: number[];
  created_at: string;
  updated_at: string;
}
