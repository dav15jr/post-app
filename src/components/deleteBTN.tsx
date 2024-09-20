'use client'

import { deletePost } from '@/actions/actions'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function DeleteBTN({id}:{id: number}) {

const router = useRouter()

  async function delAction() {
    
  const result = await deletePost(id)

  if (result?.error){
    toast.error(result.error)
  } else {
    toast.success('Post succesfully Deleted.')
    router.push('/posts');
  }
}

  return (
    <button className=" bg-red-500 px-5 rounded text-white hover:bg-white hover:text-red-600 border hover:border-red-500" onClick={delAction}>Delete</button>
  )
}
