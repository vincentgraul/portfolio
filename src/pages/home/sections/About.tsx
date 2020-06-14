import React, { Fragment } from "react";
import styled from "styled-components";
import Section, { Orientation } from "../../../components/section/Section";
import Button from "../../../components/button/Button";
import Breakpoints from "../../../breakpoints";

export default function About(): JSX.Element {
  return (
    <Section
      card={{
        children: (
          <Container>
            <Text>
              Bonjour, je suis Vincent Graul. <br /> <br />
              Je suis passioné par le développement web et d’applications
              mobile. J’aime me lancer des défis, me remettre en question et
              concrétiser les projets dans lesquels je m’investis, qu’ils soient
              personnels ou professionnels. <br />
              Dans ma vie de développeur j’accorde une place importante à la
              veille, aux bonnes pratiques ainsi qu’aux tests logiciels. <br />
              <br />
              Pour finir, j’aime échanger sur ma passion et mon expérience que
              ce soit entre collègues, avec des personnes novices, ou autres…
            </Text>

            <CVButton as="a" href="/cv.pdf" target="_blank">
              Voir mon CV
            </CVButton>
          </Container>
        ),
        noBorder: Breakpoints.isTabletOrLower(),
        noRadius: Breakpoints.isTabletOrLower(),
      }}
      orientation={
        Breakpoints.isTabletOrLower() ? undefined : Orientation.RIGHT
      }
      renderImage={() =>
        Breakpoints.isTabletOrLower() ? null : <Image src="/shapes/oval.svg" />
      }
    ></Section>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: ${Breakpoints.isTabletOrLower() ? "center" : "flex-start"};
`;

const Text = styled.p`
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "7vw" : "4vw"}`
    : "2vw"};
  word-spacing: 0.5vw;
`;

const Image = styled.img`
  width: 5%;
`;

const CVButton = styled(Button)`
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "6vw" : "3vw"}`
    : "1.5vw"};
  margin-top: 2rem;
`;
