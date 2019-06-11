import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'


const Service = () => {
  return (
    <Layout>
      <Hero className="has-text-centered max-width-tablet">
        <h1 className="title" style={{
          letterSpacing: '-2.2pt',
        }}>Mes Services</h1>
        <br/>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Gestion de projet web</p>
              <div className="content">
                <p>Site vitrine, e-commerce, application mobile, landing page</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Intégration web</p>
              <div className="content">
                <p>Intégration HTML/CSS respectueuse des standards du web.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Développement spécifique</p>
              <div className="content">
                <p>Des outils adaptés à votre coeur de métier.</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Référencement naturel</p>
              <div className="content">
                <p>Affichage sémantique des informations, des pages propre pour un référencement optimal.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Dynamisme des pages</p>
              <div className="content">
                <p>Des animations de contenu non intrusives pour embellir votre projet.</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Interfaces d'administration'</p>
              <div className="content">
                <p>Outil spécifique au bon fonctionement de votre entreprise.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Responsive Design</p>
              <div className="content">
                <p>Compatible tous support, tablette et mobile.</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title is-4">Conception graphique et webdesign</p>
              <div className="content">
                <p>Offre complète de logo, templates web, plaquettes pub, carte de visite ...</p>
              </div>
            </article>
          </div>
        </div>
      </Hero>
    </Layout>
  )
}

export default Service
