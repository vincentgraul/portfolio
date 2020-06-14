import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colors from "./colors";
import Footer from "./pages/home/sections/Footer";

export default function App() {

  return (
    <Container>
      <h1>App</h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.light.primary};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  justify-content: space-between;
`;