import DATA from "../../DATA";
import Image from "next/image";
import { Button } from "../../lib/tailwind";
const { description, tagline, urls, cta } = DATA;

export default function Intro() {
  const classes = {
    ["section-main"]:
      "section-main flex flex-col items-center justify-between gap-8 md:flex-row md:items-start",
    leftSection: `
      flex
      flex-col
      align-center
      gap-4
    `,
    tagline: `
    font-extrabold
    text-gray-900
    text-2xl
    md:text-3xl
    lg:text-4xl
    `,
    description: `
      text-base 
      text-gray-500
      lg:text-xl
    `,
    buttonWrapper: "flex flex-col sm:flex-row gap-4",
    imageWrapper: "h-auto overflow-hidden shadow-xl rounded-sm min-w-fit",
  };

  return (
    <div className={classes["section-main"]}>
      <div className={classes.leftSection}>
        <h1 className={classes.tagline}>{tagline}</h1>
        <p className={classes.description}>{description}</p>
        <div className={classes.buttonWrapper}>
          <Button href={cta.url}>{cta.label}</Button>
        </div>
      </div>
      <div className={classes.imageWrapper}>
        <img src={urls.preview} />
      </div>
    </div>
  );
}
