import DATA, { getMenu } from "../DATA";
import styled from "styled-components";
import cn from "classnames";
import { Button } from "../lib/tailwind";

const { appName, cta, showLogo = true } = DATA;

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 6px 4px 0px whitesmoke;
  background: whitesmoke;
  .app-name-container {
    display: flex;
    align-items: center;
    gap: 4px;
    img {
      height: 28px;
    }
    .app-name {
      font-weight: bold;
      font-size: 1.6rem;
    }
  }
`;

const classes = {
  headerWrapper: `
  flex 
  flex-col 
  flex-wrap
  items-center
  justify-between
  py-3
  md:flex-row
  gap-2
  `,
  nav: `
    flex
    items-center
    justify-center
    space-x-5
    text-base
    md:-ml-5 
    md:py-0 
  `,
  navItem: `
    font-medium
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
        <span className="app-name-container">
          {showLogo && <img className="logo" src="/assets/logo.svg" />}
          <a href="#" className="app-name">
            {appName}
          </a>
        </span>

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
        <Button href={cta.url}>{cta.label}</Button>
      </div>
    </StyledHeader>
  );
}
