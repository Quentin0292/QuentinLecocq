import React from 'react'

// Layout
import Layout from '../components/Layout'

import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'

import Head from '../components/Head'
import Hero from '../components/Hero'


// comme dans le dossier src/pages le component blog sera accessible à l'adresse localhost:8000/blog
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <Head title="Blog" />
      <Hero className="has-text-centered max-width-tablet">
        <ol className={blogStyles.posts}>
        <h1 className="title is-marginless">All Projects</h1>
          {data.allMarkdownRemark.edges.map((edge, key) => {
            return (
              <li key={key} className={blogStyles.post} >
              {/* Après avoir récuperer le slug on l'ajoute ici à Link pour créer un lien entre notre article et la page templates/blog */}
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Hero>
    </Layout>
  )
}

export default BlogPage
