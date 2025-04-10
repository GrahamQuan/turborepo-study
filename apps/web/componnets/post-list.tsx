type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default async function PostList() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts', {
    next: {
      tags: ['posts'],
    },
  });
  const posts: Post[] = await res.json();

  return (
    <div className='flex flex-col items-center space-y-4'>
      {posts.map((post) => (
        <div key={post.id} className='p-4 bg-gray-200 rounded-lg shadow'>
          <h2 className='text-lg font-bold'>{post.title}</h2>
          <p className='text-sm text-gray-500'>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
