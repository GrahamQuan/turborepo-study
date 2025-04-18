import InputForm from '../componnets/input-form';
import PostList from '../componnets/post-list';
import PinIcon from '@/icons/map-pin.svg';

export default function Home() {
  return (
    <main className='space-y-5 flex items-center flex-col'>
      <div className='flex items-center gap-2'>
        <PinIcon className='text-sky-500' />
        <h1 className='text-white font-bold'>Home</h1>
      </div>
      <InputForm />
      <PostList />
    </main>
  );
}
