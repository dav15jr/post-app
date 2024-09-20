import prisma from "@/lib/db";
import Link from "next/link";
import DeleteBTN from "./deleteBTN";

export default async function PostsList() {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const posts = await prisma.post.findMany();
  

  return (
    <ul className="mb-3 w-[200px] mx-auto">
        {posts.map((post) => (
            <li key={post.id} className="mb-3 flex justify-between">
                <Link href={`/posts/${post.id}`} className="truncate mr-2">{post.title}</Link>
                <DeleteBTN id={post.id} />
            </li>
        ))}
    </ul>
  )
}
