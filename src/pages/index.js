/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "gatsby-theme-blog/src/components/layout";
import SEO from "gatsby-theme-blog/src/components/seo";

export default ({ location, data }) => (
	<Layout location={location} title={data.site.siteMetadata.title}>
		<SEO title="Home" />
		<div
			sx={{
				maxWidth: "container",
				mx: "auto",
				mt: 7,
			}}
		>
			<Styled.h1 sx={{ fontSize: 6, mb: 4 }}>
				I build awesome teams that build awesome products.
			</Styled.h1>
			<Styled.p sx={{ fontFamily: "heading", fontSize: 3 }}>
				I'm a developer that turns problems into solutions. From product and
				design to development and deployment and continuously improving that
				process.
			</Styled.p>
		</div>
	</Layout>
);

export const query = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
				social {
					name
					url
				}
			}
		}
	}
`;
