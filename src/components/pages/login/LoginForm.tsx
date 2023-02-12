import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <input
        type="text"
        name="name"
        value={inputValue}
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        required
      />
      <label htmlFor="submit"></label>
      <button name="submit" type="submit">
        Accédez à votre espace
      </button>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  border: 2px solid green;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
