import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "../../colors";
import Breakpoints from "../../breakpoints";

export interface Props {
  children: ReactNode;
  className?: string;
  renderHeader?: () => ReactNode;
  renderFooter?: () => ReactNode;
  noBorder?: boolean;
  noRadius?: boolean;
  noHorizontalPadding?: boolean;
}

export default function Card(props: Props): JSX.Element {
  const { className, children, renderHeader, renderFooter, ...rest } = props;

  return (
    <Container className={`${className}`} {...rest}>
      {renderHeader && renderHeader()}

      {children}

      {renderFooter && renderFooter()}
    </Container>
  );
}

const Container = styled.div<{
  noBorder?: boolean;
  noRadius?: boolean;
  noHorizontalPadding?: boolean;
}>`
  background-color: ${colors.light.secondary};
  padding: ${
    Breakpoints.isTabletOrLower()
      ? `${Breakpoints.isPortrait() ? "2.5vh" : "2.5vw"}`
      : "2.5vw"
  };
  ${(props) =>
    props.noHorizontalPadding ? "padding-right: 0; padding-left: 0;" : null}
  border: ${(props) =>
    props.noBorder ? "none" : `0.3vw solid ${colors.dark.primary}`};
`;
