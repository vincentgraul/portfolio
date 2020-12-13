import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Card from "../../../components/card/Card";

export default function Video(): JSX.Element {
  const { resolution } = useContext(ThemeContext);

  return (
    <Section>
      <Card
        renderHeader={() => <HeaderWithTitle title="Vidéo" center />}
        full={resolution.isTabletOrLower()}
        radius={resolution.isLaptopOrUpper()}
      >
        <Container>
          <StyledIFrame
            src="https://player.vimeo.com/video/431759166"
            width="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </Container>
      </Card>
    </Section>
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
