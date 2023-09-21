import Head from 'next/head'
import React from 'react'
import Layout from '../components/PageStructure/Container/Layout'
import Teams from '../components/Composits/Teams/Teams'
import InnerBanner from '../components/Media/InnerBanner/InnerBanner'
import TwoColumnTile from '../components/PageContent/TwoColumnTile/TwoColumnTile'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import { homeRouter } from '../lib/provider/mapper'
// import { aboutRouter } from '../lib/provider/mapper'

const About = ({ pageResponse, pageTemplate}) => {
  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <InnerBanner content={pageResponse.banner} provider={'strapi'} alignment={'text-right'} />
      <TwoColumnTile content={pageResponse.twoColumnCallout} />
      <CardBlock content={pageResponse.coreValues} variant={'2'} provider={'strapi'} />
      {/* <Teams content={pageResponse.teamMembers} /> */}
    </Layout>
  )
}

export default About;


export async function getStaticProps() {
  const pageResponse = (await homeRouter()) ?? [];
  return {
    props: {
      pageTemplate : pageResponse.pagetemplate,
      pageResponse : pageResponse.data,
      provider: pageResponse.provider
    }
  }
}