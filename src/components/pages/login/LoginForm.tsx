import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { TextInput } from "../../reusable-ui/TextInput";
import { PrimaryButton } from "../../reusable-ui/PrimaryButton";

export const LoginForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez vous</h2>
      </div>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrez votre prénom..."
        required={true}
        Icon={<BsPersonCircle className="icon-person-circle" />}
      />
      <PrimaryButton
        label={"Accédez à votre espace"}
        Icon={<IoChevronForward className="icon-chevron" />}
      />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  border: 2px solid green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.white};

  hr {
    border: 1.5px solid ${theme.colors.primary_burger};
    weight: 100vw;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }
  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.P4};
  }

  .icon-person-circle {
    font-size: ${theme.fonts.P2};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  .icon-chevron {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P0};
    margin-left: 10px;
  }
`;
