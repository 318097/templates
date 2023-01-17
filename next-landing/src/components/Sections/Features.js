import { Heading } from "../../lib/tailwind";
import DATA, { theme, getMenuItemMeta } from "../../DATA";
import { getIcon } from "../../lib/icons";
import styled from "styled-components";

const { features } = DATA;
const { subTitle, list = [] } = features;
const { label } = getMenuItemMeta("features");

const StyledFeatures = styled.div`
  .features-container {
    display: grid;
    grid-template-columns: repeat(3, 320px);
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
        font-size: 1.2rem;
        text-align: center;
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
    <StyledFeatures className="section-main">
      <Heading title={label} subTitle={subTitle} />
      <div className="features-container">
        {list.map(({ title, description, id, iconType }) => {
          return (
            <div key={id} className="feature-item">
              <div className="icon">{getIcon({ type: iconType })}</div>
              <h4 className="title">{title}</h4>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          );
        })}
      </div>
    </StyledFeatures>
  );
}
