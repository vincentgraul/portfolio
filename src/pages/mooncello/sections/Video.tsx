import React from "react";
import styled from "styled-components";
import Section, { Orientation } from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Breakpoints from "../../../breakpoints";

export default function Video(): JSX.Element {
    return (
        <Section
            card={{
                children: (
                    <Container>
                        <StyledIFrame
                            src="https://player.vimeo.com/video/431759166"
                            width="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </Container>
                ),
                renderHeader: () => <HeaderWithTitle title="Vidéo" />,
                noBorder: Breakpoints.isTabletOrLower(),
                noRadius: Breakpoints.isTabletOrLower(),
            }}
            orientation={
                Breakpoints.isTabletOrLower() ? undefined : Orientation.RIGHT
            }
            renderImage={() =>
                Breakpoints.isTabletOrLower() ? null : (
                    <Image src="shapes/diamonds.svg" />
                )
            }
        />
    );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  width: 100%;
`;

const StyledIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const Image = styled.img`
  width: 10%;
`;
