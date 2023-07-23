import styled from "styled-components";
import { useModalStore } from "../../store/modal";
import ReactComponentsModal from "@vincentgraul/react-components/modal";
import { useLoaderStore } from "../../store/loader";

export default function Modal() {
  const { isVisible, Component, ComponentProps, hideModal } = useModalStore();
  const { isLoading } = useLoaderStore();

  if (!isVisible || !Component) {
    return null;
  }

  return (
    <Container onClickedOutside={() => !isLoading && hideModal()}>
      <Component {...ComponentProps} />
    </Container>
  );
}

const Container = styled(ReactComponentsModal)`
  ${({ theme }) => `
  .modal-content {
    width: 40%;
    padding: 4vw 3vw;

    @media ${theme.breakpoints.tabletOrLower} {
      width: 60%;

      @media ${theme.breakpoints.portrait} {
        width: 80%;
      }
    }
  }
`}
`;
