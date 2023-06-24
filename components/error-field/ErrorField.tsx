import styled from "styled-components";
import colors from "../../styles/colors";

interface Props {
  className?: string;
  text: string;
}

export default function ErrorField(props: Props) {
  const { className, text } = props;

  return (
    <Text className={className} role="alert">
      <Icon src="/icons/error.svg" alt="error icon"></Icon>
      {text}
    </Text>
  );
}

const Text = styled.p`
  display: flex;
  align-items: center;
  color: ${colors.error};
`;
const Icon = styled.img`
  margin-right: 0.5vw;
  width: 2.5vw;
`;
