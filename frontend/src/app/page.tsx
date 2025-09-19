import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default async function Home() {
  const posts = await directus.request(
    readItems('post', { fields: ['id', 'title', 'content'] })
  );

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <ul>
        {posts?.map((p: { id: string; title: string | null; content: string | null }) => (
          <li key={p.id}>
            <h2 className="font-semibold">{p.title}</h2>
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
