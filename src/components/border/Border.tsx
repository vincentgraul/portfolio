import styled from "styled-components";
import Breakpoints from "../../breakpoints";

const Border = styled.img`
  align-self: flex-end;
  position: absolute;
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "25vw" : "15vw"}`
    : "10vw"};
`;

export default Border;
