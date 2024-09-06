import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Form from '../../components/form';

export default async function Page() {


  return (
    <main className='pt-16 text-center'>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>

        <Form />
       <LogoutLink>Log out</LogoutLink>

    </main>
  )
}
