import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";

import "typeface-source-sans-pro";
import "typeface-source-serif-pro";

export default {
	...baseTheme,
	...{
		useColorSchemeMediaQuery: true,
		fonts: {
			body: '"source serif pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
			heading:
				'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
			monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
		},
		space: [0, 4, 8, 12, 16, 24, 32, 64, 96, 128],
		sizes: {
			container: 850,
		},
		fontSizes: [14, 16, 20, 24, 32, 36, 44],
		lineHeights: {
			body: 1.6,
			heading: 1.2,
		},
		fontWeights: {
			body: 400,
			heading: 600,
			bold: 600,
		},
		styles: {
			...baseTheme.styles,
			h1: {
				...baseTheme.styles.h2,
				fontSize: 6,
				marginBottom: 5,
			},
			h2: {
				...baseTheme.styles.h2,
				marginTop: 6,
			},
			p: {
				...baseTheme.styles.p,
				marginBottom: 4,
			},
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
			ul: {
				margin: 0,
				marginBottom: 3,
				listStyleType: "disc",
				ul: {
					marginBottom: 0,
				},
			},
			li: {
				margin: 0,
			},
		},
	},
};
