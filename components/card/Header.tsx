import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  center?: boolean;
  className?: string;
}

export default function HeaderWithTitle(props: Props): JSX.Element {
  const { className, title, ...rest } = props;

  return (
    <Header className={`${className}`} {...rest}>
      <Title>{title}</Title>
    </Header>
  );
}

const Header = styled.div<{ center?: boolean }>`
  ${({ theme, center }) => `
display: flex;
align-self: ${center ? "center" : "initial"};
margin-bottom: 8vw;

@media ${theme.breakpoints.tabletOrLower} {
  margin-bottom: 7vw;

  @media ${theme.breakpoints.portrait} {
    margin-bottom: 5vh;
  }
}
`}
`;

const Title = styled.h3`
  ${({ theme }) => `
border-bottom: 0.3vw solid ${theme.colors.dark.secondary};
padding-bottom: 1vw;
font-size: 3vw;

@media ${theme.breakpoints.tabletOrLower} {
  font-size: 6vw;
  padding-bottom: 2vw;
  border-width: 0.5vw;

  @media ${theme.breakpoints.portrait} {
    font-size: 8vw;
    padding-bottom: 2vh;
    border-width: 0.5vh;
  }
}
`}
`;
