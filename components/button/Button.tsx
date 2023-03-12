import { HTMLProps } from "react";
import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";

export default function Button(props: HTMLMotionProps<"button">) {
  const { children, ...rest } = props;

  return (
    <Container
      whileHover={{ scale: 1.1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      {...rest}
    >
      {children}
    </Container>
  );
}

const Container = styled(motion.button)`
  ${({ theme }) => `
  background-color: ${theme.colors.dark.primary};
  color: ${theme.colors.light.primary};
  text-decoration: none;
  padding: 1vw;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;

  @media ${theme.breakpoints.tabletOrLower} {
    padding: 2.5vw;

    @media ${theme.breakpoints.portrait} {
      padding: 2vh;
    }
  }
}
`}
`;
