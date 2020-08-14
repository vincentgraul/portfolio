import React from "react";
import styled from "styled-components";
import About from "./sections/About";
import Header from "./sections/Header";
import Border from "../../components/border/Border";
import Separator from "../../components/separator/Separator";
import Technologies from "./sections/Technologies";
import Screenshots from "./sections/Screenshots";

export default function CountriesQuiz(): JSX.Element {
  return (
    <Container>
      <Border src="/shapes/corner-triangle.svg" />
      <Header />

      <About />

      <Separator src="/shapes/triangle.svg" />

      <Technologies />

      <Separator src="/shapes/triangle.svg" />

      <Screenshots />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;
