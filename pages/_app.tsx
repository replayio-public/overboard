import Head from "next/head";

import "../app.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Overboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
