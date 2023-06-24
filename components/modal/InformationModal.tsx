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
  width: 6vw;
`;

const Text = styled.p`
  margin-top: 2vw;
  text-align: center;
`;
