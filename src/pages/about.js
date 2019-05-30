import React from 'react'

// Layout
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Head from '../components/Head'
import Link from '../components/Link'


// localhost:8000/about
const About = () => (
    <Layout>
      <Head title="About" />
      <Hero className="max-width-tablet">
        <h1 className="title">
          My name is Quentin Lecocq. I am a front-end developer love work with JavaScript.
        </h1>
        <br />
        <p>
          Born, raised, and living in Lens, France. Je travaille actuellement en tant que developpeur web freelance, et je saurais vous
          accompagnez dans vos différents projets web; e-commerce, landing page, site vitrine, etc...
          Après avoir été diplomé d'une licence de Marketing à l'{' '}
          <Link href="https://www.icd-ecoles.com/">
            ICD Internationnal Business School
          </Link>
          . J'ai été diplomé d'un titre de niveau III Développeur web et application mobile à {''}
          <Link href="http://popschool.eu.com">
            PopSchool Lens
          </Link>
          . Combinant des compétences techniques concernant le web aux compétences marketing je suis en mesure de mettre en place des solutions
          répondant à vos attentes dans l'objectif de développer votre commerce ou tout autre projet qui sommeil au fond de vous !
        </p>
        <br />
        <p>
          Outside the programming-verse, I hang around on Twitter, or coffe shops and co-working space in real life.
          I play football since a lof of time, je suis aussi supporter du Racing Club de Lens. Je sais ce que vous vous dites.
        </p>
        <br />
        <p>
          Have something to work on? Or just saying hello? Do sen an email to quentin.lecocq@yahoo.com
        </p>
      </Hero>
    </Layout>
)

export default About
