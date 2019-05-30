module.exports = {
  siteMetadata: {
    title: 'Quentin Lecocq',
    author: 'Quentin Lecocq'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // configuration du plugin sourceFilesystem qui va transformer un document markdown en page html
      resolve: 'gatsby-source-filesystem',
      options: {
        // le dossier où se trouve les posts
        name: 'src',
        // path to directory to src
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
