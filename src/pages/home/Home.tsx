import React, { Fragment } from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Separator from "../../components/separator/Separator";
import Border from "../../components/border/Border";

export default function Home(): JSX.Element {
    return (
        <Fragment>
            <Border src="/shapes/corner-triangle.svg" />
            <Header />

            <About />
            <Separator src="/shapes/triangle.svg" />

            <Skills />
            <Separator src="/shapes/triangle.svg" />

            <Projects />
        </Fragment>
    );
}
