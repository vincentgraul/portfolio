import styled from "styled-components";

const Row = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 5vw;
    }
    
    @media ${theme.breakpoints.tabletOrLower} {
        flex-flow: column;
        &:not(:last-child) {
          margin-bottom: 7vw;
         }
        
        @media ${theme.breakpoints.portrait} {
            &:not(:last-child) {
             margin-bottom: 5vh;
            }
          }
        }
`}
`;

export default Row;
