import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import cns from '@sindresorhus/class-names'
import 'bulma/css/bulma.css'




const HeaderNav = () => {
  const [navState, setNavState] = useState(false)
  const toggleNavState = () => setNavState(!navState)

  const activeClass = { 'is-active': navState }
  const burgerClass = cns('navbar-burger', 'burger', activeClass)
  const navMenuClass = cns('navbar-menu', 'has-text-centered', activeClass)

  const routes = [
    { name: 'Home', route: '/' },
    { name: 'Projects', route: '/projects' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
  ]

  const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <nav className="navbar is-warning">
      <div className="navbar-brand">
        <div className="navbar-padding" />
          <Link to="/" className="navbar-item">
            <b>{data.site.siteMetadata.title}</b>
          </Link>
          <a
            href="#"
            role="button"
            className={burgerClass}
            onClick={toggleNavState}
            onKeyPress={toggleNavState}
            tabIndex={0}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
      </div>

      <div className={navMenuClass}>
        <div className="navbar-end">
          {routes.map(({ name, route }) => (
            <Link
              to={route}
              className="navbar-item"
              key={name}
              activeClassName="is-active"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="navbar-padding" />
    </nav>
  )
}

export default HeaderNav
