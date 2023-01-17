import config from "./config";

const localConfig = {
  TAGLINE: "<APP_TAGLINE>",
  DESCRIPTION: "<APP_DESCRIPTION>",
  MODULES: {
    FEATURES: true,
    CAROUSEL: true,
    PLATFORMS: false,
    DEMO: true,
  },
};

const COLOR_PALETTE = [
  { primary: "#39D754", background: "#DCFCE7" },
  { primary: "#F9587B", background: "#FFE2E6" },
  { primary: "#BE82FE", background: "#F4E8FF" },
  { primary: "#FE937A", background: "#FFF4DE" },
];

const THEME = {
  primary: "#f56545",
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
  fontFamily: "Manrope", // Font family from 'Google Fonts'
  urls: {
    // preview: "/assets/preview.png", // Full URL or /assets/<FILE_NAME>
    preview: "https://picsum.photos/300/500", // Full URL or /assets/<FILE_NAME>
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
  const { FEATURES, CAROUSEL, PLATFORMS, DEMO } = localConfig.MODULES;

  const SECTIONS = [
    { label: "Intro", key: "intro", renderComponent: true, showInNav: true },
    {
      label: "Features",
      key: "features",
      renderComponent: FEATURES && features?.list,
      showInNav: true,
      useTheme: true,
    },
    {
      label: "Carousel",
      key: "carousel",
      renderComponent: CAROUSEL && carousel?.list,
      showInNav: false,
    },
    {
      label: "Platforms",
      key: "general",
      renderComponent: PLATFORMS && platforms?.list,
      showInNav: true,
    },
    {
      label: "Demo",
      key: "demo",
      renderComponent: DEMO && !!urls?.video,
      showInNav: true,
    },
    {
      label: "Subscribe",
      key: "subscribe",
      renderComponent: true,
      showInNav: true,
    },
  ];

  return SECTIONS.map((menuItem, idx) => {
    const theme = COLOR_PALETTE[idx % COLOR_PALETTE.length];
    return {
      ...menuItem,
      theme,
    };
  }).filter((menuItem) => {
    const isVisible = menuItem.renderComponent;
    return src === "nav" ? isVisible && menuItem.showInNav : isVisible;
  });
};
const getMenuLabel = (key) =>
  getMenu().find((menuItem) => menuItem.key === key) || {};

export { getMenu, getMenuLabel };

export default DATA;
