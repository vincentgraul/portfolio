import React from "react";
import styled from "styled-components";
import BubbleLink from "../bubble-link/BubbleLink";

export default function Footer(): JSX.Element {
  return (
    <Container>
      <Linkedin
        href="http://www.linkedin.com/in/vincentgraul"
        target="_blank"
        src="/logo/social/linkedin.svg"
      />

      <Github
        href="https://github.com/vincentgraul"
        target="_blank"
        src="/logo/social/github.svg"
      />

      <Mail target="_blank" src="/logo/social/mail.svg" />

      <Medium
        href="https://medium.com/@vincentgraul"
        target="_blank"
        src="/logo/social/medium.svg"
      />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => `
display: flex;
align-items: center;
justify-content: center;
background-color: ${theme.colors.primary};
min-height: 20vh;
border-top: 0.2vw dashed ${theme.colors.dark.secondary};

@media ${theme.breakpoints.tabletOrLower} {
  min-height: 20vw;

  @media ${theme.breakpoints.portrait} {
    justify-content: space-evenly;
    min-height: 20vh;
    border-width: 2vw;
  }

  @media ${theme.breakpoints.landscape} {
    border-width: 0.8vw;
  }
}
`}
`;

const Linkedin = styled(BubbleLink)`
  ${({ theme }) => `
margin-right: 3vw;

@media ${theme.breakpoints.tabletOrLower} {
  margin-right: 3vw;

  @media ${theme.breakpoints.portrait} {
    margin-right: 0;
  }
}
`}
`;

const Github = styled(BubbleLink)`
  ${({ theme }) => `
margin: 0 3vw;

@media ${theme.breakpoints.tabletOrLower} {
  margin: 0 3vw;

  @media ${theme.breakpoints.portrait} {
    margin: 0;
  }
}
`}
`;

const Medium = styled(BubbleLink)`
  margin-left: 5vw;
`;

const Mail = styled(BubbleLink)`
  ${({ theme }) => `
margin-left: 3vw;

@media ${theme.breakpoints.tabletOrLower} {
  margin-left: 3vw;

  @media ${theme.breakpoints.portrait} {
    margin-left: 0;
  }
}
`}
`;
