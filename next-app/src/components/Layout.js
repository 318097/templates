import React, { Fragment, useState, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import DATA from "../DATA";
import Head from "next/head";
import dynamic from "next/dynamic";
import config from "../config";
// import PH from "../lib/PH";
import GA from "../lib/GA";
// import Adsense from "../lib/Adsense";
import { hotjar } from "react-hotjar";
import tracker from "../lib/mixpanel";

const CrispWithNoSSR = dynamic(() => import("../lib/Crisp"), {
  ssr: false,
});

const { appName, tagline, showPHBadge } = DATA;

const mainStyles = { fontFamily: "Roboto Mono", position: "relative" };

const HeadTag = () => (
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

    <GA config={config} />
    {/* <Adsense config={config} /> */}
  </Head>
);

const Layout = ({ children }) => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    if (config.IS_PROD) hotjar.initialize(config.HJ_ID, 6);
    tracker.track("INIT");
    setTimeout(() => {
      setAppLoading(false);
    }, 1000);
  }, []);

  const header = (
    <Fragment>
      <HeadTag />
      <DefaultSeo
        title={appName}
        description={tagline}
        // openGraph={{
        //   type: "website",
        //   locale: "en_IE",
        //   url: "https://www.url.ie/",
        //   site_name: "SiteName",
        // }}
        // twitter={{
        //   handle: "@handle",
        //   site: "@site",
        //   cardType: "summary_large_image",
        // }}
      />
    </Fragment>
  );

  return (
    <Fragment>
      {header}
      <main style={mainStyles}>
        {React.cloneElement(children, { appLoading, setAppLoading })}
      </main>
      {/* {showPHBadge && <PH />} */}
      {config.IS_PROD && <CrispWithNoSSR />}
    </Fragment>
  );
};

export default Layout;
