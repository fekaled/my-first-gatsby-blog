import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {postItem} from './blog.module.css'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article className={postItem} key={node.id}>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
              <p>Postado em {node.frontmatter.date}</p>
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
      slug
    }
  }
}
`

export default BlogPage
