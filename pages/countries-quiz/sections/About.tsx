import React, { Fragment, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Link from "next/link";
import Card from "../../../components/card/Card";
import Section from "../../../components/section/Section";
import { Theme } from "../../_app";

export default function About(): JSX.Element {
  const { resolution } = useContext<Theme>(ThemeContext);

  return (
    <Section animation>
      <Card
        full={resolution.isTabletOrLower}
        radius={resolution.isLaptopOrUpper}
      >
        <Fragment>
          <Text>
            Countries Quiz est une application mobile qui vous propose d'évaluer
            vos connaissances sur les différents pays du monde.
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
            <Link href="/mooncello">
              <MooncelloLink>Mooncello</MooncelloLink>
            </Link>
            , un CMS Headless que j'ai réalisé.
          </Text>
        </Fragment>
      </Card>
    </Section>
  );
}

const Text = styled.p`
  ${({ theme }) => `
  word-spacing: 0.5vw;
  font-size: 2vw;

  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 4vw;

    @media ${theme.breakpoints.portrait} {
      font-size: 7vw;
    }
  }`}
`;

const MooncelloLink = styled.a`
  ${({ theme }) => `
  color: ${theme.colors.dark.primary};
  font-weight: bold;
  cursor: pointer;
`}
`;
