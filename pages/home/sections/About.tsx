import React, { useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";
import Section from "../../../components/section/Section";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import { Theme } from "../../_app";
import { useModalStore } from "../../../store/modal";
import ContactModal from "../../../components/modal/ContactModal";
import { useTranslation, Trans } from "next-i18next";

export default function About(): JSX.Element {
  const { resolution } = useContext<Theme>(ThemeContext);
  const { showModal } = useModalStore();
  const { t } = useTranslation();

  return (
    <Section animation>
      <Card
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper ? true : undefined}
      >
        <Text>
          <Trans i18nKey="home:about.text" />
        </Text>

        <ButtonContainer>
          <ContactButton onClick={() => showModal(ContactModal)}>
            {t("home:about.button")}
          </ContactButton>
        </ButtonContainer>
      </Card>
    </Section>
  );
}

const Text = styled.p`
  ${({ theme }) => `
font-size: 2vw;
word-spacing: 0.5vw;

@media ${theme.breakpoints.tabletOrLower} {
  font-size: 4vw;

  @media ${theme.breakpoints.portrait} {
    font-size: 7vw;
  }
}
`}
`;

const ButtonContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    margin-top: 3vw;

    @media ${theme.breakpoints.tabletOrLower} {
      margin-top: 8vw;
    
      @media ${theme.breakpoints.portrait} {
        margin-top: 8vh;
      }
    }
`}
`;
const ContactButton = styled(Button)`
  ${({ theme }) => `
    font-size: 1.5vw;

    @media ${theme.breakpoints.tabletOrLower} {
      font-size: 3vw;

    @media ${theme.breakpoints.portrait} {
      font-size: 6vw;
    }
  }
`}
`;
