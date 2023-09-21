import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import { fetcher, strapiPageTemplate, strapiPartnerPage } from '../lib/provider/strapi/api'
import InnerBanner from '../components/Media/InnerBanner/InnerBanner'
import ContentTile from '../components/PageContent/ContentTile/ContentTile'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import Image from 'next/image'
import Container from '../components/PageStructure/Container/Container'
import ContactForm from '../components/Forms/ContactUs/ContactForm'
import ImageComponent from '../components/Media/Image/Image'
import Section from '../components/PageStructure/Container/Section'

const Partner = ({ pageResponse, pageTemplate }) => {
  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <InnerBanner content={pageResponse.banner} provider={undefined} />
      <ImageComponent content={pageResponse.image} />
      <CardBlock content={pageResponse.cards} />
      <CardBlock content={pageResponse.cards2} />
      <ContentTile content={pageResponse.contentTile} />
      <Section className="bg-light-grey">
        <Container>
          <ContactForm content={pageResponse.contactUs} />
        </Container>
      </Section>
    </Layout>
  )
}

export default Partner;

export async function getStaticProps() {
  const pageTemplate = [],
    pageResponse = [];
  return {
    props: {
      pageResponse,
      pageTemplate
    }
  }
}