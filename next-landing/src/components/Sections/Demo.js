import DATA from "../../DATA";
import styled from "styled-components";

const { urls } = DATA;

const StyledDemo = styled.div`
  max-width: 720px;
`;

export default function Demo() {
  return (
    <StyledDemo className="section-main">
      <iframe width={"100%"} height={"400px"} src={urls.video}></iframe>
    </StyledDemo>
  );
}
