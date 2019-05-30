const path = require('path')

// ------------------------------
// WE DON'T NEED THIS PART IF USE CONTENTFUL POST
// ------------------------------


// This part is for create the slug of each post if the files is markdown files
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.

    // In this case, we create slug ONLY if node.internal.type is "MarkdownRemark"
    // and we remove each extension .md

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// ------------------------------
// ------------------------------


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}

//     // Create blog post pages dynamically
//     res.data.allContentfulBlogPost.edges.forEach((edge) => {
//         createPage({
//             // Template of each blog pages
//             component: blogTemplate,
//             // Path for this page required
//             path: `/blog/${edge.node.slug}`,
//             context: {
//                 // Add optional context data to be inserted
//                 // as props into the page component..
//                 slug: edge.node.slug
//             }
//         })
//     })
