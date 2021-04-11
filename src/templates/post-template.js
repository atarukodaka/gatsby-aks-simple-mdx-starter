import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
    query($slug: String!) {
        mdx ( fields: { slug: { eq: $slug }}) {
            id
            frontmatter {
                title
            }
            fields {
                slug
            }
            body
        }
    }
`

const PostTemplate = ( {data} ) => {
    const node = data.mdx

    return (
        <div>
            <h1>{node.frontmatter.title}</h1>
            <div>
                <MDXRenderer>
                    {node.body}    
                </MDXRenderer>
            </div>
        </div>
    )
}

export default PostTemplate