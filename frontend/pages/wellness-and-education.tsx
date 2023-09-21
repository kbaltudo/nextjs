import Head from 'next/head'
import React from 'react'
import Layout from '../components/PageStructure/Container/Layout'
import InnerBanner from '../components/Media/InnerBanner/InnerBanner'
import { strapiPageTemplate, strapiEducationPage } from '../lib/provider/strapi/api'
import Assets from '../components/Composits/Assets/Assets'


const WellnessAndEducation = ({ pageResponse , pageTemplate }) => {

  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <InnerBanner content={pageResponse.banner} provider="contentful" />
      <Assets content={pageResponse.infographics} />
    </Layout>
  )
}

export default WellnessAndEducation;

export async function getStaticProps() {
  const pageTemplate = [],
  pageResponse = [];
  return {
    props: {
      pageTemplate,
      pageResponse
    }
  }
}