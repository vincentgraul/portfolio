import "../styles/globals.css";
import colors, { Colors } from "../styles/colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import useMatchResolution, {
  Breakpoints,
  Resolution,
} from "@vincentgraul/react-components/match-resolution";
import useScrollTo from "@vincentgraul/react-components/scroll-to";
import { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";
import Loader from "../components/loader/Loader";
import Head from "next/head";
import { appWithTranslation, useTranslation } from "next-i18next";

export interface Theme {
  colors: Colors;
  resolution: Resolution;
  breakpoints: Breakpoints;
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  useScrollTo(ref);

  const { resolution, breakpoints } = useMatchResolution(undefined, pageProps.UA);
  const theme: Theme = { colors, resolution, breakpoints };

  return (
    <>
      <Head>
        <title>{t("common:title")}</title>
        <meta name="description" content={t("common:meta-content")} />
      </Head>

      <ThemeProvider theme={theme}>
        <Container ref={ref}>
          <Loader />
          <Modal />
          <Component {...pageProps} />

          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);

const Container = styled.div`
  ${({ theme }) => `
  background-color: ${theme.colors.dark.primary};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  justify-content: space-between;
  `}
`;
