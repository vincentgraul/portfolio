import React from "react";
import styled, { useTheme } from "styled-components";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Card from "../../../components/card/Card";
import Tag from "../../../components/tag/Tag";
import Row from "../../../components/tag/Row";
import Label from "../../../components/tag/Label";
import List from "../../../components/tag/List";
import { useTranslation } from "next-i18next";

export default function Skills(): JSX.Element {
  const { resolution } = useTheme();
  const { t } = useTranslation();

  return (
    <Section animation>
      <Card
        renderHeader={() => <HeaderWithTitle title={t("home:skills.title")} />}
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper}
      >
        <Container>
          <Row>
            <Label>{t("common:language")}</Label>
            <List>
              <Tag>TypeScript</Tag>
              <Tag>JavaScript</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>SQL</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("common:front-end")}</Label>
            <List>
              <Tag>React</Tag>
              <Tag>Redux</Tag>
              <Tag>Next</Tag>
              <Tag>Styled-Components</Tag>
              <Tag>Flexbox</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("common:back-end")}</Label>
            <List>
              <Tag>Node</Tag>
              <Tag>Nest</Tag>
              <Tag>Express</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("common:mobile")}</Label>
            <List>
              <Tag>React Native</Tag>
              <Tag>Expo</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("common:test")}</Label>
            <List>
              <Tag>Jest</Tag>
              <Tag>Testing Library</Tag>
            </List>
          </Row>
        </Container>
      </Card>
    </Section>
  );
}

const Container = styled.div`
  ${({ theme }) => `
  font-size: 2vw;

  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 4vw;

    @media ${theme.breakpoints.portrait} {
      font-size: 6vw;
    }
  }
`}
`;
