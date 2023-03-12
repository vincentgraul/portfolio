import React, { HTMLProps } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props extends HTMLProps<HTMLAnchorElement> {
  src: string;
  className?: string;
}

export default function BubbleLink(props: Props): JSX.Element {
  const { name, className, src, href, target } = props;

  return (
    <a className={`${className}`} href={href} target={target}>
      <Image
        className="image"
        src={src}
        alt={name}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      />
    </a>
  );
}

const Image = styled(motion.img)`
  ${({ theme }) => `
  height: auto;
  width: 6vw;

  @media ${theme.breakpoints.tabletOrLower} {
    width: 10vw;

    @media ${theme.breakpoints.portrait} {
      width: 10vh;
    }
  }
`}
`;
