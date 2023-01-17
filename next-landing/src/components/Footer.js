import { Fragment } from "react";
import _ from "lodash";
import DATA from "../DATA";
import { getIcon } from "../lib/icons";

const { appName, tagline, urls, socialLinks, showOtherProducts, footerLinks } =
  DATA;

const getCopyright = () =>
  `© ${new Date().getFullYear()} ${appName} - ${tagline}`;

export default function Footer({ otherProducts = [] }) {
  const classes = {
    container: `
    footer-main
      flex 
      flex-col
      items-center
      px-8
      py-12
      max-w-screen-xl 
      mx-auto
    `,
    row1: "flex items-center flex-col md:flex-row text-center",
    appName: "font-black text-gray-900 select-none",
    copyright: `
      text-sm 
      text-gray-500
      sm:ml-4
      sm:pl-4 
      sm:mt-0
    `,
    productContainer: "flex items-center md:gap-1 flex-wrap justify-center",
    row2: "flex items-center gap-2 p-1",
    link: "text-sm text-gray-500",
    socialIcon: "",
  };

  return (
    <footer className="bg-slate-50">
      <div className={classes.container}>
        <div className={classes.row1}>
          {/* <a href="#_" className={classes.appName}>
            {appName}
          </a> */}
          <p className={classes.copyright}>{getCopyright()}</p>
        </div>

        {showOtherProducts && (
          <div className={classes.productContainer}>
            <span className="text-sm font-black">Other apps - </span>
            {otherProducts.map(({ name, links, tagline }, idx) => (
              <Fragment key={idx}>
                <a
                  title={tagline}
                  className="text-sm text-gray-500"
                  href={links.product.url}
                  // href={appendQueryParams(
                  //   links.product.url,
                  //   "utm_source=fireboard_landing&utm_medium=footer"
                  // )}
                >
                  {name}
                </a>
                {idx < otherProducts.length - 1 && <span>•</span>}
              </Fragment>
            ))}
          </div>
        )}

        <div className={classes.row2}>
          {footerLinks.map((link, idx) => (
            <Fragment key={link.key}>
              {idx > 0 && idx < footerLinks.length && <span>•</span>}
              <a target="_blank" href={link.href} className={classes.link}>
                {link.label}
              </a>
            </Fragment>
          ))}
        </div>
        <div className={classes.row2}>
          {socialLinks.map((social) => (
            <a
              key={social.key}
              target="_blank"
              href={social.value}
              className={classes.socialIcon}
            >
              {getIcon({ type: social.key })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
