import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";

import "typeface-source-sans-pro";

export default {
	...baseTheme,
	...{
		useColorSchemeMediaQuery: true,
		fonts: {
			body:
				'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
			heading:
				'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
			monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
		},
		space: [0, 4, 8, 12, 16, 24, 32, 64, 96, 128],
		sizes: {
			container: 850,
		},
		fontSizes: [16, 18, 21, 24, 32, 36, 44],
		lineHeights: {
			body: 1.7,
			heading: 1.2,
		},
		fontWeights: {
			body: 400,
			heading: 600,
			bold: 600,
		},
		styles: {
			...baseTheme.styles,
			a: {
				...baseTheme.styles.a,
				textDecoration: "none",
				":active, :hover": {
					textDecoration: "underline",
				},
			},
			pre: {
				...baseTheme.styles.pre,
				fontSize: 0,
			},
		},
	},
};
