import React from "react";
import styled from "styled-components";
import Header from "../../templates/header/Header";
import Screenshots from "../../templates/screenshots/Screenshots";
import About from "./sections/About";
import Technologies from "./sections/Technologies";

export default function CountriesQuiz(): JSX.Element {
  return (
    <Container>
      <Header
        title="Countries Quiz"
        subtitle="Application Mobile"
        logo="/logo/countries-quiz.svg"
      />
      <About />
      <Technologies />
      <Screenshots
        size={35}
        values={[
          "/img/countries-quiz/home.png",
          "/img/countries-quiz/flags.png",
          "/img/countries-quiz/capitales.png",
          "/img/countries-quiz/score.png",
        ]}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;
