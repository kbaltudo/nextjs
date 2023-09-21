import { getSession } from 'next-auth/react';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Title from '../../components/Elements/Title';
import Container from '../../components/PageStructure/Container/Container';
import Layout from '../../components/PageStructure/Container/Layout';
import Slug from '../../components/Elements/Slug';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session == null) return;  
  }, [session]);
  return (
    <Layout header={undefined}>
      <Head> <title> Dashboard </title> </Head>
      <Container>
        <Title type={undefined}>{session ? 'User Profile Data' : 'Not Authenticated'}</Title>
        {session && (
          <div style={{ marginBottom: 10 }}>
            <h3>User Profile Data</h3>
            <div>Welcome {session.user.email}</div>
            <div>Email: {session.user.email}</div>
          </div>
        )}
        {session ? (
          <Slug type="button" onClick={signOut}>
            <FontAwesomeIcon icon={faRightFromBracket} /> 
            <span className='px-2'>Sign out</span>
          </Slug>          
        ) : (
          <Link href="/auth/sign-in">
            <a href=''>
              Sign In</a>
          </Link>
        )}
        <Link href="/dashboard/protected">
          <a
            style={{
              marginTop: 10,
            }}
          >
            Protected Page
          </a>
        </Link>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // Check if session exists or not, if not, redirect
  if (session == null) {
    return {
      redirect: {
        destination: '/auth/not-authenticated',
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
};