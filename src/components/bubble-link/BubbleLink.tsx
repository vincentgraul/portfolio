import React, { HTMLProps } from "react";
import styled from "styled-components";
import Breakpoints from "../../breakpoints";

interface Props extends HTMLProps<HTMLAnchorElement> {
  src: string;
  className?: string;
}

export default function BubbleLink(props: Props): JSX.Element {
  const { className, src, href, target } = props;

  return (
    <Container className={`${className}`} href={href} target={target}>
      <Image className="image" src={src} />
    </Container>
  );
}

const Container = styled.a``;

const Image = styled.img`
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "10vh" : "10vw"}`
    : "6vw"};
  height: auto;
`;
