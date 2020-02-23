/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "gatsby-theme-blog/src/components/layout";

export default ({ location, data }) => (
	<Layout location={location} title={data.site.siteMetadata.title}>
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
			<Styled.p sx={{ fontSize: 3 }}>
				I'm a developer that takes customer problems from product requirements
				and technical design, through development and deployment, all the way to
				validation and customer support.
			</Styled.p>
		</div>
		<Styled.p sx={{ display: "none" }}>
			http://essays.davidchouinard.com/the-product-engineer
			https://blog.pragmaticengineer.com/the-product-minded-engineer/ Over the
			last few years I've had experience with everything from managing feature
			requests to managing cloud infrastructure and all the React components,
			microservices and data stores in between.
		</Styled.p>
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
