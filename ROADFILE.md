# Feuille de Route du Bootcamp Gatsby sur Youtube

## Pages Folder

src > pages

Very important folder for a Gatsby Site

Ce dossier ajoute les pages directement dans l'url de notre site en fonction de leur propre nom.

## Linking between pages with Gatsby

**Il faut importer { Link } from 'gatsby'**

`Need a developer ? <Link to="/contact">Contact me</Link>`

Link work only with internal links, if you need to make a link with an external source; you must use <a> attribut

Don't forget rel="noopener noreferrer" in the attribut href when use target="_blank"

## Creating Sharing Pages Component

- Header and Footer Component (see the code)

## Creating Gatsby Page Layouts

- Layout components

## Styling Gatsby Project

- using [Sass Plugin for Gatsby](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) and [there](https://sass-lang.com/) it's documentation

Installation de la version @4.9.0 de node-sass car je n'ai pas la derniere version de node installé.
Installation de gatsby-plugin-sass

&& création à la racine du projet du fichier gatsby-config.js pour configurer les plugins qu'on souhaite utiliser

## Styling Gatsby with CSS Modules

See header.module.css

import => className={NameImport.valueInCssModule}

## Gatsby Data with GraphQL

import { graphql, useStaticQuery } from 'gatsby'

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

## GraphQL playground

- creation files .env.development at the root of project

GATSBY_GRAPHQL_IDE=playground

- then this command in bash

npm install --save-dev env-cmd

- and add in the package.json env-cmd .env.development in the develop command

*before*
"develop": "gatsby develop",

*after*
"develop": "env-cmd .env.development gatsby develop",

- and it's done

## Sourcing content from the files system

[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=source-fil#gatsby-source-filesystem)

Configuration of plugin gatsby-source-filesystem

{
      // configuration du plugin sourceFilesystem qui va transformer un document markdown en page html
      resolve: 'gatsby-source-filesystem',
      options: {
        // le dossier où se trouve les posts
        name: 'src',
        // path to directory to src
        path: `${__dirname}/src/`
      }
}

## Working with markdown posts

[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=remark)

## Generating slugs for posts

*Take a look at gatsby-node.js*

Generate slug for post in this [article](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode)

Use the onCreateNode() method provide by Gatsby API

&&

Take a look at this part of [NodeJS's Documentation](https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_basename_path_ext)

"The path.basename() methods returns the last portion of a path"

## Dynamically generating pages

1. create templates folder and add blog.js files
2. Generate new pages for each posts, take a look at this [articles](https://www.gatsbyjs.org/docs/node-apis/#createPages)
  And this is the documentation of this [action](https://www.gatsbyjs.org/docs/actions/#createPage)


## Rendering post data in blog template

Take a look at src>templates>blog.js

## Adding images to posts

In md files => ![Grass](./grass.png)

`npm install gatsby-plugin-sharp@2.0.32 gatsby-remark-images`

[gatsby-plugin-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp)
[gatsby-remark-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images)
[gatsby-remark-relative-images](https://www.gatsbyjs.org/packages/gatsby-remark-relative-images/?=relative%20im)

## Getting Started with Contentful

Article sur Contenful de [supinfo](https://www.supinfo.com/articles/single/3784-contentful-cms-donnees)
[Site officiel](https://www.contentful.com)
[plugin Gatsby](https://www.gatsbyjs.org/packages/gatsby-source-contentful/?=content)

## Rendering Contentful Post

Utilisation de [momentJs](http://momentjs.com) à la section [display](http://momentjs.com/docs/#/displaying/) intégré directement à l'API Contentful

Il faut juste changer la requête GraphQL dans la page blog.js

## Dynamic Pages From Contentful

Il faut se rendre dans le dossier gatsby-node.js à la section contenu dynamique

1. We don't need this part anymore => delete this part

`module.exports.onCreateNode = ({ node, actions }) => {}`

Instead, only use createPages() and change the query, we want fetch slug only

2. Go to the blog templates > src/templates/blog

We need to change query first and modify h1 et p

3. For accessing content of the each blog post

We can add body { json } at our query graphQL for accessing content of blog post.
Install this [extension](https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer) for React renderer the Contentful rich text field type

## 404 pages and React Helmet

1. Create Not Found Page


2. Very popular [react library](https://github.com/nfl/react-helmet)
[Gatsby plugin react helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=helmet)

React Helmet = Manage header document

  1. install [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=react-helmet)
  2. instal [react-helmet](https://www.npmjs.com/package/react-helmet)

and in gatsby-config.js
  plugins: [
    'gatsby-plugin-react-helmet'
  ]

now we can import the react helmet component for setup title for my site
  create head.js in component folder
    take a look at this files
