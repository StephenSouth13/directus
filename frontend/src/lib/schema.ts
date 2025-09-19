export interface Post {
  id: string;
  title: string | null;
  content: string | null;
}

export interface Schema {
  post: Post;
}
