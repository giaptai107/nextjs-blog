import Head from 'next/head';
import Layout from '../components/header';
import Admin from './admin';
import Homepage from './homepage';
import User from './user';
import {
  useSession, signIn, signOut
} from 'next-auth/client'


// export default function Home() {
//   return (
//     <Layout>
//       <Homepage />
//       <Admin />
//       <User />
//     </Layout>
//   )
// }


export default function Component() {
  const [session, loading] = useSession()
  if (session) {
    return <>
    <Layout>
    Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
      <Homepage />
      <Admin />
      <User />
    </Layout>
      
    </>
  }
  return <>
      <Layout>
      <Homepage />
      <Admin />
      <User />
      Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
    </Layout>
    
  </>
}