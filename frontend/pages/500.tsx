// pages/500.js
import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";
import { fetcher } from '../lib/provider/strapi/api'


const Custom500 = ({pagetemplate}) => {
  return (
    <Layout  header={pagetemplate}>
      <Head>
        <title>500 - Server-side error occurred</title>
      </Head>
      <Container>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-6">
            <h1>500 - Server-side error occurred</h1>
            <Link href="/">
              <a>Go back Home</a>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Custom500;
 
export async function getStaticProps() {
  const responseServerSideError = await fetcher(`page-500?populate[0]=Title&populate[1]=Description&populate[2]=Slug`);
  const pageTemplate = await fetcher(`page-templates/1?populate[0]=Header.Logo&populate[1]=Header.PrimaryNavigation.NavigationLinks`);
  return {
    props: {
      pagetemplate:pageTemplate && pageTemplate.data ? pageTemplate.data.attributes : ""
    }
  }
}