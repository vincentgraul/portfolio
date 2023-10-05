import React from "react";
import styled, { useTheme } from "styled-components";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Card from "../../../components/card/Card";
import Row from "../../../components/tag/Row";
import Label from "../../../components/tag/Label";
import Tag from "../../../components/tag/Tag";
import List from "../../../components/tag/List";
import { useTranslation } from "next-i18next";

export default function Technologies(): JSX.Element {
  const { resolution } = useTheme();
  const { t } = useTranslation("mooncello");

  return (
    <Section animation>
      <Card
        renderHeader={() => <HeaderWithTitle title={t("technologies.title")} />}
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper}
      >
        <Container>
          <Row>
            <Label>{t("common:languages")}</Label>
            <List flex={6}>
              <Tag>TypeScript</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>SQL</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("common:front-end")}</Label>
            <List flex={6}>
              <Tag>React</Tag>
              <Tag>Redux</Tag>
              <Tag>Styled-Components</Tag>
              <Tag>Flexbox</Tag>
              <Tag>Formik</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("common:back-end")}</Label>
            <List flex={6}>
              <Tag>Node</Tag>
              <Tag>Nest</Tag>
              <Tag>TypeOrm</Tag>
            </List>
          </Row>

          <Row>
            <Label>{t("common:test")}</Label>
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
