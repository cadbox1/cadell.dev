import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import SEO from '../components/seo'
import StickyHeader from '../components/StickyHeader'
import { centered, headerBackgroundColor } from '../utils/styles'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Fragment>
        <StickyHeader>
              <header
                style={{
                  ...headerBackgroundColor,
                  padding: "2.5rem 0 4rem",
                }}
              >
                <div style={{ ...centered }}>
                  {siteTitle && (
                    <p style={{ marginBottom: "2rem" }}>
                      <Link to={`/`}>{'← ' + siteTitle}</Link>
                    </p>
                  )}
                  <h1 style={{ marginBottom: "1.5rem" }}>
                    {post.frontmatter.title}
                  </h1>
                  <span>{post.frontmatter.date}</span>
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
            <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
            <MDXRenderer>{post.code.body}</MDXRenderer>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
