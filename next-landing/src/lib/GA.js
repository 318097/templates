import { Fragment } from "react";

const GA = ({ GA_ID }) => (
  <Fragment>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
      }}
    />
  </Fragment>
);

export default GA;
