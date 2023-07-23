import styled from "styled-components";

interface Props {
  icon: string;
  text: string;
}

export default function InformationModal(props: Props) {
  const { icon, text } = props;

  return (
    <Container>
      <Icon src={icon}></Icon>
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  ${({ theme }) => `
  width: 6vw;

  @media ${theme.breakpoints.tabletOrLower} {
    @media ${theme.breakpoints.portrait} {
      width: 8vh;
    }
  }
`}
`;

const Text = styled.p`
  ${({ theme }) => `
  margin-top: 2vw;
  text-align: center;
  white-space: pre-wrap;
  font-size: 1.4vw;

  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 2vw;

    @media ${theme.breakpoints.portrait} {
      font-size: 2.5vh;
    }
  }
`}
`;
