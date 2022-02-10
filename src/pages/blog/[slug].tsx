import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { DateFormatter } from "../../components/DateFormatter";
import { BasicPost, getPostBySlug, getPosts } from "../../lib/api";
import { MdxRemote } from "next-mdx-remote/types";
import { blogContainerClass } from "../../components/blogStyles.css";
import { H1, MdxProvider } from "cadells-vanilla-components";

interface PostProps {
	post: BasicPost;
	source: MdxRemote.Source;
}

export default function Post({ post, source }: PostProps) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const { title, dateString } = post;

	const content = hydrate(source);

	return (
		<>
			<Head>
				<title>{title} | Cadell.dev</title>
			</Head>
			<article className={blogContainerClass}>
				<H1>{title}</H1>
				<DateFormatter dateString={dateString} />
				<div>{content}</div>
			</article>
		</>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug);

	const mdxSource = await renderToString(post.content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		provider: {
			component: MdxProvider,
			props: undefined,
		},
		scope: undefined,
	});

	return {
		props: {
			post,
			source: mdxSource,
		},
	};
}

export async function getStaticPaths() {
	const posts = getPosts();

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
