import { createPost } from '../actions/post-action';
// import { Button } from '@workspace/ui/components/button-demo';
import { Button } from '@workspace/ui/components/button';

export default function InputForm() {
  return (
    <form action={createPost} className='items-center gap-2 flex'>
      <input
        type='text'
        id='title'
        placeholder='Title'
        name='title'
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
      />
      <input
        type='text'
        id='content'
        placeholder='Content'
        name='content'
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
      />
      {/* <Button type='submit'>Submit</Button> */}
      <Button type='submit' variant='destructive' className='font-bold'>
        Submit
      </Button>
      {/* <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'
      >
        Submit
      </button> */}
    </form>
  );
}
