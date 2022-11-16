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
