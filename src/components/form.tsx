'use client'

import { createPost } from '@/actions/actions'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Form() {

const router = useRouter();

  async function clientAction(formData: FormData) {

    const result = await createPost(formData)
    if (result?.error){
      alert(result.error)
      toast.error(result.error)
    }
    toast.success('Your post has been succesfully created.')
    router.push('/posts');
  }

  return (
    <form action={clientAction} className="flex flex-col max-w-[400px] mx-auto gap-2 my-10">
    <input 
    type="text" 
    name='title'
    className="border rounded px-3 h-10"
    placeholder="Post title" required
    />
    <textarea 
    name="body" 
    className="border rounded px-3 py-2"
    placeholder='Post content' 
    rows={6}
    required
    />
    <button className="h-10 bg-orange-500 px-5 rounded text-white">
        Create
    </button>
</form>
  )
}
