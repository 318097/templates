import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Sections/Intro";
import General from "../components/Sections/General";
import Features from "../components/Sections/Features";
import Subscribe from "../components/Sections/Subscribe";
import Demo from "../components/Sections/Demo";
import Footer from "../components/Footer";
import Carousel from "../components/Sections/Carousel";
import config from "../config";
import dynamic from "next/dynamic";

const CrispWithNoSSR = dynamic(() => import("../lib/Crisp"), {
  ssr: false,
});

import data, { getMenu } from "../DATA";

const { tagline, appName, fontFamily } = data;

export default function Index() {
  const MENU = getMenu();

  const getUI = ({ key }) => {
    switch (key) {
      case "intro":
        return <Intro key={key} />;
      case "demo":
        return <Demo key={key} />;
      case "features":
        return <Features key={key} />;
      case "general":
        return <General key={key} />;
      case "subscribe":
        return <Subscribe key={key} />;
      case "carousel":
        return <Carousel key={key} />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={tagline} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href={`https://fonts.googleapis.com/css?family=${fontFamily}`}
          media="all"
        />
        {config.IS_PROD && <GA GA_ID={config.GA_ID} />}
      </Head>

      <main style={{ fontFamily }}>
        <Header />
        {MENU.map(({ key, theme, useTheme }) => {
          const ui = getUI({ key });
          const sectionStyles = useTheme
            ? {
                background: theme.background,
              }
            : {};
          return (
            <section id={key} style={sectionStyles}>
              {ui}
            </section>
          );
        })}
      </main>
      <Footer />
      {config.IS_PROD && (
        <CrispWithNoSSR CRISP_WEBSITE_ID={config.CRISP_WEBSITE_ID} />
      )}
    </Fragment>
  );
}
