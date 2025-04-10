import InputForm from '../componnets/input-form';
import PostList from '../componnets/post-list';
export default function Home() {
  return (
    <main className='space-y-3 flex items-center flex-col'>
      <InputForm />
      <PostList />
    </main>
  );
}
