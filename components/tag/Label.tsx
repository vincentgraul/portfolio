import styled from "styled-components";

const Label = styled.span`
  ${({ theme }) => `
flex: 1;

@media ${theme.breakpoints.tabletOrLower} {
  margin-bottom: 7vw;

  @media ${theme.breakpoints.portrait} {
    margin-bottom: 3vh;
  }
}`}
`;

export default Label;
