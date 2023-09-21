import React from "react";
import styled, { useTheme } from "styled-components";
import { useRouter } from "next/router";
import Section from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import Thumbnail from "../../../components/thumbnail/Thumbnail";
import Card from "../../../components/card/Card";
import { useTranslation } from "next-i18next";

export default function Projects(): JSX.Element {
  const { resolution } = useTheme();
  const { t } = useTranslation();

  const router = useRouter();

  return (
    <Section>
      <Card
        renderHeader={() => <HeaderWithTitle title={t("home:projects.title")} />}
        renderFooter={() => <FooterInformation>{t("home:projects.label")}</FooterInformation>}
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper}
      >
        <ProjectContainer>
          <Thumbnail
            src="/logo/mooncello.svg"
            text="Mooncello"
            onOpen={() => {
              router.push("/mooncello");
            }}
          />

          <Thumbnail
            src="/logo/countries-quiz.svg"
            text="Countries Quiz"
            onOpen={() => {
              router.push("/countries-quiz");
            }}
          />
        </ProjectContainer>
      </Card>
    </Section>
  );
}

const ProjectContainer = styled.div`
  ${({ theme }) => `
display: flex;
align-items: center;
.thumbnail:not(:first-child) {
  margin-left: 5vw;
}

@media ${theme.breakpoints.tabletOrLower} {
  flex-flow: column;
  justify-content: center;
  .thumbnail:not(:first-child) {
    margin: 7vw 0 0;
  }

  @media ${theme.breakpoints.portrait} {
    .thumbnail:not(:first-child) {
      margin: 5vh 0 0;
    }
  }
}
`}
`;

const FooterInformation = styled.span`
  ${({ theme }) => `
display: flex;
align-self: flex-end;
font-size: 1.2vw;
font-weight: bold;
color: ${theme.colors.dark.secondary};

@media ${theme.breakpoints.tabletOrLower} {
  align-self: center;
  font-size: 3vw;
  margin-top: 7vw;

  @media ${theme.breakpoints.portrait} {
    font-size: 5vw;
    margin-top: 6vh;
  }
}
`}
`;
