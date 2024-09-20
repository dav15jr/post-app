import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Form from '../../components/form';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Create Post",
};

export default async function Page() {

  return (
    <main className='pt-16 text-center'>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
          <Form />
        <LogoutLink className="px-5 text-red-600 hover:bg-white hover:font-bold">Log out</LogoutLink>
    </main>
  )
}
