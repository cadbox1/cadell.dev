import { Container, MdxProvider } from "cadells-vanilla-components";
import "cadells-vanilla-components/dist/index.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import Head from "next/head";
import { Header } from "../components/Header";

const App = ({ Component, pageProps }) => (
	<MdxProvider>
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
		</Head>
		<Container>
			<Header />
			<Component {...pageProps} />
		</Container>
	</MdxProvider>
);

export default App;
