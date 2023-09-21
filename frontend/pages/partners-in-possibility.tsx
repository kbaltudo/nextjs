import Head from 'next/head'
import React from 'react'
import Layout from '../components/PageStructure/Container/Layout'
import InnerBanner from '../components/Media/InnerBanner/InnerBanner'
import { strapiPageTemplate, strapiPartnerPossibilityPage , strapiWebinars } from '../lib/provider/strapi/api'
import Assets from '../components/Composits/Assets/Assets'
import VideoListing from '../components/Composits/Webinar/Webinar'


const Partners = ({ pageResponse , pageTemplate, webinarsResponse }) => {
  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <InnerBanner content={pageResponse.banner} provider="contentful" />
      <VideoListing content={webinarsResponse}/>
    </Layout>
  )
}

export default Partners;

export async function getStaticProps() {
  const pageTemplate = [],
  pageResponse = [],
  webinarsResponse = [];
  return {
    props: {
      pageTemplate,
      pageResponse,
      webinarsResponse
    }
  }
}