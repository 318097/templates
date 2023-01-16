import config from "./config";

const localConfig = {
  TAGLINE: "<APP_TAGLINE>",
  DESCRIPTION: "<APP_DESCRIPTION>",
};

const CTA = {
  label: "Chrome extension",
  url: `https://www.test.com?utm_source=${config.APP_ID.toLowerCase()}_landing`,
};

const DATA = {
  appId: config.APP_ID,
  appName: config.APP_NAME,
  tagline: localConfig.TAGLINE,
  description: localConfig.DESCRIPTION,
  cta: CTA,
  fontFamily: "Manrope",
  urls: {
    // url: "/assets/preview.png", // Full URL or /assets/<FILE_NAME>
    url: "https://picsum.photos/300/500", // Full URL or /assets/<FILE_NAME>
    video: `https://youtube.com/embed/${config.YOUTUBE.VIDEO_ID}`,
    sponser: `https://www.buymeacoffee.com/${config.BMC}`,
  },
  carousel: {
    list: [
      {
        path: "/assets/<name>.png",
        legend: "<description>",
      },
    ],
  },
  features: {
    subTitle: "<feature_title>",
    list: [
      {
        id: 1,
        iconType: "robot",
        title: "<Feature 1>",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      },
    ],
  },
  platforms: {
    title: "Platforms",
    subTitle: "<placeholder>",
    list: [
      {
        title: "Chrome extension",
        src: "/assets/chrome-extension.png",
        description: "<placeholder>",
        ctaHref: CTA.url,
        ctaLabel: "Download",
        points: [
          {
            title: "<placeholder>",
          },
        ],
      },
    ],
  },
  showOtherProducts: false,
};

const getMenu = ({ src } = {}) => {
  const { platforms, features, urls, carousel } = DATA;
  return [
    { label: "Intro", value: "intro", renderComponent: true, showInNav: true },
    {
      label: "Features",
      value: "features",
      renderComponent: features && features.list,
      showInNav: true,
    },
    {
      label: "Carousel",
      value: "carousel",
      renderComponent: carousel && carousel.list,
      showInNav: false,
    },
    {
      label: "Platforms",
      value: "general",
      renderComponent: platforms && platforms.list,
      showInNav: true,
    },
    {
      label: "Demo",
      value: "demo",
      renderComponent: !!urls.video,
      showInNav: true,
    },
  ]
    .filter((menu) => menu.renderComponent)
    .filter((menu) => (src === "nav" ? menu.showInNav : true));
};

const getMenuLabel = (value) =>
  getMenu().find((menu) => menu.value === value) || {};

export { getMenu, getMenuLabel };

export default DATA;
