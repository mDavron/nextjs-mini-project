import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
