import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import { headerBackgroundColor, centered } from '../utils/styles'
import StickyHeader from '../components/StickyHeader'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Fragment>
        <StickyHeader>
          <header
            style={{
              ...headerBackgroundColor,
              padding: `${rhythm(3.5)} 0 ${rhythm(3)}`,
            }}
          >
            <div style={{ ...centered }}>
              <h1
                style={{ ...scale(2), marginTop: 0, marginBottom: rhythm(1) }}
              >
                {siteTitle}
              </h1>
              <p style={{ marginBottom: '0' }}>
                Written by <strong>Cadell Christo</strong>.
              </p>
            </div>
          </header>
        </StickyHeader>
        <div
          style={{ position: 'relative', zIndex: 1, backgroundColor: 'white' }}
        >
          <div
            style={{
              ...centered,
              paddingTop: `${rhythm(0.5)}`,
              paddingBottom: `${rhythm(3)}`,
            }}
          >
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
          </div>
        </div>
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
