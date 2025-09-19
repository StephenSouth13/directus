import { directus } from '@/lib/directus';

export default async function Home() {
  const posts = await directus.items('post').readByQuery({ fields: ['id', 'title', 'content'] });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <ul>
        {posts.data?.map((p: any) => (
          <li key={p.id} className="mb-3">
            <h2 className="text-xl">{p.title}</h2>
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
