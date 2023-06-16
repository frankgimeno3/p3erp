import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Proporcion3</title>
        <link rel="icon" href="/icons/favicon.jpg" />
      </Head>
      <Layout title="Proporcion3">
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
