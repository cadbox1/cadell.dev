/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Layout } from "../components/Layout";
import Head from "next/head";

export const CMS_NAME = "Cadell.dev";

export default function Index() {
	return (
		<>
			<Head>
				<title>{CMS_NAME}</title>
			</Head>
			<Layout>
				<div
					sx={{
						maxWidth: "container",
						mx: "auto",
						mt: 7,
					}}
				>
					<Styled.h1 sx={{ fontSize: 6, mb: 4 }}>
						I build awesome teams and awesome products.
					</Styled.h1>
					<Styled.p sx={{ fontSize: 2 }}>
						Hit me up on Twitter, LinkedIn or shoot me an email 🙂
					</Styled.p>
				</div>
			</Layout>
		</>
	);
}
