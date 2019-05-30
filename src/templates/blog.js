import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title}/>
        <div className="container max-width-tablet">
          <div>
            <h1 className="has-text-centered title is-marginless">{props.data.markdownRemark.frontmatter.title}</h1>
            <small>{props.data.markdownRemark.frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
          </div>
        </div>
    </Layout>
  )
}

export default Blog
