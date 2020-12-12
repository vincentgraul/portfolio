import styled from "styled-components";

const Tag = styled.span`
  ${({ theme }) => `
display: inline-block;
padding: 0.6vw;
background-color: ${theme.colors.dark.primary};
font-weight: bold;
color: ${theme.colors.light.primary};
margin: 0 1vw 0 0;

@media ${theme.breakpoints.tabletOrLower} {
  border-width: 0.6vw;
  margin: 0 2vw 2vw 0;
  padding: 1.5vw;

  @media ${theme.breakpoints.portrait} {
    border-width: 0.9vw;
    margin-bottom: 2vh;
    padding: 1vh;
  }
}
`}
`;

export default Tag;
