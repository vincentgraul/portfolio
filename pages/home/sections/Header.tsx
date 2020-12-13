import React from "react";
import styled from "styled-components";

export default function Header(): JSX.Element {
  return (
    <Container>
      <Title>
        Vincent Graul <br /> Développeur Front-end <br />{" "}
        <TextBackground>React</TextBackground>
      </Title>
      <BlocksLine src="/shapes/blocks-line.svg" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
`;

const TextBackground = styled.span`
  ${({ theme }) => `
background-color: ${theme.colors.primary};
color: ${theme.colors.dark.secondary};
padding: 0.5vh 1.5vw;
display: inline-block;
font-weight: 800;
margin-top: 4vw;
border: 0.7vw dashed ${theme.colors.dark.secondary};

@media ${theme.breakpoints.tabletOrLower} {
  border-width: 1vw;
  padding: 0.5vh 3vw; 

  @media ${theme.breakpoints.portrait} {
    margin-top: 4vh;
    border-width: 1.4vw;
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

const BlocksLine = styled.img`
  ${({ theme }) => `
margin: 5vw 0;
width: 30%;

@media ${theme.breakpoints.tabletOrLower} {
  margin: 8vw 0;
  width: 60%;
  
  @media ${theme.breakpoints.portrait} {
    margin: 8vh 0;
    width: 70%;
  }
}
`}
`;
