import React, { Fragment } from "react";
import styled, { useTheme } from "styled-components";
import Link from "next/link";
import Card from "../../../components/card/Card";
import Section from "../../../components/section/Section";
import { Trans } from "next-i18next";

export default function About(): JSX.Element {
  const { resolution } = useTheme();

  return (
    <Section animation>
      <Card $full={resolution.isTabletOrLower} $radius={resolution.isLaptopOrUpper}>
        <Fragment>
          <Text>
            <Trans
              i18nKey="countries-quiz:about.text"
              components={[<MooncelloLink href="/mooncello" />]}
            />
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

const MooncelloLink = styled(Link)`
  ${({ theme }) => `
  color: ${theme.colors.dark.primary};
  font-weight: bold;
  cursor: pointer;
`}
`;
