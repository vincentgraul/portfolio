import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import useMatchResolution, {
  Breakpoints,
  Resolution,
} from "@react-components/match-resolution";
import useScrollTo from "@react-components/scroll-to";
import { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import colors, { Colors } from "../colors";
import Footer from "./home/sections/Footer";

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
  useScrollTo(ref, true);

  const { resolution, breakpoints } = useMatchResolution(
    undefined,
    pageProps.UA
  );
  const theme: Theme = { colors, resolution, breakpoints };

  return (
    <ThemeProvider theme={theme}>
      <Container ref={ref}>
        <Component {...pageProps} />

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

App.getInitialProps = ({ ctx }): { pageProps: PageProps } => {
  const { req } = ctx;

  return {
    pageProps: {
      UA: req ? req.headers["user-agent"] : navigator.userAgent,
    },
  };
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
