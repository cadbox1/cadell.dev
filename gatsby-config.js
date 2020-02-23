module.exports = {
	plugins: [
		{
			resolve: `gatsby-theme-blog`,
			options: {
				mdx: true,
				basePath: `/blog`,
				contentPath: "content/posts",
				assetPath: "content/assets",
			},
		},
	],
	// Customize your site metadata:
	siteMetadata: {
		title: `Cadell.dev`,
		author: `Cadell Christo`,
		description: `Cadell's dev site`,
		social: [
			{
				name: `github`,
				url: `https://github.com/cadbox1`,
			},
		],
	},
};
