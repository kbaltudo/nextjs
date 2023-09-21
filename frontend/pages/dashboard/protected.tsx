import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Container from '../../components/PageStructure/Container/Container';

export default function Protected() {
  return (
    <Container>
      <Head>
        <title>Strapi - Next - Protected Page</title>
      </Head>
      <h1>Protected Page</h1>
      <Link href="/">
        <button>Back to home page</button>
      </Link>
      </Container>
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