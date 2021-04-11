
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ( { node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'Mdx'){
        createNodeField({
            node, name: 'slug', value: createFilePath({node, getNode })
        })
    }
}

exports.createPages = async ( { actions, graphql }) => {
    const { createPage } = actions
    const { data: { allMdx } } = await graphql(`
    {
        allMdx {
            nodes {
                id
                frontmatter {
                    title
                }
                fields {
                    slug
                }
            }
        }
    }
    `)

    const template = require.resolve('./src/templates/post-template.js')
    allMdx.nodes.forEach(node=>{
        createPage({
            path: node.fields.slug,
            component: require.resolve(template),
            context: {
                slug: node.fields.slug
            }
        })
    })
}
