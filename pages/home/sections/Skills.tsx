import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Card from "../../../components/card/Card";
import { Theme } from "../../_app";
import Tag from "../../../components/tag/Tag";
import Row from "../../../components/tag/Row";
import Label from "../../../components/tag/Label";
import List from "../../../components/tag/List";

export default function Skills(): JSX.Element {
  const { resolution } = useContext<Theme>(ThemeContext);

  return (
    <Section animation>
      <Card
        renderHeader={() => <HeaderWithTitle title="Mes compétences" center />}
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper}
      >
        <Container>
          <Row>
            <Label>Langages</Label>
            <List>
              <Tag>TypeScript</Tag>
              <Tag>JavaScript</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>SQL</Tag>
            </List>
          </Row>

          <Row>
            <Label>
              Technologies
              {resolution?.isTabletOrLower ? " " : <br />}
              front-end
            </Label>
            <List>
              <Tag>React</Tag>
              <Tag>Redux</Tag>
              <Tag>Next</Tag>
              <Tag>Styled-Components</Tag>
              <Tag>Flexbox</Tag>
            </List>
          </Row>

          <Row>
            <Label>
              Technologies
              {resolution?.isTabletOrLower ? " " : <br />}
              back-end
            </Label>
            <List>
              <Tag>Node</Tag>
              <Tag>Nest</Tag>
              <Tag>Express</Tag>
            </List>
          </Row>

          <Row>
            <Label>
              Technologies
              {resolution?.isTabletOrLower ? " " : <br />}
              mobiles
            </Label>
            <List>
              <Tag>React Native</Tag>
              <Tag>Expo</Tag>
            </List>
          </Row>

          <Row>
            <Label>
              Technologies
              {resolution?.isTabletOrLower ? " " : <br />}
              de test
            </Label>
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
