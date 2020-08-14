import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Section, { Orientation } from "../../../components/section/Section";
import Breakpoints from "../../../breakpoints";
import colors from "../../../colors";

export default function About(): JSX.Element {
  return (
    <Section
      card={{
        children: (
          <Fragment>
            <Text>
              Countries Quiz est une application mobile qui vous propose
              d'évaluer vos connaissances sur les différents pays du monde.
              <br />
              Actuellement, deux quiz sont proposés : les drapeaux et les
              capitales.
              <br />
              <br />
              Étant curieux d'histoire et de géographie, l'idée de cette
              application m'est venue naturellement.
              <br />
              De plus, j'ai entrepris ce projet pour me perfectionner dans
              l'univers du mobile ainsi que mes compétences en React Native.
              <br />
              <br />
              Pour finir, les données de Countries Quiz sont administrées par{" "}
              <MooncelloLink to="/mooncello">Mooncello</MooncelloLink>, un CMS
              Headless que j'ai réalisé.
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

const MooncelloLink = styled(Link)`
  color: ${colors.dark.primary};
  font-weight: bold;
`;
