import { Container } from "cadells-vanilla-components";
import "cadells-vanilla-components/dist/index.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-serif-pro/400.css";
import "@fontsource/source-serif-pro/600.css";
import Head from "next/head";
import { Header } from "../components/Header";

const App = ({ Component, pageProps }) => (
	<Container>
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
		</Head>
		<Header />
		<Component {...pageProps} />
	</Container>
);

export default App;
