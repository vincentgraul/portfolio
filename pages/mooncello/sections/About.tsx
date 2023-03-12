import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Card from "../../../components/card/Card";
import Section from "../../../components/section/Section";

export default function About(): JSX.Element {
  const { resolution } = useContext(ThemeContext);

  return (
    <Section animation>
      <Card
        full={resolution.isTabletOrLower}
        radius={resolution.isLaptopOrUpper}
      >
        <Container>
          <p>
            Mooncello est un CMS Headless ayant pour but de faciliter la
            création et la gestion de vos APIs.
            <br />
            Le panel d'administration permet également le contrôle des
            administrateurs, la gestion de fichiers et dans un futur
            l'utilisation de plugins.
            <br />
            J’ai entrepris la réalisation de ce projet en autonomie après la fin
            de mes études.
          </p>

          <p>
            La réalisation de ce projet a été découpée en plusieurs phases :
          </p>

          <ul>
            <Bullet>
              Tout d’abord une réflexion sur les fonctionalités, les
              technologies les mieux adaptées, la priorisation des tâches…
            </Bullet>
            <Bullet>
              Une phase de recherche graphique et la conception de maquettes
              réalisées avec Sketch
            </Bullet>
            <Bullet>
              La mise en place d’un monorepo avec Lerna pour faciliter la
              communication entre les différents modules du projet
            </Bullet>
            <Bullet>
              Le développement du back-end avec Nest et l'écriture de tests
              unitaires et d'intégration avec Jest
            </Bullet>
            <Bullet>
              Le développement du CLI pour simplifier la gestion du projet
            </Bullet>
            <Bullet>
              Le développement du panel d'administration et de composants
              graphiques avec React et l'écriture de tests avec React Testing
              Library
            </Bullet>
          </ul>
        </Container>
      </Card>
    </Section>
  );
}

const Container = styled.div`
  ${({ theme }) => `
  font-size: 2vw;
  word-spacing: 0.5vw;
  
  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 4vw;
    
    @media ${theme.breakpoints.portrait} {
      font-size: 7vw;
    }
  }`}
`;

const Bullet = styled.li`
  margin: 3vw 0;
`;
