import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import Container from '../components/PageStructure/Container/Container'
import ContentTile from '../components/PageContent/ContentTile/ContentTile'
import HomeBanner from '../components/Media/HomeBanner/HomeBanner'
import { homeRouter } from '../lib/provider/mapper'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import ContactForm from "../components/Forms/ContactUs/ContactForm";
import Section from '../components/PageStructure/Container/Section'
import Card from '../components/Composits/Cards/Card/Card'
import Banner from '../components/Media/Banner/Banner'

const Home = ({ pageTemplate, pageResponse, provider }) => {
  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <>
        <HomeBanner provider={provider} content={pageResponse.banner} content_over_image={false} />
        {/* <ContentTile provider={provider} content={pageResponse.contentTile} />
        <CardBlock content={pageResponse.cardBlock} provider={provider} variant={3} />
        <CardBlock content={pageResponse.cardBlock2} provider={provider} variant={2} />
        <ContactForm content={pageResponse.contactUs} />     
        <Banner content={pageResponse.banner[1]} provider={provider} contet_over_image={false} />   
        <Card content={pageResponse.cardBlock.cards.data[2]} provider={provider} variant={2} /> */}
      </>
    </Layout>
  )
}

export default Home;

export async function getStaticProps() {
  const pageResponse = (await homeRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}
