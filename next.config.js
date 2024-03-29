const withMDX = require("@next/mdx")({
	extension: /\.mdx$/,
});

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	swcMinify: true,
};

module.exports = withVanillaExtract(withMDX(nextConfig));
