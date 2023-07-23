import React from "react";
import ReactComponentsLoader from "@vincentgraul/react-components/loader";
import ReactComponentsImageLoader from "@vincentgraul/react-components/image-loader";
import { useLoaderStore } from "../../store/loader";
import styled from "styled-components";

export default function Loader() {
  const { isLoading, loaderProps } = useLoaderStore();

  if (!isLoading) {
    return null;
  }

  return <ReactComponentsLoader render={() => <ImageLoader {...loaderProps} />} />;
}

const ImageLoader = styled(ReactComponentsImageLoader)`
  ${({ theme }) => `
  .image-loader-text {
    color: ${theme.colors.light.primary};
  }
}`}
`;
