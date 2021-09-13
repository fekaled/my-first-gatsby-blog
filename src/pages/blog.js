import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import {postItem} from './blog.module.css'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article className={postItem} key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p>Postado em {node.frontmatter.date}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "D MMM YYYY")
      }
      id
      body
    }
  }
}
`

export default BlogPage
