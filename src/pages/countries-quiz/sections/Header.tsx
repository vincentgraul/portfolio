import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Breakpoints from "../../../breakpoints";

export default function Header(): JSX.Element {
  const history = useHistory();

  return (
    <Container>
      <Arrow src="/icons/left-arrow.svg" onClick={() => history.push("/")} />
      <TitleContainer>
        <Title>Countries Quiz</Title>
        {Breakpoints.isTabletOrLower() && (
          <SubTitle>Application Mobile</SubTitle>
        )}
        <Logo src="/logo/countries-quiz.svg" />
      </TitleContainer>
      {Breakpoints.isLaptopOrUpper() && <SubTitle>Application Mobile</SubTitle>}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 6vh;
  padding: ${Breakpoints.isTabletOrLower() ? "0" : "2rem"};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-flow: ${Breakpoints.isTabletOrLower() ? "column" : "row"};
  align-items: center;
`;

const Arrow = styled.img`
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "25vw" : "15vw"}`
    : "8vw"};
  margin-bottom: 9vh;
  cursor: pointer;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "16vw" : "10vw"}`
    : "8vw"};

  margin: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "2vw 0" : "2vw 0"}`
    : "2vw 0"};
  margin-right: ${Breakpoints.isTabletOrLower() ? "0" : "2.5vw"};
`;

const SubTitle = styled.h2`
  font-size: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "7.5vw" : "5vw"}`
    : "3.7vw"};
  margin: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "2vh 0 5vh 0" : "2vw 0 6vw 0"}`
    : "0"};
`;

const Logo = styled.img`
  width: ${Breakpoints.isTabletOrLower()
    ? `${Breakpoints.isPortrait() ? "25vw" : "15vw"}`
    : "8vw"};
  margin-left: ${Breakpoints.isTabletOrLower() ? "0" : "2.5vw"};
  margin-bottom: ${Breakpoints.isTabletOrLower() && Breakpoints.isLandscape()
    ? "2vw"
    : "0"};
`;
