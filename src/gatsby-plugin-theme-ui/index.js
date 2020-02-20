import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";

import "typeface-source-sans-pro";

export default {
	...baseTheme,
	...{
		fonts: {
			body:
				'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
			heading:
				'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
			monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
		},
		space: [0, 4, 12, 16, 24, 32, 64, 128],
		sizes: {
			container: 850,
		},
		fontSizes: [12, 13, 21, 23, 23, 42],
		fontWeights: {
			body: 400,
			heading: 600,
			bold: 600,
		},
		padding: ["0.25rem"],
	},
};
