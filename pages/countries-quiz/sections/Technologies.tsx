import React from "react";
import styled, { useTheme } from "styled-components";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Card from "../../../components/card/Card";
import Row from "../../../components/tag/Row";
import Label from "../../../components/tag/Label";
import List from "../../../components/tag/List";
import Tag from "../../../components/tag/Tag";
import { useTranslation } from "next-i18next";

export default function Technologies(): JSX.Element {
  const { resolution } = useTheme();
  const { t } = useTranslation("common");

  return (
    <Section animation>
      <Card
        renderHeader={() => <HeaderWithTitle title={t("technologies")} />}
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper}
      >
        <Container>
          <Row>
            <Label>{t("mobile")}</Label>
            <List flex={6}>
              <Tag>React Native</Tag>
              <Tag>Expo</Tag>
              <Tag>TypeScript </Tag>
              <Tag>Styled-Components</Tag>
              <Tag>SQLite</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("back-end")}</Label>
            <List flex={6}>
              <Tag>Mooncello</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("test")}</Label>
            <List flex={6}>
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
    font-size: 5vw;

    @media ${theme.breakpoints.portrait} {
      font-size: 6vw;
    }
  }
`}
`;
