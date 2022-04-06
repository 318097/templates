import DATA from "../DATA";
const { appName } = DATA;

const classes = {
  headerWrapper: `
  relative
  flex 
  flex-col 
  flex-wrap
  items-center
  justify-between
  py-5
  md:flex-row
  `,
  appName: `
    app-name
    z-10
    select-none
  `,
  nav: `
    top-0
    left-0
    z-0
    flex
    items-center
    justify-center
    w-full
    h-full
    py-5
    -ml-0
    space-x-5
    text-base
    md:-ml-5 
    md:py-0 
    md:absolute
  `,
  navItem: `
    relative
    font-medium
    leading-6
    text-gray-500
    transition
    duration-150
    ease-out
    hover:text-gray-900
  `,
};

export default function Header() {
  return (
    <header className={classes.headerWrapper}>
      <a href="#" className={classes.appName}>
        {appName}
      </a>

      <nav className={classes.nav}></nav>
    </header>
  );
}
