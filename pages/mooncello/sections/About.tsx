import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Card from "../../../components/card/Card";
import Section from "../../../components/section/Section";
import { useTranslation, Trans } from "react-i18next";

export default function About(): JSX.Element {
  const { resolution } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Section animation>
      <Card $full={resolution.isTabletOrLower} $radius={resolution.isLaptopOrUpper}>
        <Container>
          <p>
            <Trans i18nKey="mooncello:about.text" />
          </p>

          <ul>
            <Bullet>{t("mooncello:about.first-bullet")}</Bullet>
            <Bullet>{t("mooncello:about.second-bullet")}</Bullet>
            <Bullet>{t("mooncello:about.third-bullet")}</Bullet>
            <Bullet>{t("mooncello:about.fourth-bullet")}</Bullet>
            <Bullet> {t("mooncello:about.fifth-bullet")}</Bullet>
            <Bullet>{t("mooncello:about.sixth-bullet")}</Bullet>
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
