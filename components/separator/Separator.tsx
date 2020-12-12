import styled from "styled-components";

const Separator = styled.img`
  ${({ theme }) => `
  margin: 6vh 0;
  width: 6vw;
  align-self: center;

  @media ${theme.breakpoints.tabletOrLower} {
    margin: 6vw 0;
    width: 10vw;
  }

  @media ${theme.breakpoints.portrait} {
    width: 10vh;
    margin: 6vh 0;
  }
`}
`;

export default Separator;
