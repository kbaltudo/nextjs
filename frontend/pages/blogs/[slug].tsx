import React from "react";
import Head from "next/head";
import Link from "next/link"

import Container from "../../components/PageStructure/Container/Container";
import Layout from "../../components/PageStructure/Container/Layout";
import { fetcher } from "../../lib/provider/strapi/api";
import Title from "../../components/Elements/Title";
import DateTime from "../../components/Elements/DateTime";
import Description from "../../components/Elements/Description";

function BlogDetails(props) {
  const { pagetemplate, article, params } = props;

  return (
    <Layout header={pagetemplate}>
      <Head>
        <title>{article.Title}</title>
      </Head>
      <Container>
        <div className="row py-4">
            <div className="col-md-8 mx-auto offset-md-4 article-details">
                <div className="article-header ">
                    {/* <Image src={article.Image.data} size='large' /> */}
                    {/* <img src={article.Image.data} /> */}
                    <Title type={undefined}>{article.Title}</Title>
                </div>
                <div className="article-meta d-md-flex py-3">
                    <span className="meta-data"> Posted By: <span className="meta-value"> {}</span></span>
                    <span className="meta-data px-2"> 
                        Posted On:  
                        <span className="meta-value">  
                            <DateTime date={ article.Date } />
                        </span>
                    </span>                    
                </div>
                <div className="article-content">
                    <Description type={undefined}> {article.Description} </Description>
                </div>
                <div className="article-footer">
                    <Link href='/blogs' >
                        <a className="my-4 btn btn-primary">
                            Back to Blogs
                        </a>
                    </Link>
                </div>
            </div>
        </div>
      </Container>
    </Layout>
  );
}

export default BlogDetails;

export async function getServerSideProps({params}) {
    const { slug } = params;
    // const articledata = await fetcher(`articles/?populate[0]=Author&populate[1]=Image&filters[Slug][$eq]=${slug}`);
    const article = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles/?populate[0]=Author&populate[1]=Image&filters[Slug][$eq]=${slug}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
    });  
    const {data} = await article.json();
    const pageTemplate = await fetcher(
              `page-templates/1?populate[0]=Header.Logo&populate[1]=Header.PrimaryNavigation.NavigationLinks`
            );
    // 404 if we does not found the data in API response
    if( ! data.length ){
        return {
            notFound: true
        };
    }

    return {
        props: {
            article: data[0].attributes,
            pagetemplate: pageTemplate.data.attributes
        }
    }
}

