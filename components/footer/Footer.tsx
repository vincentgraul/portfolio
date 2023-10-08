import React from "react";
import styled, { useTheme } from "styled-components";
import BubbleLink from "../bubble-link/BubbleLink";
import { useModalStore } from "../../store/modal";
import ContactModal from "../modal/ContactModal";
import CountrySelector from "@vincentgraul/react-components/country-selector";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Footer(): JSX.Element {
  const { showModal } = useModalStore();
  const { resolution } = useTheme();
  const router = useRouter();
  const { i18n } = useTranslation();

  const displayEmailModal = () => {
    showModal(ContactModal);
  };

  const handleChangeLanguage = (country: string) => {
    let language: string = country;

    if (country === "gb") {
      language = "en";
    }

    router.push(router.route, router.route, { locale: language });
  };

  return (
    <Container>
      <SocialContainer>
        <Linkedin
          name="linkedin"
          href="http://www.linkedin.com/in/vincentgraul"
          target="_blank"
          src="/logo/social/linkedin.svg"
        />

        <Github
          name="github"
          href="https://github.com/vincentgraul"
          target="_blank"
          src="/logo/social/github.svg"
        />

        <Mail href={void 0} name="mail" src="/logo/social/mail.svg" onClick={displayEmailModal} />

        <Medium
          name="medium"
          href="https://medium.com/@vincentgraul"
          target="_blank"
          src="/logo/social/medium.svg"
        />
      </SocialContainer>

      <LanguageSelector
        value={i18n.language === "en" ? "gb" : i18n.language}
        languages={["fr", "gb"]}
        flagWidth={resolution.isTabletOrLower ? "7vw" : "3vw"}
        onChange={(option) => handleChangeLanguage(option.value)}
      />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => `
display: flex;
align-items: center;
background-color: ${theme.colors.primary};
min-height: 20vh;
border-top: 0.2vw dashed ${theme.colors.dark.secondary};
border-width: 0.3vw;
padding: 2vw 0;

@media ${theme.breakpoints.tabletOrLower} {
  flex-direction: column;
  min-height: 20vw;
  padding: 5vw 0;

  @media ${theme.breakpoints.portrait} {
    min-height: 20vh;
    border-width: 0.8vw;
  }

  @media ${theme.breakpoints.landscape} {
    border-width: 0.5vw;
  }
}
`}
`;

const SocialContainer = styled.div`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  margin: auto;

  @media ${theme.breakpoints.tabletOrLower} {
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5vw;
  }
`}
`;

const LanguageSelector = styled(CountrySelector)`
  ${({ theme }) => `
  margin-right: 3vw;

  @media ${theme.breakpoints.tabletOrLower} {
    margin-top: 10vw;
  }
`}
`;

const Linkedin = styled(BubbleLink)`
  ${({ theme }) => `
margin-right: 3vw;

@media ${theme.breakpoints.tabletOrLower} {
  margin-right: 3vw;

  @media ${theme.breakpoints.portrait} {
    margin-right: 0;
  }
}
`}
`;

const Github = styled(BubbleLink)`
  ${({ theme }) => `
margin: 0 3vw;

@media ${theme.breakpoints.tabletOrLower} {
  margin: 0 3vw;

  @media ${theme.breakpoints.portrait} {
    margin: 0;
  }
}
`}
`;

const Medium = styled(BubbleLink)`
  ${({ theme }) => `
  margin-left: 5vw;

  @media ${theme.breakpoints.tabletOrLower} {
    margin-left: 5vw;
  
    @media ${theme.breakpoints.portrait} {
      margin-left: 0;
    }
  }
  `}
`;

const Mail = styled(BubbleLink)`
  ${({ theme }) => `
margin-left: 3vw;
cursor: pointer;

@media ${theme.breakpoints.tabletOrLower} {
  margin-left: 3vw;

  @media ${theme.breakpoints.portrait} {
    margin-left: 0;
  }
}
`}
`;
