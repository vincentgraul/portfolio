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
import { NextPageContext } from "next";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";

export interface Theme {
  colors: Colors;
  resolution: Resolution;
  breakpoints: Breakpoints;
}

export interface PageProps {
  UA: string;
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  useScrollTo(ref);

  const { resolution, breakpoints } = useMatchResolution(undefined, pageProps.UA);
  const theme: Theme = { colors, resolution, breakpoints };

  return (
    <ThemeProvider theme={theme}>
      <Container ref={ref}>
        <Modal />
        <Component {...pageProps} />

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

App.getInitialProps = ({ ctx }: ObjectLiteral): { pageProps: PageProps } => {
  const { req }: NextPageContext = ctx;
  let UA: string;

  if (req && req.headers["user-agent"]) {
    UA = req.headers["user-agent"];
  } else {
    UA = navigator.userAgent;
  }

  return { pageProps: { UA } };
};

export default App;

const Container = styled.div`
  ${({ theme }) => `
  background-color: ${theme.colors.dark.primary};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  justify-content: space-between;
  `}
`;
