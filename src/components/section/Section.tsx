import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";
import Separator from "../separator/Separator";

export interface Props {
  children?: ReactNode;
  separator?: boolean;
  className?: string;
}

export default function Section(props: Props): JSX.Element {
  const { className, children, separator } = props;

  return (
    <Fragment>
      <Container className={`${className}`}>{children}</Container>
      {separator ? <Separator src="/shapes/triangle.svg" /> : null}
    </Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
