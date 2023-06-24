import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
      $pointer={onOpen !== undefined}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.5 }}
    >
      <Image className="thumbnail__image" src={src} alt={text}></Image>
      {text && <Label>{text}</Label>}
    </Container>
  );
}

const Container = styled(motion.div)<{ $pointer?: boolean }>`
  display: flex;
  flex-flow: column;
  align-items: center;
  cursor: ${({ $pointer }) => ($pointer ? "pointer" : "initial")};
`;

const Image = styled.img`
  ${({ theme }) => `
  width: 9vw;
  height: 9vw;
  border: 0.25vw solid ${theme.colors.dark.secondary};
  border-radius: 1.2vw;
  padding: 1vw;
  &:hover {
    background-color: ${theme.colors.light.secondary};
  }

  @media ${theme.breakpoints.tabletOrLower} {
    width: 20vw;
    height: 20vw;
    border-width: 0.5vw;

    @media ${theme.breakpoints.portrait} {
      width: 30vw;
      height: 30vw;
      padding: 3vw;
      border-width: 0.8vw;
      border-radius: 1.2vh;
    }
  }
`}
`;

const Label = styled.span`
  ${({ theme }) => `
color: ${theme.colors.dark.secondary};
margin-top: 1vw;
font-size: 1.4vw;
font-weight: bold;

@media ${theme.breakpoints.tabletOrLower} {
  font-size: 4vw;
  margin-top: 3vw;

  @media ${theme.breakpoints.portrait} {
    font-size: 5vw;
    margin-top: 2vh;
  }
}
`}
`;
