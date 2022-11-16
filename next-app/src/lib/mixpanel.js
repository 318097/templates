import { EventTracker } from "@codedrops/lib";
import config from "../config";

const events = {
  INIT: { name: "Init" },
  ACTION: { name: "Action", fields: ["command", "type"] },
  OTHER_PRODUCTS: { name: "Other products", fields: ["name"] },
  SUPPORT: { name: "Support", fields: ["type"] },
};

const tracker = new EventTracker(
  {
    events,
    trackingId: config.MIXPANEL_TRACKING_ID,
    isDev: !config.IS_PROD,
  },
  { defaultProperties: { env: config.IS_PROD ? "prod" : "dev" } }
);

export default tracker;
