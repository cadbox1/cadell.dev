import React from "react";
import Head from "next/head";
import Link from "next/link";
import { DateFormatter } from "../../components/DateFormatter";
import { BasicPost, getPosts } from "../../lib/api";
import {
	blogAnchorClass,
	blogContainerClass,
	blogHeadingClass,
} from "./styles.css";
import { P } from "cadells-vanilla-components";

export interface IndexProps {
	posts: BasicPost[];
}

export default function Index({ posts }: IndexProps) {
	return (
		<>
			<Head>
				<title>Blog | Cadell.dev</title>
			</Head>
			<div className={blogContainerClass}>
				{[...posts]
					.sort(
						(a, b) =>
							new Date(b.dateString).getTime() -
							new Date(a.dateString).getTime()
					)
					.map(({ slug, title, dateString }) => (
						<>
							<h2 className={blogHeadingClass}>
								<Link href={`/blog/${slug}`}>
									<a className={blogAnchorClass}>{title}</a>
								</Link>
							</h2>
							<P>
								<DateFormatter dateString={dateString} />
							</P>
						</>
					))}
			</div>
		</>
	);
}

export async function getStaticProps() {
	const posts = getPosts();

	return {
		props: { posts },
	};
}
