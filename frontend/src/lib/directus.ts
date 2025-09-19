import { createDirectus, rest } from '@directus/sdk';

export interface Post {
  id: string;
  title: string | null;
  content: string | null;
}

export interface Schema {
  post: Post;
}

const URL = 'http://localhost:8056';

// Client chỉ cần rest(), không có items() ở đây
export const directus = createDirectus<Schema>(URL).with(rest());
