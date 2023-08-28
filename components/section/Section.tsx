import React, { Fragment, ReactNode, useRef } from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

export interface Props {
  children?: ReactNode;
  className?: string;
  animation?: boolean;
}

export default function Section(props: Props): JSX.Element {
  const { className, children, animation } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: ["end start", "end end"],
  });

  return (
    <Fragment>
      <Container
        ref={ref}
        className={`${className}`}
        style={{ opacity: animation ? scrollYProgress : 1 }}
      >
        {children}
      </Container>
    </Fragment>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 10vw;
`;
