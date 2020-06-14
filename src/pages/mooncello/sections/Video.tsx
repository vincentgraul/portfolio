import React from "react";
import styled from "styled-components";
import Section, { Orientation } from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Breakpoints from "../../../breakpoints";

export default function Video(): JSX.Element {
  return (
    <Section
      card={{
        children: (
          <MooncelloVideo src="/mooncello-video.mov" controls></MooncelloVideo>
        ),
        renderHeader: () => <HeaderWithTitle title="Vidéo" />,
        noBorder: Breakpoints.isTabletOrLower(),
        noRadius: Breakpoints.isTabletOrLower(),
      }}
      orientation={
        Breakpoints.isTabletOrLower() ? undefined : Orientation.RIGHT
      }
      renderImage={() =>
        Breakpoints.isTabletOrLower() ? null : (
          <Image src="shapes/diamonds.svg" />
        )
      }
    />
  );
}

const MooncelloVideo = styled.video`
  width: 100%;
`;

const Image = styled.img`
  width: 10%;
`;
