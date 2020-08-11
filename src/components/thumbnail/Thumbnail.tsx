import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import Breakpoints from "../../breakpoints";

interface Props {
  src: string;
  text?: string;
  onOpen?: () => void;
  className?: string;
}

export default function Thumbnail(props: Props): JSX.Element {
  const { src, text, onOpen, className } = props;

  return (
      <Container
          className={`${className} thumbnail`}
          onClick={() => onOpen && onOpen()}
          pointer={onOpen !== undefined}
      >
        <Image className="thumbnail__image" src={src}></Image>
        {text && <Label>{text}</Label>}
      </Container>
  );
}

const Container = styled.div<{ pointer?: boolean }>`
  display: flex;
  flex-flow: column;
  align-items: center;
  cursor: ${(props: { pointer?: boolean }) =>
    props.pointer ? "pointer" : "initial"};
`;

const Image = styled.img`
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "25vw" : "20vw"}`
    : "7vw"};
  height: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "25vw" : "20vw"}`
    : "7vw"};
  border: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "0.8vw" : "0.5vw"}`
    : "0.2vw"}
    solid ${colors.dark.primary};
  border-radius: 10px;
  padding: 1vw;
`;

const Label = styled.span`
  color: ${colors.dark.primary};
  margin-top: 1rem;
  font-weight: bold;
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "5vw" : "4vw"}`
    : "1.2vw"};
`;
