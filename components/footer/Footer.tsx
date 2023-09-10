import React from "react";
import styled from "styled-components";
import BubbleLink from "../bubble-link/BubbleLink";
import { useModalStore } from "../../store/modal";
import ContactModal from "../modal/ContactModal";
import CountrySelector from "@vincentgraul/react-components/country-selector";

export default function Footer(): JSX.Element {
  const { showModal } = useModalStore();

  const displayEmailModal = () => {
    showModal(ContactModal);
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

      <LanguageSelector languages={["fr", "gb"]} />
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
  min-height: 20vw;

  @media ${theme.breakpoints.portrait} {
    justify-content: space-evenly;
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
  display: flex;
  align-items: center;
  margin: auto;
`;

const LanguageSelector = styled(CountrySelector)`
  margin-right: 3vw;
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
