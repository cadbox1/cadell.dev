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
		{
			resolve: "gatsby-plugin-emoji-favicon",
			options: {
				emoji: "🚀",
			},
		},
		"gatsby-plugin-remove-serviceworker",
	],
	// Customize your site metadata:
	siteMetadata: {
		title: `Cadell.dev`,
		author: `Cadell Christo`,
		description: `Cadell's website`,
		social: [
			{
				name: `github`,
				url: `https://github.com/cadbox1`,
			},
		],
	},
};
