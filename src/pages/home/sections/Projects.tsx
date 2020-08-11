import React from "react";
import styled from "styled-components";
import Section, { Orientation } from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Thumbnail from "../../../components/thumbnail/Thumbnail";
import { useHistory } from "react-router-dom";
import Breakpoints from "../../../breakpoints";

interface Props {
    className?: string;
}

export default function Projects(props: Props): JSX.Element {
    const { className } = props;

    const history = useHistory();

    return (
        <Section
            className={`${className}`}
            card={{
                renderHeader: () => <HeaderWithTitle title="Mes projets personnels" />,
                children: (
                    <ProjectContainer>
                        <Thumbnail
                            src="/logo/mooncello.svg"
                            text="Mooncello"
                            onOpen={() => {
                                history.push("/mooncello");
                            }}
                        />

                        <Thumbnail
                            src="/logo/countries-quiz.svg"
                            text="Countries Quiz"
                            onOpen={() => {
                                history.push("/countries-quiz");
                            }}
                        />
                    </ProjectContainer>
                ),
                renderFooter: () => (
                    <FooterInformation>D'autres projets à venir ...</FooterInformation>
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

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: ${Breakpoints.isTabletOrLower() ? "column" : "row"};
  align-items: center;
  justify-content: ${Breakpoints.isTabletOrLower() ? "center" : "flex-start"};
  .thumbnail:not(:first-child) {
    ${Breakpoints.isTabletOrLower()
    ? `margin-top: ${Breakpoints.isPortrait() ? "5vh" : "5vw"}`
    : "margin-left: 5vw"};
  }
`;

const Image = styled.img`
  width: 8%;
`;

const FooterInformation = styled.span`
  display: flex;
  justify-content: ${Breakpoints.isTabletOrLower() ? "center" : "flex-end"};
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "5vw" : "3vw"}`
    : "1.2vw"};
  font-weight: bold;
  margin-top: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "8vh" : "8vw"}`
    : "0"};
`;
