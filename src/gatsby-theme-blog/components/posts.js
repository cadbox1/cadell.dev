/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { Link } from "gatsby";
import { Styled, css } from "theme-ui";

import Layout from "gatsby-theme-blog/src/components/layout";
import SEO from "gatsby-theme-blog/src/components/seo";

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
	<Layout location={location} title={siteTitle}>
		<main sx={{ mt: 0 }}>
			{posts.map(({ node }) => {
				const title = node.title || node.slug;
				const keywords = node.keywords || [];
				return (
					<Fragment key={node.slug}>
						<SEO title="Home" keywords={keywords} />
						<div sx={{ mb: 6 }}>
							<Styled.h2
								css={css({
									mb: 1,
								})}
							>
								<Styled.a as={Link} sx={{ color: "text" }} to={node.slug}>
									{title}
								</Styled.a>
							</Styled.h2>
							<small>{node.date}</small>
							<Styled.p>{node.excerpt}</Styled.p>
						</div>
					</Fragment>
				);
			})}
		</main>
	</Layout>
);

export default Posts;
