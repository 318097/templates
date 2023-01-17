import DATA, { getMenu } from "../DATA";
import styled from "styled-components";
const { appName, cta } = DATA;
import cn from "classnames";
import { Button } from "../lib/tailwind";

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0px 6px 4px 0px whitesmoke;
  background: white;
  .app-name {
    padding: 4px 8px;
    gap: 2px;
    font-weight: bold;
    font-size: 1.6rem;
  }
`;

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
    <StyledHeader>
      <div className={cn(classes.headerWrapper, "header-main")}>
        <a href="#" className={classes.appName}>
          {appName}
        </a>

        <nav className={classes.nav}>
          {getMenu({ src: "nav" }).map((menuItem) => {
            return (
              <a
                key={menuItem.key}
                href={`#${menuItem.key}`}
                className={classes.navItem}
              >
                <span className="block">{menuItem.label}</span>
              </a>
            );
          })}
        </nav>

        <div
          className="
            relative
            z-10
            inline-flex
            items-center
            space-x-3
            md:ml-5
            lg:justify-end
          "
        >
          <Button href={cta.url}>{cta.label}</Button>
        </div>
      </div>
    </StyledHeader>
  );
}
