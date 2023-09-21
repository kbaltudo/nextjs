import Head from "next/head";
import BlogListing from "../../components/Composits/BlogListing/BlogListing";
import TitleDescription from "../../components/Molecule/TitleDescription/TitleDescription";
import Container from "../../components/PageStructure/Container/Container";
import Layout from "../../components/PageStructure/Container/Layout";
import CategoryListing from "../../components/Engagement/CategoryListing/CategoryListing"
import Section from "../../components/PageStructure/Container/Section"
import { strapiBlogListingPage } from '../../lib/provider/strapi/api'
import { strapiPageTemplate } from "../../lib/provider/strapi/api";


const NewsAndStories = ({ pageResponse, pageTemplate }) => {    
  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>      
      <Section className="mb-6">
        <Container>
          <TitleDescription title={pageResponse.title} description={pageResponse.description} />
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <BlogListing content={pageResponse.bloglisting.data} />
            </div>
            <div className="col-sm-12 col-md-3 border-start border-success border-5">
              <CategoryListing content={pageResponse.categorylisting} />
            </div>
          </div>
        </Container>
      </Section>
    </Layout >
  );
};

export async function getServerSideProps(context) {
  const pageTemplate = (await strapiPageTemplate()) ?? [],
  pageResponse = (await strapiBlogListingPage()) ?? [];
  return {
    props: {
      pageTemplate,
      pageResponse
    }
  }
}

export default NewsAndStories;
