import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideUA, ServerSideUAProps } from "../utils/serverSideUA";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "./home";

export const getServerSideProps: GetServerSideProps<ServerSideUAProps> = async (
  context: GetServerSidePropsContext
) => ({
  props: {
    ...(await serverSideUA(context)),
    ...(await serverSideTranslations(context.locale!, ["common", "home"])),
  },
});

export default Home;
