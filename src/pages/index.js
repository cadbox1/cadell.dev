import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
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
              padding: "6rem 0 4rem",
            }}
          >
            <div style={{ ...centered }}>
              <h1
                style={{ marginBottom: "1.5rem" }}
              >
                {siteTitle}
              </h1>
              <span>
                Written by <strong>Cadell Christo</strong>.
              </span>
            </div>
          </header>
        </StickyHeader>
        <div
          style={{ position: 'relative', zIndex: 1, backgroundColor: 'white' }}
        >
          <div
            style={{
              ...centered,
              paddingTop: "1rem",
              paddingBottom: "2rem",
            }}
          >
            <SEO title="All posts" />
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: 0,
                    }}
                  >
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small style={{display: "block"}}>{node.frontmatter.date}</small>
                  <p style={{marginTop: "0.25rem"}} dangerouslySetInnerHTML={{ __html: node.frontmatter.description }} />
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
            description
          }
        }
      }
    }
  }
`
