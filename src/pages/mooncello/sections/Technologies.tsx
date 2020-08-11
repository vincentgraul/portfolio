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
                        <Column>
                            <Title>Front-end</Title>
                            <List>
                                <li>React</li>
                                <li>Redux</li>
                                <li>TypeScript</li>
                                <li>Styled-Components</li>
                                <li>Flexbox</li>
                                <li>Formik</li>
                            </List>
                        </Column>

                        <BlocksLine
                            src={
                                Breakpoints.isTabletOrLower()
                                    ? "/shapes/blocks-line.svg"
                                    : "/shapes/vertical-blocks-line.svg"
                            }
                        />

                        <Column>
                            <Title>Back-end</Title>
                            <List>
                                <li>Node</li>
                                <li>Nest</li>
                                <li>TypeScript</li>
                                <li>TypeOrm </li>
                                <li>Jest</li>
                            </List>
                        </Column>
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

const Column = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
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
  margin-top: 3vw;
`;

const BlocksLine = styled.img`
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "70%" : "60%"}`
    : "2.5%"};
  margin: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "5vh auto" : "5vw auto"}`
    : "0 5vw 0 5vw"};
`;

const Title = styled.h4`
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "7vw" : "5vw"}`
    : "2.5vw"};
  margin: 0;
`;
