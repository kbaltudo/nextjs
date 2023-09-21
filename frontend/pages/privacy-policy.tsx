import Head from 'next/head'
import { fetcher } from '../lib/provider/strapi/api'
import Layout from "../components/PageStructure/Container/Layout";
import Title from '../components/Elements/Title';
import Description from '../components/Elements/Description';
import Container from '../components/PageStructure/Container/Container';
const PrivacyPolicy = ({ privacypolicy , pagetemplate }) => {
 const data={
  Title : (privacypolicy && privacypolicy.Title) ? privacypolicy.Title :"",
  Description : (privacypolicy && privacypolicy.Description) ? privacypolicy.Description :"",
 }
  return (
    <Layout header={pagetemplate}>
      <Head>
        <title>{data.Title}</title>
      </Head>

      {/* Main Content */}
      <div className="mt-5 mb-5">
        <Container>
          <Title type="h1">{data.Title}</Title>
          <Description type={undefined}>{data.Description}</Description>
        </Container>
      </div>
    </Layout>
  );
};


export const getStaticProps = async () => { 
  const res = await fetcher(`privacy-policy?populate[0]=Title&populate[1]=slug&populate[2]=Description`);
  const pageTemplate = await fetcher(`page-templates/1?populate[0]=Header.Logo&populate[1]=Header.PrimaryNavigation.NavigationLinks`);
    return {
      props: {
        privacypolicy: res && res.data ? res.data.attributes : "",
        pagetemplate:pageTemplate && pageTemplate.data ? pageTemplate.data.attributes : ""
      },
    }
}

export default PrivacyPolicy;