import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Card from "../../../components/card/Card";
import Row from "../../../components/tag/Row";
import Label from "../../../components/tag/Label";
import List from "../../../components/tag/List";
import Tag from "../../../components/tag/Tag";

export default function Technologies(): JSX.Element {
  const { resolution } = useContext(ThemeContext);

  return (
    <Section animation>
      <Card
        renderHeader={() => <HeaderWithTitle title="Technologies utilisées" center />}
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper}
      >
        <Container>
          <Row>
            <Label>Mobile</Label>
            <List flex={6}>
              <Tag>React Native</Tag>
              <Tag>Expo</Tag>
              <Tag>TypeScript </Tag>
              <Tag>Styled-Components</Tag>
              <Tag>SQLite</Tag>
            </List>
          </Row>

          <Row>
            <Label>Back-end</Label>
            <List flex={6}>
              <Tag>Mooncello</Tag>
            </List>
          </Row>

          <Row>
            <Label>Testing</Label>
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

/*

          <Column>
            <Title>Mobile</Title>
            <List>
              <li>React Native</li>
              <li>Expo</li>
              <li>TypeScript </li>
              <li>Styled-Components</li>
              <li>SQLite</li>
            </List>
          </Column>

          <BlocksLine
            src={
              resolution.isTabletOrLower
                ? "/shapes/blocks-line.svg"
                : "/shapes/vertical-blocks-line.svg"
            }
          />

          <Column>
            <Title>Back-end</Title>
            <List>
              <li>Mooncello</li>
            </List>
          </Column>

          <BlocksLine
            src={
              resolution.isTabletOrLower
                ? "/shapes/blocks-line.svg"
                : "/shapes/vertical-blocks-line.svg"
            }
          />

          <Column>
            <Title>Testing</Title>
            <List>
              <li>Jest</li>
              <li>Testing Library</li>
            </List>
          </Column>


*/
