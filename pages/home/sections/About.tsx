import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Section from "../../../components/section/Section";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import { Theme } from "../../_app";

export default function About(): JSX.Element {
  const { resolution } = useContext<Theme>(ThemeContext);

  return (
    <Section separator>
      <Card
        full={resolution.isTabletOrLower}
        radius={resolution.isLaptopOrUpper}
      >
        <Text>
          Bonjour, je suis Vincent Graul. <br /> <br />
          Je suis passionné par le développement web et d’applications mobiles.
          J’aime me lancer des défis, me remettre en question et concrétiser les
          projets dans lesquels je m’investis, qu’ils soient personnels ou
          professionnels. <br />
          Dans ma vie de développeur j’accorde une place importante à la veille,
          aux bonnes pratiques ainsi qu’aux tests logiciels. <br />
          <br />
          Pour finir, j’aime échanger sur ma passion et mon expérience que ce
          soit entre collègues, avec des personnes novices, ou autres…
        </Text>

        <CVButton as="a" href="/cv.pdf" target="_blank">
          Voir mon CV
        </CVButton>
      </Card>
    </Section>
  );
}

const Text = styled.p`
  ${({ theme }) => `
font-size: 2vw;
word-spacing: 0.5vw;

@media ${theme.breakpoints.tabletOrLower} {
  font-size: 4vw;

  @media ${theme.breakpoints.portrait} {
    font-size: 7vw;
  }
}
`}
`;

const CVButton = styled(Button)`
  ${({ theme }) => `
margin-top: 3vw;
font-size: 1.5vw;
align-self: flex-start;

@media ${theme.breakpoints.tabletOrLower} {
  font-size: 3vw;
  margin-top: 8vw;
  align-self: center;

  @media ${theme.breakpoints.portrait} {
    font-size: 6vw;
    margin-top: 8vh;
  }
}
`}
`;
