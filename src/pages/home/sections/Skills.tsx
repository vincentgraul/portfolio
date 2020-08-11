import React from "react";
import styled from "styled-components";
import Section, { Orientation } from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import colors from "../../../colors";
import Breakpoints from "../../../breakpoints";

export default function Skills(): JSX.Element {
    return (
        <Section
            card={{
                renderHeader: () => <HeaderWithTitle title="Mes compétences" />,
                children: (
                    <Container>
                        <Line>
                            <Label>Langages</Label>
                            <TagContainer>
                                <Tag>TypeScript</Tag>
                                <Tag>JavaScript</Tag>
                                <Tag>HTML</Tag>
                                <Tag>CSS</Tag>
                            </TagContainer>
                        </Line>

                        <Line>
                            <Label>
                                Technologies
                                {Breakpoints.isTabletOrLower() ? " " : <br />}
                                front-end
                            </Label>
                            <TagContainer>
                                <Tag>React</Tag>
                                <Tag>Redux</Tag>
                                <Tag>Styled-Components</Tag>
                                <Tag>Flexbox</Tag>
                            </TagContainer>
                        </Line>

                        <Line>
                            <Label>
                                Technologies
                                {Breakpoints.isTabletOrLower() ? " " : <br />}
                                back-end
                            </Label>
                            <TagContainer>
                                <Tag>Node</Tag>
                                <Tag>Nest</Tag>
                                <Tag>Express</Tag>
                            </TagContainer>
                        </Line>

                        <Line>
                            <Label>
                                Technologies
                                {Breakpoints.isTabletOrLower() ? " " : <br />}
                                mobiles
                            </Label>
                            <TagContainer>
                                <Tag>React Native</Tag>
                                <Tag>Expo</Tag>
                            </TagContainer>
                        </Line>
                    </Container>
                ),
                noBorder: Breakpoints.isTabletOrLower(),
                noRadius: Breakpoints.isTabletOrLower(),
            }}
            orientation={Breakpoints.isTabletOrLower() ? undefined : Orientation.LEFT}
            renderImage={() =>
                Breakpoints.isTabletOrLower() ? null : (
                    <Image src="/shapes/blocks.svg" />
                )
            }
        ></Section>
    );
}

const Container = styled.div`
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "6vw" : "5vw"}`
    : "2vw"};
`;

const Line = styled.div`
  display: flex;
  flex-flow: ${Breakpoints.isTabletOrLower() ? "column" : "row"};
  align-items: center;
  margin-bottom: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "2.5vh" : "2.5vw"}`
    : "2.5vw"};
`;

const Label = styled.span`
  flex: 1;
  margin-bottom: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "3vh" : "5vw"}`
    : "2vw"};
`;

const TagContainer = styled.div`
  ${Breakpoints.isTabletOrLower() ? "align-self: flex-start" : "flex: 3"};
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem;
  background-color: ${colors.primary};
  font-weight: bold;
  color: ${colors.light.primary};
  border: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "0.9vw" : "0.6vw"}`
    : "0.2vw"}
    dashed black;
  margin: ${Breakpoints.isTabletOrLower()
    ? `0 2vw ${Breakpoints.isPortrait() ? "2vh" : "2vw"} 0`
    : "0 1vw 0 0"};
`;

const Image = styled.img`
  width: 8%;
`;
