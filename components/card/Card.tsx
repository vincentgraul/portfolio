import React, { ReactNode } from "react";
import styled from "styled-components";

export interface Props {
  children: ReactNode;
  className?: string;
  renderHeader?: () => ReactNode;
  renderFooter?: () => ReactNode;
  $full?: boolean;
  $radius?: boolean;
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

const Container = styled.div<Pick<Props, "$full" | "$radius">>`
  ${({ theme, $full, $radius }) => `
  display: flex;
  flex-flow: column;
  align-items: stretch;
  width: ${$full ? "100%" : "85%"};
  padding: 4vw 3vw;
  background-color: ${theme.colors.light.primary};
  color: ${theme.colors.dark.secondary};
  border-radius: ${$radius ? "0.3vw" : "0"};

@media ${theme.breakpoints.tabletOrLower} {
  @media ${theme.breakpoints.portrait} {
    padding: 4vh 3vh;
  }
}
`}
`;
