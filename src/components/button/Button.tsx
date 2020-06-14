import styled from "styled-components";
import colors from "../../colors";
import Breakpoints from "../../breakpoints";

const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.light.secondary};
  text-decoration: none;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: ${Breakpoints.isTabletOrLower()
      ? `${Breakpoints.isPortrait() ? "0.5vh" : "0.5vw"}`
      : "0.2vw"}
    solid ${colors.dark.primary};
`;

export default Button;
