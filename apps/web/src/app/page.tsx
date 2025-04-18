import InputForm from '../componnets/input-form';
import PostList from '../componnets/post-list';

export default function Home() {
  return (
    <main className='space-y-5 flex items-center flex-col'>
      <h1 className='text-white font-bold'>Home</h1>
      <InputForm />
      <PostList />
    </main>
  );
}
