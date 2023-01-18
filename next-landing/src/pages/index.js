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
        return <Intro />;
      case "demo":
        return <Demo />;
      case "features":
        return <Features />;
      case "general":
        return <General />;
      case "subscribe":
        return <Subscribe />;
      case "carousel":
        return <Carousel />;
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
          href={`https://fonts.googleapis.com/css2?family=${fontFamily}:wght@300;400;500;700&display=swap}`}
          media="all"
        />
        {config.IS_PROD && <GA GA_ID={config.GA_ID} />}
      </Head>

      <main style={{ fontFamily }}>
        <Header />
        {MENU.map(({ key, theme, themeType = "WHITE", size = "FULL" }) => {
          const ui = getUI({ key });
          const sectionStyles = {
            ...(themeType === "COLOR"
              ? { background: theme.background }
              : themeType === "GRAY"
              ? { background: "whitesmoke" }
              : { background: "white" }),
            ...(size === "FULL"
              ? { minHeight: "calc(100vh - 72px)" }
              : {
                  minHeight: "auto",
                  paddingTop: "120px",
                  paddingBottom: "120px",
                }),
          };
          return (
            <section id={key} key={key} style={sectionStyles}>
              {ui}
            </section>
          );
        })}
        <Footer />
      </main>
      {config.IS_PROD && (
        <CrispWithNoSSR CRISP_WEBSITE_ID={config.CRISP_WEBSITE_ID} />
      )}
    </Fragment>
  );
}
