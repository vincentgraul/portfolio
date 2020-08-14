import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import colors from "./colors";
import Footer from "./pages/home/sections/Footer";
import Home from "./pages/home/Home";
import Mooncello from "./pages/mooncello/Mooncello";
import ScrollToTop from "./ScrollToTop";
import CountriesQuiz from "./pages/countries-quiz/CountriesQuiz";

export default function App() {
  useEffect(() => {
    window.addEventListener("orientationchange", () => {
      window.location.reload();
    });
  }, []);

  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/mooncello">
            <ScrollToTop />
            <Mooncello />
          </Route>

          <Route path="/countries-quiz">
            <ScrollToTop />
            <CountriesQuiz />
          </Route>

          <Route>
            <ScrollToTop />
            <Home />
          </Route>
        </Switch>
      </Router>

      <StyledFooter />
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

const StyledFooter = styled(Footer)`
  margin-top: 10vh;
`;
