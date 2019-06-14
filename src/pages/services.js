import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faBatteryFull, faBorderAll, faBoxOpen, faBrush, faCampground, faChalkboardTeacher, faDiceD20 } from '@fortawesome/free-solid-svg-icons'


const Service = () => {
  return (
    <Layout>
      <Hero className="has-text-centered">
        <h1 className="title" style={{
          letterSpacing: '-2.2pt',
        }}>Mes Services</h1>
        <br/>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faCoffee} size="xs" /> Gestion de projet web</p>
              <p className="subtitle is-6">Site vitrine, e-commerce, application mobile, landing page.</p>
            </article>
          </div>

          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faBrush} size="xs" /> Intégration web</p>
              <p className="subtitle is-6">Intégration HTML/CSS respectueuse des standards du web.</p>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faCampground} size="xs" /> Développement spécifique</p>
              <p className="subtitle is-6">Des outils adaptés à votre coeur de métier.</p>
            </article>
          </div>
        </div>




        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <h1 className="title is-4 is-spaced"><FontAwesomeIcon icon={faDiceD20} size="xs" /> Conception graphique</h1>
              <p className="subtitle is-6">Logo, templates web, plaquettes pub, carte de visite...</p>
            </article>
          </div>

          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faBatteryFull} size="xs" /> Dynamisme des pages</p>
              <p className="subtitle is-6">Des animations de contenu non instrusives pour embellir votre projet.</p>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faChalkboardTeacher} size="xs" /> Interfaces d'administration</p>
              <p className="subtitle is-6">Outil spécifique au bon fonctionnement de votre entreprise.</p>
            </article>
          </div>
        </div>




        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faSearch} size="xs" /> Référencement naturel</p>
              <p className="subtitle is-6">Affichage sémantique des informations, des pages propres pour un référencement optimal.</p>
            </article>
          </div>

          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faBorderAll} size="xs" /> Responsive Design</p>
              <p className="subtitle is-6">Compatible tous support, tablette et mobile.</p>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <p className="title is-4 is-spaced"><FontAwesomeIcon icon={faBoxOpen} size="xs" /> Foo Bar Baz</p>
              <p className="subtitle is-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, optio facere tenetur.</p>
            </article>
          </div>
        </div>
        
        
      </Hero>
    </Layout>
  )
}

export default Service
