type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

// Make the page render dynamically
export const dynamic = 'force-dynamic';

export default async function PostList() {
  let posts: Post[] = [];

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts', {
      next: {
        tags: ['posts'],
      },
      // Remove cache: no-store as we've marked the component as dynamic
      signal: AbortSignal.timeout(3000),
    });

    if (res.ok) {
      posts = await res.json();
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Provide fallback data for build
    posts = [
      {
        id: 1,
        title: 'Example Post',
        content: 'This is a placeholder post for build time.',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

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
