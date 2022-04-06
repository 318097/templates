import { Fragment } from "react";
import Head from "next/head";
import config from "../config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const CrispWithNoSSR = dynamic(() => import("../components/Crisp"), {
  ssr: false,
});
import DATA from "../DATA";
const { tagline, appName } = DATA;

export default function Home() {
  return (
    <div>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={tagline} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto Mono"
          media="all"
        />
        {/* {config.IS_PROD && (
          <Fragment>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_TAG_ID>"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '<GOOGLE_TAG_ID>');
            `,
              }}
            />
          </Fragment>
        )} */}
      </Head>
      <main style={{ fontFamily: "Roboto Mono" }}>
        {config.IS_PROD && <CrispWithNoSSR />}
        <Header />
      </main>
      <Footer />
    </div>
  );
}
