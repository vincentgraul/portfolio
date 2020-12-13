import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useRouter } from "next/router";

interface Props {
  title: string;
  subtitle: string;
  logo: string;
}

export default function Header(props: Props): JSX.Element {
  const { title, subtitle, logo } = props;
  const { resolution } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <Container>
      <Arrow src="/icons/left-arrow.svg" onClick={() => router.push("/")} />
      <TitleContainer>
        <Title>{title}</Title>
        {resolution.isTabletOrLower() && <SubTitle>{subtitle}</SubTitle>}
        <Logo src={logo} />
      </TitleContainer>
      {resolution.isLaptopOrUpper() && <SubTitle>{subtitle}</SubTitle>}
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => `
  margin-bottom: 6vh;
  padding: 2vw;

  @media ${theme.breakpoints.tabletOrLower} {
    padding: 0;
  }
`}
`;

const TitleContainer = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-flow: row;
  align-items: center;

  @media ${theme.breakpoints.tabletOrLower} {
    flex-flow: column;
  }
`}
`;

const Arrow = styled.img`
  ${({ theme }) => `
  width: 10vw;
  margin-bottom: 9vh;
  cursor: pointer;

  @media ${theme.breakpoints.tabletOrLower} {
    width: 15vw;

    @media ${theme.breakpoints.portrait} {
      width: 25vw;
    }
  }`}
`;

const Title = styled.h1`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 8vw;
  margin: 2vw 2.5vw 0 0;

  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 10vw;
    margin: 2vw 0;

    @media ${theme.breakpoints.portrait} {
      font-size: 16vw;
    }
  }`}
`;

const SubTitle = styled.h2`
  ${({ theme }) => `
  font-size: 3.7vw;
  margin: 0;

  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 5vw;
    margin: 2vw 0 6vw 0;

    @media ${theme.breakpoints.portrait} {
      font-size: 7.5vw;
      margin: 2vh 0 5vh 0;
    }
  }`}
`;

const Logo = styled.img`
  ${({ theme }) => `
  width: 8vw;
  margin: 0 0 0 2.5vw;

  @media ${theme.breakpoints.tabletOrLower} {
    width: 15vw;

    @media ${theme.breakpoints.portrait} {
      width: 25vw;
    }

    @media ${theme.breakpoints.landscape} {
      margin-bottom: 2vw;
    }
  }`}
`;
