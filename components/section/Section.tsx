import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";

export interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Section(props: Props): JSX.Element {
  const { className, children } = props;

  return (
    <Fragment>
      <Container className={`${className}`}>{children}</Container>
    </Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 10vw;
`;
