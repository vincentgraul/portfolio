import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Screenshots from "../../components/screenshots/Screenshots";
import { serverSideUA, ServerSideUAProps } from "../../utils/serverSideUA";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Video from "./sections/Video";

export default function Mooncello(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title="Mooncello" subtitle="Headless CMS" logo="/logo/mooncello.svg" />
      <About />
      <Technologies />
      <Screenshots
        title={t("common:images")}
        animation
        values={[
          "/img/mooncello/setup_welcome.png",
          "/img/mooncello/setup_configuration.png",
          "/img/mooncello/sign_up.png",
          "/img/mooncello/sign_in.png",
          "/img/mooncello/tables.png",
          "/img/mooncello/table_columns.png",
          "/img/mooncello/table_entries.png",
          "/img/mooncello/table_entries_with_filter.png",
          "/img/mooncello/users.png",
          "/img/mooncello/files.png",
        ]}
      />
      <Video />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<ServerSideUAProps> = async (
  context: GetServerSidePropsContext
) => ({
  props: {
    ...(await serverSideUA(context)),
    ...(await serverSideTranslations(context.locale!, ["common", "mooncello"])),
  },
});

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;
