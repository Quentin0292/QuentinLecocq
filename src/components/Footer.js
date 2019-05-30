import React from 'react'

// pour faire des requête GraphQL
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  // cette requête nous permet de récupere la valeur d'author dans notre siteMetadata
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="footer has-background-dark has-text-light has-text-centered">
      <small>
        <p>
          Handcrafted by {data.site.siteMetadata.author}. Copyright &copy; {currentYear}. <br />
        </p>
      </small>
    </footer>
  )
}

export default Footer
