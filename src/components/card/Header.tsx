import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import Breakpoints from "../../breakpoints";

interface Props {
  title: string;
  className?: string;
}

export default function HeaderWithTitle(props: Props): JSX.Element {
  const { className, title } = props;

  return (
    <Header className={`${className}`}>
      <Title>{title}</Title>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "5vh" : "5vw"}`
    : "2vw"};
`;

const Title = styled.h3`
  border-bottom: 3px solid ${colors.dark.primary};
  padding-bottom: 1rem;
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "7vw" : "6vw"}`
    : "3vw"};
`;
