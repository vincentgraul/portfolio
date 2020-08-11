import styled from "styled-components";
import Breakpoints from "../../breakpoints";

const Separator = styled.img`
  margin: ${Breakpoints.isTabletOrLower()
    ? Breakpoints.isPortrait()
        ? "6vh 0"
        : "6vw 0"
    : "6vh 0"};
  align-self: center;
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "20vw" : "10vw"}`
    : "5vw"};
`;

export default Separator;
