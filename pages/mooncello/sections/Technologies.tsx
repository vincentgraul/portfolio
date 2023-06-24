import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Card from "../../../components/card/Card";
import Row from "../../../components/tag/Row";
import Label from "../../../components/tag/Label";
import Tag from "../../../components/tag/Tag";
import List from "../../../components/tag/List";

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
            <Label>Langage</Label>
            <List flex={6}>
              <Tag>TypeScript</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>SQL</Tag>
            </List>
          </Row>

          <Row>
            <Label>Front-end</Label>
            <List flex={6}>
              <Tag>React</Tag>
              <Tag>Redux</Tag>
              <Tag>Styled-Components</Tag>
              <Tag>Flexbox</Tag>
              <Tag>Formik</Tag>
            </List>
          </Row>

          <Row>
            <Label>Back-end</Label>
            <List flex={6}>
              <Tag>Node</Tag>
              <Tag>Nest</Tag>
              <Tag>TypeOrm</Tag>
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
