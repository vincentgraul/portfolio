import React from "react";
import styled from "styled-components";
import Section, { Orientation } from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Breakpoints from "../../../breakpoints";

export default function Technologies(): JSX.Element {
  return (
    <Section
      card={{
        renderHeader: () => <HeaderWithTitle title="Technologies utilisées" />,
        children: (
          <Container>
            <List>
              <li> React Native</li>
              <li>Expo</li>
              <li>TypeScript </li>
              <li> Styled-Components </li>
              <li> SQLite </li>
            </List>
          </Container>
        ),
        noBorder: Breakpoints.isTabletOrLower(),
        noRadius: Breakpoints.isTabletOrLower(),
      }}
      orientation={
        Breakpoints.isTabletOrLower() ? undefined : Orientation.RIGHT
      }
      renderImage={() =>
        Breakpoints.isTabletOrLower() ? null : (
          <Image src="/shapes/polygons.svg" />
        )
      }
    ></Section>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: ${Breakpoints.isTabletOrLower() ? "column" : "row"};
  justify-content: center;
`;

const Image = styled.img`
  width: 8%;
`;

const List = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
  list-style-type: none;
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "6vw" : "4vw"}`
    : "1.9vw"};
  padding: 0;
  margin: 0;
`;
