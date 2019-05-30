import React from 'react'

// Layout
import Layout from '../components/Layout'

import '../styles/index.scss'

import Head from '../components/Head'
import Hero from '../components/Hero'


const IndexPage = () => {
  return (
    <Layout className="has-background-warning" hideFooter>
      <Head title="Home" />
      <Hero className="has-text-centered max-width-tablet">
        <h1 className="title is-marginless">Hey there, I am Quentin Lecocq.</h1>
        <br/>
        I'am a front-end developer, living in beautiful Lille in France. Love working on web technologies like, Node.js, React and also Gatsby.js.
        <p>
          Need a developer ? Say hello via email at quentin.lecocq@yahoo.com />
        </p>
      </Hero>
    </Layout>
  )
}

export default IndexPage
