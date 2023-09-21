// pages/404.js
import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";
import Style from "../styles/404.module.css"
import Title from "../components/Elements/Title";
import { fetcher } from '../lib/provider/strapi/api';
import Slug from '../components/Elements/Slug';

const Custom404 = ({ pagetemplate }) => {
  return (
    <Layout header={pagetemplate}>
      <Head>
        <title>404 - Page Not found.</title>
      </Head>
      <Container>
        <div className="row d-flex justify-content-center pt-5 text-center">
          <div className={" col-md-6 " + Style.pageheight}>
            <Title className={Style.heading} type={undefined}> 404 </Title>
            <p>Sorry&#39; we can&apos;t find the page you&apos;re looking for. 😞  </p>
            <Slug className="btn btn-primary" href="/" type={undefined}>
              Go back Home
            </Slug>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Custom404;

export async function getStaticProps() {
  const responsePage404 = await fetcher(`page-404?populate[0]=Title&populate[1]=Description&populate[2]=slug`);
  const pageTemplate = await fetcher(`page-templates/1?populate[0]=Header.Logo&populate[1]=Header.PrimaryNavigation.NavigationLinks`);
  return {
    props: {
      pagetemplate:pageTemplate.data.attributes
    }
  }
}