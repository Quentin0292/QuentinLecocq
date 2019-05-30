import React from 'react'

// Components
import Header from './Header'
import Footer from './Footer'
import Head from './Head'

import PropTypes from 'prop-types'

import '../styles/index.scss'

import styled from 'styled-components'

// import layoutStyles from './layout.module.scss'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh
`

const Layout = ({ children, hideFooter, ...props }) => (
    <>
      <Head />
      <LayoutWrapper {...props}>
        <Header />
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </LayoutWrapper>
    </>
)

Layout.prototype = {
  children: PropTypes.node.isRequired
}



export default Layout
