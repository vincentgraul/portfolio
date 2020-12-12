import styled from "styled-components";

const Button = styled.button`
  ${({ theme }) => `
  background-color: ${theme.colors.dark.primary};
  color: ${theme.colors.light.primary};
  text-decoration: none;
  padding: 1vw;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  @media ${theme.breakpoints.tabletOrLower} {
    padding: 2.5vw;

    @media ${theme.breakpoints.portrait} {
      padding: 2vh;
    }
  }
}
`}
`;

export default Button;
