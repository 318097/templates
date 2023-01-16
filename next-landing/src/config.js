// dont destructure, it does not work in next.js
const NODE_ENV = process.env.NODE_ENV;
const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
const GOOGLE_ANALYTICS_TRACKING_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

const config = {
  NODE_ENV,
  IS_DEV: NODE_ENV === "development",
  IS_PROD: NODE_ENV === "production",
  CRISP_WEBSITE_ID,
  APP_ID: "<APP_ID>",
  APP_NAME: "<APP_NAME>",
  GA_ID: GOOGLE_ANALYTICS_TRACKING_ID,
  YOUTUBE: {
    VIDEO_ID: "",
  },
  BMC: "mehullakhanpal",
};

export default config;
