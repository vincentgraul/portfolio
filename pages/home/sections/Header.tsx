import React from "react";
import styled from "styled-components";

export default function Header(): JSX.Element {
  return (
    <Container>
      <Title>
        Vincent Graul <br /> Développeur Front-end <br />{" "}
        <TextBackground>React</TextBackground>
      </Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  margin-bottom: 12vw;
`;

const TextBackground = styled.span`
  ${({ theme }) => `
background-color: ${theme.colors.primary};
color: ${theme.colors.dark.secondary};
padding: 0.5vh 1.5vw;
display: inline-block;
font-weight: 800;
margin-top: 4vw;

@media ${theme.breakpoints.tabletOrLower} {
  padding: 0.5vh 3vw; 

  @media ${theme.breakpoints.portrait} {
    margin-top: 4vh;
  }
}
`}
`;

const Title = styled.h1`
  ${({ theme }) => `
font-size: 8vw;
align-self: flex-start;
margin: 3vw 0 3vw 3vw;
color: ${theme.colors.light.primary};

@media ${theme.breakpoints.tabletOrLower} {
  font-size: 12vw;
  margin: 0;

  @media ${theme.breakpoints.portrait} {
    font-size: 16vw;
  }
}
`}
`;
