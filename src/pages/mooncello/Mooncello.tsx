import React from "react";
import styled from "styled-components";
import Header from "./sections/Header";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Screenshots from "./sections/Screenshots";
import Video from "./sections/Video";
import Separator from "../../components/separator/Separator";
import Border from "../../components/border/Border";

export default function Mooncello(): JSX.Element {
  return (
    <Container>
      <Border src="/shapes/corner-triangle.svg" />
      <Header />

      <About />

      <Separator src="/shapes/triangle.svg" />

      <Technologies />

      <Separator src="/shapes/triangle.svg" />

      <Screenshots />

      <Separator src="/shapes/triangle.svg" />

      <Video />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;
