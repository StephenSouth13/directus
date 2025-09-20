import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';
import type { Post } from '@/lib/directus';

export default async function Home() {
  // ✅ Truyền đúng 3 generic vào readItems
  const posts = (await directus.request(
  readItems('post', { fields: ['id', 'title', 'content'] })
)) as Post[];



  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <ul>
        {posts?.map((p) => (
          <li key={p.id}>
            <h2 className="font-semibold">{p.title}</h2>
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
