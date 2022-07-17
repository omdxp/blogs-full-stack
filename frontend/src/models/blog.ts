export interface Blog {
  id: number;
  title: string;
  body: string;
  author: number;
  comments: number[];
  createdAt: string;
  updatedAt: string;
}
