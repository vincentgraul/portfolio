import React, { useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";
import Section from "../../../components/section/Section";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import { Theme } from "../../_app";
import { useModalStore } from "../../../store/modal";
import ContactModal from "../../../components/modal/ContactModal";

export default function About(): JSX.Element {
  const { resolution } = useContext<Theme>(ThemeContext);
  const { showModal } = useModalStore();

  return (
    <Section animation>
      <Card
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper ? true : undefined}
      >
        <Text>
          Bonjour, je suis Vincent Graul. <br /> <br />
          Je suis passionné par le développement web et d’applications mobiles. J’aime me lancer des
          défis, me remettre en question et concrétiser les projets dans lesquels je m’investis,
          qu’ils soient personnels ou professionnels. <br />
          Dans ma vie de développeur j’accorde une place importante à la veille, aux bonnes
          pratiques ainsi qu’aux tests logiciels. <br />
          <br />
          Pour finir, j’aime échanger sur ma passion et mon expérience que ce soit entre collègues,
          avec des personnes novices, ou autres…
        </Text>

        <ButtonContainer>
          <CVButton onClick={() => window.open("/cv.pdf", "_blank")}>Voir mon CV</CVButton>
          <ContactButton onClick={() => showModal(ContactModal)}>Me contacter</ContactButton>
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

const ButtonStyles = css`
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

const CVButton = styled(Button)`
  ${ButtonStyles}
`;

const ContactButton = styled(Button)`
  ${ButtonStyles}
  margin-left: 3vw;
`;
