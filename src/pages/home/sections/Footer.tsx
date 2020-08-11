import React from "react";
import styled from "styled-components";
import BubbleLink from "../../../components/bubble-link/BubbleLink";
import colors from "../../../colors";
import Breakpoints from "../../../breakpoints";

interface Props {
    className?: string;
}

export default function Footer(props: Props): JSX.Element {
    const { className } = props;

    return (
        <Container className={`${className}`}>
            <Linkedin
                href="http://www.linkedin.com/in/vgraul"
                target="_blank"
                src="/logo/linkedin.svg"
            />

            <Github
                href="https://github.com/vgraul"
                target="_blank"
                src="/logo/github.svg"
            />

            <Mail target="_blank" src="/logo/mail.svg" />
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "space-evenly" : "center"}`
    : "center"};
  background-color: ${colors.primary};
  min-height: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "20vh" : "20vw"}`
    : "20vh"};
  border-top: 1vh dashed black;
`;

const Linkedin = styled(BubbleLink)`
  margin-right: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "0" : "3vw"}`
    : "3vw"};
`;

const Github = styled(BubbleLink)`
  margin: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "0" : "0 3vw"}`
    : "0 3vw"};
`;

const Mail = styled(BubbleLink)`
  margin-left: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "0" : "3vw"}`
    : "3vw"};
`;
