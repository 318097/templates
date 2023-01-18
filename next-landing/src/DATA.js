import config from "./config";

const localConfig = {
  TAGLINE: "Power shortcuts for managing tabs",
  DESCRIPTION: "Manage & switch infinite in seconds",
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

const theme = {
  primary: "#f56545",
  padding: "24px",
  contentWidth: "600px",
  breakpoints: {
    md: "500px",
  },
};

const CTA = {
  label: "Add to Chrome",
  url: `https://www.test.com?utm_source=${config.APP_ID.toLowerCase()}_landing`,
};

const DATA = {
  appId: config.APP_ID,
  appName: config.APP_NAME,
  tagline: localConfig.TAGLINE,
  description: localConfig.DESCRIPTION,
  showLogo: true,
  cta: CTA,
  fontFamily: "Manrope", // Font family from 'Google Fonts'
  urls: {
    // preview: "/assets/preview.png", // Full URL or /assets/<FILE_NAME>
    preview: "https://picsum.photos/300/500", // Full URL or /assets/<FILE_NAME>
    video: `https://youtube.com/embed/${config.YOUTUBE.VIDEO_ID}`,
  },
  carousel: {
    list: [
      {
        path: "https://picsum.photos/500/300",
        legend: "Description 1",
      },
      {
        path: "https://picsum.photos/500/300",
        legend: "Description 2",
      },
      {
        path: "https://picsum.photos/500/300",
        legend: "Description 3",
      },
    ],
  },
  features: {
    renderStyle: "LIST", // LIST* | CARD
    subTitle: "",
    list: [
      {
        id: 1,
        iconType: "robot",
        title: "Switch to URLs using hotkeys",
        description: `
Switch to an existing URL or open the URL in a new tab with 2 keystrokes.
1. Open **Quick Switch** window using Alt/Option+J'
2.  Navigate to that tab by pressing the defined hotkey
`,
      },
      {
        id: 2,
        iconType: "automatic",
        title: "Cycle between same domains",
        description: `Switch between domains have the same URL using the keyboard shortcut 'Alt/Option+Shift+K'  ex., If there are 3 tabs with the same domain(google.com) open in your window, use the shortcut to cycle between these tabs`,
      },
      {
        id: 3,
        iconType: "time",
        title: "Cycle between favorite URLs",
        description: `You can mark a URL as favorite when creating a new shortcut from **‘Add shortcut’** page Once marked as favorite, press 'Alt/Option+K' to cycle between all the favorite URLs that are open in your window`,
      },
      {
        id: 4,
        iconType: "timeline",
        title: "Sort tabs alphabetically by URL",
        description: `Press 'Alt/Option+Shift+J' to sort all your tabs in alphabetical order`,
      },
      {
        id: 5,
        iconType: "timeline",
        title: "View all tabs from your window",
        description: `Go to ‘Tabs’ menu to see all the tabs from current window. Click to switch to that tab.`,
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
  footerLinks: [
    {
      label: "Sponser",
      key: "sponser",
      href: `https://www.buymeacoffee.com/${config.BMC}`,
    },
  ],
  socialLinks: [
    { key: "twitter", value: "" },
    { key: "email", value: "" },
  ],
};

const getMenu = ({ src } = {}) => {
  const { platforms, features, urls, carousel } = DATA;
  const { FEATURES, CAROUSEL, PLATFORMS, DEMO } = localConfig.MODULES;

  const SECTIONS = [
    {
      label: "Intro",
      key: "intro",
      renderComponent: true,
      showInNav: true,
      size: "FULL", // FULL* | MAX
      themeType: "WHITE", // WHITE* | COLOR | GRAY
    },
    {
      label: "Features",
      key: "features",
      renderComponent: FEATURES && features?.list,
      showInNav: true,
      size: "FULL",
      themeType: "COLOR",
    },
    {
      label: "Carousel",
      key: "carousel",
      renderComponent: CAROUSEL && carousel?.list,
      showInNav: false,
      themeType: "GRAY",
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
      themeType: "COLOR",
      size: "MAX",
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

const getMenuItemMeta = (key) =>
  getMenu().find((menuItem) => menuItem.key === key) || {};

export { getMenu, getMenuItemMeta, theme };

export default DATA;
