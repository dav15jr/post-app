import DeleteBTN from '@/components/deleteBTN';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params : { id: string}}) {
    const post = await prisma.post.findUnique({
      where: { 
        id: parseInt(params.id),
    }
});
    if (!post) {
      notFound();
    }

    
  return (
    <main className='px-7 pt-24 text-center'>
        <h1 className='text-5xl font-semibold mb-7'>{post.title}</h1>
        <p className='max-w-[700px] mx-auto mb-4'>{post.body}</p>
        <DeleteBTN id={post.id}  />
    </main>
  )
}
