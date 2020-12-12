import styled from "styled-components";

const List = styled.div<{ flex?: number }>`
  ${({ theme, flex = 3 }) => `
  flex: ${flex};

  @media ${theme.breakpoints.tabletOrLower} {
    width: 100%;
    text-align: center;
  }
`}
`;

export default List;
