import styled, { css, ThemeContext } from "styled-components";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../button/Button";
import colors from "../../styles/colors";
import { useModalStore } from "../../store/modal";
import InformationModal from "./InformationModal";
import ErrorField from "../error-field/ErrorField";
import { useContext } from "react";

type Inputs = {
  name: string;
  email: string;
  text: string;
};

export default function ContactModal() {
  const { hideModal, showModal } = useModalStore();
  const { resolution } = useContext(ThemeContext);

  const schema = z.object({
    name: z.string().min(1, { message: "Ce champ est requis" }),
    email: z.string().min(1, { message: "Ce champ est requis" }).email("Email invalide"),
    text: z.string().min(1, { message: "Ce champ est requis" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, text } = data;

    const { status } = await axios.post("/api/email", { name, email, text });
    hideModal();
    showInformation(status);
  };

  const showInformation = (status: number) => {
    let icon = "/icons/success.svg";
    let text = "Votre message a bien été envoyé !";

    if (status === 404) {
      icon = "/icons/error.svg";
      text =
        "Malheureusement votre message n'a pas pu être envoyé. Veuillez réessayer ultérieurement, merci.";
    }

    showModal(InformationModal, { icon, text });
  };

  return (
    <div>
      <Header>
        <Title>Envoyer un message</Title>
      </Header>

      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Label htmlFor="name">
          Nom
          <Input
            id="name"
            type="text"
            {...register("name")}
            hasError={errors.hasOwnProperty("name")}
          ></Input>
          {errors.name?.message && <Error text={errors.name.message} />}
        </Label>

        <Label htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            {...register("email")}
            hasError={errors.hasOwnProperty("email")}
          ></Input>
          {errors.email?.message && <Error text={errors.email.message} />}
        </Label>

        <Label htmlFor="text">
          Message
          <TextArea
            id="text"
            rows={resolution.isTablet ? 8 : 5}
            {...register("text")}
            hasError={errors.hasOwnProperty("text")}
          ></TextArea>
          {errors.text?.message && <Error text={errors.text.message} />}
        </Label>

        <Submit type="submit">Envoyer</Submit>
      </Form>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  ${({ theme }) => `
    margin-bottom: 3vw;
    text-align: center;
    border-bottom: 0.3vw solid ${colors.dark.secondary};
    padding-bottom: 1vw;
    font-size: 2vw;

    @media ${theme.breakpoints.tabletOrLower} {
      font-size: 3vw;
      border-width: 0.5vw;

      @media ${theme.breakpoints.portrait} {
        font-size: 4vw;
        border-width: 0.4vh;
      }
    }
`}
`;

const Label = styled.label`
  ${({ theme }) => `
    font-weight: 700;
    display: flex;
    flex-direction: column;
    margin-bottom: 3vw;
    font-size: 1.4vw;

    @media ${theme.breakpoints.tabletOrLower} {
      font-size: 2vw;
      margin-bottom: 5vw;

      @media ${theme.breakpoints.portrait} {
        font-size: 3vw;
      }
    }
`}
`;

const FieldStyles = css<{ hasError: boolean }>`
  ${({ theme, hasError }) => `
  margin-top: 1vw;
  border-radius: 0.3vw;
  border: 0.15vw solid;
  border-color: ${hasError ? colors.error : colors.dark.secondary};

  &:focus {
    outline-color: ${hasError ? colors.error : colors.dark.primary};
  }

  @media ${theme.breakpoints.tabletOrLower} {
    border-width: 0.25vw;

    @media ${theme.breakpoints.portrait} {
      border-width: 0.25vh;
      border-radius: 0.3vh;
    }
  }
`}
`;

const Input = styled.input`
  ${FieldStyles}
`;

const TextArea = styled.textarea`
  ${FieldStyles}
  resize: none;
`;

const Submit = styled(Button)`
  ${({ theme }) => `
  margin-top: 1vw;
  padding: 0.5vw;
  align-self: center;
  width: 80%;
  font-size: 1.5vw;

  @media ${theme.breakpoints.tabletOrLower} {
    font-size: 2vw;

    @media ${theme.breakpoints.portrait} {
      font-size: 3vw;
    }
  }
`}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled(ErrorField)`
  margin-top: 1vw;
`;
