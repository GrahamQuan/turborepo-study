'use server';
import { revalidateTag } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    revalidateTag('posts');
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
