import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { motion } from "framer-motion";

export default function Header(): JSX.Element {
  const { resolution } = useContext(ThemeContext);

  return (
    <Container>
      <Title>
        Vincent Graul <br /> Développeur Front-end <br />{" "}
        <TextBackground
          animate={{
            x: resolution.isLaptopOrUpper ? "30vw" : "50vw",
            opacity: 1,
          }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          React
        </TextBackground>
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

const TextBackground = styled(motion.span)`
  ${({ theme }) => `
background-color: ${theme.colors.primary};
color: ${theme.colors.dark.secondary};
padding: 0.5vh 1.5vw;
display: inline-block;
font-weight: 800;
margin-top: 4vw;
position: relative;
left: -30vw;
opacity: 0;

@media ${theme.breakpoints.tabletOrLower} {
  padding: 0.5vh 3vw; 
  left: -50vw;

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
