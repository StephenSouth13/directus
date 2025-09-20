import { createDirectus,rest } from "@directus/sdk";

export interface Post {
  id: string;
  title: string | null;
  content: string | null;
}

//Schema: Mỗi collection trong Directus sẽ được biểu diễn như một mảng các đối tượng trong giao diện Schema.
export interface Schema {
  post: Post[];
}
const URL = "http://localhost:8056"; // Địa chỉ URL của Directus CMS