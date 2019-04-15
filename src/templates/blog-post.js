import React, {Fragment} from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Fragment>
        <header
      style={{
        backgroundColor: 'hsl(40, 100%, 60%)',
        padding: `${rhythm(1)} 0 ${rhythm(1.5)}`,
      }}
    >
      <Layout>
        {siteTitle && (
          <p>
            <Link to={`/`}>{'← ' + siteTitle}</Link>
          </p>
        )}
        <h1 style={{ ...scale(2), marginBottom: rhythm(1) }}>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
      </Layout>
    </header>
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
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
      </Layout>
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
