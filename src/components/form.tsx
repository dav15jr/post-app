import { createPost } from '@/actions/actions'


export default function Form() {
  return (
    <form action={createPost} className="flex flex-col max-w-[400px] mx-auto gap-2 my-10">
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
    <button className="h-10 bg-purple-500 px-5 rounded text-white">
        Submit
    </button>
</form>
  )
}
