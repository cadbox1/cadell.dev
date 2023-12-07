import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { DateFormatter } from "../../components/DateFormatter";
import { BasicPost, getPostBySlug, getPosts } from "../../lib/api";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { blogContainerClass } from "../../components/blogStyles.css";
import { H1, P, mdComponents } from "cadells-vanilla-components";

interface PostProps {
	post: BasicPost;
	source: any;
}

export default function Post({ post, source }: PostProps) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const { title, dateString } = post;

	return (
		<>
			<Head>
				<title>{title} | Cadell.dev</title>
			</Head>
			<article className={blogContainerClass}>
				<H1>{title}</H1>
				<P>
					<DateFormatter dateString={dateString} />
				</P>
				<div>
					<MDXRemote {...source} components={mdComponents} />
				</div>
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

	const mdxSource = await serialize(post.content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
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
