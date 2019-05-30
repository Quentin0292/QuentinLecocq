import React from 'react'

// Layout
import Layout from '../components/Layout'

import Head from '../components/Head'
import Hero from '../components/Hero'
import Form from '../components/Form'

// localhost:8000/contact
const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <Hero className="has-text-centered max-width-tablet">
        {/* <h1 className="title is-marginless">Contact</h1>
        <p>The best way to reach me is via <a href="https://twitter.com/QuentinLecocq1" target="_blank" rel="noopener noreferrer">@QuentinLecocq1</a> on twitter</p> */}
        <Form />
      </Hero>
    </Layout>
  )
}

export default Contact
