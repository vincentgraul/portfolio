import React from "react";
import styled, { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  logo: string;
}

export default function Header(props: Props): JSX.Element {
  const { title, subtitle, logo } = props;
  const { resolution } = useTheme();
  const router = useRouter();

  return (
    <Container>
      <Arrow
        src="/icons/arrow/green/left-arrow.svg"
        onClick={() => router.push("/")}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      />
      <TitleContainer>
        <Title>{title}</Title>
        {resolution.isTabletOrLower && (
          <SubTitle
            animate={{
              x: "50vw",
              opacity: 1,
            }}
            transition={{ ease: "easeOut", duration: 0.7 }}
          >
            {subtitle}
          </SubTitle>
        )}
        <Logo src={logo} />
      </TitleContainer>
      {resolution.isLaptopOrUpper && (
        <SubTitle
          animate={{
            x: "30vw",
            opacity: 1,
          }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          {subtitle}
        </SubTitle>
      )}
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

const Arrow = styled(motion.img)`
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

const SubTitle = styled(motion.h2)`
  ${({ theme }) => `
  font-size: 3.7vw;
  margin: 0;
  position: relative;
  left: -30vw;
  opacity: 0;

  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 5vw;
    margin: 2vw 0 6vw 0;
    left: -50vw;

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
