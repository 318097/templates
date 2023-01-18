import { Heading } from "../../lib/tailwind";
import DATA, { theme, getMenuItemMeta } from "../../DATA";
import { getIcon } from "../../lib/icons";
import styled, { css } from "styled-components";
import md from "markdown-it";

const { features } = DATA;
const { subTitle, list = [], renderStyle = "LIST" } = features;
const { label } = getMenuItemMeta("features");

const CARD_VIEW = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 16px;
  justify-content: center;
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 36px 16px;
    background: whitesmoke;
    border-radius: 2px;
    flex: 0 0 240px;
    height: 380px;
    gap: 16px;
    .icon {
      padding: 12px;
      color: white;
      background: ${theme.primary};
      border-radius: 50%;
      font-size: 1.8rem;
    }
    .title {
      text-align: center;
    }
  }
`;

const LIST_VIEW = css`
  display: flex;
  flex-direction: column;
  gap: 46px;
  .feature-item {
    .header-container {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .icon {
        font-size: 1.4rem;
        width: 30px;
      }
      .title {
        text-align: left;
      }
    }
    .description {
      margin-left: 30px;
    }
  }
`;

const StyledFeatures = styled.div`
  max-width: ${({ renderStyle }) =>
    renderStyle === "LIST" ? "600px" : "100%"};
  .features-container {
    ${({ renderStyle }) => (renderStyle === "LIST" ? LIST_VIEW : CARD_VIEW)};
    .feature-item {
      .title {
        font-size: 1.2rem;
        line-height: normal;
        font-weight: bold;
      }
      .description {
        font-size: 0.9rem;
      }
    }
  }
`;

export default function Features() {
  return (
    <StyledFeatures className="section-main" renderStyle={renderStyle}>
      <Heading title={label} subTitle={subTitle} />
      <div className="features-container">
        {list.map(({ title, description, id, iconType }) => {
          const featureHeader = (
            <>
              <div className="icon">{getIcon({ type: iconType })}</div>
              <h4 className="title">{title}</h4>
            </>
          );
          const html = md().render(description);

          return (
            <div key={id} className="feature-item">
              {renderStyle === "LIST" ? (
                <div className="header-container">{featureHeader}</div>
              ) : (
                featureHeader
              )}
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          );
        })}
      </div>
    </StyledFeatures>
  );
}
