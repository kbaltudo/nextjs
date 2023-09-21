import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import { strapiPageTemplate, strapiCareerPage } from '../lib/provider/strapi/api'
import InnerBanner from '../components/Media/InnerBanner/InnerBanner'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import RichText from '../components/PageContent/RichText/RichText'

const Careers = ({ pageTemplate, pageResponse }) => {
  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <>
        <InnerBanner content={pageResponse.banner} provider={'strapi'} alignment={'text-center'} />
        <RichText content={pageResponse.description} />
        <CardBlock content={pageResponse.cardBlock} provider={'strapi'} />
        <CardBlock content={pageResponse.cardBlock2} provider={'strapi'} />
      </>
    </Layout>
  )
}

export default Careers;

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