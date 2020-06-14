import React, { Fragment } from "react";
import styled from "styled-components";
import Section, { Orientation } from "../../../components/section/Section";
import Breakpoints from "../../../breakpoints";

export default function About(): JSX.Element {
  return (
    <Section
      card={{
        children: (
          <Fragment>
            <Text>
              Mooncello est un CMS Headless ayant pour but de faciliter la
              création et la gestion de vos APIs. <br />
              Le panel d'administration permet également le contrôle des
              administrateurs, la gestion de fichiers et dans un futur
              l'utilisation de plugins.
              <br />
              J’ai entrepris la réalisation de ce projet seul, en autonomie,
              aprés la fin de mes études.
            </Text>

            <Text>
              La réalisation de ce projet a été découpé en plusieurs phases :
              <List>
                <Bullet>
                  Tout d’abord une réfléxion sur les fonctionalitées, les
                  technologies les mieux adaptées, la priorisation des tâches…
                </Bullet>
                <Bullet>
                  Une phase de recherche graphique et la conception de maquettes
                  réalisées sur Sketch
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
                  Le développement du CLI pour simplifier la création d'un
                  nouveau projet avec Mooncello
                </Bullet>
                <Bullet>
                  Le développement du panel d'administration avec React
                </Bullet>
              </List>
            </Text>
          </Fragment>
        ),
        noBorder: Breakpoints.isTabletOrLower(),
        noRadius: Breakpoints.isTabletOrLower(),
      }}
      orientation={Breakpoints.isTabletOrLower() ? undefined : Orientation.LEFT}
      renderImage={() =>
        Breakpoints.isTabletOrLower() ? null : (
          <Image src="/shapes/blocks.svg" />
        )
      }
    ></Section>
  );
}

const Text = styled.p`
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "7vw" : "4vw"}`
    : "2vw"};
  word-spacing: 0.5vw;
`;

const Image = styled.img`
  width: 8%;
`;

const List = styled.ul``;

const Bullet = styled.li`
  margin: 3vw 0;
`;
