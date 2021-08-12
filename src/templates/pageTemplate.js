import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import "../pages/styles.scss"
import "./template.scss"

import { Navbar, Footer } from "../components"

const Template = ({ data: {
    markdownRemark: {
        frontmatter,
        html
    }
} }) => (
    <>  
        <Helmet defaultTitle="PCV Ideathon" titleTemplate="%s | PCV Ideathon" defer={false}>
          <title>{frontmatter.title}</title>
          <meta charSet="utf-8" />
          <link rel="canonical" href={"https://www.ideathon.pennclimateventures.org/"+frontmatter.slug} />
          <meta name="description" content={frontmatter.description}/>
      </Helmet>
        <Navbar />
        <div className="container">
            <div
                id="markdown"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
      <Footer />
    </>
 )

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`