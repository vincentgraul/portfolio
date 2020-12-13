import React, { Fragment } from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <About />
      <Skills />
      <Projects />
    </Fragment>
  );
}
