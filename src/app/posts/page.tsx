import type { Metadata } from "next";
import PostsList from '../../components/posts-list';
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "My Posts",
};

export default async function page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <Suspense fallback="Loading Now....">
        <PostsList />
      </Suspense>
    </main>
  )
}
