import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Fragment>
        <header
          style={{
            backgroundColor: 'hsl(40, 100%, 60%)',
            padding: `${rhythm(3)} 0 ${rhythm(1.5)}`,
          }}
        >
          <Layout>
            <h1 style={{ ...scale(2), marginBottom: rhythm(1) }}>
              {siteTitle}
            </h1>
            <p>
              Written by <strong>Cadell Christo</strong>.
            </p>
          </Layout>
        </header>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </Layout>
      </Fragment>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
