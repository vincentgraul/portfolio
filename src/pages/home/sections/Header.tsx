import React from "react";
import styled from "styled-components";
import colors from "../../../colors";
import Breakpoints from "../../../breakpoints";

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
  background-color: ${colors.primary};
  color: ${colors.light.primary};
  padding: 0.5vh ${Breakpoints.isTabletOrLower() ? "3vw" : "1vw"};
  display: inline-block;
  font-weight: 800;
  margin-top: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "4vh" : "4vw"}`
    : "4vw"};
  border: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "1.4vw" : "1.0vw"}`
    : "0.5vw"}
    dashed black;
`;

const Title = styled.h1`
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "16vw" : "12vw"}`
    : "8vw"};
  align-self: flex-start;
  margin: ${Breakpoints.isTabletOrLower() ? "0" : "3vw 0 3vw 3vw"};
`;

const BlocksLine = styled.img`
  margin: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "8vh 0" : "8vw 0"}`
    : "4vw 0"};
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "70%" : "60%"}`
    : "30%"};
`;
