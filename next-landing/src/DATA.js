const PRODUCT_URLS = {
  web: {
    label: "Web app",
    url: "https://www.test.com?utm_source=app_name_landing",
  },
  extension: {
    label: "Chrome extension",
    url: "https://www.test.com?utm_source=app_name_landing",
  },
};

const DATA = {
  appId: "APP_ID",
  appName: "App name",
  tagline: "Tagline test",
  description: "Description test",
  // previewURL: "https://cdn.devdojo.com/images/november2020/hero-image.jpeg",
  previewURL: "/assets/preview.png",
  webAppURL: PRODUCT_URLS.web.url,
  extensionURL: PRODUCT_URLS.extension.url,
  videoURL: "https://youtube.com/embed/<video_id>",
  sponser: "https://www.buymeacoffee.com/mehullakhanpal",
  carousel: {
    list: [
      {
        path: "/assets/<name>.png",
        legend: "<description>",
      },
    ],
  },
  features: {
    subTitle: "<title>",
    list: [
      {
        id: 1,
        iconType: "robot",
        title: "<placeholder>",
        description: `<placeholder>`,
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
        ctaHref: PRODUCT_URLS.extension.url,
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
  const { platforms, features, videoURL, carousel } = DATA;
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
      renderComponent: !!videoURL,
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
