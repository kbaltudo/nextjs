import Head from 'next/head';
import Layout from '../components/PageStructure/Container/Layout';
import Container from '../components/PageStructure/Container/Container';
import { strapiPageTemplate, strapiContactUsPage } from '../lib/provider/strapi/api';
import React from 'react';
import TitleDescription from '../components/Molecule/TitleDescription/TitleDescription';
import Section from '../components/PageStructure/Container/Section';
import ContactForm from '../components/Forms/ContactUs/ContactForm';



const Contact = ({ pageTemplate, pageResponse }) => {
    return (
        <Layout header={pageTemplate}>
            <Head>
                <title>{pageResponse.title}</title>
            </Head>
            <>
                <Section className="">
                    <TitleDescription title={pageResponse.title} description={pageResponse.description} />
                </Section>
                <ContactForm content={pageResponse.contactUs} />
            </>
        </Layout>
    )
}

export default Contact;

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