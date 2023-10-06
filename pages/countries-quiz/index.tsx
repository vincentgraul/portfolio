import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Screenshots from "../../components/screenshots/Screenshots";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideUA, ServerSideUAProps } from "../../utils/serverSideUA";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CountriesQuiz(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Header
        title="Countries Quiz"
        subtitle={t("mobile-application")}
        logo="/logo/countries-quiz.svg"
      />
      <About />
      <Technologies />
      <Screenshots
        title={t("images")}
        size={35}
        values={[
          "/img/countries-quiz/home.png",
          "/img/countries-quiz/flags.png",
          "/img/countries-quiz/capitales.png",
          "/img/countries-quiz/score.png",
        ]}
      />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<ServerSideUAProps> = async (
  context: GetServerSidePropsContext
) => ({
  props: {
    ...(await serverSideUA(context)),
    ...(await serverSideTranslations(context.locale!, ["common", "countries-quiz", "contact"])),
  },
});

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;
