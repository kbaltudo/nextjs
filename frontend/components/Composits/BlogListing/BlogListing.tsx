import React from "react";
import Link from "next/link"
import Title from "../../Elements/Title"
import Styles from "./BlogListing.module.scss"
import DateTime from "../../Elements/DateTime";
import Section from "../../PageStructure/Container/Section";
import TitleDescription from "../../Molecule/TitleDescription/TitleDescription";
import Image from "next/image";

const BlogListing = ({ content }) => {
  const blog = content ? content : "";

  return (
    <Section className={Styles.blogListing + " ps-md-3 pt-3 pb-3"}>
      <TitleDescription title={blog.title} description={blog.description} />
      <div className="blogd-wrap">
        {content?.data ? content.data.map((blog: { image: { url: string; width: any, height: any, alt: any }; slug: string; title: any; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; excerpt: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; date: any; }, index: React.Key) => (
          <div key={index} className={Styles.categoryv1 + "blog-wrap"}>
            <div className={Styles.article + " row pt-3 pb-3 me-md-2 shadow mb-4 bg-body rounded"}>
              <div className="col-md-4 pe-2">
                <Image src={blog.image.url} width={blog.image.width} height={blog.image.height} alt={blog.image.alt} className="img-fluid rounded-start h-100 w-100" />
              </div>
              <div className="col-md-8 ps-2">
                <div className="card-body">
                  <Link href={"blogs/" + blog.slug}>
                    <a className="text-decoration-none">
                      <Title replaceclass className="mt-2 mb-3 card-title text-dark text-capitalize" type="h5">{blog.title}</Title>
                      <div className="mt-2 mb-3 card-description text-dark pe-4 " >{blog.description}</div>
                    </a>
                  </Link>
                  <p className="card-text">{blog.excerpt}</p>
                  <p className="card-text"><small className="text-muted"> Posted On: <DateTime date={blog.date} /> </small></p>
                </div>
              </div>
            </div>
          </div>
        )) : ""}
      </div>
    </Section>
  )
}

export default BlogListing;