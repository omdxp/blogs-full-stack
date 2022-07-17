export interface Comment {
  id: number;
  body: string;
  author: number;
  blog: number;
  createdAt: string;
  updatedAt: string;
}

export interface CommentApiResponse {
  id: number;
  body: string;
  author: number;
  blog: number;
  created_at: string;
  updated_at: string;
}
